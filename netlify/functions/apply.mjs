import { randomUUID } from "node:crypto";
import { Readable } from "node:stream";
import path from "node:path";

import Busboy from "busboy";
import nodemailer from "nodemailer";
import yauzl from "yauzl";

import { openJobs } from "../../src/data/jobs.js";

const maxResumeBytes = 4 * 1024 * 1024;
const maxRequestBytes = 5_800_000;
const allowedFields = new Set([
  "fullName",
  "email",
  "phone",
  "currentLocation",
  "college",
  "degree",
  "graduationYear",
  "experienceLevel",
  "linkedin",
  "portfolio",
  "skills",
  "coverLetter",
  "positionSlug",
  "website",
  "privacyConsent",
]);

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  },
  body: JSON.stringify(body),
});

const readField = (fields, name, maxLength, singleLine = false) => {
  if (typeof fields[name] !== "string") return "";
  const value = singleLine
    ? fields[name].replace(/[\r\n\t]+/g, " ")
    : fields[name];
  return value.trim().slice(0, maxLength);
};

function readMultipart(event) {
  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body ?? "", "base64")
    : Buffer.from(event.body ?? "", "utf8");

  if (rawBody.length > maxRequestBytes) {
    throw new Error("The application is too large to upload.");
  }

  return new Promise((resolve, reject) => {
    let parser;
    try {
      parser = Busboy({
        headers: event.headers,
        limits: {
          fieldNameSize: 64,
          fieldSize: 6000,
          fields: 18,
          fileSize: maxResumeBytes,
          files: 1,
          parts: 20,
        },
      });
    } catch {
      reject(new Error("The application upload could not be read."));
      return;
    }

    const fields = {};
    let resume;
    let parsingError;

    parser.on("field", (name, value, info) => {
      if (!allowedFields.has(name) || Object.hasOwn(fields, name)) {
        parsingError = new Error("The application contains unexpected fields.");
      } else if (info.nameTruncated || info.valueTruncated) {
        parsingError = new Error("A form field is too long.");
      } else {
        fields[name] = value;
      }
    });

    parser.on("file", (name, stream, info) => {
      if (name !== "resume" || resume) {
        parsingError = new Error("Attach one resume file.");
        stream.resume();
        return;
      }

      const chunks = [];
      let size = 0;
      stream.on("data", (chunk) => {
        size += chunk.length;
        if (size <= maxResumeBytes) chunks.push(chunk);
      });
      stream.on("limit", () => {
        parsingError = new Error("Your resume must be 4 MB or smaller.");
      });
      stream.on("end", () => {
        if (!stream.truncated && size <= maxResumeBytes) {
          resume = {
            buffer: Buffer.concat(chunks),
            filename: info.filename,
            mimeType: info.mimeType,
          };
        }
      });
    });

    parser.on("fieldsLimit", () => {
      parsingError = new Error("The application contains too many fields.");
    });
    parser.on("filesLimit", () => {
      parsingError = new Error("Attach one resume file.");
    });
    parser.on("partsLimit", () => {
      parsingError = new Error("The application contains too many parts.");
    });
    parser.on("error", () => {
      reject(new Error("The application upload could not be read."));
    });
    parser.on("finish", () => {
      if (parsingError) {
        reject(parsingError);
      } else {
        resolve({ fields, resume });
      }
    });

    Readable.from([rawBody]).pipe(parser);
  });
}

function isValidDocx(buffer) {
  return new Promise((resolve) => {
    yauzl.fromBuffer(
      buffer,
      { lazyEntries: true, validateEntrySizes: true, strictFileNames: true },
      (error, zipFile) => {
        if (error || !zipFile) {
          resolve(false);
          return;
        }

        let contentTypesFound = false;
        let documentFound = false;
        let entryCount = 0;
        let settled = false;

        const finish = (valid) => {
          if (settled) return;
          settled = true;
          zipFile.close();
          resolve(valid);
        };

        zipFile.on("entry", (entry) => {
          entryCount += 1;
          if (
            entryCount > 2000 ||
            (entry.generalPurposeBitFlag & 1) !== 0 ||
            entry.fileName.startsWith("/") ||
            entry.fileName.split("/").includes("..")
          ) {
            finish(false);
            return;
          }
          contentTypesFound ||= entry.fileName === "[Content_Types].xml";
          documentFound ||= entry.fileName === "word/document.xml";
          zipFile.readEntry();
        });
        zipFile.on("end", () => {
          finish(contentTypesFound && documentFound);
        });
        zipFile.on("error", () => finish(false));
        zipFile.readEntry();
      },
    );
  });
}

