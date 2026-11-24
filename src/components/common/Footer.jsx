import { Link } from "react-router-dom";

import trezealLogo from "../../assets/images/trezeal-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link className="brand brand-light" to="/">
            <span className="brand-mark">
              <img
                className="brand-mark-logo"
                src={trezealLogo}
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className="brand-name">
              trezeal<small>TECHNOLOGY & DIGITAL SOLUTIONS</small>
            </span>
          </Link>
          <p>
            Technology for business.
            <br />
            Guidance for growth.
          </p>
          <Link className="footer-big-link" to="/contact">
            Let’s build
            <br />
            something <em>useful.</em> ↗
          </Link>
        </div>
        <div className="footer-main">
          <div>
            <span className="footer-label">EXPLORE</span>
            <Link to="/about">About Trezeal</Link>
            <Link to="/services">Services</Link>
            <Link to="/students">Student guidance</Link>
            <Link to="/projects">Project capabilities</Link>
            <Link to="/interview-preparation">Interview preparation</Link>
          </div>
          <div>
            <span className="footer-label">SAY HELLO</span>
            <Link to="/contact">Project & student enquiries</Link>
            <p>
              Pune, Maharashtra, India
              <br />
              Remote projects welcome
            </p>
          </div>
          <div className="newsletter">
            <span className="footer-label">STAY CONNECTED</span>
            <p>
              Get in touch for project updates, learning guidance and career
              support.
            </p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                required
                aria-label="Your email address"
              />
              <button aria-label="Subscribe">↗</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TREZEAL. ALL RIGHTS RESERVED.</span>
          <div>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
            <a href="#home">Back to top ↑</a>
          </div>
          <span>TECHNOLOGY • CREATIVITY • GROWTH</span>
        </div>
      </div>
    </footer>
  );
}
