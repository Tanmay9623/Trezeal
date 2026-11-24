import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { pageHeroes } from "../data/pageHeroes.js";

export default function InnerPage({ copy, hero = pageHeroes.generic }) {
  return (
    <div className="react-page">
      <PageHero key={hero.image} {...hero}>
        <div className="button-row">
          <Link className="btn btn-light" to="/contact">
            Start a conversation <span>↗</span>
          </Link>
          <Link className="btn btn-dark" to="/services">
            Explore services <span>↗</span>
          </Link>
        </div>
      </PageHero>
      <section className="page-body">
        <div className="container">
          <p className="eyebrow">
            <span />
            TREZEAL
          </p>
          <h2>
            Practical work.
            <br />
            <em>Clear next steps.</em>
          </h2>
          <p className="page-intro">{copy[2]}</p>
          <div className="page-grid">
            {[
              "Understand the requirement",
              "Plan the right approach",
              "Build and review",
              "Support the next step",
            ].map((item, index) => (
              <article className="page-card" key={item}>
                <span className="card-number">0{index + 1}</span>
                <h3>{item}</h3>
                <p>
                  We keep scope clear, work from verified requirements and
                  communicate honestly throughout.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="page-cta">
        <div className="container">
          <h2>
            Ready for the next <em>step?</em>
          </h2>
          <Link className="btn btn-light" to="/contact">
            Talk to Trezeal <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
