"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const pricingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Voqal AI Receptionist",
    "description": "AI voice receptionist service for businesses worldwide. 24/7 call answering, appointment booking, lead qualification, and CRM integration.",
    "provider": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Receptionist Plans",
      "itemListElement": [
        { "@type": "Offer", "name": "Starter", "description": "200 minutes/month, 1 AI flow, 1 business phone number, basic call routing.", "price": "197", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/pricing" },
        { "@type": "Offer", "name": "Pro", "description": "500 minutes/month, full booking flow, calendar and CRM integration.", "price": "397", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/pricing" },
        { "@type": "Offer", "name": "Premium", "description": "1,000 minutes/month, multi-flow handling, advanced call routing.", "price": "697", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/pricing" },
        { "@type": "Offer", "name": "Business", "description": "2,500 minutes/month, custom multi-flow handling, priority support with dedicated channel.", "price": "997", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/pricing" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://voqalai.com/" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://voqalai.com/pricing" }
    ]
  }
];

const managedTiers = [
  { name: "Starter",  price: "£197", byline: "200 minutes / month",  features: ["1 receptionist flow", "Basic knowledge base", "1 business phone number", "Standard support"], overage: "£0.20/min" },
  { name: "Pro",      price: "£397", byline: "500 minutes / month",  features: ["Full booking flow", "Calendar & CRM integrations", "Comprehensive KB", "Standard support"], overage: "£0.18/min", featured: true },
  { name: "Premium",  price: "£697", byline: "1,000 minutes / month",features: ["Multi-flow agent", "CRM + QA monitoring", "Advanced routing", "Priority support"], overage: "£0.15/min" },
  { name: "Business", price: "£997", byline: "2,500 minutes / month",features: ["Custom multi-flow", "CRM + QA + workflows", "Advanced routing", "Dedicated channel"], overage: "£0.15/min" },
];

const buildTiers = [
  { name: "Lite",     price: "£997",   byline: "Single flow build",  features: ["1 receptionist flow", "Knowledge base setup", "Basic integrations", "1 week post-build support"], overage: "Built on your Retell" },
  { name: "Standard", price: "£2,497", byline: "Full multi-flow",    features: ["Full multi-flow build", "Calendar & CRM integrations", "Training + docs", "2 weeks post-build support"], overage: "Built on your Retell", featured: true },
  { name: "Premium",  price: "£4,997", byline: "Advanced multi-flow",features: ["Advanced multi-flow", "CRM + calendar + custom", "Full training framework", "4 weeks post-build support"], overage: "Built on your Retell" },
];

const websiteTiers = [
  { name: "Launch Lite", price: "£695",   pre: "from", suffix: "one-off", byline: "Get online fast on one of our templates",            features: ["2 pages — home + contact", "Smart Voqal template design", "Mobile-responsive & fast", "Contact form & click-to-call", "Details, hours & location set up"] },
  { name: "Launch",      price: "£997",   pre: "from", suffix: "one-off", byline: "A modern site shaped around your brand",             features: ["Up to 3 pages", "Design tailored to your brand", "Enquiry & contact form", "Click-to-call button", "Basic SEO setup", "Launch support"] },
  { name: "Standard",    price: "£2,497",              suffix: "one-off", byline: "A bigger, premium site with booking & CMS",          features: ["Everything in Launch", "Up to 10 pages + blog / CMS", "Premium design & copywriting", "Booking & lead-capture flows", "CRM integration", "Full on-page SEO"], featured: true },
  { name: "Full-Stack",  price: "£4,997", pre: "from", suffix: "one-off", byline: "The complete build, wired for your AI stack",          features: ["Everything in Standard", "Membership / login & payments", "Custom backend & integrations", "Voice-ready & chat-ready setup", "Automation wired in"], cta: "Talk to us", ctaHref: "/contact" },
];

const auditTiers = [
  { name: "Standard Audit",     price: "£497",   suffix: "one-off", byline: "For owner-led businesses running it themselves",       features: ["60-minute audit call with a senior advisor", "Slide-deck Opportunities Report — 3 to 5 AI recommendations", "Quantified ROI: hours + £ saved per year", "90-day implementation roadmap", "Credited 100% if you implement with us"], featured: true },
  { name: "Strategic AI Audit", price: "Bespoke", suffix: "",       byline: "For larger teams, multiple sites, or complex operations", features: ["Multi-day engagement or full day on-site", "Stakeholder interviews across departments", "Process mapping — before/after diagrams", "Custom mini PoC for your highest-ROI opportunity", "Quarterly check-ins for 6 months"], cta: "Talk to us", ctaHref: "/contact" },
];

function ServiceTierBlock({ eyebrow, heading, blurb, detailHref, detailLabel, tiers, columns, footnote }: {
  eyebrow: string;
  heading: React.ReactNode;
  blurb: string;
  detailHref: string;
  detailLabel: string;
  tiers: { name: string; price: string; pre?: string; suffix: string; byline: string; features: string[]; featured?: boolean; cta?: string; ctaHref?: string }[];
  columns: number;
  footnote?: string;
}) {
  return (
    <div style={{ marginTop: 72 }}>
      <FadeUp style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 14 }}>
        {eyebrow}
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 14px" }}>
          {heading}
        </h2>
      </FadeUp>
      <FadeUp as="p" delay={0.15} style={{ fontSize: 14, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 640, margin: "0 0 32px" }}>
        {blurb}{" "}
        <Link href={detailHref} style={{ color: "var(--cog-copper)", textDecoration: "underline" }}>{detailLabel}</Link>
      </FadeUp>
      <div className="cog-pricing-grid cog-cards-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 20 }}>
        {tiers.map((t, i) => (
          <FadeUp key={t.name} delay={0.1 + i * 0.08}>
            <div style={{
              background: t.featured ? "#1a1a1a" : "transparent",
              color: t.featured ? "#fff" : "#1a1a1a",
              border: "1px solid " + (t.featured ? "#1a1a1a" : "rgba(0,0,0,0.18)"),
              borderRadius: 20, padding: 28, height: "100%",
              display: "flex", flexDirection: "column", position: "relative",
            }}>
              {t.featured && (
                <span style={{ position: "absolute", top: -12, left: 20, background: "var(--cog-copper)", color: "#fff", padding: "4px 12px", borderRadius: 999, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  Most Popular
                </span>
              )}
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: t.featured ? "var(--cog-copper-light)" : "var(--cog-copper)", fontWeight: 600, marginBottom: 12, textTransform: "uppercase" }}>
                {t.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                {t.pre && (
                  <span style={{ fontSize: 13, color: t.featured ? "rgba(255,255,255,0.55)" : "#888", marginRight: 1 }}>{t.pre}</span>
                )}
                <span className="cog-italic" style={{ fontSize: 44, lineHeight: 1, color: t.featured ? "#fff" : "#1a1a1a" }}>{t.price}</span>
                {t.suffix && (
                  <span style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.55)" : "#888" }}>{t.suffix}</span>
                )}
              </div>
              <div style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.6)" : "#888", marginBottom: 20 }}>{t.byline}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, marginBottom: 20 }}>
                {t.features.map((f) => (
                  <li key={f} style={{
                    padding: "8px 0", fontSize: 13,
                    color: t.featured ? "rgba(255,255,255,0.85)" : "#333",
                    borderBottom: "1px solid " + (t.featured ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"),
                    display: "flex", gap: 8,
                  }}>
                    <span style={{ color: "var(--cog-copper)" }}>·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={t.ctaHref || "/book"} className={t.featured ? "cog-btn-light" : "cog-btn-secondary"} style={{ justifyContent: "center", textAlign: "center" }}>
                {t.cta || "Book a demo"}
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>

      {footnote && (
        <FadeUp as="p" delay={0.45} style={{ fontSize: 13, lineHeight: 1.6, color: "#666", margin: "18px 0 0" }}>
          {footnote}
        </FadeUp>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [mode, setMode] = useState<"managed" | "build">("managed");
  const rates = mode === "managed" ? managedTiers : buildTiers;

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      {pricingSchema.map((data, i) => (
        <script key={`pricing-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 60 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Rates · Voqal AI
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              SIMPLE, TRANSPARENT <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>plans.</span>
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp as="p" delay={0.3} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", margin: "0 0 24px" }}>
              No contracts. No lock-ins. Personalised demo within 24 hours. Traditional front-desk cover is expensive and limited by hours — our AI starts at a fraction of that and works around the clock.
            </FadeUp>
            <FadeUp delay={0.45}>
              <div style={{ display: "inline-flex", background: "#fff", border: "1px solid rgba(0,0,0,0.18)", borderRadius: 999, padding: 4, gap: 4 }}>
                {(["managed", "build"] as const).map((m) => (
                  <button key={m} onClick={() => setMode(m)} style={{
                    padding: "0.65rem 1.5rem", borderRadius: 999,
                    background: mode === m ? "#1a1a1a" : "transparent",
                    color: mode === m ? "#fff" : "#888",
                    border: "1px solid " + (mode === m ? "#1a1a1a" : "transparent"),
                    fontFamily: "inherit", fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                  }}>
                    {m === "managed" ? "Managed Service" : "Build & Handover"}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <div className="cog-pricing-grid cog-cards-grid" style={{ display: "grid", gridTemplateColumns: mode === "managed" ? "repeat(4, 1fr)" : "repeat(3, 1fr)", gap: 20 }}>
          {rates.map((t, i) => (
            <FadeUp key={t.name} delay={0.1 + i * 0.08}>
              <div style={{
                background: t.featured ? "#1a1a1a" : "transparent",
                color: t.featured ? "#fff" : "#1a1a1a",
                border: "1px solid " + (t.featured ? "#1a1a1a" : "rgba(0,0,0,0.18)"),
                borderRadius: 20, padding: 28, height: "100%",
                display: "flex", flexDirection: "column", position: "relative",
              }}>
                {t.featured && (
                  <span style={{ position: "absolute", top: -12, left: 20, background: "var(--cog-copper)", color: "#fff", padding: "4px 12px", borderRadius: 999, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    Most Popular
                  </span>
                )}
                <div style={{ fontSize: 11, letterSpacing: "0.18em", color: t.featured ? "var(--cog-copper-light)" : "var(--cog-copper)", fontWeight: 600, marginBottom: 12, textTransform: "uppercase" }}>
                  {t.name}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span className="cog-italic" style={{ fontSize: 44, lineHeight: 1, color: t.featured ? "#fff" : "#1a1a1a" }}>{t.price}</span>
                  <span style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.55)" : "#888" }}>
                    {mode === "managed" ? "/mo" : "one-off"}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.6)" : "#888", marginBottom: 20 }}>{t.byline}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, marginBottom: 20 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{
                      padding: "8px 0", fontSize: 13,
                      color: t.featured ? "rgba(255,255,255,0.85)" : "#333",
                      borderBottom: "1px solid " + (t.featured ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"),
                      display: "flex", gap: 8,
                    }}>
                      <span style={{ color: "var(--cog-copper)" }}>·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li style={{ padding: "10px 0 0", fontSize: 11, color: t.featured ? "rgba(255,255,255,0.5)" : "#888", display: "flex", justifyContent: "space-between", letterSpacing: "0.04em" }}>
                    <span>{mode === "managed" ? "Overage" : "Built on"}</span>
                    <span>{t.overage}</span>
                  </li>
                </ul>
                <Link href="/book" className={t.featured ? "cog-btn-light" : "cog-btn-secondary"} style={{ justifyContent: "center", textAlign: "center" }}>
                  {mode === "managed" ? "Get Started" : "Book Consultation"}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        {mode === "build" && (
          <FadeUp delay={0.4} style={{ marginTop: 24, textAlign: "center", fontSize: 13, color: "#3a3a3a" }}>
            <strong style={{ color: "var(--cog-copper)", fontWeight: 600 }}>+ Optional £147/mo maintenance</strong> — ongoing monitoring, knowledge base updates, and priority support after handover.
          </FadeUp>
        )}

        <FadeUp delay={0.5} style={{ marginTop: 60, maxWidth: 720 }}>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#3a3a3a", margin: 0 }}>
            Whether you operate locally, internationally, or across multiple time zones, Voqal AI gives you consistent 24/7 front-desk coverage at a fraction of the cost of traditional staffing, with zero hold times and instant response.
          </p>
        </FadeUp>

        <ServiceTierBlock
          eyebrow="Websites · Voqal AI"
          heading={<>AI WEBSITES <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>that work.</span></>}
          blurb="A sharp, modern site built fast. Every build includes a care plan, free for the first 3 months. Add AI chat, a voice agent or automation whenever you're ready."
          detailHref="/ai-websites"
          detailLabel="See full website details →"
          tiers={websiteTiers}
          columns={4}
          footnote="Just need a single page to get online? One-page sites from £495."
        />

        <ServiceTierBlock
          eyebrow="Audit · Voqal AI"
          heading={<>AI OPPORTUNITY <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>audit.</span></>}
          blurb="Not sure where AI fits? A senior advisor maps your highest-ROI opportunities and hands you a costed 90-day roadmap. Credited in full if you implement with us."
          detailHref="/audit"
          detailLabel="Explore the audit →"
          tiers={auditTiers}
          columns={2}
        />

        <FadeUp delay={0.55} style={{ marginTop: 72, maxWidth: 720 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 14 }}>
            The fine print
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a" }}>
              Prices exclude VAT.
            </li>
            <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a" }}>
              Managed plans are billed monthly in advance. Overage minutes are billed monthly in arrears at the per-minute rate shown on each plan.
            </li>
            <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a" }}>
              Managed plans are rolling-monthly with no contract and can be cancelled with 30 days&rsquo; written notice.
            </li>
            <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a" }}>
              Custom pricing available for multi-location, high-volume, or bespoke workflow clients — <Link href="/contact" style={{ color: "var(--cog-copper)", textDecoration: "underline" }}>get in touch</Link>.
            </li>
            <li style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a" }}>
              A Data Processing Agreement is available on request for clients whose customers&rsquo; personal data is processed by our AI agents.
            </li>
          </ul>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
