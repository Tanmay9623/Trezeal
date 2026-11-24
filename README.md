# Trezeal website

Responsive React website for Trezeal, a technology and digital solutions
business serving businesses, students and freelance clients. The site uses the
existing React 19 and Vite stack, React Router and a local CSS design system.

## Run locally

```bash
npm install
npm run dev
```

Quality checks and production preview:

```bash
npm run lint
npm run build
npm run preview
```

## Configure integrations

Copy `.env.example` to `.env` for local work, or add the variables in the
deployment provider's environment settings:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
VITE_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-newsletter-form-id
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- `VITE_FORMSPREE_ENDPOINT` is required to send contact form submissions. The
  app explicitly tells visitors when the form is not configured. Only use a
  public endpoint intended for browser submissions; never put credentials or
  private keys in a `VITE_` variable.
- `VITE_NEWSLETTER_ENDPOINT` is required to deliver newsletter subscriptions.
  The footer reports when it is unconfigured and does not claim an address was
  subscribed.
- `VITE_GA_MEASUREMENT_ID` is optional. Analytics is loaded only after
  visitors accept analytics in the cookie banner.
- Do not commit `.env` files or private credentials.

## Pages

The site includes home, about, services and service-detail pages, student
development, interview preparation, freelance studio, projects, pricing,
careers and partners, a five-article blog, contact, grouped FAQ, privacy,
terms, refund and cancellation, shipping, cookie and disclaimer pages, plus a
custom 404 experience.

## Deployment

The built `dist/` folder is static and can be deployed to Netlify or Vercel.
`public/_redirects` and `vercel.json` provide history fallbacks so nested
React Router URLs continue to work after refresh. Configure the environment
variables above in the hosting dashboard, deploy, then verify deep links,
form delivery, consent behavior, `robots.txt` and `sitemap.xml` on the live
domain.

## Content and assets

- Route titles, descriptions, canonicals, Open Graph metadata and JSON-LD are
  managed by `src/components/common/SeoMeta.jsx` and `src/data/seo.js`.
- The site uses local SVG artwork in `public/images/`; it does not depend on
  remote stock-image URLs.
- Service and About page content is in `src/data/pageContent.js` and
  `src/data/expandedContent.js`.
- Blog guides and project details are in `src/data/articles.js` and
  `src/data/projects.js`.
- Legal pages are full-length drafts that need review for the actual operating
  entity, providers and applicable jurisdiction before launch.
- Replace the visible testimonial placeholders with approved, verifiable
  testimonials or remove them.
- `docs/EMAIL_SETUP_AND_LAUNCH.md` contains email, DNS, SEO keyword and launch
  instructions. `docs/IMAGE_GUIDE.md` lists recommended photo dimensions and
  alt-text guidance.
