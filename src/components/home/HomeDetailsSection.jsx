import { Link } from "react-router-dom";

import ContentSections from "../common/ContentSections.jsx";
import { homeEditorialSections } from "../../data/expandedContent.js";

export default function HomeDetailsSection() {
  return (
    <>
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
