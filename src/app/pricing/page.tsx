"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export default function PricingPage() {
  const [calcCalls, setCalcCalls] = useState(10);
  const [calcValue, setCalcValue] = useState(200);
  const [calcRate, setCalcRate] = useState(30);
  const monthly = Math.round(calcCalls * 4.33 * calcValue * (calcRate / 100));
  const annual = monthly * 12;

  return (
    <>
      <Navbar variant="light" />

      {/* ── Pricing ── */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Pricing</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Simple, Transparent <span className="italic-accent">Plans.</span>
          </h2>
          <p className="body-text">No setup fees. No contracts or lock-ins. Demo within 24 hours.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: "4rem" }}>
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

        <Reveal delay={0.2}>
          <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "var(--text-faint)", textAlign: "center" }}>
            Prices shown in GBP. US businesses: equivalent USD pricing available &mdash; contact us for a quote.
            <br />
            One-off build &amp; handover packages also available from &pound;997.
          </p>
        </Reveal>
      </section>

      {/* ── Lead Reactivation ── */}
      <section id="lead-reactivation" className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Lead Reactivation</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700, margin: "0 auto 2rem" }}>
            Your Old Leads Are Worth <span className="italic-accent">Money.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 600, margin: "0 auto" }}>
            79% of marketing leads never convert to sales &mdash; often due to poor follow-up timing. Our AI reactivates them with natural voice conversations and you only pay when they convert. Zero risk. Zero upfront cost.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-8" style={{ maxWidth: 500, margin: "4rem auto 0" }}>
            <div className="stat-block" style={{ textAlign: "center" }}>
              <div className="stat-number">&pound;0</div>
              <div className="stat-label">Upfront cost &mdash; pay only when leads convert</div>
            </div>
            <div className="stat-block" style={{ textAlign: "center" }}>
              <div className="stat-number">15-20%</div>
              <div className="stat-label">Reactivation rate from dormant databases</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="text-link" style={{ fontSize: "1rem" }}>Discuss Lead Reactivation &rarr;</Link>
          </div>
        </Reveal>
      </section>

      {/* ── Calculator ── */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">The Cost of Silence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            What Missed Calls Are Really <span className="italic-accent">Costing.</span>
          </h2>
          <p className="body-text" style={{ color: "var(--accent)" }}>
            62% of business calls go unanswered. 85% of those callers never call back.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "6rem", marginTop: "4rem", alignItems: "start" }}>
            <div className="grid gap-8">
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

            <div className="grid gap-10">
              <div className="calc-result-block">
                <div className="calc-result-number">&pound;{monthly.toLocaleString()}</div>
                <div className="calc-result-label">Lost per month</div>
              </div>
              <div className="calc-result-block">
                <div className="calc-result-number">&pound;{annual.toLocaleString()}</div>
                <div className="calc-result-label">Lost per year</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p style={{ marginTop: "3rem", fontSize: "1.05rem" }}>
            <em style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)", fontSize: "1.1rem" }}>Stop the leak.</em>{" "}
            <Link href="/contact" className="text-link">Request a demonstration &rarr;</Link>
          </p>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
