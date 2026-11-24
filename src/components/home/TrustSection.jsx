import { Link } from "react-router-dom";

const principles = [
  {
    title: "Scope before build",
    description:
      "Deliverables, dependencies and review points are discussed before work begins.",
  },
  {
    title: "Practical learning",
    description:
      "Student guidance focuses on practice, projects and explaining the work.",
  },
  {
    title: "Clear expectations",
    description:
      "We avoid unverified claims, hidden assumptions and job or placement guarantees.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section section-pad">
      <div className="container">
        <ul className="trust-badges" aria-label="Trezeal working commitments">
          <li>Pune, India</li>
          <li>Remote projects welcome</li>
          <li>Written scope before delivery</li>
          <li>No placement guarantees</li>
        </ul>
        <div className="section-heading">
          <p className="eyebrow">
            <span />
            A CLEAR WAY TO WORK
          </p>
          <h2>
            Good work starts with <em>good conversations.</em>
          </h2>
        </div>
        <div className="trust-grid">
          {principles.map(({ title, description }, index) => (
            <article className="trust-card" key={title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <Link className="btn btn-dark section-cta" to="/contact">
          Talk through your brief <span>↗</span>
        </Link>
      </div>
    </section>
  );
}
