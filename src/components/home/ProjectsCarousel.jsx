import { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";

export default function ProjectsCarousel() {
  const track = useRef(null);

  return (
    <section className="projects section-pad" id="projects">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span />
              PROJECT CAPABILITIES
            </p>
            <h2>
              Ideas made
              <br />
              <em>practical.</em>
            </h2>
          </div>
          <div>
            <p>
              Explore known Trezeal project categories without invented clients,
              metrics or unverified links.
            </p>
            <Link className="text-link" to="/projects">
              View projects <b>↗</b>
            </Link>
          </div>
        </div>
        <div className="project-track" ref={track}>
          {projects.map(({ name, description, category, image, imageAlt }) => (
            <article className="project-card" key={name}>
              <img src={image} alt={imageAlt} />
              <div>
                <span>{category.toUpperCase()}</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="project-controls">
          <span>KNOWN PROJECT CATEGORIES</span>
          <div>
            <button
              onClick={() =>
                track.current?.scrollBy({ left: -500, behavior: "smooth" })
              }
              aria-label="Scroll projects left"
            >
              ←
            </button>
            <button
              onClick={() =>
                track.current?.scrollBy({ left: 500, behavior: "smooth" })
              }
              aria-label="Scroll projects right"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
