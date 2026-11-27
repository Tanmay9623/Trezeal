import { useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { articles } from "../data/articles.js";
import {
  blogCategories,
  formatPublishedDate,
  getArticlePresentation,
  getReadingTime,
} from "../data/blogPresentation.js";
import { pageHeroes } from "../data/pageHeroes.js";
import "./BlogPages.css";

function ArticleMeta({ article, presentation }) {
  return (
    <div className="blog-article-meta">
      <span>{presentation.author}</span>
      <span>{formatPublishedDate(presentation.publishedAt)}</span>
      <span>{getReadingTime(article)} min read</span>
    </div>
  );
}

function ArticleCard({ article }) {
  const presentation = getArticlePresentation(article);
  return (
    <article className="blog-card">
      <Link
        className="blog-card-image-link"
        to={`/blog/${article.slug}`}
        aria-label={`Read ${article.title}`}
      >
        <img
          src={presentation.coverImage}
          alt={presentation.coverAlt}
          loading="lazy"
          width="900"
          height="600"
        />
      </Link>
      <div className="blog-card-content">
        <span className="blog-category-label">{presentation.category}</span>
        <h3>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.description}</p>
        <ArticleMeta article={article} presentation={presentation} />
        <Link className="text-link" to={`/blog/${article.slug}`}>
          Read article <b aria-hidden="true">↗</b>
        </Link>
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All topics");

  const featuredArticle = articles.find(
    (article) => getArticlePresentation(article).featured,
  );
  const isFiltering = Boolean(query.trim()) || selectedCategory !== "All topics";

  const searchTerm = query.trim().toLowerCase();
  const filteredArticles = articles.filter((article) => {
    const presentation = getArticlePresentation(article);
    const searchable = [
      article.title,
      article.description,
      presentation.category,
      ...article.sections.flatMap((section) => [
        section.heading,
        ...section.paragraphs,
      ]),
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!searchTerm || searchable.includes(searchTerm)) &&
      (selectedCategory === "All topics" ||
        presentation.category === selectedCategory)
    );
  });

  const featuredPresentation = featuredArticle
    ? getArticlePresentation(featuredArticle)
    : null;

  return (
    <div className="react-page blog-page">
      <PageHero
        {...pageHeroes["/resources"]}
        eyebrow="THE TREZEAL JOURNAL"
        title="Insights, Ideas &"
        emphasis="Innovation."
        description="Practical technology perspectives for people building products, businesses and careers."
      >
        <a className="btn btn-light" href="#blog-latest">
          Explore the journal <span aria-hidden="true">↓</span>
        </a>
      </PageHero>

      <section className="blog-landing" id="blog-latest">
        <div className="container">
          {!isFiltering && featuredArticle && featuredPresentation && (
            <section className="blog-featured" aria-labelledby="featured-title">
              <Link
                className="blog-featured-image"
                to={`/blog/${featuredArticle.slug}`}
                aria-label={`Read featured article: ${featuredArticle.title}`}
              >
                <img
                  src={featuredPresentation.coverImage}
                  alt={featuredPresentation.coverAlt}
                  width="1200"
                  height="800"
                  fetchPriority="high"
                />
              </Link>
              <div className="blog-featured-copy">
                <p className="eyebrow">
                  <span />
                  FEATURED ARTICLE
                </p>
                <span className="blog-category-label">
                  {featuredPresentation.category}
                </span>
                <h2 id="featured-title">
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p>{featuredArticle.description}</p>
                <ArticleMeta
                  article={featuredArticle}
                  presentation={featuredPresentation}
                />
                <Link
                  className="btn btn-dark"
                  to={`/blog/${featuredArticle.slug}`}
                >
                  Read the feature <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </section>
          )}

          <div className="blog-library-heading">
            <div>
              <p className="eyebrow">
                <span />
                EXPLORE THE JOURNAL
              </p>
              <h2>{isFiltering ? "Articles for your search." : "Latest articles."}</h2>
            </div>
            <label className="blog-search">
              <span className="sr-only">Search articles</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search topics or keywords"
              />
            </label>
          </div>

          <nav className="blog-category-nav" aria-label="Blog categories">
            {["All topics", ...blogCategories].map((category) => (
              <button
                aria-pressed={selectedCategory === category}
                className={selectedCategory === category ? "active" : ""}
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </nav>

          {filteredArticles.length ? (
            <div className="blog-card-grid">
              {(isFiltering
                ? filteredArticles
                : filteredArticles.filter(
                    (article) => article.slug !== featuredArticle?.slug,
                  )
              ).map((article) => (
                <ArticleCard article={article} key={article.slug} />
              ))}
            </div>
          ) : (
            <div className="blog-empty-state">
              <h3>No articles in this view yet.</h3>
              <p>
                Try another topic or search term. We will add new perspectives
                as they are ready.
              </p>
              <button
                className="text-link"
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("All topics");
                }}
                type="button"
              >
                Show all articles <b aria-hidden="true">↗</b>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
