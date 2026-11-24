import { useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { projects } from "../data/projects.js";
import { pageHeroes } from "../data/pageHeroes.js";

const projectFilters = ["All", ...new Set(projects.map((project) => project.category))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="react-page">
      <PageHero
        key={pageHeroes["/projects"].image}
        {...pageHeroes["/projects"]}
      />
      <section className="page-body">
        <div className="container">
          <div className="projects-filter" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                type="button"
                aria-pressed={activeFilter === filter}
                key={filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="page-grid project-page-grid">
            {filteredProjects.map((project, index) => (
              <article className="page-card project-page-card" key={project.name}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                />
                <span className="card-number">
                  0{index + 1} / {project.category.toUpperCase()}
                </span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-disclaimer">
                  Illustrative photography, not a product screenshot. Detailed
                  features, technology and live links are shared only when
                  verified.
                </p>
              </article>
            ))}
          </div>
          <div className="faq-contact">
            <h2>Have a project with a similar challenge?</h2>
            <Link className="btn btn-dark" to="/contact?type=business">
              Discuss your project <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
