import { Link, Navigate, useParams } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { articles } from "../data/articles.js";
import {
  formatPublishedDate,
  getArticlePresentation,
  getReadingTime,
} from "../data/blogPresentation.js";
import { pageHeroes } from "../data/pageHeroes.js";
import "./BlogPages.css";

const sectionId = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function ArticleCard({ article }) {
  const presentation = getArticlePresentation(article);
  return (
    <article className="blog-related-card">
      <Link to={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
        <img
          src={presentation.coverImage}
          alt={presentation.coverAlt}
          loading="lazy"
          width="800"
          height="520"
        />
      </Link>
      <span className="blog-category-label">{presentation.category}</span>
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <span className="blog-related-reading">{getReadingTime(article)} min read</span>
    </article>
  );
}

export default function ResourceArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) return <Navigate to="/not-found" replace />;

  const presentation = getArticlePresentation(article);
  const sections = article.sections.map((section) => ({
    ...section,
    id: sectionId(section.heading),
  }));
  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .sort((first, second) => {
      const firstCategory =
        getArticlePresentation(first).category === presentation.category ? 0 : 1;
      const secondCategory =
        getArticlePresentation(second).category === presentation.category
          ? 0
          : 1;
      return firstCategory - secondCategory;
    })
    .slice(0, 3);
  const isBusinessGuide = [
    "Business & Innovation",
    "Technology Trends",
  ].includes(presentation.category);
  const callToAction = isBusinessGuide
    ? "Need help planning a digital project or workflow?"
    : "Want help planning your next learning step?";
  const callToActionLink = isBusinessGuide
    ? "/contact?type=business"
    : "/contact?type=student";
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

  return (
    <article className="react-page blog-article-page">
      <PageHero
        {...pageHeroes["/resources"]}
        eyebrow={presentation.category}
        title={article.title}
        description={article.description}
        image={presentation.coverImage}
        alt={presentation.coverAlt}
      />
      <div className="container blog-article-shell">
        <nav className="article-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{presentation.category}</span>
        </nav>

        <div className="blog-article-byline">
          <span className="blog-author-mark" aria-hidden="true">
            T
          </span>
          <div>
            <strong>{presentation.author}</strong>
            <span>
              {formatPublishedDate(presentation.publishedAt)} ·{" "}
              {getReadingTime(article)} min read
            </span>
          </div>
        </div>

        <div className="blog-article-layout">
          <aside className="blog-table-of-contents">
            <h2>In this article</h2>
            <nav aria-label="Table of contents">
              <ol>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="blog-article-content">
            {sections.map((section) => (
              <section
                className="article-section"
                id={section.id}
                key={section.id}
              >
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="blog-share">
              <span>Share this article</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                rel="noreferrer"
                target="_blank"
              >
                X
              </a>
              <a href={`mailto:?subject=${shareTitle}&body=${shareUrl}`}>
                Email
              </a>
            </div>

            <aside className="article-cta blog-article-cta">
              <h2>{callToAction}</h2>
              <Link className="btn btn-dark" to={callToActionLink}>
                Talk to Trezeal <span aria-hidden="true">↗</span>
              </Link>
            </aside>
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <section className="blog-related" aria-labelledby="related-heading">
            <div className="blog-related-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  KEEP EXPLORING
                </p>
                <h2 id="related-heading">Related insights.</h2>
              </div>
              <Link className="text-link" to="/blog">
                Back to the journal <b aria-hidden="true">↗</b>
              </Link>
            </div>
            <div className="blog-related-grid">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard article={relatedArticle} key={relatedArticle.slug} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
