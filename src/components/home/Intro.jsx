import { Link } from "react-router-dom";

export default function IntroSection() {
  const cards = [
    [
      "Software Development",
      "Websites, applications, APIs and SaaS.",
      "/services/software-development",
    ],
    [
      "Business & AI Solutions",
      "Automation, AI integrations and analytics.",
      "/services/business-solutions",
    ],
    [
      "Student Mentorship",
      "Practical skills, projects and career guidance.",
      "/students",
    ],
    [
      "Interview Preparation",
      "Technical and HR mock interviews.",
      "/interview-preparation",
    ],
    [
      "Digital & UI Design",
      "Interfaces, branding and redesigns.",
      "/freelance#design",
    ],
    [
      "Freelance Studio",
      "Websites, dashboards and custom builds.",
      "/freelance",
    ],
  ];
  return (
    <section className="intro section-pad" id="services">
      <div className="container">
        <div className="intro-heading">
          <p className="eyebrow">
            <span />
            WHAT WE DO
          </p>
          <h2>
            Technology for today.
            <br />
            <em>Opportunity</em> for tomorrow.
          </h2>
        </div>
        <div className="intro-grid">
          {cards.map(([title, copy, to], index) => (
            <Link className="intro-card" to={to} key={title}>
              <span className="card-number">
                0{index + 1} /{" "}
                {index < 2 ? "BUSINESS" : index < 4 ? "CAREER" : "FREELANCE"}
              </span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="text-link">
                Learn more <b>↗</b>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
