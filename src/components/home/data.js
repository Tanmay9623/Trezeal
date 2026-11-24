export const photos = {
  hero: [
    "photo-1497366754035-f200968a6e72",
    "photo-1524758631624-e2822e304c36",
    "photo-1497366811353-6870744d04b2",
  ],
  about: "photo-1522071820081-009f0129c71c",
  band: "photo-1497366216548-37526070297c",
  students: "photo-1522202176988-66273c2fd55f",
};

export const studentSectionContent = {
  eyebrow: "STUDENT DEVELOPMENT",
  title: "Learn skills.",
  emphasis: "Build confidence.",
  description:
    "Move beyond tutorials with practical learning, project mentorship and career preparation designed for students and freshers.",
  linkLabel: "Explore student guidance",
  imageAlt: "Students collaborating around a table",
  videoLabel: "Build your skills with purpose",
  videoCategory: "STUDENT SUPPORT",
};

export const image = (id, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
