import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import trezealLogo from "../../assets/images/trezeal-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/services", "Services"],
    ["/pricing", "Pricing"],
    ["/blog", "Blog"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  const allLinks = [
    ...links,
    ["/students", "Student development"],
    ["/interview-preparation", "Interview preparation"],
    ["/freelance", "Freelance studio"],
    ["/projects", "Projects"],
    ["/careers", "Careers and partners"],
    ["/faq", "FAQ"],
  ];
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-marquee" aria-label="Trezeal announcements">
            <div className="topbar-track">
              <span>TECHNOLOGY • CREATIVITY • GROWTH</span>
              <Link to="/contact">Project & student enquiries</Link>
            </div>
          </div>
        </div>
      </div>
      <header className="site-header" id="siteHeader">
        <div className="container nav-wrap">
          <Link className="brand" to="/">
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
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <Link className="btn btn-dark nav-cta" to="/contact">
              Let's talk <span>↗</span>
            </Link>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <i></i>
              <i></i>
            </button>
          </div>
        </div>
        {open && (
          <nav
            className="mobile-menu open"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {allLinks.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
