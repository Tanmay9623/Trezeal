import { Link } from "react-router-dom";

export default function HighlightsSection() {
  return (
    <section className="highlights section-pad">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span />
              WHAT WE OFFER
            </p>
            <h2>
              One partner.
              <br />
              <em>More possibilities.</em>
            </h2>
          </div>
          <div>
            <p>
              From digital products for businesses to practical career support
              for students, explore services built around real needs.
            </p>
            <Link className="text-link" to="/services">
              View more <b>↗</b>
            </Link>
          </div>
        </div>
        <div className="highlight-grid">
          <Link className="highlight-main" to="/services/software-development">
            <span className="card-number">01 / BUSINESS TECHNOLOGY</span>
            <h3>Software & automation</h3>
            <p>
              Websites, custom applications, APIs, AI integrations and workflow
              automation.
            </p>
            <span className="round-arrow">↗</span>
          </Link>
          <Link
            className="highlight-main highlight-dark"
            to="/interview-preparation"
          >
            <span className="card-number">02 / CAREER DEVELOPMENT</span>
            <h3>Student & interview preparation</h3>
            <p>
              Programming guidance, project support, technical practice and mock
              interviews.
            </p>
            <span className="round-arrow">↗</span>
          </Link>
          <div className="highlight-list">
            <span>OUR FOCUS</span>
            <p>01&nbsp; Software & AI solutions</p>
            <p>02&nbsp; Student career guidance</p>
            <p>03&nbsp; Freelance digital services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
