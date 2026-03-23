# Voqal AI — Website Architecture

## Overview

voqalai.com is a static HTML marketing site hosted on Netlify. No build step, no bundler, no framework — pure HTML and CSS.

- **GitHub:** tparry1987-cell/voqalai.com
- **Netlify site ID:** 0d7b736b-3851-4faa-a104-a599a769a906
- **Domain:** voqalai.com (arkaisolutions.net redirects to it)
- **Deploys:** Automatic on push to GitHub main branch

---

## Complete Page Inventory (50+ HTML files)

### Core Pages (10)
| Page | URL | Purpose |
|------|-----|---------|
| index.html | / | Homepage — hero, services, protocol, FAQ, demo form |
| pricing.html | /pricing | All pricing tiers |
| about.html | /about | Company, team, registration |
| lead-reactivation.html | /lead-reactivation | Lead reactivation service + enquiry form |
| locations.html | /locations | 40+ UK & US service areas |
| integrations.html | /integrations | 13 integration partners overview |
| thank-you.html | /thank-you | Post-form confirmation + Cal.com booking |
| privacy.html | /privacy | Privacy policy |
| terms.html | /terms | Terms of service |
| 404.html | /404 | Custom not-found page |

### Industry Pages (6)
| Page | Industry |
|------|----------|
| ai-receptionist-dental-practices.html | Dental |
| ai-receptionist-medical-practices.html | Medical/GP |
| ai-receptionist-law-firms.html | Legal |
| ai-receptionist-estate-agents.html | Property |
| ai-receptionist-accountants.html | Accounting |
| ai-receptionist-tradesmen.html | Trades/Home Services |

### Competitor Comparison Pages (11)
| Page | Location |
|------|----------|
| compare/index.html | Comparison hub |
| compare/voqal-ai-vs-moneypenny.html | vs Moneypenny |
| compare/voqal-ai-vs-smith-ai.html | vs Smith AI |
| compare/voqal-ai-vs-air-ai.html | vs Air AI |
| compare/voqal-ai-vs-answerconnect.html | vs AnswerConnect |
| compare/voqal-ai-vs-bland-ai.html | vs Bland AI |
| compare/voqal-ai-vs-my-ai-front-desk.html | vs My AI Front Desk |
| compare/voqal-ai-vs-receptionhq.html | vs ReceptionHQ |
| compare/voqal-ai-vs-rosie-ai.html | vs Rosie AI |
| compare/voqal-ai-vs-ruby-receptionists.html | vs Ruby Receptionists |
| compare/voqal-ai-vs-synthflow.html | vs Synthflow |

### Integration Pages (13)
All in `integrations/` directory: cal-com, calendly, cliniko, clio, dentally, google-calendar, hubspot, microsoft-outlook, pipedrive, salesforce, xero, zapier, zoho-crm

### Blog (4)
| Page | Topic |
|------|-------|
| blog/index.html | Blog hub |
| blog/ai-vs-human-receptionist-uk.html | AI vs human comparison |
| blog/how-much-does-virtual-receptionist-cost-uk.html | UK pricing guide |
| blog/receptionist-costs-25k-ai-costs-197.html | ROI breakdown |

### Guides (5)
| Page | Topic |
|------|-------|
| guides/best-ai-receptionist-uk-2026.html | Buying guide |
| guides/how-to-set-up-ai-receptionist.html | AI receptionist setup guide (HowTo schema) |
| guides/how-to-integrate-voqal-with-your-crm.html | CRM integration guide (HowTo schema) |
| guides/curb-appeal-voice-cloning-prep.html | Client voice cloning prep |
| guides/voice-cloning-client-prep.html | Voice cloning guide |

### Demos (1)
| Page | Client |
|------|--------|
| demos/curb-appeal.html | Curb Appeal Photography (Atlanta) |

### Other
- brand-facts.html — Structured data / brand schema
- google86faee6b81056abd.html — Google Search Console verification

---

## Tech Stack

| Component | Detail |
|-----------|--------|
| CSS | Single file: css/style.css |
| JS | All inline (no external JS files) |
| Fonts | Self-hosted in /fonts/ (Saira, Instrument Serif) |
| Images | /images/ directory |
| Forms | Netlify Forms (demo-request, lead-reactivation-enquiry) |
| Chat | Retell AI widget (all pages) |
| Booking | Cal.com embed (index, pricing, lead-reactivation, thank-you) |
| Analytics | GTM (configured) |
| Search | Google Search Console verified |

## Design System (CSS Custom Properties)

| Variable | Value | Purpose |
|----------|-------|---------|
| --accent | #db7c54 | Primary accent (warm copper) |
| --bg-dark | #070908 | Dark background |
| --text-primary | #f8f9fa | Primary text |
| --font-sans | Saira | Body/UI font |
| --font-serif | Instrument Serif | Editorial headings |

**Visual style:** Editorial dark aesthetic with fixed forest background image, gradient overlays, scroll-reveal animations.

## Key Patterns
- No build step — edit HTML/CSS directly, push to GitHub, Netlify auto-deploys
- Blog pages use simplified header/footer with `../` relative paths
- Industry pages follow the dental page template structure
- Cookie consent: localStorage key `cookieConsent`
- Exit popup: sessionStorage key `exitPopupShown`
- GTM events: `form_submission`, `booking_click`, `phone_click`

## Lead Capture
1. **Demo form** (index.html) — Name, Email, Company, Phone, Message → Netlify → thank-you.html
2. **Lead reactivation form** (lead-reactivation.html) — Same fields → Netlify → thank-you.html
3. **Cal.com embed** (thank-you.html) — Immediate booking after form submission
4. **Phone calls** — Demo numbers on site
5. **Retell chat widget** — All pages
