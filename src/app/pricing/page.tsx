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
        {
          "@type": "Offer",
          "name": "Starter",
          "description": "200 minutes/month, 1 AI flow, 1 UK phone number, basic call routing. Ideal for small businesses.",
          "price": "197",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-12-31",
          "eligibleDuration": { "@type": "QuantitativeValue", "value": 1, "unitCode": "MON" },
          "url": "https://voqalai.com/pricing"
        },
        {
          "@type": "Offer",
          "name": "Pro",
          "description": "500 minutes/month, full booking flow, calendar and CRM integration, standard call routing. Most popular for practices and firms.",
          "price": "397",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-12-31",
          "eligibleDuration": { "@type": "QuantitativeValue", "value": 1, "unitCode": "MON" },
          "url": "https://voqalai.com/pricing"
        },
        {
          "@type": "Offer",
          "name": "Premium",
          "description": "1,000 minutes/month, multi-flow handling, advanced call routing, CRM with QA monitoring, priority support.",
          "price": "697",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-12-31",
          "eligibleDuration": { "@type": "QuantitativeValue", "value": 1, "unitCode": "MON" },
          "url": "https://voqalai.com/pricing"
        }
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

export default function PricingPage() {
  const [pricingMode, setPricingMode] = useState<"managed" | "build">("managed");
  const [calcCalls, setCalcCalls] = useState(10);
  const [calcValue, setCalcValue] = useState(200);
  const [calcRate, setCalcRate] = useState(30);
  const monthly = Math.round(calcCalls * 4.33 * calcValue * (calcRate / 100));
  const annual = monthly * 12;

  return (
    <>
      {pricingSchema.map((data, i) => (
        <script key={`pricing-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      {/* ── Pricing Hero ── */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Pricing</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Simple, Transparent <span className="italic-accent">Plans.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 560, margin: "0 auto" }}>No setup fees. No contracts or lock-ins. Demo within 24 hours. A full-time UK receptionist costs &pound;22,000&ndash;&pound;28,000 per year (ONS ASHE, 2024) &mdash; our AI receptionist starts at a fraction of that.</p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal delay={0.1}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
            <div style={{ display: "inline-flex", background: "var(--bg-alt)", border: "1px solid var(--border-subtle)", borderRadius: 50, padding: 4, gap: 4 }}>
              <button
                onClick={() => setPricingMode("managed")}
                style={{ padding: "0.75rem 2rem", border: pricingMode === "managed" ? "1px solid rgba(135,251,137,0.3)" : "1px solid transparent", borderRadius: 50, background: pricingMode === "managed" ? "rgba(135,251,137,0.12)" : "transparent", color: pricingMode === "managed" ? "var(--accent)" : "var(--text-faint)", fontFamily: "inherit", fontSize: "0.875rem", cursor: "pointer", fontWeight: 400, letterSpacing: "0.5px", transition: "all 0.3s" }}
              >
                Managed Service
              </button>
              <button
                onClick={() => setPricingMode("build")}
                style={{ padding: "0.75rem 2rem", border: pricingMode === "build" ? "1px solid rgba(135,251,137,0.3)" : "1px solid transparent", borderRadius: 50, background: pricingMode === "build" ? "rgba(135,251,137,0.12)" : "transparent", color: pricingMode === "build" ? "var(--accent)" : "var(--text-faint)", fontFamily: "inherit", fontSize: "0.875rem", cursor: "pointer", fontWeight: 400, letterSpacing: "0.5px", transition: "all 0.3s" }}
              >
                Build &amp; Handover
              </button>
            </div>
          </div>
        </Reveal>

        {/* Managed Service Cards */}
        {pricingMode === "managed" && (
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: "3rem" }}>
              {/* Starter */}
              <div className="pricing-card">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Starter</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;197</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["200 minutes included", "1 AI receptionist flow", "Basic knowledge base", "1 UK phone number", "Standard support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Overage: &pound;0.20/min</li>
                </ul>
                <Link href="/contact" className="btn block text-center mt-8">Get Started</Link>
              </div>

              {/* Pro */}
              <div className="pricing-card featured" style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: -14, left: 24, background: "var(--accent)", color: "#fff", padding: "0.35rem 1rem", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Most Popular</span>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Pro</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;397</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["500 minutes included", "Full booking flow", "Calendar & CRM integrations", "Comprehensive knowledge base", "Standard support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Overage: &pound;0.18/min</li>
                </ul>
                <Link href="/contact" className="btn-accent block text-center mt-8 rounded-full" style={{ padding: "0.9rem 2.5rem" }}>Get Started</Link>
              </div>

              {/* Premium */}
              <div className="pricing-card">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Premium</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;697</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["1,000 minutes included", "Multi-flow AI receptionist", "CRM integration & QA monitoring", "Advanced call routing", "Priority support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Overage: &pound;0.15/min</li>
                </ul>
                <Link href="/contact" className="btn block text-center mt-8">Get Started</Link>
              </div>
            </div>
          </Reveal>
        )}

        {/* Build & Handover Cards */}
        {pricingMode === "build" && (
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: "3rem" }}>
              {/* Lite */}
              <div className="pricing-card">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Lite</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;997</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>one-off</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["1 receptionist flow", "Knowledge base setup", "Basic integrations", "1 week post-build support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Built on your Retell account</li>
                </ul>
                <Link href="/contact" className="btn block text-center mt-8">Book Consultation</Link>
              </div>

              {/* Standard */}
              <div className="pricing-card featured" style={{ position: "relative" }}>
                <span style={{ position: "absolute", top: -14, left: 24, background: "var(--accent)", color: "#fff", padding: "0.35rem 1rem", borderRadius: 20, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Most Chosen</span>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Standard</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;2,497</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>one-off</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Full multi-flow build", "Calendar & CRM integrations", "Comprehensive training + docs", "2 weeks post-build support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Built on your Retell account</li>
                </ul>
                <Link href="/contact" className="btn-accent block text-center mt-8 rounded-full" style={{ padding: "0.9rem 2.5rem" }}>Book Consultation</Link>
              </div>

              {/* Premium */}
              <div className="pricing-card">
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600 }}>Premium</span>
                <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                  <span className="italic-accent" style={{ fontSize: "3rem", lineHeight: 1 }}>&pound;4,997</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-faint)", marginLeft: 4 }}>one-off</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {["Advanced multi-flow build", "CRM + calendar + custom integrations", "Full training + support framework", "4 weeks post-build support"].map((f) => (
                    <li key={f} style={{ padding: "0.6rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>{f}</li>
                  ))}
                  <li style={{ padding: "0.6rem 0", fontSize: "0.85rem", color: "var(--text-faint)" }}>Built on your Retell account</li>
                </ul>
                <Link href="/contact" className="btn block text-center mt-8">Book Consultation</Link>
              </div>
            </div>

            <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-faint)", textAlign: "center" }}>
              <strong style={{ color: "var(--accent)", fontWeight: 500 }}>+ Optional &pound;147/mo maintenance</strong> &mdash; ongoing monitoring, knowledge base updates, and priority support after handover.
            </p>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--text-faint)", textAlign: "center" }}>
            Prices shown in GBP. US businesses: equivalent USD pricing available &mdash; contact us for a quote.
          </p>
          <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-faint)", textAlign: "center", maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            For comparison, a full-time receptionist in the UK earns &pound;22,000&ndash;&pound;28,000 per year (ONS ASHE, 2024), while US receptionists average $40,800 per year (Bureau of Labor Statistics, 2024). Gartner (2022) projects $80 billion in contact-centre savings from conversational AI by 2026.
          </p>
        </Reveal>
      </section>

      {/* ── Why AI Receptionist Pricing Matters ── */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">The Problem</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Why Every Missed Call <span className="italic-accent">Costs You.</span>
          </h2>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "left" }}>
            <p className="body-text" style={{ maxWidth: "none" }}>
              Before comparing plans, it is worth understanding the scale of the problem that AI receptionist pricing is designed to solve. According to Forbes (2023), 67% of customers will hang up if they cannot reach a real person &mdash; and the majority never call back. Research from PATLive puts it even more starkly: 80% of callers sent to voicemail do not leave a message. They simply move on to the next business in their search results.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              For service businesses that depend on inbound phone enquiries &mdash; dental practices, law firms, tradesmen, estate agents &mdash; each unanswered call represents a customer who was ready to book but could not get through. The Federation of Small Businesses (2024) estimates that the average UK SME loses over &pound;30,000 per year in revenue from missed calls alone. A landmark study by MIT and InsideSales.com found that leads are 21 times more likely to convert when contacted within five minutes. Every minute of delay reduces that probability, and a missed call is the ultimate delay.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Lead Reactivation ── */}
      <section id="lead-reactivation" className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Lead Reactivation</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700, margin: "0 auto 2rem" }}>
            Your Old Leads Are Worth <span className="italic-accent">Money.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 600, margin: "0 auto" }}>
            According to research from MIT and InsideSales.com, leads are 21&times; more likely to convert when contacted within five minutes &mdash; yet most businesses respond far too slowly. Our AI reactivates dormant leads with natural voice conversations, and you only pay when they convert. Zero risk. Zero upfront cost.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-8" style={{ maxWidth: 500, margin: "4rem auto 0" }}>
            <div className="stat-block" style={{ textAlign: "center" }}>
              <div className="stat-number">&pound;0</div>
              <div className="stat-label">Upfront cost &mdash; pay only when leads convert</div>
            </div>
            <div className="stat-block" style={{ textAlign: "center" }}>
              <div className="stat-number">80%</div>
              <div className="stat-label">Of voicemail callers won&rsquo;t leave a message (PATLive, 2023) &mdash; reactivation recovers them</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="text-link" style={{ fontSize: "1rem" }}>Discuss Lead Reactivation &rarr;</Link>
          </div>
        </Reveal>
      </section>

      {/* ── How Pricing Compares ── */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">How Pricing Compares</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            AI Receptionist vs Traditional <span className="italic-accent">Alternatives.</span>
          </h2>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "left" }}>
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

      {/* ── Calculator ── */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">The Cost of Silence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What Missed Calls Are Really <span className="italic-accent">Costing.</span>
          </h2>
          <p className="body-text" style={{ color: "var(--accent)", maxWidth: 600, margin: "1.5rem auto 0", lineHeight: 1.7 }}>
            According to Forbes (2023), 67% of customers hang up when they cannot reach a real person. PATLive (2023) found that 80% of voicemail callers will not leave a message.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "6rem", marginTop: "4rem", alignItems: "start", maxWidth: 900, margin: "4rem auto 0" }}>
            <div className="grid gap-8" style={{ textAlign: "center" }}>
              <div>
                <label className="calc-label">Missed calls per week</label>
                <input type="number" value={calcCalls} onChange={(e) => setCalcCalls(Number(e.target.value) || 0)} className="calc-input" style={{ textAlign: "center" }} min={0} />
              </div>
              <div>
                <label className="calc-label">Average customer value (&pound;)</label>
                <input type="number" value={calcValue} onChange={(e) => setCalcValue(Number(e.target.value) || 0)} className="calc-input" style={{ textAlign: "center" }} min={0} />
              </div>
              <div>
                <label className="calc-label">Conversion rate (%)</label>
                <input type="number" value={calcRate} onChange={(e) => setCalcRate(Math.min(100, Number(e.target.value) || 0))} className="calc-input" style={{ textAlign: "center" }} min={0} max={100} />
              </div>
            </div>

            <div className="grid gap-10">
              <div className="calc-result-block" style={{ textAlign: "center" }}>
                <div className="calc-result-number">&pound;{monthly.toLocaleString()}</div>
                <div className="calc-result-label">Lost per month</div>
              </div>
              <div className="calc-result-block" style={{ textAlign: "center" }}>
                <div className="calc-result-number">&pound;{annual.toLocaleString()}</div>
                <div className="calc-result-label">Lost per year</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ marginTop: "3rem", fontSize: "1.05rem", textAlign: "center" }}>
            <em style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontSize: "1.1rem" }}>Stop the leak.</em>{" "}
            <Link href="/contact" className="text-link">Request a demonstration &rarr;</Link>
          </p>
        </Reveal>
      </section>

      {/* ── Which Industries Benefit Most ── */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Industry Applications</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Which Businesses Get the Most from <span className="italic-accent">AI Receptionists.</span>
          </h2>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "left" }}>
            <p className="body-text" style={{ maxWidth: "none" }}>
              AI receptionist pricing delivers the strongest return for service businesses where inbound calls directly drive revenue. If a missed call means a missed booking, an AI voice agent pays for itself quickly.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1.5rem" }}>
              <strong>Dental practices</strong> are among the highest-volume users of AI receptionists in the UK. According to the NHS (2019), missed healthcare appointments cost the system over &pound;216 million annually. Private dental practices face the same challenge &mdash; patients who call to book but reach voicemail often try another surgery. An AI receptionist ensures every patient enquiry is answered immediately, appointments are confirmed, and rescheduling is handled without staff involvement.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong>Law firms and solicitors</strong> depend on capturing new client enquiries at the point of first contact. Legal consumers frequently contact multiple firms and instruct whichever responds first. An AI voice agent qualifies the enquiry by case type and urgency, captures client details, and routes the matter to the appropriate fee earner &mdash; all within the first call.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong>Tradesmen and home service businesses</strong> &mdash; electricians, plumbers, builders &mdash; face a unique challenge: the business owner is often on-site and unable to answer the phone during working hours. According to the FSB (2024), there are 5.5 million private-sector businesses in the UK, the vast majority of which are one- or two-person operations that rely entirely on inbound phone calls for new work. An AI receptionist captures every lead, books call-backs, and provides quotes information &mdash; even when the tradesperson is on a ladder.
            </p>
            <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
              <strong>Estate agents</strong> operate in a time-sensitive market where buyers and tenants expect immediate responses to viewing requests. An AI agent books viewings directly into the calendar, captures property preferences, and follows up with confirmation messages &mdash; ensuring no enquiry falls through the cracks during busy periods or after office hours.
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
