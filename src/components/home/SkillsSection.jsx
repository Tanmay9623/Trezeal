import { useState } from "react";
import { Link } from "react-router-dom";

export default function SkillsSection() {
  const content = {
    software: [
      "01 / SOFTWARE & TECHNOLOGY",
      "Build the tools your work needs.",
      [
        "Website development",
        "Full-stack applications",
        "SaaS & dashboards",
        "AI & machine learning",
        "APIs & integrations",
        "Workflow automation",
      ],
    ],
    business: [
      "02 / BUSINESS & DIGITAL",
      "Make every interaction count.",
      [
        "Business solutions",
        "CRM systems",
        "Analytics dashboards",
        "UI/UX design",
        "E-commerce experiences",
        "Website maintenance",
      ],
    ],
    students: [
      "03 / STUDENT & CAREER",
      "Turn learning into progress.",
      [
        "Programming fundamentals",
        "Project mentorship",
        "Resume & LinkedIn",
        "Mock interviews",
        "Career roadmaps",
        "Final-year guidance",
      ],
    ],
  };
  const [tab, setTab] = useState("software");
  const current = content[tab];
  return (
    <section className="skills section-pad" id="skills">
      <div className="container skills-grid">
        <div>
          <p className="eyebrow">
            <span />
            OUR CAPABILITIES
          </p>
          <h2>
            Practical skills.
            <br />
            <em>Real solutions.</em>
          </h2>
          <p className="lead">
            Explore the ways Trezeal can support your business, project or
            career journey.
          </p>
          <div className="tabs" role="tablist">
            {[
              ["software", "Software & technology"],
              ["business", "Business & digital"],
              ["students", "Student & career"],
            ].map(([key, label], index) => (
              <button
                className={`tab ${tab === key ? "active" : ""}`}
                onClick={() => setTab(key)}
                role="tab"
                aria-selected={tab === key}
                key={key}
              >
                0{index + 1}&nbsp; {label}
              </button>
            ))}
          </div>
        </div>
        <div className="tab-panel">
          <p className="eyebrow">{current[0]}</p>
          <h3>{current[1]}</h3>
          <p>
            We connect practical needs with thoughtful development, clear
            guidance and useful outcomes.
          </p>
          <div className="check-grid">
            {current[2].map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
          <Link className="text-link" to="/contact">
            Talk to our team <b>↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
