import PageHero from "../components/common/PageHero.jsx";
import { legalPages } from "../data/legalPages.js";
import { pageHeroes } from "../data/pageHeroes.js";

export default function LegalPage({ path }) {
  const page = legalPages[path];

  if (!page) return null;

  return (
    <div className="react-page legal-page">
      <PageHero
        key={path}
        {...pageHeroes.generic}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <div className="container legal-content">
        <p className="legal-review-notice">
          Legal draft — a qualified lawyer must review this text against
          Trezeal’s actual business, providers and customer locations before
          publication.
        </p>
        {page.lastUpdated && (
          <p className="legal-last-updated">
            Last updated: {page.lastUpdated}
          </p>
        )}
        {page.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
