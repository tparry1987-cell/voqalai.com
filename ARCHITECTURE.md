# ARCHITECTURE.md -- Voqal AI Marketing Site

## Overview

voqalai.com is a static HTML marketing site for Voqal AI, a UK-based AI voice receptionist business. There is no build step, no bundler, and no framework. It is pure static HTML and CSS hosted on Netlify.

**GitHub repo:** tparry1987-cell/voqalai.com
**Netlify site ID:** 0d7b736b-3851-4faa-a104-a599a769a906
**Domain:** voqalai.com (arkaisolutions.net redirects to it)

---

## Directory Structure

```
voqalai.com/
  index.html              Homepage
  pricing.html            Pricing / packages
  about.html              About the company
  lead-reactivation.html  Lead reactivation service page
  locations.html          Service area / locations
  privacy.html            Privacy policy
  terms.html              Terms and conditions
  404.html                Custom 404 page
  thank-you.html          Post-form-submission confirmation

  css/
    style.css             Single stylesheet for all pages

  fonts/                  Self-hosted web fonts (Saira, Instrument Serif)

  images/
    hero-forest.jpg       Main background image
    avatars/              Team / testimonial avatar images
    ...                   Other site images

  blog/                   Blog pages (simplified header/footer, ../  relative paths)

  guides/                 Guide pages (setup, integration, buying guides — HowTo schema)

  _redirects              Netlify redirect rules
  netlify.toml            Netlify build configuration
  robots.txt              Search engine crawl rules
  sitemap.xml             XML sitemap

  google86faee6b81056abd.html   Google Search Console verification file
  favicon.svg / favicon.png / favicon-32.png   Favicons
```

---

## Styling

All styles live in a single file: `css/style.css`.

**Design system (CSS custom properties in `:root`):**

| Variable          | Value              | Purpose              |
|-------------------|--------------------|----------------------|
| `--accent`        | `#db7c54`          | Primary accent color |
| `--bg-dark`       | `#070908`          | Dark background      |
| `--text-primary`  | `#f8f9fa`          | Primary text color   |
| `--font-sans`     | Saira              | Body / UI font       |
| `--font-serif`    | Instrument Serif   | Editorial headings   |

**Visual style:** Editorial dark aesthetic with a fixed background image (`hero-forest.jpg`) overlaid with a gradient. Reveal-on-scroll animations throughout.

Fonts are self-hosted in `/fonts/` -- no external font CDN calls.

---

## JavaScript

All JavaScript is inline within each HTML page. There are no external JS files.

**Key inline scripts:**

- **Scroll reveal** -- IntersectionObserver-based fade/slide animations on elements with reveal classes.
- **FAQ accordion** -- Expand/collapse behaviour on FAQ sections (index, lead-reactivation).
- **Revenue calculator** -- Interactive calculator on index.html showing potential revenue impact.
- **Cookie consent** -- Banner using `localStorage` key `cookieConsent`. Currently cosmetic-only; being upgraded to gate GTM.
- **Exit popup** -- Uses `sessionStorage` key `exitPopupShown` to show once per session.
- **Retell chat widget customization** -- Overrides the default Retell floating action button with a custom chat launcher button.

---

## Integrations

### Retell AI Chat Widget
Present on ALL pages. A custom launcher button replaces Retell's default FAB.

### Cal.com
Booking embed loaded on: `index.html`, `pricing.html`, `lead-reactivation.html`.

### Google Tag Manager
Container tag `GTM-XXXXXXX` is in the markup but not yet activated (placeholder ID).

### Netlify Forms
Two forms submit to Netlify:
- `demo-request` on `index.html`
- `lead-reactivation-enquiry` on `lead-reactivation.html`

### Google Search Console
Verified via HTML file method (`google86faee6b81056abd.html` at root).

---

## Structured Data (Schema.org)

| Page                   | Schema types                     |
|------------------------|----------------------------------|
| `index.html`           | LocalBusiness, Organization, FAQPage |
| `pricing.html`         | Service, OfferCatalog            |
| `about.html`           | AboutPage                        |
| `locations.html`       | ServiceArea                      |
| `lead-reactivation.html` | FAQPage                       |
| `integrations.html`    | SoftwareApplication, CollectionPage, HowTo |
| `guides/how-to-set-up-ai-receptionist.html` | HowTo, BreadcrumbList |
| `guides/how-to-integrate-voqal-with-your-crm.html` | HowTo, BreadcrumbList |

---

## GTM DataLayer Events

The following custom events are pushed to the GTM `dataLayer`:

- `form_submission`
- `booking_click`
- `phone_click`

---

## Redirects and Routing

Handled by `_redirects` (Netlify format):

- **Old domain:** `arkaisolutions.net/*` redirects to `voqalai.com/*`
- **Old industry pages** (e.g. `/dental`, `/veterinary`) redirect to `about.html`
- **Old comparison pages** redirect to `index.html`
- **Blog catch-all:** `blog/*` redirects to the blog index (being updated)
- **404 fallback:** Unmatched routes serve `404.html`

---

## Key Patterns

- **No build step.** Edit HTML/CSS directly; push to GitHub and Netlify deploys automatically.
- **Blog pages** use a simplified header/footer and `../` relative paths for root-level resources (CSS, favicons, privacy link).
- **Industry pages** follow the dental page template structure when new ones are added.
- **Cookie consent** stores preference in `localStorage` under `cookieConsent`.
- **Exit popup** tracks display state in `sessionStorage` under `exitPopupShown`.

---

## Hosting and Deployment

- **Host:** Netlify
- **Deploys:** Automatic on push to the GitHub repo's main branch
- **Build:** None (static files served directly)
- **Config:** `netlify.toml` for any Netlify-specific build/header settings
