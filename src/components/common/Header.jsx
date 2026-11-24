import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import trezealLogo from "../../assets/images/trezeal-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/students", "Students"],
    ["/projects", "Work"],
    ["/resources", "Resources"],
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
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <i></i>
              <i></i>
            </button>
          </div>
        </div>
        {open && (
          <nav className="mobile-menu open" aria-label="Mobile navigation">
            {[...links, ["/contact", "Contact"]].map(([to, label]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
