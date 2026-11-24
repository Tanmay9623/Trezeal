import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { articles } from "../data/articles.js";
import { pageHeroes } from "../data/pageHeroes.js";

export default function ResourcesPage() {
  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes["/resources"].image}
        {...pageHeroes["/resources"]}
      />
      <section className="page-body">
        <div className="container">
          <p className="eyebrow">
            <span />
            PRACTICAL GUIDES
          </p>
          <h2>Resources for learning and career preparation.</h2>
          <p className="page-intro">
            These guides focus on skills you can practise, decisions you can
            explain and next steps you can adapt to your own goals.
          </p>
          <div className="page-grid resource-grid">
            {articles.map((article, index) => (
              <article className="page-card resource-card" key={article.slug}>
                <span className="card-number">
                  0{index + 1} / {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link
                  className="text-link"
                  to={`/blog/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                >
                  Read the guide <b>↗</b>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
