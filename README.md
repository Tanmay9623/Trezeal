# Trezeal website

Responsive React website for Trezeal, a technology and digital solutions
business serving businesses, students and freelance clients. The site uses the
existing React 19 and Vite stack, React Router and a local CSS design system.

## Run locally

```bash
npm install
npx netlify-cli dev
```

Use Netlify CLI for local development so the contact form can reach its
function. Add the SMTP values from `.env.example` to your ignored local `.env`
file before testing email delivery, and set local `SITE_ORIGIN` to
`http://localhost:8888`.

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
SITE_ORIGIN=https://trezeal.com
SMTP_HOST=your-zoho-smtp-host
SMTP_PORT=465
SMTP_USER=info@trezeal.com
SMTP_PASS=your-zoho-app-password
CONTACT_TO_EMAIL=info@trezeal.com
CAREERS_EMAIL=hello@trezeal.com
VITE_NEWSLETTER_ENDPOINT=https://formspree.io/f/your-newsletter-form-id
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- `SITE_ORIGIN`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` and
  `CONTACT_TO_EMAIL` configure contact delivery; `CAREERS_EMAIL` receives
  candidate applications. Set them in
  Netlify's function environment, not in browser-exposed `VITE_` variables.
  Use the SMTP host shown for your Zoho account's data center and an
  app-specific password. The sender is the authenticated mailbox and replies
  go to the visitor.
- `VITE_NEWSLETTER_ENDPOINT` is required to deliver newsletter subscriptions.
  The footer reports when it is unconfigured and does not claim an address was
  subscribed.
- `VITE_GA_MEASUREMENT_ID` is optional. Analytics is loaded only after
  visitors accept analytics in the cookie banner.
- Careers job examples and blog articles are maintained in source files.
  Demo roles are not real vacancies. Applications and resumes are emailed to
  `CAREERS_EMAIL`; they are not saved to a database or candidate portal.
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
domain. SMTP contact delivery requires the Netlify Functions runtime; it will
not work on a static-only host.

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
