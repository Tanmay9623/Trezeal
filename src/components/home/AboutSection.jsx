import { Link } from "react-router-dom";
import { image, photos } from "./data.js";

export default function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src={image(photos.about, 1100)}
            alt="Bright modern collaborative workspace"
          />
          <div className="image-note">
            <strong>01—03</strong>
            <span>
              Ideas into
              <br />
              action
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span />
            ABOUT TREZEAL
          </p>
          <h2>
            Ideas into digital
            <br />
            <em>impact.</em>
          </h2>
          <p className="lead">
            Trezeal is a technology and digital solutions company helping
            businesses move forward while helping students build confidence and
            practical career skills.
          </p>
          <p>
            We bring software development, AI, automation, creative digital
            services and hands-on learning together.
          </p>
          <Link className="btn btn-dark" to="/about">
            Talk to Trezeal <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
