export const jobs = [
  {
    slug: "frontend-engineer-demo",
    title: "Frontend Engineer",
    department: "Software Engineering",
    location: "Pune",
    employmentType: "Full-time",
    experience: "1–3 years",
    skills: ["React", "JavaScript", "HTML", "CSS", "Accessibility"],
    summary:
      "A sample role describing how a frontend engineer might contribute to accessible, responsive web products.",
    postedDate: "Demo listing",
    deadline: "Demo listing",
    demo: true,
    description: [
      "This sample role is provided to demonstrate the careers experience. It is not an approved or active vacancy, and applications for this role are not being accepted.",
      "A future role may involve working with product and design partners to turn clear requirements into maintainable interface components and thoughtful user experiences.",
    ],
    responsibilities: [
      "Build accessible, responsive interfaces with the product team.",
      "Review code and share implementation decisions clearly.",
      "Test common user flows and help resolve quality issues.",
    ],
    requirements: [
      "Practical knowledge of JavaScript and a modern UI framework.",
      "Understanding of semantic HTML, responsive CSS and accessibility.",
      "A portfolio or project examples that you are authorized to share.",
    ],
  },
  {
    slug: "ai-workflow-associate-demo",
    title: "AI & Workflow Associate",
    department: "AI and Automation",
    location: "Remote",
    employmentType: "Internship",
    experience: "Fresher / student",
    skills: ["Python", "APIs", "Workflow mapping", "Documentation"],
    summary:
      "A sample learning-focused role exploring responsible AI integrations and workflow automation.",
    postedDate: "Demo listing",
    deadline: "Demo listing",
    demo: true,
    description: [
      "This sample role is illustrative only. It is not a real opening, and no internship or work placement is currently being offered through this listing.",
      "A future opportunity in this area could combine research, small technical prototypes, careful testing and clear documentation of system limitations.",
    ],
    responsibilities: [
      "Map a workflow with the people who use it.",
      "Prototype integrations using approved data and APIs.",
      "Document failure cases, review points and safe fallbacks.",
    ],
    requirements: [
      "Interest in programming, automation or applied AI.",
      "Careful communication about uncertainty and limitations.",
      "Willingness to learn through feedback and small experiments.",
    ],
  },
  {
    slug: "learning-program-coordinator-demo",
    title: "Learning Program Coordinator",
    department: "Career Development",
    location: "Hybrid",
    employmentType: "Part-time",
    experience: "Entry level",
    skills: ["Communication", "Planning", "Mentoring", "Writing"],
    summary:
      "A sample role focused on coordinating practical learning activities and learner support.",
    postedDate: "Demo listing",
    deadline: "Demo listing",
    demo: true,
    description: [
      "This sample listing is not an approved vacancy. It is included to show the kinds of details a real opportunity page would contain.",
      "A future role could support learning schedules, project feedback and clear communication between learners and mentors.",
    ],
    responsibilities: [
      "Coordinate schedules and learning resources.",
      "Help learners understand project milestones and feedback.",
      "Keep program information organized and up to date.",
    ],
    requirements: [
      "Clear written and spoken communication.",
      "Interest in technology education or career development.",
      "Reliable organization and respectful collaboration.",
    ],
  },
];

export const openJobs = jobs.filter(
  (job) => !job.demo && job.status === "open",
);

export const findJob = (slug) => jobs.find((job) => job.slug === slug);
