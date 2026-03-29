"use client";

import { Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const trustedBy = ["Dental", "Medical", "Legal", "Property", "Trades", "Finance"];

export default function Home() {
  return (
    <>
      {/* ═══ HERO — Dark, full viewport ═══ */}
      <section className="fixed inset-0 h-screen w-full overflow-hidden">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video autoPlay loop muted playsInline className="hero-video absolute inset-0 h-full w-full object-cover" style={{ filter: "brightness(0.85)" }}>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,5,15,0.7) 0%, rgba(0,20,40,0.25) 40%, rgba(0,15,35,0.2) 70%, rgba(0,5,15,0.6) 100%)" }} />
        <div className="glitch-overlay" />
        <div className="glitch-bar" />
        <svg className="static-noise" xmlns="http://www.w3.org/2000/svg">
          <filter id="static">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" seed="42" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" />
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

          <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", maxWidth: 460, marginTop: "1.5rem", lineHeight: 1.6 }}>
            AI receptionist that answers, books, and supports your business 24/7.
          </p>

          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Call Now &amp; Hear Our AI Receptionist in Action
          </p>
          <a href="tel:+442039960962" className="hero-cta rounded-full" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "1rem 3rem", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.04em" }}>
            <Phone className="h-5 w-5" style={{ color: "#87FB89" }} /> 020 3996 0962
          </a>

          {/* Marquee */}
          <div className="absolute bottom-0 left-0 right-0 z-[8]" style={{ paddingBottom: "4rem", paddingTop: "3rem" }}>
            <div className="flex items-center" style={{ gap: "2rem", paddingLeft: "clamp(2rem, 5vw, 5rem)", paddingRight: "clamp(2rem, 5vw, 5rem)" }}>
              <span className="hidden lg:block shrink-0" style={{ fontSize: "0.75rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)" }}>Trusted across<br />every sector</span>
              <div className="relative flex-1 overflow-hidden marquee-mask">
                <div className="animate-marquee flex w-max items-center gap-10">
                  {[...trustedBy, ...trustedBy].map((name, i) => (
                    <span key={i} className="shrink-0" style={{ fontSize: "0.9rem", fontWeight: 500, letterSpacing: "0.05em", color: "rgba(255,255,255,0.6)" }}>{name}</span>
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

      {/* ═══ WHY VOQAL AI ═══ */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <span className="section-label">The Problem</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              Why <span className="italic-accent">Voqal AI.</span>
            </h2>
            <div style={{ textAlign: "left" }}>
              <p className="body-text" style={{ maxWidth: "none" }}>
                Every day, UK businesses lose revenue to calls that ring out. Research from Forbes (2023) found that 67% of customers hang up when they cannot reach a real person &mdash; and most never call back. For a dental practice handling 40 calls a day, even a 15% miss rate means six potential patients lost before lunch. Multiply that across a week, a month, a year, and the cost compounds into tens of thousands in lost revenue.
              </p>
              <p className="body-text" style={{ maxWidth: "none", marginTop: "1rem" }}>
                Human receptionists are effective during office hours, but they cannot answer at 7&nbsp;a.m. on a Saturday or during a bank-holiday weekend &mdash; precisely when many customers try to book. Voqal AI bridges that gap with voice agents that pick up in under two seconds, handle appointment scheduling, qualify leads, and route urgent enquiries, all without putting a single caller on hold. Because the system runs around the clock and handles multiple calls simultaneously, capacity is never a bottleneck.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ SERVICES — Light, editorial ═══ */}
      <section id="services" className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <span className="section-label">01 &mdash; What We Do</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "2rem" }}>
              Intelligent <span className="italic-accent">Capabilities.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: "none", margin: "0 auto" }}>
              With 5.5 million UK SMEs relying on phone calls (FSB, 2024), every missed call is lost revenue. 80% of callers sent to voicemail will not leave a message (PATLive, 2023) &mdash; they simply move on to the next business in their search results.
            </p>
            <p className="body-text" style={{ marginTop: "1rem", maxWidth: "none", margin: "1rem auto 0" }}>
              Our AI voice agents answer every call, book appointments, and qualify leads &mdash; 24/7. Leads contacted within five minutes are 21&times; more likely to convert (MIT/InsideSales.com).
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ marginTop: "4rem" }}>
            <Link href="/pricing" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">I.</div>
              <h3>Voice AI Agents</h3>
              <p>Our voice AI agents answer calls in under two seconds, 24 hours a day, 365 days a year. They handle appointment booking, FAQ responses, lead qualification, rescheduling, and urgent call routing &mdash; all without human intervention. Each agent is custom-trained on your business knowledge, services, and tone of voice, so callers receive accurate, personalised answers from the first ring.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>View pricing &rarr;</span>
            </Link>

            <div className="service-card">
              <div className="icon">II.</div>
              <h3>AI Chat Agents</h3>
              <p>Turn website visitors into booked appointments with an AI chat widget that works around the clock. Embedded on your site via a single script tag, the agent answers business-specific questions, captures contact details, and feeds qualified leads directly into your CRM or calendar &mdash; converting passive browsing into active pipeline without any manual follow-up.</p>
            </div>

            <Link href="/pricing#lead-reactivation" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">III.</div>
              <h3>Lead Reactivation</h3>
              <p>Most businesses have hundreds of dormant contacts sitting untouched in their CRM. Our AI outreach reactivates those leads with natural voice conversations, identifying who is ready to buy now. You pay nothing upfront &mdash; we only charge when a lead meets your conversion criteria. Typical reactivation rates run 15&ndash;20%, compared with 2&ndash;5% from manual follow-up.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>Learn more &rarr;</span>
            </Link>

            <Link href="/about" className="service-card block" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="icon">IV.</div>
              <h3>Process Automation</h3>
              <p>Eliminate redundant data entry by connecting your phone system, CRM, calendar, and workflow tools into a single automated pipeline. Using integrations with Zapier, HubSpot, Calendly, and 6,000+ other applications, we ensure that every call outcome &mdash; booked appointment, qualified lead, or follow-up task &mdash; flows into the right system without your team lifting a finger.</p>
              <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>About our team &rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ═══ PROTOCOL ═══ */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">02 &mdash; How We Work</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "5rem" }}>
            How It <span className="italic-accent">Works.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16" style={{ textAlign: "left" }}>
            {[
              { step: "01", title: "We Learn Your Business", desc: "Share your FAQs, opening hours, services, and how you want calls handled. We use this to train your AI receptionist on your specific business." },
              { step: "02", title: "We Build Your AI Agent", desc: "Our team builds your custom voice agent. You get a personalised demo within 24 hours \u2014 call it and hear it live before going ahead." },
              { step: "03", title: "You Go Live", desc: "Once you\u2019re happy, we connect it to your phone system. Your AI receptionist starts answering calls alongside your team instantly." },
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

      {/* ═══ WHO IT'S FOR ═══ */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">03 &mdash; Who We Serve</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            Built for <span className="italic-accent">Every Sector.</span>
          </h2>
          <p className="body-text" style={{ maxWidth: 600, margin: "0 auto 3rem" }}>
            Our voice agents adapt to the language, workflows, and compliance requirements of your industry. Each deployment is custom-trained on sector-specific terminology so callers get accurate answers on the first call.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6" style={{ maxWidth: 800, margin: "0 auto" }}>
            {[
              { name: "Dental Practices", benefit: "Reduce no-shows with automated appointment confirmations" },
              { name: "Law Firms", benefit: "Qualify new enquiries by case type before they reach a fee earner" },
              { name: "Trades & Home Services", benefit: "Capture every job lead while you\u2019re on-site" },
              { name: "Medical Clinics", benefit: "Triage patient enquiries after hours and route urgent cases" },
              { name: "Estate Agents", benefit: "Book viewings instantly and capture buyer requirements 24/7" },
              { name: "Accountancy Firms", benefit: "Handle tax-deadline call surges without temporary staff" },
            ].map((ind) => (
              <div key={ind.name} style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-subtle)", textAlign: "left" }}>
                <strong style={{ fontSize: "1rem", color: "var(--text-primary)", display: "block", marginBottom: "0.35rem" }}>{ind.name}</strong>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{ind.benefit}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ THE EVIDENCE ═══ */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">04 &mdash; The Evidence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            The Data Behind <span className="italic-accent">AI Receptionists.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "80%", l: "Of callers sent to voicemail will not leave a message and will call a competitor instead (PATLive, 2023)" },
              { n: "21\u00d7", l: "Increase in lead conversion when calls are answered within 5 minutes (MIT & InsideSales.com)" },
              { n: "\u00a325K", l: "Average UK receptionist salary per year (ONS ASHE, 2024). AI costs under \u00a32,400/yr \u2014 a 90% saving" },
              { n: "5.5M", l: "Private-sector businesses in the UK, the vast majority relying on inbound phone calls (FSB, 2024)" },
            ].map((s, i) => (
              <div key={i} className="stat-block" style={{ textAlign: "center" }}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ PERFORMANCE STRIP ═══ */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "24/7", l: "Availability \u2014 answers every call, unlike the 67% of customers lost when they can\u2019t reach a person (Forbes, 2023)" },
              { n: "90%", l: "Cost reduction vs. a full-time UK receptionist earning \u00a322,000\u2013\u00a328,000/year (ONS ASHE, 2024)" },
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
              A UK receptionist costs &pound;22,000&ndash;&pound;28,000 per year (ONS ASHE, 2024). Our AI starts from &pound;197/month &mdash; no contracts, demo within 24 hours.
            </p>
            <div className="cta-row">
              <Link href="/contact" className="hero-cta" style={{ display: "inline-flex", alignItems: "center", padding: "0.9rem 2.5rem", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.04em", borderRadius: "9999px", textDecoration: "none" }}>Book Free Demo</Link>
              <Link href="/pricing" className="hero-cta" style={{ display: "inline-flex", alignItems: "center", padding: "0.9rem 2.5rem", fontSize: "1rem", fontWeight: 600, letterSpacing: "0.04em", borderRadius: "9999px", textDecoration: "none", background: "transparent", border: "1.5px solid rgba(255,255,255,0.5)" }}>View Pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}
