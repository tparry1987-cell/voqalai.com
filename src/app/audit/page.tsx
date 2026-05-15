"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const auditSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Voqal AI Opportunity Audit",
    "description": "Paid AI consulting audit for UK and US businesses. We diagnose AI opportunities, quantify the ROI, and deliver a slide-deck Opportunities Report. Standard Audit at £497; Strategic AI Audit for larger or multi-site operations is scoped and quoted after a short intake.",
    "provider": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United States" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Audit Plans",
      "itemListElement": [
        { "@type": "Offer", "name": "Standard Audit", "description": "60-minute audit call, slide-deck Opportunities Report with 3-5 AI tool recommendations and ROI numbers, 30-minute live presentation. Delivered within 7 working days.", "price": "497", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/audit" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://voqalai.com/" },
      { "@type": "ListItem", "position": 2, "name": "Audit", "item": "https://voqalai.com/audit" }
    ]
  }
];

type AuditTier = {
  name: string;
  price: string;
  interval: string;
  byline: string;
  features: string[];
  delivery: string;
  featured: boolean;
  tag?: string;
  ctaLabel: string;
  ctaHref: string;
};

const auditTiers: AuditTier[] = [
  {
    name: "Standard Audit",
    price: "£497",
    interval: "one-off",
    byline: "For owner-led businesses running it themselves",
    features: [
      "15-minute discovery call",
      "Pre-audit intake form (10 questions)",
      "60-minute audit call with a senior advisor",
      "Slide-deck Opportunities Report — 3 to 5 AI recommendations",
      "Quantified ROI: hours saved + £ saved per year",
      "90-day implementation roadmap",
      "30-minute live presentation",
    ],
    delivery: "Delivered within 7 working days",
    featured: true,
    tag: "Most chosen",
    ctaLabel: "Book the discovery call",
    ctaHref: "/book",
  },
  {
    name: "Strategic AI Audit",
    price: "Bespoke",
    interval: "scoped to your business",
    byline: "For larger teams, multiple sites, or complex operations",
    features: [
      "Multi-day engagement (or one full day on-site)",
      "Stakeholder interviews across departments",
      "Process mapping — before/after workflow diagrams",
      "Custom mini PoC built for your highest-ROI opportunity",
      "Quarterly check-ins for 6 months post-delivery",
      "Direct line to a Voqal partner, not a junior advisor",
    ],
    delivery: "Scoped and quoted within 2 working days",
    featured: false,
    ctaLabel: "Tell us about your business",
    ctaHref: "/audit/enquire",
  },
];

const stages = [
  { n: "01", t: "Discovery call", b: "15 minutes. We get to know your business, explain the audit process, and book the audit call live on the call." },
  { n: "02", t: "Intake form", b: "10 questions. Tells us how your business operates so we don't burn audit time on basics." },
  { n: "03", t: "Audit call", b: "60 minutes. We surface 3 to 5 specific opportunities and quantify the cost of each pain point in £." },
  { n: "04", t: "Opportunities Report", b: "Polished slide deck. Diagnosis, opportunities, business case, and a 90-day roadmap. Delivered within 7 working days." },
  { n: "05", t: "Live presentation", b: "30 minutes. We walk you through the findings, answer questions, and discuss next steps. You keep the report regardless." },
];

const faqs = [
  { q: "Why pay for an audit when I can just book a free demo?", a: "The free demo shows you what a Voqal AI receptionist can do. The audit goes wider — we look across the whole business for the 3 to 5 best AI opportunities, quantify the ROI for each, and give you a written roadmap. Most clients use the audit to decide whether to invest £5k, £20k, or £100k in AI over the next year." },
  { q: "What if you don't find anything worth implementing?", a: "Hasn't happened yet. Every business we've audited has at least one task or workflow where AI saves measurable time. If we genuinely find nothing, we refund the fee — but we've never had to." },
  { q: "Do I have to use Voqal to implement what you recommend?", a: "No. The Opportunities Report is yours. Most clients move forward with us for the voice agent piece because that's our specialty, but the rest of the recommendations are vendor-agnostic. We tell you what to build, not who has to build it." },
  { q: "Who runs the audit?", a: "Tom Parry (Founder & CEO) for UK warm-network audits. Adrian Wilkinson (Strategic Partner) for enterprise and Reciprocal-tier engagements. Charlie Todd (Co-Founder) for UAE and international audits." },
  { q: "How quickly can I book?", a: "Discovery call within 24 hours. Audit call within 7 working days of the discovery call. Report delivered within 7 working days of the audit call. Total: ~2 weeks from first email to Opportunities Report in your hands." },
  { q: "Can the audit cost be credited against an implementation?", a: "Yes. If you move forward with a Voqal build or retainer within 30 days of the audit, your audit fee is credited 100% against your first invoice — whether you paid the £497 Standard fee or a scoped Strategic fee." },
];

