import { Link } from "react-router-dom";

import ContentSections from "../common/ContentSections.jsx";
import { homeEditorialSections } from "../../data/expandedContent.js";

const workingPrinciples = [
  ["04", "Visible delivery stages"],
  ["03", "Connected service areas"],
  ["01", "Written scope before project work"],
];

export default function HomeDetailsSection() {
  return (
    <>
      <section className="home-stats section-pad" aria-labelledby="home-stats-title">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              <span />
              A PRACTICAL FRAMEWORK
            </p>
            <h2 id="home-stats-title">
              A few things you can <em>count on.</em>
            </h2>
            <p className="section-intro">
              These are process commitments, not client counts or performance
              claims.
            </p>
          </div>
          <div className="home-stats-grid">
            {workingPrinciples.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContentSections sections={homeEditorialSections} />

      <section className="pricing-teaser section-pad">
        <div className="container pricing-teaser-layout">
          <div>
            <p className="eyebrow">
              <span />
              PRICING AND SCOPE
            </p>
            <h2>
              Start with the <em>right-sized engagement.</em>
            </h2>
          </div>
          <div>
            <p>
              Trezeal quotes work after understanding the requirements,
              dependencies and review needs. Compare focused advice, a scoped
              project and ongoing support before deciding what fits.
            </p>
            <Link className="btn btn-dark" to="/pricing">
              Explore pricing options <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
