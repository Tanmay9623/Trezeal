import { useState } from "react";

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
  const [status, setStatus] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    setStatus(
      "Your message has not been sent. Form delivery is not configured yet.",
    );
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
              <span>BASED IN</span>
              <p>
                Pune, Maharashtra, India
                <br />
                Remote projects welcome
              </p>
            </div>
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
          <button className="btn btn-light" type="submit">
            Send your message <span>↗</span>
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
