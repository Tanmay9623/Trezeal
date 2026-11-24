import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import ContentSections from "../components/common/ContentSections.jsx";
import { pageContent } from "../data/pageContent.js";
import { extendedSections } from "../data/expandedContent.js";
import { pageHeroes } from "../data/pageHeroes.js";

function ContentCard({ card, index }) {
  const content = (
    <>
      <span className="card-number">0{index + 1}</span>
      <h3>{card.title}</h3>
      <p>{card.copy}</p>
      {card.to && <span className="text-link">Explore this area ↗</span>}
    </>
  );

  if (card.to) {
    return (
      <Link className="page-card page-card-link" to={card.to}>
        {content}
      </Link>
    );
  }

  return <article className="page-card">{content}</article>;
}

export default function InnerPage({ path, copy, hero = pageHeroes.generic }) {
  const content = pageContent[path];

  return (
    <div className="react-page">
      <PageHero key={hero.image} {...hero}>
        <div className="button-row">
          <Link className="btn btn-light" to={content?.ctaTo ?? "/contact"}>
            {content?.ctaLabel ?? "Start a conversation"} <span>↗</span>
          </Link>
        </div>
      </PageHero>

      <section className="page-body">
        <div className="container">
          <p className="eyebrow">
            <span />
            {content?.introEyebrow ?? copy[0]}
          </p>
          <h2>{content?.introTitle ?? copy[1]}</h2>
          <p className="page-intro">
            {content?.introCopy ?? copy[2]}
          </p>
        </div>
      </section>

      {content?.sections.map((section) => (
        <section className="page-detail-section" key={section.title}>
          <div className="container">
            <p className="eyebrow">
              <span />
              {section.eyebrow}
            </p>
            <h2>{section.title}</h2>
            {section.copy && <p className="page-intro">{section.copy}</p>}
            <div className="page-grid">
              {section.cards.map((card, index) => (
                <ContentCard
                  card={card}
                  index={index}
                  key={card.title}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContentSections sections={extendedSections[path]} />

      <section className="page-cta">
        <div className="container">
          <h2>
            Ready to take a <em>clear next step?</em>
          </h2>
          <Link
            className="btn btn-light"
            to={content?.ctaTo ?? "/contact"}
          >
            {content?.ctaLabel ?? "Talk to Trezeal"} <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
