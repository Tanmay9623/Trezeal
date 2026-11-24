const unsplash = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=2200&q=85`;

const fallbackImage = unsplash("photo-1497366754035-f200968a6e72");

export const pageHeroes = {
  home: {
    image: unsplash("photo-1497366754035-f200968a6e72"),
    alt: "Modern technology workspace with collaborative desks",
    objectPosition: "center",
  },
  "/about": {
    eyebrow: "ABOUT TREZEAL",
    title: "Technology That Moves Ideas Forward.",
    description:
      "Trezeal is an IT services and technology consulting company serving businesses, students and freelance clients.",
    image: unsplash("photo-1521737604583-711a0cfc45dc"),
    alt: "Professional team collaborating around a table",
    objectPosition: "center 42%",
  },
  "/services": {
    eyebrow: "SERVICES",
    title: "Digital capabilities for the next stage of your work.",
    description:
      "Software, web, AI, business, design and support services shaped around real needs.",
    image: unsplash("photo-1556761175-b413da4baf72"),
    alt: "Technology team discussing a digital project",
    objectPosition: "center",
  },
  "/services/software-development": {
    eyebrow: "SOFTWARE DEVELOPMENT",
    title: "Software that fits the way you work.",
    description:
      "Custom software, full-stack applications, SaaS products, APIs and database-backed tools.",
    image: unsplash("photo-1518770660439-4636190af475"),
    alt: "Developer coding beside multiple computer screens",
    objectPosition: "center 44%",
  },
  "/services/ai-automation": {
    eyebrow: "AI & AUTOMATION",
    title: "AI with a clear purpose.",
    description:
      "Generative AI, LLM integrations, agents and workflow automation without unnecessary complexity.",
    image: unsplash("photo-1677442136019-21780ecad995"),
    alt: "Abstract artificial intelligence technology visualization",
    objectPosition: "center",
  },
  "/services/business-solutions": {
    eyebrow: "BUSINESS SOLUTIONS",
    title: "Systems that make work clearer.",
    description:
      "Automation, CRM, analytics dashboards, data intelligence and operational tools.",
    image: unsplash("photo-1556761175-5973dc0f32e7"),
    alt: "Business professionals collaborating in a bright office",
    objectPosition: "center 38%",
  },
  "/students": {
    eyebrow: "TREZEAL CAREER DEVELOPMENT",
    title: "Learn. Build. Prepare. Grow.",
    description:
      "Practical learning, project mentorship and interview preparation for students and freshers.",
    image: unsplash("photo-1523240795612-9a054b0db644"),
    alt: "Students learning together with laptops",
    objectPosition: "center 42%",
  },
  "/interview-preparation": {
    eyebrow: "INTERVIEW PREPARATION",
    title: "Prepare for the interview in front of you.",
    description:
      "Technical, HR, coding and communication practice with clear feedback.",
    image: unsplash("photo-1551836022-d5d88e9218df"),
    alt: "Professionals preparing for a focused interview meeting",
    objectPosition: "center 40%",
  },
  "/freelance": {
    eyebrow: "FREELANCE STUDIO",
    title: "Your ideas. Our technology.",
    description:
      "Websites, landing pages, e-commerce, design and custom builds.",
    image: unsplash("photo-1499750310107-5fef28a66643"),
    alt: "Creative freelancer working on a laptop",
    objectPosition: "center",
  },
  "/projects": {
    eyebrow: "PROJECTS",
    title: "Ideas made",
    emphasis: "practical.",
    description:
      "Known Trezeal project categories without invented clients, metrics or unverified links.",
    image: unsplash("photo-1460925895917-afdab827c52f"),
    alt: "Web application design displayed on a laptop",
    objectPosition: "center 45%",
  },
  "/resources": {
    eyebrow: "RESOURCES",
    title: "Learn, build and move forward.",
    description:
      "A growing resource hub for programming, interviews, resumes and career roadmaps.",
    image: unsplash("photo-1456324504439-367cee3b3c32"),
    alt: "Laptop and programming books in a learning workspace",
    objectPosition: "center 45%",
  },
  "/contact": {
    eyebrow: "CONTACT TREZEAL",
    title: "Let’s make the next step clear.",
    description:
      "Tell us about your business project, freelance requirement or career goals.",
    image: unsplash("photo-1517245386807-434b7c0a5d6b"),
    alt: "Professional office meeting and communication workspace",
    objectPosition: "center",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Useful answers,",
    emphasis: "without the jargon.",
    description:
      "Common questions about Trezeal services, projects, mentorship and preparation.",
    image: unsplash("photo-1516321318423-f06f85e504b3"),
    alt: "Person learning with a laptop in a focused workspace",
    objectPosition: "center 40%",
  },
  generic: {
    eyebrow: "TREZEAL",
    title: "Practical work.",
    emphasis: "Clear next steps.",
    description:
      "Technology, digital solutions and practical guidance from Trezeal.",
    image: fallbackImage,
    alt: "Bright collaborative technology workspace",
    objectPosition: "center",
  },
};

export { fallbackImage };
