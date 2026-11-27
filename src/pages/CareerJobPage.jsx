import { Link, Navigate, useParams } from "react-router-dom";

import PageHero from "../components/common/PageHero.jsx";
import { findJob, openJobs } from "../data/jobs.js";
import { pageHeroes } from "../data/pageHeroes.js";
import "./CareersPage.css";

export default function CareerJobPage() {
  const { slug } = useParams();
  const job = findJob(slug);

  if (!job) return <Navigate to="/not-found" replace />;

  const acceptingApplications = openJobs.some((openJob) => openJob.slug === slug);

  return (
    <div className="react-page careers-page">
      <PageHero
        {...pageHeroes["/careers"]}
        eyebrow={job.department}
        title={job.title}
        description={job.summary}
        image="/images/photos/team.jpg"
        alt="Colleagues collaborating around a shared table"
      >
        <div className="career-hero-actions">
          {acceptingApplications ? (
            <Link className="btn btn-light" to={`/careers/apply/${job.slug}`}>
              Apply for this role <span aria-hidden="true">↗</span>
            </Link>
          ) : (
            <span className="demo-badge">Demo role · applications closed</span>
          )}
          <Link className="career-interest-link" to="/careers">
            Back to careers
          </Link>
        </div>
      </PageHero>

      <section className="career-job-detail">
        <div className="container career-detail-layout">
          <article>
            {job.demo && (
              <p className="career-demo-notice">
                Demonstration listing only. This is not a real vacancy and
                Trezeal is not accepting applications for this role.
              </p>
            )}
            <h2>About the role</h2>
            {job.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>What you might work on</h2>
            <ul>
              {job.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
            <h2>Skills and experience</h2>
            <ul>
              {job.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </article>
          <aside className="career-detail-card">
            <h2>Role details</h2>
            <dl>
              <div>
                <dt>Department</dt>
                <dd>{job.department}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{job.location}</dd>
              </div>
              <div>
                <dt>Employment</dt>
                <dd>{job.employmentType}</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>{job.experience}</dd>
              </div>
              <div>
                <dt>Posted</dt>
                <dd>{job.postedDate}</dd>
              </div>
              <div>
                <dt>Application deadline</dt>
                <dd>{job.deadline}</dd>
              </div>
            </dl>
            {acceptingApplications && (
              <Link className="btn btn-dark" to={`/careers/apply/${job.slug}`}>
                Apply now <span aria-hidden="true">↗</span>
              </Link>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
