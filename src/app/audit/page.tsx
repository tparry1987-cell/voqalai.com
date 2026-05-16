"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

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

const TIERS = [
  {
    name: "Standard Audit", price: "£497", interval: "one-off",
    byline: "For owner-led businesses running it themselves",
    features: ["15-minute discovery call", "Pre-audit intake form (10 questions)", "60-minute audit call with a senior advisor", "Slide-deck Opportunities Report — 3 to 5 AI recommendations", "Quantified ROI: hours saved + £ saved per year", "90-day implementation roadmap", "30-minute live presentation"],
    delivery: "Delivered within 7 working days", featured: true, tag: "Most chosen", cta: "Book the discovery call", ctaHref: "/book",
  },
  {
    name: "Strategic AI Audit", price: "Bespoke", interval: "scoped to your business",
    byline: "For larger teams, multiple sites, or complex operations",
    features: ["Multi-day engagement (or one full day on-site)", "Stakeholder interviews across departments", "Process mapping — before/after workflow diagrams", "Custom mini PoC built for your highest-ROI opportunity", "Quarterly check-ins for 6 months post-delivery", "Direct line to a Voqal partner, not a junior advisor"],
    delivery: "Scoped and quoted within 2 working days", featured: false, cta: "Tell us about your business", ctaHref: "/contact",
  },
];

const STAGES = [
  { n: "01", t: "Discovery call", b: "15 minutes. We get to know your business, explain the audit process, and book the audit call live on the call." },
  { n: "02", t: "Intake form", b: "10 questions. Tells us how your business operates so we don't burn audit time on basics." },
  { n: "03", t: "Audit call", b: "60 minutes. We surface 3 to 5 specific opportunities and quantify the cost of each pain point in £." },
  { n: "04", t: "Opportunities Report", b: "Polished slide deck. Diagnosis, opportunities, business case, and a 90-day roadmap. Delivered within 7 working days." },
  { n: "05", t: "Live presentation", b: "30 minutes. We walk you through the findings, answer questions, and discuss next steps. You keep the report regardless." },
];

const FAQS = [
  { q: "Why pay for an audit when I can just book a free demo?", a: "The free demo shows you what a Voqal AI receptionist can do. The audit goes wider — we look across the whole business for the 3 to 5 best AI opportunities, quantify the ROI for each, and give you a written roadmap. Most clients use the audit to decide whether to invest £5k, £20k, or £100k in AI over the next year." },
  { q: "What if you don't find anything worth implementing?", a: "Hasn't happened yet. Every business we've audited has at least one task or workflow where AI saves measurable time. If we genuinely find nothing, we refund the fee — but we've never had to." },
  { q: "Do I have to use Voqal to implement what you recommend?", a: "No. The Opportunities Report is yours. Most clients move forward with us for the voice agent piece because that's our specialty, but the rest of the recommendations are vendor-agnostic. We tell you what to build, not who has to build it." },
  { q: "Who runs the audit?", a: "Tom Parry (Founder & CEO) for UK warm-network audits. Adrian Wilkinson (Strategic Partner) for enterprise engagements. Charlie Todd (Co-Founder) for international audits." },
  { q: "How quickly can I book?", a: "Discovery call within 24 hours. Audit call within 7 working days of the discovery call. Report delivered within 7 working days of the audit call. Total: ~2 weeks from first email to Opportunities Report in your hands." },
  { q: "Can the audit cost be credited against an implementation?", a: "Yes. If you move forward with a Voqal build or retainer within 30 days of the audit, your audit fee is credited 100% against your first invoice." },
];

