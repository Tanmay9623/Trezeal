import { useRef } from "react";
import { Link } from "react-router-dom";
import { image } from "./data.js";

export default function ProjectsCarousel() {
  const track = useRef(null);
  const items = [
    [
      "XAction",
      "Interactive multi-college quiz platform",
      "WEB APPLICATION / EDUCATION",
      "photo-1559028006-448665bd7c7f",
    ],
    [
      "Personal Finance Manager",
      "Finance tracking and AI-assisted insights",
      "FULL-STACK / FINTECH",
      "photo-1554224155-6726b3ff858f",
    ],
    [
      "RegCode",
      "Spreadsheet validation and data processing",
      "DATA PROCESSING",
      "photo-1460925895917-afdab827c52f",
    ],
    [
      "Aivors",
      "AI-powered business application",
      "AI / DIGITAL PRODUCTS",
      "photo-1485827404703-89b55fcc595e",
    ],
  ];
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
          {items.map(([name, copy, category, photo]) => (
            <article className="project-card" key={name}>
              <img src={image(photo, 900)} alt={name} />
              <div>
                <span>{category}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
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
