import { Link } from "react-router-dom";

import NewsletterForm from "./NewsletterForm.jsx";
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
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog and resources</Link>
            <Link to="/students">Student guidance</Link>
            <Link to="/projects">Project capabilities</Link>
            <Link to="/interview-preparation">Interview preparation</Link>
            <Link to="/freelance">Freelance studio</Link>
            <Link to="/careers">Careers and partners</Link>
            <Link to="/faq">Frequently asked questions</Link>
          </div>
          <div>
            <span className="footer-label">SAY HELLO</span>
            <Link to="/contact">Project & student enquiries</Link>
            <a href="mailto:hello@trezeal.com">hello@trezeal.com</a>
            <p>
              Pune, Maharashtra, India
              <br />
              Remote projects welcome
            </p>
          </div>
          <div className="newsletter">
            <span className="footer-label">OCCASIONAL UPDATES</span>
            <p>
              Receive practical notes about digital work, learning and careers.
            </p>
            <NewsletterForm />
            <Link className="text-link" to="/contact">
              Have a project? Contact Trezeal <b>↗</b>
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 TREZEAL. ALL RIGHTS RESERVED.</span>
          <div>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
            <Link to="/refund-policy">Refunds</Link>
            <Link to="/shipping-policy">Shipping</Link>
            <Link to="/cookie-policy">Cookies</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <button
              className="footer-cookie-settings"
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event("trezeal:open-cookie-preferences"))
              }
            >
              Cookie settings
            </button>
            <button
              className="footer-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              type="button"
            >
              Back to top ↑
            </button>
          </div>
          <span>TECHNOLOGY • CREATIVITY • GROWTH</span>
        </div>
      </div>
    </footer>
  );
}
