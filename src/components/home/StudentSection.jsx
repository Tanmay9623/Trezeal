import { Link } from "react-router-dom";

import { image, photos, studentSectionContent } from "./data.js";

export default function StudentSection() {
  const {
    eyebrow,
    title,
    emphasis,
    description,
    linkLabel,
    imageAlt,
    videoLabel,
    videoCategory,
  } = studentSectionContent;

  return (
    <section
      className="growth section-pad"
      id="growth"
      aria-labelledby="student-development-title"
    >
      <div className="container growth-grid">
        {/* Student development introduction */}
        <div>
          <p className="eyebrow">
            <span />
            {eyebrow}
          </p>
          <h2 id="student-development-title">
            {title}
            <br />
            <em>{emphasis}</em>
          </h2>
          <p className="lead">{description}</p>
          <Link className="btn btn-dark" to="/students">
            {linkLabel} <span>↗</span>
          </Link>
        </div>

        {/* Student guidance visual link */}
        <Link className="video-card" to="/students">
          <img src={image(photos.students, 1200)} alt={imageAlt} />
          <span className="video-label">
            {videoLabel} <b>{videoCategory}</b>
          </span>
        </Link>
      </div>
    </section>
  );
}
