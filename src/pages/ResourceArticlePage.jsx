import { Link, Navigate, useParams } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { articles } from "../data/articles.js";
import { pageHeroes } from "../data/pageHeroes.js";

export default function ResourceArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/not-found" replace />;
  }

  const isBusinessGuide = [
    "BUSINESS AUTOMATION",
    "WEBSITE PLANNING",
  ].includes(article.category);
  const callToAction = isBusinessGuide
    ? "Need help planning a digital project or workflow?"
    : "Want help planning your next learning step?";
  const callToActionLink = isBusinessGuide
    ? "/contact?type=business"
    : "/contact?type=student";

  return (
    <article className="react-page resource-article-page">
      <PageHero
        key={article.slug}
        {...pageHeroes["/resources"]}
        eyebrow={article.category}
        title={article.title}
        description={article.description}
      />
      <div className="container article-layout">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.category}</span>
        </nav>
        <div className="article-content">
          {article.sections.map((section) => (
            <section className="article-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <aside className="article-cta">
              <h2>{callToAction}</h2>
              <Link className="btn btn-dark" to={callToActionLink}>
              Talk to Trezeal <span>↗</span>
            </Link>
          </aside>
        </div>
      </div>
    </article>
  );
}
