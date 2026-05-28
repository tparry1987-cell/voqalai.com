import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata = {
  title: "AI Receptionist Manchester | Voqal AI",
  description:
    "AI receptionist for Manchester businesses. 24/7 call answering, appointment booking, and missed-call follow-up. Operating from Manchester, serving Greater Manchester and the North West. From £197/month.",
  alternates: { canonical: "https://voqalai.com/manchester/" },
  openGraph: {
    title: "AI Receptionist Manchester | Voqal AI",
    description:
      "AI receptionist for Manchester businesses. 24/7 call answering, appointment booking, missed-call follow-up. From £197/month.",
    url: "https://voqalai.com/manchester/",
    type: "website",
  },
};

const BOROUGHS = [
  "Manchester",
  "Salford",
  "Stockport",
  "Trafford",
  "Tameside",
  "Oldham",
  "Rochdale",
  "Bury",
  "Bolton",
  "Wigan",
];

const INDUSTRY_LINKS = [
  { label: "Dental practices", href: "/ai-receptionist-dental-practices" },
  { label: "Medical clinics", href: "/ai-receptionist-medical-practices" },
  { label: "Law firms", href: "/ai-receptionist-law-firms" },
  { label: "Estate agents", href: "/ai-receptionist-estate-agents" },
  { label: "Trades & home services", href: "/ai-receptionist-tradesmen" },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Are you actually based in Manchester?",
    a: "Yes. Voqal AI operates from Manchester and serves businesses across Greater Manchester, the North West, and the wider UK remotely. Our registered office is in London for legal purposes, but the people and the work are in Manchester.",
  },
  {
    q: "What does an AI receptionist cost?",
    a: "From £197 per month. No long contracts. The first month covers setup, voice tuning, and full integration with your calendar and CRM. We build a personalised demo within 24 hours of your enquiry.",
  },
  {
    q: "Will the AI sound robotic on the phone?",
    a: "No. Modern voice AI sounds natural — most callers can't tell it's not human in the first 30 seconds. You can try the live demo on our homepage before you book anything.",
  },
  {
    q: "Can it book appointments straight into my calendar?",
    a: "Yes. It works with Google Calendar, Outlook, Cal.com, and most industry booking systems. It checks availability in real time so it can't double-book.",
  },
  {
    q: "What happens when the AI can't handle a call?",
    a: "It transfers the call to you, to a designated team member, or takes a detailed message and texts it through immediately. You decide the rules at setup. The AI never bluffs an answer — if it doesn't know, it hands over.",
  },
  {
    q: "Is it GDPR compliant?",
    a: "Yes. We're ICO registered. All call data is processed in the UK. We have a full DPA, ROPA, and DPIA available on request.",
  },
  {
    q: "Does it work after-hours and at weekends?",
    a: "Yes — that's the most common reason businesses sign up. Evening callers, Saturday-morning emergencies, and Sunday enquiries all get answered. The AI works 24/7 with no rota and no overtime.",
  },
  {
    q: "Do you work with one-person businesses?",
    a: "Yes. Sole traders and one-person operations are our most common customer. Plumbers, electricians, and other on-the-tools tradespeople who can't answer the phone while they're working.",
  },
];

