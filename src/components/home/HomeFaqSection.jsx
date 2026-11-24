import { Link } from "react-router-dom";

import FaqAccordion from "../common/FaqAccordion.jsx";
import { faqItems } from "../../data/faqItems.js";

export default function HomeFaqSection() {
  return (
    <section className="home-faq section-pad">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span />
              FREQUENTLY ASKED
            </p>
            <h2>
              A few useful <em>answers.</em>
            </h2>
          </div>
          <Link className="text-link" to="/faq">
            Browse all questions <b>↗</b>
          </Link>
        </div>
        <FaqAccordion items={faqItems.slice(0, 10)} idPrefix="home-faq" />
      </div>
    </section>
  );
}
