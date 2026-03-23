"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import Script from "next/script";

const stats = [
  { n: "£127K", l: "Average annual revenue lost to missed calls by UK SMEs" },
  { n: "47", l: "Average calls missed per week by UK dental practices" },
  { n: "78%", l: "Of law firms lose clients due to slow phone response" },
  { n: "62%", l: "Of business calls go unanswered across all sectors" },
  { n: "85%", l: "Of unanswered callers never call back" },
  { n: "21×", l: "Higher lead conversion when answered within 5 minutes" },
];

const sectors = [
  { name: "Dental Practices", calls: 47, value: 350, rate: 25 },
  { name: "Law Firms", calls: 32, value: 1200, rate: 18 },
  { name: "Trades & Home Services", calls: 58, value: 280, rate: 35 },
  { name: "Estate Agents", calls: 41, value: 950, rate: 22 },
  { name: "Medical Clinics", calls: 53, value: 180, rate: 30 },
  { name: "Accountancy Firms", calls: 28, value: 800, rate: 20 },
];

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "2026 UK Business Communication ROI Report",
  author: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
  datePublished: "2026-03-23",
  description:
    "Original research on missed call costs, AI adoption trends, and ROI data from UK businesses across dental, legal, trades, and estate agent sectors.",
  url: "https://voqalai.com/research/",
  publisher: { "@type": "Organization", name: "Voqal AI" },
  about: "UK business communication costs and AI receptionist ROI",
  inLanguage: "en-GB",
};

export default function ResearchPage() {
  const [calcCalls, setCalcCalls] = useState(10);
  const [calcValue, setCalcValue] = useState(200);
  const [calcRate, setCalcRate] = useState(30);
  const monthly = Math.round(calcCalls * 4.33 * calcValue * (calcRate / 100));
  const annual = monthly * 12;

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Script
        id="report-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <Navbar variant="light" />

      {/* ── Hero ── */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Original Research</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700 }}>
            2026 UK Business Communication <span className="italic-accent">ROI Report.</span>
          </h1>
          <p className="body-text" style={{ marginTop: "1.5rem" }}>
            How much revenue are UK businesses losing to missed calls? We surveyed businesses across dental, legal, trades, and estate agent sectors to find out &mdash; and the numbers are staggering.
          </p>
        </Reveal>
      </section>

      {/* ── Key Stats ── */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Key Findings</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Data Behind <span className="italic-accent">Missed Calls.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: "4rem" }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-block" style={{ textAlign: "center" }}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Sector Benchmarks ── */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Industry Benchmarks</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Missed Call Cost by <span className="italic-accent">Sector.</span>
          </h2>
          <p className="body-text">Average weekly missed calls and estimated annual revenue loss per sector.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: "4rem" }}>
            {sectors.map((s) => {
              const annualLoss = Math.round(s.calls * 4.33 * s.value * (s.rate / 100) * 12);
              return (
                <div key={s.name} className="service-card" style={{ textAlign: "center" }}>
                  <h3 style={{ marginBottom: "1.5rem" }}>{s.name}</h3>
                  <div className="stat-number" style={{ fontSize: "2rem" }}>&pound;{annualLoss.toLocaleString()}</div>
                  <div className="stat-label">Estimated annual loss</div>
                  <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
                    <div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--text-primary)" }}>{s.calls}</div>
                      <div className="stat-label">Missed/week</div>
                    </div>
                    <div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 500, color: "var(--text-primary)" }}>&pound;{s.value}</div>
                      <div className="stat-label">Avg value</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ── ROI Calculator ── */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Interactive Tool</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Calculate Your Missed Call <span className="italic-accent">Cost.</span>
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
              <div className="calc-result-block" style={{ borderColor: "var(--accent)" }}>
                <div className="calc-result-number" style={{ color: "var(--accent)" }}>
                  {annual > 0 ? `${Math.round((annual - 2364) / 2364 * 100)}%` : "0%"}
                </div>
                <div className="calc-result-label">ROI with Voqal AI (&pound;197/mo)</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Download Gate ── */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Free Download</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 600, margin: "0 auto 2rem" }}>
            Get the Full <span className="italic-accent">Report.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 500, margin: "0 auto" }}>
            30 pages of original research, sector breakdowns, AI adoption trends, and actionable recommendations. Free download &mdash; no strings attached.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {!submitted ? (
            <div className="form-card" style={{ maxWidth: 500, margin: "3rem auto 0" }}>
              <form
                name="report-download"
                method="POST"
                data-netlify="true"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input type="hidden" name="form-name" value="report-download" />
                <div>
                  <label className="form-label">Business email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="you@business.co.uk"
                  />
                </div>
                <button type="submit" className="btn-accent w-full rounded-full" style={{ marginTop: "2rem", padding: "1rem", fontSize: "1rem" }}>
                  Download Free Report
                </button>
              </form>
              <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--text-faint)" }}>
                We&rsquo;ll email you the PDF. No spam, ever. <Link href="/privacy" className="text-link">Privacy Policy</Link>
              </p>
            </div>
          ) : (
            <div className="form-card" style={{ maxWidth: 500, margin: "3rem auto 0", textAlign: "center" }}>
              <div className="stat-number" style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "1rem" }}>Check Your Inbox</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                The full report is on its way to <strong>{email}</strong>. While you wait, why not hear our AI receptionist in action?
              </p>
              <Link href="/contact" className="btn-accent inline-block rounded-full" style={{ marginTop: "1.5rem", padding: "0.8rem 2rem" }}>
                Book Free Demo
              </Link>
            </div>
          )}
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Stop losing <span className="italic-accent">revenue</span> to missed calls.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem", maxWidth: 500, margin: "0 auto 3rem" }}>
              From &pound;197/month. No contracts. Demo within 24 hours.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-accent rounded-full px-8 py-3.5">Book Free Demo</Link>
              <Link href="/pricing" className="rounded-full px-8 py-3.5 border border-white/30 hover:border-white/50 transition-all" style={{ color: "#ffffff" }}>View Pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