export default function AuditPage() {
  return (
    <>
      {auditSchema.map((data, i) => (
        <script key={`audit-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="section-label">AI Opportunity Audit</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", marginBottom: "1.25rem", lineHeight: 1.05 }}>
              Find the AI <span className="italic-accent">opportunities</span> hiding inside your business.
            </h1>
            <p className="body-text" style={{ maxWidth: 580, margin: "0 auto" }}>
              A senior Voqal advisor sits with you, maps where AI saves time and money, and writes it all up in a slide-deck report with the ROI numbers attached. From £497.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
              <Link href="/book" className="btn">Book the discovery call</Link>
              <Link href="#how-it-works" className="btn-outline">How it works</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What you get */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">What you walk away with</span>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
            A written plan, <span className="italic-accent">not a sales pitch.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
            Every audit produces the same artefact: a 10-15 slide Opportunities Report with the diagnosis, the recommendations, the costed business case, and a 90-day roadmap. You own it. You can implement with us, with someone else, or in-house.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "3.5rem", maxWidth: 900, marginInline: "auto", textAlign: "left" }}>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, marginBottom: "0.85rem" }}>The Diagnosis</div>
              <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>The top 3-5 pain points in your business, with the £ cost of each one quantified using your actual hours and rates — not hypothetical industry averages.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, marginBottom: "0.85rem" }}>The Opportunities</div>
              <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>3 to 5 specific AI tools or workflows that solve those pain points. Each one shows before/after, implementation effort, and annual savings.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, marginBottom: "0.85rem" }}>The Business Case</div>
              <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>What your business looks like in 90 days if you implement what we recommend. Total annual savings, ROI multiplier, and a phased timeline.</p>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, marginBottom: "0.85rem" }}>The Roadmap</div>
              <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>Specific next actions, who does what, and the order to implement. Vendor-agnostic — you decide who builds what.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">How it works</span>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
            From first email to written plan in <span className="italic-accent">two weeks.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6" style={{ marginTop: "3rem", maxWidth: 1100, marginInline: "auto", textAlign: "left" }}>
            {stages.map((s) => (
              <div key={s.n} style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "1.75rem", color: "var(--accent)", lineHeight: 1, marginBottom: "0.75rem" }}>{s.n}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#111", marginBottom: "0.5rem" }}>{s.t}</div>
                <div style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.55 }}>{s.b}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Pricing</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
              Pick the tier that <span className="italic-accent">fits the decision.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 600, margin: "0 auto" }}>
              Both tiers produce the same Opportunities Report. The Strategic tier adds stakeholder interviews, process mapping, a custom mini PoC, and ongoing quarterly check-ins.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid gap-5" style={{ marginTop: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", maxWidth: 900, marginInline: "auto" }}>
            {auditTiers.map((t) => (
              <div key={t.name} className={`pricing-card ${t.featured ? "featured" : ""}`} style={{ position: "relative" }}>
                {t.featured && t.tag && (
                  <span style={{ position: "absolute", top: -12, left: 20, background: "var(--accent)", color: "#fff", padding: "0.3rem 0.85rem", borderRadius: 999, fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>{t.tag}</span>
                )}
                <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, marginBottom: "0.85rem" }}>{t.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "0.25rem" }}>
                  <span className="italic-accent" style={{ fontSize: "2.75rem", lineHeight: 1, color: "#111" }}>{t.price}</span>
                  <span style={{ fontSize: "0.85rem", color: "#888" }}>{t.interval}</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#888", marginBottom: "1.5rem" }}>{t.byline}</div>
                <ul style={{ listStyle: "none", padding: 0, flex: 1, marginBottom: "1.5rem" }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ padding: "0.55rem 0", fontSize: "0.9rem", color: "#333", borderBottom: "1px solid var(--border-subtle)", display: "flex", gap: "0.5rem" }}>
                      <span style={{ color: "var(--accent)", marginTop: "1px" }}>&middot;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li style={{ padding: "0.55rem 0", fontSize: "0.75rem", color: "#999", display: "flex", justifyContent: "space-between" }}>
                    <span>Delivery</span>
                    <span>{t.delivery}</span>
                  </li>
                </ul>
                <Link href={t.ctaHref} className={t.featured ? "btn" : "btn-outline"} style={{ textAlign: "center", display: "block" }}>
                  {t.ctaLabel}
                </Link>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#888", textAlign: "center", maxWidth: 720, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--accent)", fontWeight: 500 }}>100% credit toward implementation.</strong> If you move forward with a Voqal build or retainer within 30 days of the audit, your audit fee is credited in full against your first invoice.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Common questions</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1rem" }}>
              The honest <span className="italic-accent">answers.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ maxWidth: 760, margin: "3rem auto 0" }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border-subtle)", padding: "1.25rem 0" }}>
                <summary style={{ cursor: "pointer", fontSize: "1rem", fontWeight: 500, color: "#111", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}
                  <span style={{ color: "var(--accent)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: "1.5rem" }}>+</span>
                </summary>
                <p style={{ marginTop: "0.85rem", fontSize: "0.95rem", color: "#444", lineHeight: 1.65 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.5rem", maxWidth: 720, margin: "0 auto 1.5rem" }}>
            Stop guessing where AI fits. <span className="italic-accent">Find out.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 580, margin: "0 auto 2rem" }}>
            A 15-minute discovery call costs you nothing. The audit itself starts at £497 — credited in full if you implement with us.
          </p>
          <Link href="/book" className="btn">Book the discovery call</Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
