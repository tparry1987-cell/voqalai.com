"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const pricingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Voqal AI Receptionist",
    "description": "AI voice receptionist service for UK and US businesses. 24/7 call answering, appointment booking, lead qualification, and CRM integration.",
    "provider": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United States" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Receptionist Plans",
      "itemListElement": [
        { "@type": "Offer", "name": "Starter", "description": "200 minutes/month, 1 AI flow, 1 UK phone number, basic call routing.", "price": "197", "priceCurrency": "GBP", "priceValidUntil": "2026-12-31", "url": "https://voqalai.com/pricing" },
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
  {
    name: "Starter", price: "£197", interval: "/mo", byline: "200 minutes included",
    features: ["200 minutes included", "1 AI receptionist flow", "Basic knowledge base", "1 UK phone number", "Standard support"],
    overage: "£0.20/min",
    featured: false,
  },
  {
    name: "Pro", price: "£397", interval: "/mo", byline: "500 minutes included",
    features: ["500 minutes included", "Full booking flow", "Calendar & CRM integrations", "Comprehensive knowledge base", "Standard support"],
    overage: "£0.18/min",
    featured: true,
    tag: "Most Popular",
  },
  {
    name: "Premium", price: "£697", interval: "/mo", byline: "1,000 minutes included",
    features: ["1,000 minutes included", "Multi-flow AI receptionist", "CRM integration & QA monitoring", "Advanced call routing", "Priority support"],
    overage: "£0.15/min",
    featured: false,
  },
  {
    name: "Business", price: "£997", interval: "/mo", byline: "2,500 minutes included",
    features: ["2,500 minutes included", "Custom multi-flow handling", "CRM + QA + custom workflows", "Advanced call routing", "Priority + dedicated channel"],
    overage: "£0.15/min",
    featured: false,
  },
];

const buildTiers = [
  {
    name: "Lite", price: "£997", interval: "one-off", byline: "Single flow build",
    features: ["1 receptionist flow", "Knowledge base setup", "Basic integrations", "1 week post-build support"],
    built: "your Retell account",
    featured: false,
  },
  {
    name: "Standard", price: "£2,497", interval: "one-off", byline: "Full multi-flow build",
    features: ["Full multi-flow build", "Calendar & CRM integrations", "Comprehensive training + docs", "2 weeks post-build support"],
    built: "your Retell account",
    featured: true,
    tag: "Most Chosen",
  },
  {
    name: "Premium", price: "£4,997", interval: "one-off", byline: "Advanced multi-flow",
    features: ["Advanced multi-flow build", "CRM + calendar + custom integrations", "Full training + support framework", "4 weeks post-build support"],
    built: "your Retell account",
    featured: false,
  },
];

