import nodemailer from "nodemailer";

const allowedEnquiryTypes = new Set([
  "software",
  "ai",
  "business",
  "student",
  "interview",
  "freelance",
  "other",
]);

const jsonResponse = (statusCode, body, headers = {}) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers,
  },
  body: JSON.stringify(body),
});

const singleLine = (value, maxLength) =>
  typeof value === "string"
    ? value.trim().replace(/[\r\n]+/g, " ").slice(0, maxLength)
    : "";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." }, { Allow: "POST" });
  }

  const siteOrigin = process.env.SITE_ORIGIN;
  if (!siteOrigin) {
    console.error("Contact email is missing SITE_ORIGIN configuration.");
    return jsonResponse(500, { error: "Email delivery is not configured." });
  }
  if (event.headers?.origin !== siteOrigin) {
    return jsonResponse(403, { error: "Request origin is not allowed." });
  }

  if (!event.headers?.["content-type"]?.startsWith("application/json")) {
    return jsonResponse(415, { error: "Expected a JSON request." });
  }

  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body ?? "", "base64").toString("utf8")
    : event.body ?? "";
  if (Buffer.byteLength(rawBody, "utf8") > 12_000) {
    return jsonResponse(413, { error: "Submission is too large." });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse(400, { error: "Invalid request body." });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse(400, { error: "Invalid request body." });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse(400, { error: "Submission rejected." });
  }

  const name = singleLine(payload.name, 100);
  const email = singleLine(payload.email, 254);
  const phone = singleLine(payload.phone, 40);
  const enquiryType = singleLine(payload.enquiryType, 30);
  const budget = singleLine(payload.budget, 100);
  const message =
    typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : "";

  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !allowedEnquiryTypes.has(enquiryType) ||
    !message ||
    payload.privacyConsent !== true
  ) {
    return jsonResponse(400, { error: "Check the required form fields." });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_TO_EMAIL || "info@trezeal.com";

  if (
    !smtpHost ||
    ![465, 587].includes(smtpPort) ||
    !smtpUser ||
    !smtpPass
  ) {
    console.error("Contact email is missing valid SMTP configuration.");
    return jsonResponse(500, { error: "Email delivery is not configured." });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    auth: { user: smtpUser, pass: smtpPass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: recipient,
      replyTo: email,
      subject: "New website enquiry - Trezeal",
      text: [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Enquiry type: ${enquiryType}`,
        `Budget: ${budget || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact email delivery failed.", error?.code || "SMTP_ERROR");
    return jsonResponse(502, { error: "We could not send your message." });
  }

  return jsonResponse(200, { message: "Your message has been sent." });
};
