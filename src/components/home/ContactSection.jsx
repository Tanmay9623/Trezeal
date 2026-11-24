import { useState } from "react";
import { Link } from "react-router-dom";

const enquiryTypes = [
  ["software", "Website or software development"],
  ["ai", "AI or automation"],
  ["business", "Business solutions"],
  ["student", "Student development"],
  ["interview", "Interview preparation"],
  ["freelance", "Freelance project"],
  ["other", "Other"],
];

const businessEnquiryTypes = ["software", "ai", "business", "freelance"];

export default function ContactSection({
  compact = false,
  initialEnquiry = "",
}) {
  const [enquiryType, setEnquiryType] = useState(initialEnquiry);
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setStatus({
        message:
          "Form delivery is not configured, so your message was not sent. Contact us by email instead:",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error(`Contact form request failed with ${response.status}`);
      }

      form.reset();
      setEnquiryType(initialEnquiry);
      setStatus({
        message: "Thanks. Your message has been sent to Trezeal.",
        type: "success",
      });
    } catch {
      setStatus({
        message:
          "We could not send your message. Contact us by email instead:",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isBusinessEnquiry = businessEnquiryTypes.includes(enquiryType);

  return (
    <section
      className={`contact section-pad ${compact ? "contact-compact" : ""}`}
      id="contact"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow light-eyebrow">
            <span />
            LET’S CONNECT
          </p>
          <h2>
            Have an idea?
            <br />
            <em>Let’s build it.</em>
          </h2>
          <p className="contact-intro">
            Tell us about your business project, freelance requirement or career
            goals.
          </p>
          <div className="contact-details">
            <div>
              <span>BUSINESS ENQUIRIES</span>
              <p>Websites, software, AI and automation</p>
            </div>
            <div>
              <span>STUDENT ENQUIRIES</span>
              <p>Mentorship, projects and interviews</p>
            </div>
            <div>
              <span>EMAIL</span>
              <a href="mailto:hello@trezeal.com">hello@trezeal.com</a>
            </div>
            <div>
              <span>PHONE</span>
              <p>No public phone number is available yet. Email is the best way to reach us.</p>
            </div>
            <div>
              <span>ADDRESS</span>
              <p>
                Pune, Maharashtra, India. A street address is not published;
                meetings are by appointment.
              </p>
            </div>
            <div>
              <span>BUSINESS HOURS</span>
              <p>Meetings by appointment. We aim to acknowledge enquiries within two business days.</p>
            </div>
          </div>
          <div
            className="contact-map-placeholder"
            role="img"
            aria-label="Map placeholder for Trezeal in Pune, Maharashtra, India"
          >
            <span>PUNE, MAHARASHTRA</span>
            <p>
              Exact meeting location shared after an appointment is confirmed.
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Your name
              <input
                autoComplete="name"
                name="name"
                required
                placeholder="Name"
              />
            </label>
            <label>
              Your email
              <input
                autoComplete="email"
                type="email"
                name="email"
                required
                placeholder="Email address"
              />
            </label>
          </div>
          <label>
            Your phone (optional)
            <input
              autoComplete="tel"
              type="tel"
              name="phone"
              placeholder="Phone number"
            />
          </label>
          <label>
            What are you looking for?
            <select
              name="enquiryType"
              value={enquiryType}
              onChange={(event) => setEnquiryType(event.target.value)}
              required
            >
              <option value="">Choose a service</option>
              {enquiryTypes.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          {isBusinessEnquiry && (
            <label>
              Project budget (optional)
              <input
                name="budget"
                placeholder="Share a range or discuss later"
              />
            </label>
          )}
          <label>
            Your message
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Tell us what you need..."
            />
          </label>
          <label className="contact-consent">
            <input name="privacyConsent" type="checkbox" required />
            <span>
              I agree that Trezeal may use these details to respond to my
              enquiry.
            </span>
          </label>
          <Link className="contact-privacy-link" to="/privacy-policy">
            Read the privacy policy
          </Link>
          <button className="btn btn-light" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send your message"}{" "}
            {!isSubmitting && <span>↗</span>}
          </button>
          <p
            className={`form-status ${status.type ? `form-status-${status.type}` : ""}`}
            role={status.type === "error" ? "alert" : "status"}
            aria-live={status.type === "error" ? "assertive" : "polite"}
          >
            {status.message}
            {status.type === "error" && (
              <>
                {" "}
                <a href="mailto:hello@trezeal.com">hello@trezeal.com</a>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