async function validateResume(resume) {
  if (
    !resume?.buffer?.length ||
    resume.buffer.length > maxResumeBytes ||
    typeof resume.filename !== "string"
  ) {
    throw new Error("Attach a resume file no larger than 4 MB.");
  }

  const extension = path.extname(path.win32.basename(resume.filename)).toLowerCase();
  const buffer = resume.buffer;
  const pdfMimeTypes = ["", "application/pdf", "application/octet-stream"];
  const wordMimeTypes = [
    "",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream",
  ];

  if (
    extension === ".pdf" &&
    pdfMimeTypes.includes(resume.mimeType) &&
    buffer.subarray(0, 5).toString("ascii") === "%PDF-" &&
    buffer.subarray(Math.max(0, buffer.length - 1024)).includes(Buffer.from("%%EOF"))
  ) {
    return { extension, mimeType: "application/pdf" };
  }

  const isLegacyWord =
    extension === ".doc" &&
    wordMimeTypes.includes(resume.mimeType) &&
    buffer.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  if (isLegacyWord) {
    return { extension, mimeType: "application/msword" };
  }

  const hasZipSignature =
    buffer.length >= 4 &&
    buffer[0] === 0x50 &&
    buffer[1] === 0x4b &&
    [0x03, 0x05, 0x07].includes(buffer[2]) &&
    [0x04, 0x06, 0x08].includes(buffer[3]);
  if (
    extension === ".docx" &&
    wordMimeTypes.includes(resume.mimeType) &&
    hasZipSignature &&
    (await isValidDocx(buffer))
  ) {
    return {
      extension,
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    };
  }

  throw new Error("The resume content must be a valid PDF, DOC or DOCX file.");
}

function isHttpsUrl(value, acceptedHost) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      (!acceptedHost ||
        url.hostname === acceptedHost ||
        url.hostname.endsWith(`.${acceptedHost}`))
    );
  } catch {
    return false;
  }
}

function validateFields(fields) {
  const application = {
    fullName: readField(fields, "fullName", 120, true),
    email: readField(fields, "email", 254, true),
    phone: readField(fields, "phone", 30, true),
    currentLocation: readField(fields, "currentLocation", 120, true),
    college: readField(fields, "college", 160, true),
    degree: readField(fields, "degree", 160, true),
    graduationYear: readField(fields, "graduationYear", 4, true),
    experienceLevel: readField(fields, "experienceLevel", 20, true),
    linkedin: readField(fields, "linkedin", 300, true),
    portfolio: readField(fields, "portfolio", 300, true),
    skills: readField(fields, "skills", 1200),
    coverLetter: readField(fields, "coverLetter", 5000),
    positionSlug: readField(fields, "positionSlug", 100),
  };
  const year = Number(application.graduationYear);
  const currentYear = new Date().getFullYear();

  if (
    !application.fullName ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email) ||
    !/^[+\d().\s-]{7,30}$/.test(application.phone) ||
    !application.currentLocation ||
    !application.degree ||
    !["Fresher", "Experienced"].includes(application.experienceLevel) ||
    !application.skills ||
    !application.coverLetter ||
    fields.privacyConsent !== "on" ||
    (application.graduationYear &&
      (!Number.isInteger(year) || year < 1950 || year > currentYear + 8)) ||
    (application.experienceLevel === "Fresher" && !application.graduationYear) ||
    !isHttpsUrl(application.linkedin, "linkedin.com") ||
    !isHttpsUrl(application.portfolio)
  ) {
    throw new Error("Check the required fields and profile links.");
  }

  return application;
}

function makeTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(SMTP_PORT);
  if (!SMTP_HOST || ![465, 587].includes(port) || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." });
  }
  if (!process.env.SITE_ORIGIN) {
    console.error("Career applications are missing SITE_ORIGIN configuration.");
    return jsonResponse(500, { error: "Application delivery is not configured." });
  }
  if (event.headers?.origin !== process.env.SITE_ORIGIN) {
    return jsonResponse(403, { error: "Request origin is not allowed." });
  }
  if (!event.headers?.["content-type"]?.startsWith("multipart/form-data;")) {
    return jsonResponse(415, { error: "Resume upload requires a multipart form." });
  }

  let fields;
  let resume;
  let application;
  let resumeType;
  try {
    ({ fields, resume } = await readMultipart(event));
    if (fields.website?.trim()) {
      return jsonResponse(400, { error: "Application rejected." });
    }
    application = validateFields(fields);
    resumeType = await validateResume(resume);
  } catch (error) {
    return jsonResponse(400, {
      error: error.message || "The application is not valid.",
    });
  }

  const position =
    application.positionSlug === "general-interest"
      ? { title: "General interest" }
      : openJobs.find((job) => job.slug === application.positionSlug);
  if (!position) {
    return jsonResponse(400, {
      error: "That position is not accepting applications.",
    });
  }

  const careersEmail = process.env.CAREERS_EMAIL;
  const transporter = makeTransporter();
  if (
    !careersEmail ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(careersEmail) ||
    !transporter
  ) {
    console.error("Career application delivery is missing mail configuration.");
    return jsonResponse(500, { error: "Application delivery is not configured." });
  }

  const applicationId = randomUUID();
  const resumeFilename = `resume-${applicationId}${resumeType.extension}`;
  const adminText = [
    "New Trezeal career application",
    "",
    `Application ID: ${applicationId}`,
    `Position: ${position.title}`,
    `Candidate: ${application.fullName}`,
    `Email: ${application.email}`,
    `Phone: ${application.phone}`,
    `Current location: ${application.currentLocation}`,
    `College / University: ${application.college || "Not provided"}`,
    `Degree / Education: ${application.degree}`,
    `Graduation year: ${application.graduationYear || "Not provided"}`,
    `Experience: ${application.experienceLevel}`,
    `Technical skills: ${application.skills}`,
    `LinkedIn: ${application.linkedin || "Not provided"}`,
    `GitHub / Portfolio: ${application.portfolio || "Not provided"}`,
    "",
    "Cover letter / introduction:",
    application.coverLetter,
    "",
    "The attached resume was validated by content signature and file structure.",
    "This email is the only application record; no database or resume store is configured.",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: careersEmail,
      replyTo: application.email,
      subject: `Career application ${applicationId} - Trezeal`,
      text: adminText,
      attachments: [
        {
          filename: resumeFilename,
          content: resume.buffer,
          contentType: resumeType.mimeType,
        },
      ],
    });
  } catch (error) {
    console.error(
      "Career application notification failed.",
      error?.code || "SMTP_ERROR",
    );
    return jsonResponse(502, {
      error: "We could not deliver your application. Please try again or email the careers team.",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: application.email,
      subject: "We received your Trezeal application",
      text: [
        `Hello ${application.fullName},`,
        "",
        `We received your application for ${position.title}.`,
        `Your application ID is ${applicationId}.`,
        "",
        "The Trezeal team will review it as capacity allows. This confirmation does not guarantee an interview or position.",
        "",
        "Regards,",
        "Trezeal Careers",
      ].join("\n"),
    });
    return jsonResponse(200, {
      applicationId,
      acknowledgementSent: true,
    });
  } catch (error) {
    console.error(
      "Applicant acknowledgement failed after delivery to careers inbox.",
      error?.code || "SMTP_ERROR",
    );
    return jsonResponse(200, {
      applicationId,
      acknowledgementSent: false,
    });
  }
};