export default function PricingPage() {
  const [pricingMode, setPricingMode] = useState<"managed" | "build">("managed");
  const [calcCalls, setCalcCalls] = useState(10);
  const [calcValue, setCalcValue] = useState(200);
  const [calcRate, setCalcRate] = useState(30);
  const monthly = Math.round(calcCalls * 4.33 * calcValue * (calcRate / 100));
  const annual = monthly * 12;

  const tiers = pricingMode === "managed" ? managedTiers : buildTiers;

  return (
    <>
      {pricingSchema.map((data, i) => (
        <script key={`pricing-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      {/* Hero + tiers */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Pricing</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Simple, transparent <span className="italic-accent">plans.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 520, margin: "0 auto" }}>
              No contracts or lock-ins. Personalised demo within 24 hours.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
            <div style={{ display: "inline-flex", background: "#fff", border: "1px solid var(--border-subtle)", borderRadius: 999, padding: 4, gap: 4 }}>
              <button
                onClick={() => setPricingMode("managed")}
                style={{
                  padding: "0.65rem 1.5rem",
                  borderRadius: 999,
                  background: pricingMode === "managed" ? "#111" : "transparent",
                  color: pricingMode === "managed" ? "#fff" : "#888",
                  border: "1px solid " + (pricingMode === "managed" ? "#111" : "transparent"),
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Managed Service
              </button>
              <button
                onClick={() => setPricingMode("build")}
                style={{
                  padding: "0.65rem 1.5rem",
                  borderRadius: 999,
                  background: pricingMode === "build" ? "#111" : "transparent",
                  color: pricingMode === "build" ? "#fff" : "#888",
                  border: "1px solid " + (pricingMode === "build" ? "#111" : "transparent"),
                  fontFamily: "inherit",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Build &amp; Handover
              </button>
            </div>
          </div>
        </Reveal>

        {/* Tiers */}
        <Reveal delay={0.15}>
          <div
            className="grid gap-5"
            style={{
              marginTop: "3rem",
              gridTemplateColumns: pricingMode === "managed" ? "repeat(auto-fit, minmax(240px, 1fr))" : "repeat(auto-fit, minmax(260px, 1fr))",
              maxWidth: pricingMode === "managed" ? 1100 : 900,
              marginInline: "auto",
            }}
          >
            {tiers.map((t) => (
              <div key={t.name} className={`pricing-card ${t.featured ? "featured" : ""}`} style={{ position: "relative" }}>
                {t.featured && (
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
                    <span>{'overage' in t ? 'Overage' : 'Built on'}</span>
                    <span>{'overage' in t ? t.overage : t.built}</span>
                  </li>
                </ul>
                <Link href="/book" className={t.featured ? "btn" : "btn-outline"} style={{ textAlign: "center", display: "block" }}>
                  {pricingMode === "managed" ? "Get Started" : "Book Consultation"}
                </Link>
              </div>
            ))}
          </div>

          {pricingMode === "build" && (
            <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#888", textAlign: "center" }}>
              <strong style={{ color: "var(--accent)", fontWeight: 500 }}>+ Optional &pound;147/mo maintenance</strong> &mdash; ongoing monitoring, knowledge base updates, and priority support after handover.
            </p>
          )}

          <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "#888", textAlign: "center", maxWidth: 700, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            A full-time UK receptionist costs &pound;22,000&ndash;&pound;28,000 per year (ONS ASHE, 2024). US receptionists average $40,800 per year (Bureau of Labor Statistics, 2024) &mdash; our AI starts at a fraction of that.
          </p>
        </Reveal>
      </section>

      {/* Cost of Silence calculator */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">The Cost of Silence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
            What missed calls are really <span className="italic-accent">costing you.</span>
          </h2>
          <p className="body-text" style={{ margin: "0 auto" }}>
            67% of customers hang up when they cannot reach a real person (Forbes, 2023). 80% of voicemail callers will not leave a message (PATLive, 2023).
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start" style={{ marginTop: "3.5rem", maxWidth: 900, marginInline: "auto" }}>
            <div className="grid gap-6 text-left">
              <div>
                <label className="calc-label">Missed calls per week</label>
                <input type="number" value={calcCalls} onChange={(e) => setCalcCalls(Number(e.target.value) || 0)} className="calc-input" min={0} />
              </div>
              <div>
                <label className="calc-label">Average customer value (&pound;)</label>
                <input type="number" value={calcValue} onChange={(e) => setCalcValue(Number(e.target.value) || 0)} className="calc-input" min={0} />
              </div>
              <div>
                <label className="calc-label">Conversion rate (%)</label>
                <input type="number" value={calcRate} onChange={(e) => setCalcRate(Math.min(100, Number(e.target.value) || 0))} className="calc-input" min={0} max={100} />
              </div>
            </div>
            <div className="grid gap-6">
              <div className="calc-result-block">
                <div className="calc-result-label">Lost per month</div>
                <div className="calc-result-number" style={{ color: "#111", marginTop: "0.75rem" }}>&pound;{monthly.toLocaleString("en-GB")}</div>
              </div>
              <div className="calc-result-block">
                <div className="calc-result-label">Lost per year</div>
                <div className="calc-result-number" style={{ color: "var(--accent)", marginTop: "0.75rem" }}>&pound;{annual.toLocaleString("en-GB")}</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ marginTop: "3rem", fontSize: "1.05rem" }}>
            <span className="italic-accent">Stop the leak.</span>{" "}
            <Link href="/book" className="text-link">Request a demonstration &rarr;</Link>
          </p>
        </Reveal>
      </section>

      {/* Lead Reactivation */}
      <section id="lead-reactivation" className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Lead Reactivation</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700, margin: "0 auto 2rem" }}>
            Your old leads are worth <span className="italic-accent">money.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
            According to research from MIT and InsideSales.com, leads are 21&times; more likely to convert when contacted within five minutes &mdash; yet most businesses respond far too slowly. Our AI reactivates dormant leads with natural voice conversations, and you only pay when they convert. Zero risk. Zero upfront cost.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-8" style={{ maxWidth: 500, margin: "3rem auto 0" }}>
            <div style={{ textAlign: "center" }}>
              <div className="stat-number">&pound;0</div>
              <div className="stat-label">Upfront cost &mdash; pay only when leads convert</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div className="stat-number">80%</div>
              <div className="stat-label">Of voicemail callers won&rsquo;t leave a message (PATLive, 2023) &mdash; reactivation recovers them</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/book" className="text-link" style={{ fontSize: "1rem" }}>Discuss Lead Reactivation &rarr;</Link>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SEO sections — preserved from original pricing page
          ══════════════════════════════════════════════════════════════ */}

      {/* Why Every Missed Call Costs You */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">The Problem</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            Why every missed call <span className="italic-accent">costs you.</span>
          </h2>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "left" }}>
            <p className="body-text" style={{ maxWidth: "none" }}>
              Before comparing plans, it is worth understanding the scale of the problem that AI receptionist pricing is designed to solve. According to Forbes (2023), 67% of customers will hang up if they cannot reach a real person &mdash; and the majority never call back. Research from PATLive puts it even more starkly: 80% of callers sent to voicemail do not leave a message. They simply move on to the next business in their search results.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              For service businesses that depend on inbound phone enquiries &mdash; dental practices, law firms, tradesmen, estate agents &mdash; each unanswered call represents a customer who was ready to book but could not get through. The Federation of Small Businesses (2024) estimates that the average UK SME loses over &pound;30,000 per year in revenue from missed calls alone. A landmark study by MIT and InsideSales.com found that leads are 21 times more likely to convert when contacted within five minutes. Every minute of delay reduces that probability, and a missed call is the ultimate delay.
            </p>
          </div>
        </Reveal>
      </section>

      {/* AI Receptionist vs Traditional Alternatives */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">How Pricing Compares</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            AI receptionist vs traditional <span className="italic-accent">alternatives.</span>
          </h2>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "left" }}>
            <p className="body-text" style={{ maxWidth: "none" }}>
              According to the Office for National Statistics (ASHE, 2024), the median annual salary for a receptionist in the United Kingdom is approximately &pound;22,000&ndash;&pound;28,000. When employer National Insurance contributions, pension auto-enrolment, holiday pay, and recruitment costs are included, the true cost of a full-time receptionist typically exceeds &pound;30,000 per year. In the United States, the Bureau of Labor Statistics (2024) puts the median receptionist wage at $40,800 annually, with total employment costs often surpassing $50,000.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              Outsourced telephone answering services such as Moneypenny, AnswerConnect, and ReceptionHQ charge between &pound;200 and &pound;800 per month in the UK, depending on call volume. These services use human operators who follow scripts, but availability can be limited during peak demand and callers may experience hold times.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              Voqal AI&rsquo;s managed service starts at &pound;197 per month for 200 minutes of AI-handled calls. Unlike human alternatives, the system answers every call simultaneously with no hold queues, operates 24 hours a day including weekends and bank holidays, and actively books appointments into connected calendars. At &pound;2,364 per year, that represents a 90% cost reduction compared with a full-time receptionist &mdash; with significantly greater capability.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Which Industries Benefit Most */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Industry Applications</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            Which businesses get the most from <span className="italic-accent">AI receptionists.</span>
          </h2>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "left" }}>
            <p className="body-text" style={{ maxWidth: "none" }}>
              AI receptionist pricing delivers the strongest return for service businesses where inbound calls directly drive revenue. If a missed call means a missed booking, an AI voice agent pays for itself quickly.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1.5rem" }}>
              <strong style={{ color: "#111" }}>Dental practices</strong> are among the highest-volume users of AI receptionists in the UK. According to the NHS (2019), missed healthcare appointments cost the system over &pound;216 million annually. Private dental practices face the same challenge &mdash; patients who call to book but reach voicemail often try another surgery. An AI receptionist ensures every patient enquiry is answered immediately, appointments are confirmed, and rescheduling is handled without staff involvement.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong style={{ color: "#111" }}>Law firms and solicitors</strong> depend on capturing new client enquiries at the point of first contact. Legal consumers frequently contact multiple firms and instruct whichever responds first. An AI voice agent qualifies the enquiry by case type and urgency, captures client details, and routes the matter to the appropriate fee earner &mdash; all within the first call.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong style={{ color: "#111" }}>Tradesmen and home service businesses</strong> &mdash; electricians, plumbers, builders &mdash; face a unique challenge: the business owner is often on-site and unable to answer the phone during working hours. According to the FSB (2024), there are 5.5 million private-sector businesses in the UK, the vast majority of which are one- or two-person operations that rely entirely on inbound phone calls for new work. An AI receptionist captures every lead, books call-backs, and provides quotes information &mdash; even when the tradesperson is on a ladder.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong style={{ color: "#111" }}>Estate agents</strong> operate in a time-sensitive market where buyers and tenants expect immediate responses to viewing requests. An AI agent books viewings directly into the calendar, captures property preferences, and follows up with confirmation messages &mdash; ensuring no enquiry falls through the cracks during busy periods or after office hours.
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
