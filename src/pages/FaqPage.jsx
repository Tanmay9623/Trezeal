import { Link } from "react-router-dom";

import FaqAccordion from "../components/common/FaqAccordion.jsx";
import PageHero from "../components/common/PageHero.jsx";
import { faqItems } from "../data/faqItems.js";
import { pageHeroes } from "../data/pageHeroes.js";

export default function FaqPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <div className="react-page">
      <PageHero key={pageHeroes.faq.image} {...pageHeroes.faq} />
      <section className="page-body">
        <div className="container">
          {categories.map((category) => (
            <section className="faq-category" key={category}>
              <h2>{category}</h2>
              <FaqAccordion
                items={faqItems.filter((item) => item.category === category)}
                idPrefix={`faq-${category.toLowerCase().replaceAll(" ", "-")}`}
              />
            </section>
          ))}
          <div className="faq-contact">
            <h2>Need an answer for your specific project?</h2>
            <Link className="btn btn-dark" to="/contact">
              Ask Trezeal <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
