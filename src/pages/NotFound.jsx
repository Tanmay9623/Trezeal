import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { pageHeroes } from "../data/pageHeroes.js";

export default function NotFound() {
  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes.generic.image}
        {...pageHeroes.generic}
        eyebrow="404"
        title="This page took a"
        emphasis="wrong turn."
        description="The page you requested does not exist or may have moved."
      >
        <Link className="btn btn-light" to="/">
          Return home <span>↗</span>
        </Link>
      </PageHero>
    </div>
  );
}
