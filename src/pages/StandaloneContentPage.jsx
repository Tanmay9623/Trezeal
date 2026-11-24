import { Link } from "react-router-dom";

import ContentSections from "../components/common/ContentSections.jsx";
import FaqAccordion from "../components/common/FaqAccordion.jsx";
import PageHero from "../components/common/PageHero.jsx";
import { pageHeroes } from "../data/pageHeroes.js";
import { standalonePages } from "../data/expandedContent.js";

function ComparisonTable({ table }) {
  return (
    <div className="pricing-table-wrap">
      <table className="pricing-table">
        <caption>Comparison of Trezeal engagement options</caption>
        <thead>
          <tr>
            {table.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map(([heading, ...values]) => (
            <tr key={heading}>
              <th scope="row">{heading}</th>
              {values.map((value, index) => (
                <td key={`${heading}-${index}`}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StandaloneContentPage({ path }) {
  const page = standalonePages[path];

  if (!page) return null;

  return (
    <div className="react-page">
      <PageHero
        key={path}
        {...(pageHeroes[path] ?? pageHeroes.generic)}
        eyebrow={page.eyebrow}
        title={page.title}
        emphasis={page.emphasis}
        description={page.description}
      >
        <Link className="btn btn-light" to="/contact">
          Discuss your requirements <span>↗</span>
        </Link>
      </PageHero>
      {page.sections.map((section, index) =>
        section.table ? (
          <section className="long-content-section" key={section.title}>
            <div className="container long-content-copy">
              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow">
                <span />
                {section.eyebrow}
              </p>
              <h2>{section.title}</h2>
              <ComparisonTable table={section.table} />
            </div>
          </section>
        ) : (
          <ContentSections
            key={section.title}
            sections={[section]}
            startIndex={index}
          />
        ),
      )}
      {page.faq && (
        <section className="long-content-section">
          <div className="container">
            <p className="eyebrow">
              <span />
              PRICING QUESTIONS
            </p>
            <h2>Before you approve a proposal.</h2>
            <FaqAccordion items={page.faq} idPrefix={`${path.slice(1)}-faq`} />
          </div>
        </section>
      )}
      <section className="page-cta">
        <div className="container">
          <h2>
            Ready to take a <em>clear next step?</em>
          </h2>
          <Link className="btn btn-light" to="/contact">
            Contact Trezeal <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
