import { useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { findJob, openJobs } from "../data/jobs.js";
import "./CareersPage.css";

const maxResumeBytes = 4 * 1024 * 1024;
const allowedResumeExtensions = [".pdf", ".doc", ".docx"];

function submitApplication(formData, onProgress) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "/.netlify/functions/apply");
    request.setRequestHeader("Accept", "application/json");
    request.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        onProgress(Math.round((event.loaded / event.total) * 100));
      }
    });
    request.addEventListener("error", () => {
      reject(new Error("Network error. Please check your connection and try again."));
    });
    request.addEventListener("load", () => {
      let response;
      try {
        response = JSON.parse(request.responseText);
      } catch {
        reject(new Error("The application service returned an invalid response."));
        return;
      }

      if (request.status < 200 || request.status >= 300) {
        reject(new Error(response.error || "We could not submit your application."));
        return;
      }
      resolve(response);
    });
    request.send(formData);
  });
}

export default function CareerApplicationPage() {
  const { positionSlug } = useParams();
  const fileInput = useRef(null);
  const [resume, setResume] = useState(null);
  const [experienceLevel, setExperienceLevel] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const isGeneralInterest = positionSlug === "general-interest";
  const job = findJob(positionSlug);
  const isOpenJob = openJobs.some((openJob) => openJob.slug === positionSlug);

  if (!isGeneralInterest && (!job || !isOpenJob)) {
    return <Navigate to="/careers" replace />;
  }

  const positionTitle = isGeneralInterest ? "General interest" : job.title;

  const chooseResume = (event) => {
    const file = event.target.files?.[0] ?? null;
    setStatus({ type: "", message: "" });
    if (!file) {
      setResume(null);
      return;
    }

    const extension = file.name.toLowerCase().slice(file.name.lastIndexOf("."));
    if (!allowedResumeExtensions.includes(extension)) {
      setResume(null);
      event.target.value = "";
      setStatus({
        type: "error",
        message: "Choose a PDF, DOC or DOCX resume.",
      });
      return;
    }
    if (file.size > maxResumeBytes) {
      setResume(null);
      event.target.value = "";
      setStatus({
        type: "error",
        message: "Your resume must be 4 MB or smaller.",
      });
      return;
    }
    setResume(file);
  };

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!resume) {
      setStatus({ type: "error", message: "Please attach your resume." });
      return;
    }

    setIsSubmitting(true);
    setProgress(0);
    setStatus({ type: "", message: "" });
    try {
      const response = await submitApplication(new FormData(form), setProgress);
      setStatus({
        type: response.acknowledgementSent === false ? "warning" : "success",
        message: response.acknowledgementSent === false
          ? `Application ${response.applicationId} reached the careers inbox, but we could not send the confirmation email.`
          : `Application submitted. Your application ID is ${response.applicationId}.`,
      });
      form.reset();
      setResume(null);
      setExperienceLevel("");
      setProgress(100);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="career-application-page">
      <div className="container career-application-container">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/careers">Careers</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Application</span>
        </nav>
        <header className="career-application-heading">
          <p className="eyebrow">
            <span />
            CANDIDATE APPLICATION
          </p>
          <h1>Tell us about yourself.</h1>
          <p>
            Applying for <strong>{positionTitle}</strong>. Your application and
            resume will be emailed to the Trezeal careers inbox; they are not
            stored in a candidate portal.
          </p>
          <p className="career-privacy-note">
            Share only information relevant to your application. Do not include
            identity documents, passwords or sensitive personal details.
          </p>
        </header>

        <form className="career-application-form" onSubmit={submit}>
          <input
            autoComplete="off"
            aria-hidden="true"
            hidden
            name="website"
            tabIndex={-1}
            type="text"
          />
          <input name="positionSlug" type="hidden" value={positionSlug} />

          <fieldset>
            <legend>Personal details</legend>
            <label className="career-position-field">
              Position applying for
              <input readOnly value={positionTitle} />
            </label>
            <div className="career-form-grid">
              <label>
                Full name *
                <input autoComplete="name" maxLength="120" name="fullName" required />
              </label>
              <label>
                Email address *
                <input
                  autoComplete="email"
                  maxLength="254"
                  name="email"
                  required
                  type="email"
                />
              </label>
              <label>
                Phone number *
                <input
                  autoComplete="tel"
                  maxLength="30"
                  name="phone"
                  required
                  type="tel"
                />
              </label>
              <label>
                Current location *
                <input autoComplete="address-level2" maxLength="120" name="currentLocation" required />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Education and experience</legend>
            <div className="career-form-grid">
              <label>
                College / University
                <input autoComplete="organization" maxLength="160" name="college" />
              </label>
              <label>
                Degree / Education *
                <input maxLength="160" name="degree" required />
              </label>
              <label>
                Graduation year
                <input
                  inputMode="numeric"
                  max="2100"
                  min="1950"
                  name="graduationYear"
                  placeholder="e.g. 2026"
                  required={experienceLevel === "Fresher"}
                  type="number"
                />
              </label>
              <label>
                Experience level *
                <select
                  name="experienceLevel"
                  onChange={(event) => setExperienceLevel(event.target.value)}
                  required
                  value={experienceLevel}
                >
                  <option disabled value="">
                    Choose one
                  </option>
                  <option value="Fresher">Fresher</option>
                  <option value="Experienced">Experienced</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Profile and introduction</legend>
            <div className="career-form-grid">
              <label>
                LinkedIn profile
                <input
                  autoComplete="url"
                  maxLength="300"
                  name="linkedin"
                  placeholder="https://www.linkedin.com/in/..."
                  type="url"
                />
              </label>
              <label>
                GitHub / Portfolio
                <input
                  autoComplete="url"
                  maxLength="300"
                  name="portfolio"
                  placeholder="https://..."
                  type="url"
                />
              </label>
            </div>
            <label>
              Technical skills *
              <textarea
                maxLength="1200"
                name="skills"
                required
                rows="3"
                placeholder="List relevant skills, tools and technologies"
              />
            </label>
            <label>
              Cover letter / introduction *
              <textarea
                maxLength="5000"
                name="coverLetter"
                required
                rows="6"
                placeholder="Tell us what you are interested in and what you could contribute."
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Resume</legend>
            <label className="career-resume-control">
              Resume file * <span>PDF, DOC or DOCX · maximum 4 MB</span>
              <input
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                name="resume"
                onChange={chooseResume}
                ref={fileInput}
                required
                type="file"
              />
            </label>
            {resume && (
              <p className="career-resume-selected">
                Selected: <strong>{resume.name}</strong>. Choose another file
                above to replace it.
              </p>
            )}
            {isSubmitting && (
              <div className="career-upload-progress">
                <progress max="100" value={progress} />
                <span>{progress}% uploaded</span>
              </div>
            )}
          </fieldset>

          <label className="career-consent">
            <input name="privacyConsent" required type="checkbox" />
            <span>
              I agree that Trezeal may use the details and resume I provide to
              review and respond to this application. Read the{" "}
              <Link to="/privacy-policy">privacy policy</Link>.
            </span>
          </label>

          <button className="btn btn-dark career-submit-button" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Sending application…" : "Submit application"}
            {!isSubmitting && <span aria-hidden="true">↗</span>}
          </button>
          <p
            className={`career-form-status career-form-status-${status.type}`}
            aria-live={status.type === "error" ? "assertive" : "polite"}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
