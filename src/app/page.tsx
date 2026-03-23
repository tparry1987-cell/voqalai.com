"use client";

import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const trustedBy = [
  { name: "Dental", letter: "D" },
  { name: "Medical", letter: "M" },
  { name: "Legal", letter: "L" },
  { name: "Property", letter: "P" },
  { name: "Trades", letter: "T" },
  { name: "Finance", letter: "F" },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO — Dark, full viewport ═══ */}
      <section className="fixed inset-0 h-screen w-full overflow-hidden">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video autoPlay loop muted playsInline className="hero-video absolute inset-0 h-full w-full object-cover" style={{ filter: "saturate(1.6) contrast(1.1) brightness(0.85)" }}>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,5,15,0.7) 0%, rgba(0,20,40,0.25) 40%, rgba(0,15,35,0.2) 70%, rgba(0,5,15,0.6) 100%)" }} />
        <div className="glitch-overlay" />
        <div className="glitch-bar" />
        <svg className="static-noise" xmlns="http://www.w3.org/2000/svg">
          <filter id="static">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" seed="0">
              <animate attributeName="seed" from="0" to="100" dur="0.8s" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" />
          </filter>
          <rect width="100%" height="100%" filter="url(#static)" />
        </svg>

        <Navbar variant="glass" />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 text-center pt-20">
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1.1, fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}>
            Never Miss Another
            <br />
            <span className="italic-accent" style={{ color: "var(--accent-light)" }}>Customer Call.</span>
          </h1>

          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", maxWidth: 460, marginTop: "1.5rem", lineHeight: 1.6 }}>
            AI receptionist that answers, books, and supports your business 24/7.
          </p>

          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Call Now &amp; Hear Our AI Receptionist in Action
          </p>
          <a href="tel:+442039960962" className="hero-cta rounded-full px-12 py-4 text-lg flex items-center gap-3" style={{ display: "inline-flex" }}>
            <Phone className="h-5 w-5" style={{ color: "#87FB89" }} /> 020 3996 0962
          </a>

          {/* Marquee */}
          <div className="absolute bottom-0 left-0 right-0 z-[8] pb-16 pt-12">
            <div className="flex items-center gap-8 px-6 sm:px-12 lg:px-16">
              <span className="hidden lg:block shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-white/40 ml-2">Trusted across<br />every sector</span>
              <div className="relative flex-1 overflow-hidden marquee-mask">
                <div className="animate-marquee flex w-max items-center gap-10">
                  {[...trustedBy, ...trustedBy].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 shrink-0">
                      <div className="sector-badge flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white/95">{b.letter}</div>
                      <span className="text-sm font-medium tracking-wide text-white/70">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 z-[7] h-64 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 0%, var(--bg-primary) 85%)" }} />
      </section>

      {/* ═══ Scrolling content — slides up over fixed hero ═══ */}
      <div className="relative z-30" style={{ marginTop: "100vh", backgroundColor: "var(--bg-primary)" }}>

      {/* ═══ SERVICES — Light, editorial ═══ */}
      <section id="services" className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <span className="section-label">01 &mdash; What We Do</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "2rem" }}>
            Intelligent <span className="italic-accent">Capabilities.</span>
          </h2>
          <p className="body-text">
            UK businesses lose &pound;30,000+ per year from missed calls. Our AI voice agents answer every call, book appointments, and qualify leads &mdash; around the clock. Leads are 21&times; more likely to convert when contacted within five minutes.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ marginTop: "4rem" }}>
            <Link href="/pricing" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">I.</div>
              <h3>Voice AI Agents</h3>
              <p>Your calls answered perfectly, day or night. We build voice models that book appointments, process reschedules, handle cancellations, and route urgent calls autonomously.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>View pricing &rarr;</span>
            </Link>

            <div className="service-card">
              <div className="icon">II.</div>
              <h3>AI Chat Agents</h3>
              <p>Turn website traffic into captured leads. Smart chat that lives on your site 24/7, answering specific business questions and getting prospects into your pipeline.</p>
            </div>

            <Link href="/pricing#lead-reactivation" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">III.</div>
              <h3>Lead Reactivation</h3>
              <p>Wake up your dormant database. AI-powered outreach protocols re-engage old leads, identifying who is ready to convert without utilising your human resources.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>Learn more &rarr;</span>
            </Link>

            <Link href="/about" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">IV.</div>
              <h3>Process Automation</h3>
              <p>Eliminate redundant data entry. We connect your telecommunications, CRM, and calendar tools, automating the repetitive work so your team focuses on closing.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>About our team &rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ═══ PROTOCOL ═══ */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">02 &mdash; How We Work</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "5rem" }}>
            The <span className="italic-accent">Protocol.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16" style={{ textAlign: "left" }}>
            {[
              { step: "01", title: "Knowledge Acquisition", desc: "We extract your operational data \u2014 FAQs, schedules, service boundaries, and brand voice. Tell us exactly how you want calls handled, and we construct the baseline." },
              { step: "02", title: "Model Synthesis", desc: "Our engineers synthesise your custom voice agent. A personalised demo is delivered within 24 hours, allowing you to call and hear it live before deployment." },
              { step: "03", title: "Live Integration", desc: "Upon your final verification, the system integrates seamlessly into your existing infrastructure. It begins answering alongside your team instantly." },
            ].map((p) => (
              <div key={p.step} className="protocol-step">
                <div className="step-number">{p.step}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ PERFORMANCE STRIP ═══ */}
      <section className="section-padding section-white container">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "24/7", l: "Availability \u2014 answers 100% of calls vs. 68% industry average" },
              { n: "90%", l: "Cost reduction vs. hiring a full-time receptionist" },
              { n: "< 24hrs", l: "From enquiry to personalised demo" },
              { n: "0", l: "Contracts \u2014 cancel anytime, completely risk-free" },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div className="perf-number">{p.n}</div>
                <div className="perf-label">{p.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready to stop losing <span className="italic-accent">revenue?</span>
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
      </div>
    </>
  );
}
