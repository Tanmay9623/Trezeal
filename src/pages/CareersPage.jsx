import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { jobs, openJobs } from "../data/jobs.js";
import { pageHeroes } from "../data/pageHeroes.js";
import "./CareersPage.css";

const locations = ["Remote", "Pune", "Hybrid"];
const employmentTypes = ["Internship", "Full-time", "Part-time", "Contract"];

function JobCard({ job }) {
  return (
    <article className="career-job-card">
      <div className="career-job-card-top">
        <span className="career-job-department">{job.department}</span>
        {job.demo && <span className="demo-badge">Demo role · not a vacancy</span>}
      </div>
      <h3>{job.title}</h3>
      <p className="career-job-summary">{job.summary}</p>
      <ul className="career-job-facts" aria-label="Role details">
        <li>{job.location}</li>
        <li>{job.employmentType}</li>
        <li>{job.experience}</li>
      </ul>
      <div className="career-skill-list" aria-label="Required skills">
        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="career-job-footer">
        <span>
          {job.demo ? "Dates shown on demo roles are illustrative." : job.deadline}
        </span>
        <Link className="text-link" to={`/careers/${job.slug}`}>
          {job.demo ? "View sample role" : "View role"} <b>↗</b>
        </Link>
      </div>
    </article>
  );
}

export default function CareersPage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  const departments = useMemo(
    () => [...new Set(jobs.map((job) => job.department))].sort(),
    [],
  );

  const filteredJobs = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const searchable = [
        job.title,
        job.department,
        job.summary,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();
      return (
        (!searchTerm || searchable.includes(searchTerm)) &&
        (!department || job.department === department) &&
        (!location || job.location === location) &&
        (!employmentType || job.employmentType === employmentType)
      );
    });
  }, [department, employmentType, location, query]);

  return (
    <div className="react-page careers-page">
      <PageHero
        {...pageHeroes["/careers"]}
        eyebrow="CAREERS AT TREZEAL"
        title="Build Your Future"
        emphasis="With Trezeal."
        description="Explore practical work, thoughtful collaboration and opportunities to keep learning. We share confirmed openings here and label sample roles clearly."
      >
        <div className="career-hero-actions">
          <a className="btn btn-light" href="#open-positions">
            Explore Open Positions <span aria-hidden="true">↓</span>
          </a>
          <Link className="career-interest-link" to="/careers/apply/general-interest">
            Share your interest
          </Link>
        </div>
      </PageHero>

      <section className="career-overview">
        <div className="container career-overview-grid">
          <div className="career-opening-count">
            <span className="eyebrow">
              <span />
              CURRENT OPENINGS
            </span>
            <strong>{openJobs.length}</strong>
            <p>
              {openJobs.length === 1
                ? "confirmed position accepting applications"
                : "confirmed positions accepting applications"}
            </p>
          </div>
          <div className="career-overview-copy">
            <h2>Good work grows through curiosity, care and shared effort.</h2>
            <p>
              Trezeal brings technology delivery, digital experience and
              practical learning together. We value clear communication,
              thoughtful teamwork and room to build skills through meaningful
              work.
            </p>
            <p className="career-hiring-note">
              Applications are sent to the careers inbox by email. This site
              does not maintain candidate accounts or an application dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="career-positions" id="open-positions">
        <div className="container">
          <div className="career-section-heading">
            <div>
              <p className="eyebrow">
                <span />
                FIND YOUR FIT
              </p>
              <h2>Open positions and sample roles.</h2>
              <p>
                Only confirmed, non-demo roles count as active openings. Sample
                roles below are for illustration and are not accepting
                applications.
              </p>
            </div>
            <span className="career-result-count">
              {filteredJobs.length} {filteredJobs.length === 1 ? "role" : "roles"}
            </span>
          </div>

          <div className="career-filters" role="search">
            <label>
              Search roles
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Title, skill or keyword"
              />
            </label>
            <label>
              Department
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option value="">All departments</option>
                {departments.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Location
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="">All locations</option>
                {locations.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Employment type
              <select
                value={employmentType}
                onChange={(event) => setEmploymentType(event.target.value)}
              >
                <option value="">All types</option>
                {employmentTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredJobs.length ? (
            <div className="career-job-grid">
              {filteredJobs.map((job) => (
                <JobCard job={job} key={job.slug} />
              ))}
            </div>
          ) : (
            <div className="career-empty-state">
              <h3>No matching roles</h3>
              <p>Try a different keyword or clear one or more filters.</p>
              <button
                className="text-link"
                type="button"
                onClick={() => {
                  setQuery("");
                  setDepartment("");
                  setLocation("");
                  setEmploymentType("");
                }}
              >
                Clear filters <b>↗</b>
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="career-culture">
        <div className="container">
          <div className="career-section-heading">
            <div>
              <p className="eyebrow">
                <span />
                HOW WE WORK
              </p>
              <h2>Learn together. Make useful things.</h2>
            </div>
          </div>
          <div className="career-culture-grid">
            <article>
              <img
                src="/images/photos/learning.jpg"
                alt="Learners sharing ideas around a laptop"
                loading="lazy"
              />
              <h3>Learning with purpose</h3>
              <p>Build skills through practice, feedback and useful projects.</p>
            </article>
            <article>
              <img
                src="/images/photos/team.jpg"
                alt="Colleagues collaborating around a shared table"
                loading="lazy"
              />
              <h3>Thoughtful teamwork</h3>
              <p>Share context early and make progress visible to the team.</p>
            </article>
            <article>
              <img
                src="/images/photos/workspace.jpg"
                alt="A bright, glass-walled team workspace"
                loading="lazy"
              />
              <h3>Room to grow</h3>
              <p>Take ownership, ask good questions and keep improving the work.</p>
            </article>
          </div>
          <div className="career-interest-banner">
            <div>
              <h3>No active vacancy matches your experience?</h3>
              <p>
                You can still send a general-interest application. It will be
                reviewed as capacity allows, without promising a role or reply.
              </p>
            </div>
            <Link className="btn btn-dark" to="/careers/apply/general-interest">
              Share your interest <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
