import { useState } from "react";
import { Link } from "react-router-dom";
import { image, photos } from "./data.js";

export default function Hero() {
  const slides = [
    {
      title: (
        <>
          Building Digital
          <br />
          Solutions.
          <br />
          <em>Empowering Future Talent.</em>
        </>
      ),
      copy:
        "We help businesses build useful technology and help students turn learning into practical skills and career confidence.",
    },
    {
      title: (
        <>
          Make your next
          <br />
          <em>move matter.</em>
        </>
      ),
      copy: "We turn complex challenges into clear direction, useful experiences and meaningful progress.",
    },
    {
      title: (
        <>
          Your ideas.
          <br />
          <em>Our technology.</em>
        </>
      ),
      copy: "From focused websites to connected applications, we help turn a clear need into a useful outcome.",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <section className="hero" id="home">
      <div
        className={`hero-bg hero-bg-one ${index === 0 ? "active" : ""}`}
        style={{ backgroundImage: `url(${image(photos.hero[0], 2200)})` }}
      ></div>
      <div
        className={`hero-bg hero-bg-two ${index === 1 ? "active" : ""}`}
        style={{ backgroundImage: `url(${image(photos.hero[1], 2200)})` }}
      ></div>
      <div
        className={`hero-bg hero-bg-three ${index === 2 ? "active" : ""}`}
        style={{ backgroundImage: `url(${image(photos.hero[2], 2200)})` }}
      ></div>
      <div className="hero-shade"></div>
      <div className="container hero-content">
        <p className="eyebrow light-eyebrow">
          <span />
          TECHNOLOGY • CREATIVITY • GROWTH
        </p>
        <h1>{slides[index].title}</h1>
        <p className="hero-copy">{slides[index].copy}</p>
        <div className="hero-cta-row">
          <Link className="btn btn-light" to="/services">
            Explore Our Services <span>↗</span>
          </Link>
          <Link className="hero-secondary-cta" to="/contact">
            Let’s discuss your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>
          0{index + 1} <i>/</i> 0{slides.length}
        </span>
        <div className="hero-progress">
          <b style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
        </div>
        <div className="hero-controls">
          <button
            onClick={() =>
              setIndex((index + slides.length - 1) % slides.length)
            }
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((index + 1) % slides.length)}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
      <div className="hero-vertical">TECHNOLOGY THAT MOVES YOU FORWARD.</div>
    </section>
  );
}