export default function AuditPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      {auditSchema.map((data, i) => (
        <script key={`audit-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 40 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          AI Opportunity Audit
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              FIND THE AI <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>opportunities</span><br />
              HIDING INSIDE YOUR BUSINESS.
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp as="p" delay={0.3} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", margin: "0 0 28px" }}>
              A senior Voqal advisor sits with you, maps where AI saves time and money, and writes it all up in a slide-deck report with the ROI numbers attached. From £497.
            </FadeUp>
            <FadeUp delay={0.45}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/book" className="cog-btn-primary">Book the discovery call</Link>
                <a href="#how" className="cog-btn-secondary">How it works</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
          What you walk away with
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 28px", maxWidth: 820 }}>
            A written plan, <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>not a sales pitch.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "0 0 48px" }}>
            Every audit produces the same artefact: a 10–15 slide Opportunities Report with the diagnosis, the recommendations, the costed business case, and a 90-day roadmap. You own it. Implement with us, with someone else, or in-house.
          </p>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {[
            ["The Diagnosis", "The top 3–5 pain points in your business, with the £ cost of each one quantified using your actual hours and rates — not hypothetical industry averages."],
            ["The Opportunities", "3 to 5 specific AI tools or workflows that solve those pain points. Each one shows before/after, implementation effort, and annual savings."],
            ["The Business Case", "What your business looks like in 90 days if you implement what we recommend. Total annual savings, ROI multiplier, and a phased timeline."],
            ["The Roadmap", "Specific next actions, who does what, and the order to implement. Vendor-agnostic — you decide who builds what."],
          ].map(([title, body], i) => (
            <FadeUp key={title} delay={0.3 + i * 0.08}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "28px 32px", height: "100%" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 12, textTransform: "uppercase" }}>{title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.8)", margin: 0 }}>{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="how" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>How it works</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 48px", maxWidth: 720 }}>
            First email to written plan in <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>two weeks.</span>
          </h2>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {STAGES.map((s, i) => (
            <FadeUp key={s.n} delay={0.15 + i * 0.08}>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.18)", paddingTop: 18, height: "100%" }}>
                <div className="cog-italic" style={{ fontSize: 32, color: "var(--cog-copper)", lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#3a3a3a" }}>{s.b}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>Pricing</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 28px", maxWidth: 720 }}>
            Pick the tier that <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>fits the decision.</span>
          </h2>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {TIERS.map((t, i) => (
            <FadeUp key={t.name} delay={0.25 + i * 0.1}>
              <div style={{
                background: t.featured ? "#1a1a1a" : "transparent",
                color: t.featured ? "#fff" : "#1a1a1a",
                border: "1px solid " + (t.featured ? "#1a1a1a" : "rgba(0,0,0,0.18)"),
                borderRadius: 20, padding: 32, height: "100%",
                display: "flex", flexDirection: "column", position: "relative",
              }}>
                {t.featured && t.tag && (
                  <span style={{ position: "absolute", top: -12, left: 24, background: "var(--cog-copper)", color: "#fff", padding: "4px 12px", borderRadius: 999, fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>{t.tag}</span>
                )}
                <div style={{ fontSize: 11, letterSpacing: "0.18em", color: t.featured ? "var(--cog-copper-light)" : "var(--cog-copper)", fontWeight: 600, marginBottom: 12, textTransform: "uppercase" }}>{t.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span className="cog-italic" style={{ fontSize: 44, lineHeight: 1, color: t.featured ? "#fff" : "#1a1a1a" }}>{t.price}</span>
                  <span style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.55)" : "#888" }}>{t.interval}</span>
                </div>
                <div style={{ fontSize: 12, color: t.featured ? "rgba(255,255,255,0.6)" : "#888", marginBottom: 20 }}>{t.byline}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1, marginBottom: 20 }}>
                  {t.features.map((f) => (
                    <li key={f} style={{ padding: "8px 0", fontSize: 13, color: t.featured ? "rgba(255,255,255,0.85)" : "#333", borderBottom: "1px solid " + (t.featured ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"), display: "flex", gap: 8 }}>
                      <span style={{ color: "var(--cog-copper)" }}>·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                  <li style={{ padding: "10px 0 0", fontSize: 11, color: t.featured ? "rgba(255,255,255,0.5)" : "#888", display: "flex", justifyContent: "space-between", letterSpacing: "0.04em" }}>
                    <span>Delivery</span><span>{t.delivery}</span>
                  </li>
                </ul>
                <Link href={t.ctaHref} className={t.featured ? "cog-btn-light" : "cog-btn-secondary"} style={{ justifyContent: "center", textAlign: "center" }}>{t.cta}</Link>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.6} style={{ marginTop: 32 }}>
          <p style={{ fontSize: 13, color: "#3a3a3a", textAlign: "center" }}>
            <strong style={{ color: "var(--cog-copper)", fontWeight: 600 }}>100% credit toward implementation.</strong> If you move forward within 30 days of the audit, your fee is credited in full.
          </p>
        </FadeUp>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>Common questions</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 28px" }}>
            The honest answers.
          </h2>
        </FadeUp>
        <div style={{ maxWidth: 820 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <FadeUp key={faq.q} delay={0.05 * i}>
                <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{
                  width: "100%", background: "transparent",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.18)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.18)",
                  borderLeft: "none", borderRight: "none",
                  padding: "20px 0", textAlign: "left",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 24, color: "#1a1a1a",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{faq.q}</span>
                  {isOpen ? <Minus size={16} style={{ color: "var(--cog-copper)" }} /> : <Plus size={16} style={{ color: "#666" }} />}
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                  <p style={{ padding: "0 0 22px", fontSize: 13, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 720, margin: 0 }}>{faq.a}</p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
        <FadeUp delay={0.5} style={{ marginTop: 60 }}>
          <h3 className="cog-h-display" style={{ fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1a1a1a", margin: "0 0 18px" }}>
            Stop guessing where AI fits. <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>Find out.</span>
          </h3>
          <p style={{ fontSize: 14, color: "#3a3a3a", maxWidth: 560, marginBottom: 22 }}>
            A 15-minute discovery call costs nothing. The audit itself starts at £497 — credited in full if you implement with us.
          </p>
          <Link href="/book" className="cog-btn-primary">Book the discovery call</Link>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