export default function ManchesterPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Receptionist in Manchester",
    provider: {
      "@type": "Organization",
      name: "Voqal AI",
      url: "https://voqalai.com",
      telephone: "+44 20 3996 0962",
      email: "contact@voqalai.com",
    },
    description:
      "24/7 AI voice receptionist for Manchester businesses. Handles call answering, appointment booking, lead qualification, and missed-call follow-up by SMS.",
    areaServed: [
      { "@type": "City", name: "Manchester", containedInPlace: { "@type": "Country", name: "United Kingdom" } },
      { "@type": "AdministrativeArea", name: "Greater Manchester" },
      ...BOROUGHS.filter((b) => b !== "Manchester").map((name) => ({ "@type": "City", name })),
    ],
    serviceType: "AI Voice Receptionist",
    offers: { "@type": "Offer", priceCurrency: "GBP", price: "197", priceSpecification: { "@type": "UnitPriceSpecification", price: "197", priceCurrency: "GBP", unitText: "MONTH" } },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voqalai.com/" },
      { "@type": "ListItem", position: 2, name: "Manchester", item: "https://voqalai.com/manchester/" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Manchester · Greater Manchester · North West</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
              AI receptionist for <span className="italic-accent">Manchester</span> businesses.
            </h1>
            <p className="body-text" style={{ maxWidth: 740, margin: "0 auto" }}>
              We answer your calls 24/7, book straight into your calendar, and text back every missed caller before they ring the next firm on the list. Built and run from Manchester. Serving the ten boroughs of Greater Manchester and businesses across the UK.
            </p>
            <div style={{ marginTop: "3rem", display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/book" className="hero-cta btn-accent" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600 }}>
                <Phone className="w-5 h-5" /> Book a free demo
              </Link>
              <a href="tel:+442039960962" className="hero-cta" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600, border: "1px solid rgba(0,0,0,0.2)" }}>
                Speak to the AI · 020 3996 0962
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Who this is for — Manchester verticals */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 3rem" }}>
            <span className="section-label">Who we work with</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1.5rem" }}>
              Manchester businesses that <span className="italic-accent">can't afford to miss the phone.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="body-text" style={{ margin: 0 }}>
              Plumbers in Trafford taking emergency calls at 8pm.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              Dental practices in Didsbury fielding new patient enquiries while the receptionist's at lunch.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              Restaurants in Ancoats and the Northern Quarter losing covers to unanswered Friday-night bookings.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              Accountancy firms around Spinningfields handling January overflow without temp staff.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              Electricians, locksmiths, heating engineers, opticians, beauty salons, vets, law firms, estate agents.
            </p>
            <p className="body-text" style={{ margin: 0 }}>
              Anyone whose next sale goes to the next number the caller tries.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Capabilities</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "4rem" }}>
              A complete <span className="italic-accent">front desk.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card reveal">
              <div className="icon">I.</div>
              <h3>24/7 call answering</h3>
              <p>The AI picks up in under two seconds, every time. Evenings, weekends, bank holidays — the same response, the same voice, the same brand.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="icon">II.</div>
              <h3>Appointment booking</h3>
              <p>Checks your live calendar — Google, Outlook, Cal.com, or your industry booking system — and books straight in. No double bookings. No call-backs to confirm.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="icon">III.</div>
              <h3>Urgent call routing</h3>
              <p>Burst pipe, after-hours pain, electrical fault, emergency callout. The AI recognises urgency and transfers straight to your mobile. Routine calls get handled.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.3s" }}>
              <div className="icon">IV.</div>
              <h3>Missed-call follow-up</h3>
              <p>Every unanswered ring triggers an instant SMS back to the caller. "Sorry we missed you — can we help?" Most go on to book. Small change, big difference.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.4s" }}>
              <div className="icon">V.</div>
              <h3>Lead reactivation by SMS</h3>
              <p>We text your old leads on your behalf, re-open conversations that went quiet, and book the warm replies into your diary. £50 per booked appointment. Pay only for results.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.5s" }}>
              <div className="icon">VI.</div>
              <h3>CRM and transcript logging</h3>
              <p>Every call lands in your CRM with a full transcript. No paper notes, no missed details, no admin time at the end of the day.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Service area */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <span className="section-label">Service area</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1.5rem" }}>
              All ten boroughs of <span className="italic-accent">Greater Manchester.</span>
            </h2>
            <p className="body-text">
              We onboard remotely — no site visits, no engineer in a van. The AI runs on your existing phone number and integrates with the tools you already use. Setup takes under a week from anywhere in the region.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: "0.75rem",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            {BOROUGHS.map((borough) => (
              <div
                key={borough}
                style={{
                  padding: "0.85rem 1rem",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: 10,
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#1a1a1a",
                  background: "rgba(255,255,255,0.5)",
                }}
              >
                {borough}
              </div>
            ))}
          </div>

          <p className="body-text" style={{ textAlign: "center", marginTop: "2rem", fontSize: 14, color: "#666", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            We also work with businesses in Liverpool, Leeds, Sheffield, Stoke-on-Trent, and Warrington. The service runs remotely — your location doesn't change how it works.
          </p>
        </Reveal>
      </section>

      {/* Industries */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 3rem" }}>
            <span className="section-label">By industry</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1.5rem" }}>
              Tuned for <span className="italic-accent">your sector.</span>
            </h2>
            <p className="body-text">
              Each setup is voice-tuned and script-tuned for the kind of calls you actually get. A dental practice doesn't sound like a plumber. A law firm doesn't sound like a restaurant.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              maxWidth: 960,
              margin: "0 auto",
            }}
          >
            {INDUSTRY_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  padding: "1.25rem 1.5rem",
                  border: "1px solid rgba(0,0,0,0.15)",
                  borderRadius: 12,
                  textDecoration: "none",
                  color: "#1a1a1a",
                  background: "#fff",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 3rem" }}>
            <span className="section-label">FAQ</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", marginBottom: "1rem" }}>
              Common <span className="italic-accent">questions.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.12)",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#1a1a1a",
                    listStyle: "none",
                  }}
                >
                  {q}
                </summary>
                <p style={{ marginTop: "0.75rem", fontSize: 15, lineHeight: 1.6, color: "#3a3a3a" }}>{a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Demo in <span className="italic-accent">24 hours.</span>
            </h2>
            <p className="body-text" style={{ marginBottom: "2.5rem" }}>
              Tell us what your business does. We build a working AI receptionist trained on your services, your voice, and your booking flow — and send you the link to call it. No commitment.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/book"
                className="hero-cta btn-accent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2.5rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                }}
              >
                <Phone className="w-5 h-5" /> Book a free demo
              </Link>
              <Link
                href="/pricing"
                className="hero-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "1rem 2.5rem",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                See pricing
              </Link>
            </div>
            <p style={{ marginTop: "2rem", fontSize: 14, color: "#666" }}>
              Voqal AI · Operating from Manchester, United Kingdom · 020 3996 0962 · contact@voqalai.com
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
