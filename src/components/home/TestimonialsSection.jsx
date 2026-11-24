import { Link } from "react-router-dom";

const testimonialPlaceholders = [
  {
    audience: "BUSINESS CLIENT",
    quote:
      "“[Replace with an approved client quote about the project, communication and outcome.]”",
    attribution: "[REPLACE WITH REAL CLIENT NAME AND ROLE]",
  },
  {
    audience: "STUDENT",
    quote:
      "“[Replace with an approved learner quote about the guidance and skills practised.]”",
    attribution: "[REPLACE WITH REAL STUDENT NAME OR APPROVED ATTRIBUTION]",
  },
  {
    audience: "FREELANCE CLIENT",
    quote:
      "“[Replace with an approved client quote about the delivered digital work.]”",
    attribution: "[REPLACE WITH REAL CLIENT NAME AND ROLE]",
  },
  {
    audience: "SOFTWARE CLIENT",
    quote:
      "“[Replace with an approved quote describing a software delivery experience.]”",
    attribution: "[REPLACE WITH REAL CLIENT NAME AND ROLE]",
  },
  {
    audience: "INTERVIEW PREPARATION LEARNER",
    quote:
      "“[Replace with an approved learner quote about role-specific preparation.]”",
    attribution: "[REPLACE WITH REAL LEARNER NAME OR APPROVED ATTRIBUTION]",
  },
  {
    audience: "BUSINESS PARTNER",
    quote:
      "“[Replace with an approved quote about communication and collaboration.]”",
    attribution: "[REPLACE WITH REAL PARTNER NAME AND ROLE]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span />
              CLIENT AND LEARNER STORIES
            </p>
            <h2>
              Real voices, <em>when approved.</em>
            </h2>
          </div>
          <p className="testimonial-notice">
            These are visible placeholders, not published endorsements. Replace
            each with an approved, verifiable testimonial before launch.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonialPlaceholders.map((item) => (
            <figure className="testimonial-card" key={item.audience}>
              <span className="testimonial-audience">{item.audience}</span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.attribution}</figcaption>
            </figure>
          ))}
        </div>
        <Link className="btn btn-dark section-cta" to="/contact">
          Tell us what you’re working on <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
