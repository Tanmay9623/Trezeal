export const blogCategories = [
  "Web Development",
  "Artificial Intelligence",
  "Generative AI",
  "Software Engineering",
  "Technology Trends",
  "Business & Innovation",
  "Career & Learning",
];

export const blogPresentation = {
  "javascript-foundations-practice-roadmap": {
    title: "A practical JavaScript foundations roadmap for beginners",
    description:
      "A project-led path through the JavaScript concepts that make everyday web interfaces work.",
    category: "Web Development",
    coverImage: "/images/photos/technology.jpg",
    coverAlt: "A laptop displaying software code on a bright desk",
    author: "Trezeal Editorial",
    publishedAt: null,
    featured: true,
  },
  "full-stack-portfolio-project-that-shows-your-thinking": {
    title: "Build a full-stack portfolio project that shows your thinking",
    description:
      "Plan a manageable application that demonstrates decisions, reliability and communication—not just a screenshot.",
    category: "Software Engineering",
    coverImage: "/images/photos/creative.jpg",
    coverAlt: "A creative team reviewing a digital project together",
    author: "Trezeal Editorial",
    publishedAt: null,
  },
  "fresher-interview-preparation-plan": {
    title: "A practical interview-preparation plan for freshers",
    description:
      "Organize role research, technical practice, project explanations and mock interviews into repeatable preparation.",
    category: "Career & Learning",
    coverImage: "/images/photos/learning.jpg",
    coverAlt: "Learners collaborating around a laptop",
    author: "Trezeal Editorial",
    publishedAt: null,
  },
  "business-process-automation-planning-guide": {
    title: "A practical guide to planning business process automation",
    description:
      "Map the work, assess exceptions and choose an automation approach that teams can operate responsibly.",
    category: "Business & Innovation",
    coverImage: "/images/photos/workspace.jpg",
    coverAlt: "A bright, glass-walled workspace",
    author: "Trezeal Editorial",
    publishedAt: null,
  },
  "small-business-website-planning-checklist": {
    title: "A small business website planning checklist that starts with customers",
    description:
      "Plan a clear website structure, useful content, accessible interactions and a launch process before choosing a theme.",
    category: "Technology Trends",
    coverImage: "/images/photos/resources.jpg",
    coverAlt: "A planner and notes arranged on a desk",
    author: "Trezeal Editorial",
    publishedAt: null,
  },
};

export const getArticlePresentation = (article) =>
  blogPresentation[article.slug] ?? {
    category: article.category,
    coverImage: "/images/photos/workspace.jpg",
    coverAlt: "Trezeal editorial workspace",
    author: "Trezeal Editorial",
    publishedAt: null,
  };

export const getReadingTime = (article) => {
  const words = article.sections
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .trim()
    .split(/\s+/).length;

  return Math.max(1, Math.ceil(words / 220));
};

export const formatPublishedDate = (publishedAt) =>
  publishedAt
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(`${publishedAt}T00:00:00`))
    : "Date not set";
