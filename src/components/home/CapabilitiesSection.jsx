import { Link } from "react-router-dom";

import CapabilityCard from "./CapabilityCard.jsx";
import {
  capabilities,
  capabilitiesIntro,
  deliveryStandards,
  workSteps,
} from "./capabilitiesData.js";

import "./CapabilitiesSection.css";

export default function CapabilitiesSection() {
  return (
    <section
      className="capabilities-section"
      aria-labelledby="capabilities-title"
    >
      <div className="container capabilities-container">
        <header className="capabilities-header">
          <p className="capabilities-eyebrow">
            AI, AUTOMATION &amp; DIGITAL SOLUTIONS
          </p>
          <h2 id="capabilities-title">
            Smart solutions built to work for your business
          </h2>
          <p className="capabilities-intro">{capabilitiesIntro}</p>
        </header>

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              capability={capability}
              index={index}
              key={capability.title}
            />
          ))}
        </div>

        <ul
          className="delivery-standards"
          aria-label="Responsive design and accessibility standards"
        >
          {deliveryStandards.map(({ title, description }) => (
            <li className="delivery-standard" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>

        <section
          className="how-we-work"
          aria-labelledby="how-we-work-title"
        >
          <header className="how-we-work-header">
            <p className="capabilities-eyebrow">HOW WE WORK</p>
            <h2 id="how-we-work-title">A clear path from idea to handover</h2>
          </header>
          <ol className="work-steps">
            {workSteps.map(({ title, description }, index) => (
              <li className="work-step" key={title}>
                <span className="work-step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="capabilities-cta"
          aria-labelledby="capabilities-cta-title"
        >
          <div className="capabilities-cta-copy">
            <p className="capabilities-eyebrow">LET’S MAKE WORK EASIER</p>
            <h2 id="capabilities-cta-title">
              Have a task you want automated?
            </h2>
            <p>
              Tell us what you want to improve, automate, or build, and we’ll
              help you define a practical next step.
            </p>
          </div>
          <div className="capabilities-cta-actions">
            <Link
              className="capabilities-button capabilities-button-primary"
              to="/contact"
            >
              Get in Touch
            </Link>
            <Link
              className="capabilities-button capabilities-button-secondary"
              to="/services"
            >
              View Services
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
