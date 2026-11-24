import PageHero from "../components/common/PageHero.jsx";
import { pageHeroes } from "../data/pageHeroes.js";

export default function ProjectsPage() {
  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes["/projects"].image}
        {...pageHeroes["/projects"]}
      />
      <section className="page-body">
        <div className="container">
          <div className="page-grid">
            {["XAction", "Personal Finance Manager", "RegCode", "Aivors"].map(
              (project, index) => (
                <article className="page-card" key={project}>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{project}</h3>
                  <p>
                    Known project category. Technology stacks and live links
                    will appear when verified.
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
