# Trezeal React website

This project is the React migration target for Trezeal. Its homepage uses the
same section structure, class names, spacing, typography, colors and image-led
visual system as the original vanilla project. The original vanilla project
remains unchanged in `../leroux-vanilla-ui`.

## Run

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Stack

- React 19 and Vite
- React Router DOM for the required routes
- Tailwind CSS for the primary utility layer
- Lucide React for interface icons

Homepage sections live in individual files under `src/components/home`, with
shared image data in `src/components/home/data.js` and the site shell in
`src/components/common`. React Router supplies working route transitions
without changing the homepage composition. `src/vanilla.css` remains the
reference-compatible visual layer while the component markup is incrementally
utility-driven through Tailwind.

Route-level hero content and imagery are centralized in
`src/data/pageHeroes.js` and rendered through the reusable
`src/components/common/PageHero.jsx` component. Each hero uses a distinct
Unsplash image, descriptive alt text, responsive object-cover positioning, and
a fallback image if the primary source cannot load.

## Routes

The app includes the home, about, services and service-detail pages, students,
interview preparation, freelance, projects, resources, contact, FAQ and draft
legal routes. Unknown routes render the branded 404 experience.

Unsplash images are temporary remote sources with fallback rendering. Verify
and self-host approved images before production. Legal copy and contact details
are intentionally conservative and require confirmation.
