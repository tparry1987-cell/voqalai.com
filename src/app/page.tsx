"use client";

import Link from "next/link";
import { Stethoscope, Scale, Wrench, HeartPulse, Home as HomeIcon, Calculator } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4";

const SERVICE_CARDS = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4",
    title: "Voice AI Agents",
    text: "Our voice agents answer calls in under two seconds, 24/7. They handle booking, FAQs, lead qualification, and urgent routing — custom-trained on your business so every caller gets the right answer from the first ring.",
    tag: "I.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4",
    title: "Lead Reactivation",
    text: "Most businesses have hundreds of dormant contacts sitting untouched. Our AI reactivates them with natural SMS conversations and you only pay when a lead converts. Zero upfront cost.",
    tag: "II.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4",
    title: "Process Automation",
    text: "Eliminate redundant data entry by connecting your phone, CRM, calendar, and workflow tools into a single pipeline. Every call outcome flows into the right system without your team lifting a finger.",
    tag: "III.",
  },
];

const INDUSTRIES = [
  { name: "Dental Practices", benefit: "Reduce no-shows with automated appointment confirmations.", Icon: Stethoscope, slug: "ai-receptionist-dental-practices" },
  { name: "Law Firms", benefit: "Qualify new enquiries by case type before they reach a fee earner.", Icon: Scale, slug: "ai-receptionist-law-firms" },
  { name: "Trades & Home Services", benefit: "Capture every job lead while you're on-site.", Icon: Wrench, slug: "ai-receptionist-tradesmen" },
  { name: "Medical Clinics", benefit: "Triage patient enquiries after hours and route urgent cases.", Icon: HeartPulse, slug: "ai-receptionist-medical-practices" },
  { name: "Estate Agents", benefit: "Book viewings instantly and capture buyer requirements 24/7.", Icon: HomeIcon, slug: "ai-receptionist-estate-agents" },
  { name: "Accountancy Firms", benefit: "Handle tax-deadline call surges without temporary staff.", Icon: Calculator, slug: null as string | null },
];

const EVIDENCE = [
  { n: "< 2s", l: "Answer time — every call, day or night." },
  { n: "67%", l: "Of customers hang up when they can't reach a real person. (Forbes, 2023)" },
  { n: "21×", l: "More likely to convert when answered in five minutes. (MIT / InsideSales.com)" },
  { n: "80%", l: "Of voicemail callers won't leave a message. (PATLive, 2023)" },
  { n: "£25K", l: "Average UK receptionist salary. Voqal AI from £197/mo." },
  { n: "5.5M", l: "UK SMEs rely on inbound phone calls. (FSB, 2024)" },
  { n: "91M", l: "Active UK mobile subscriptions. (Ofcom, 2024)" },
  { n: "$80B", l: "Conversational-AI savings projected by 2026. (Gartner)" },
];

export default function Home() {
  return (
    <div className="cog-redesign" id="top" style={{ position: "relative", background: "#C5C5C5", minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0) 55%)",
        }}
      />

      <Navbar variant="glass" />

      {/* ════════ SECTION 1 — HERO ════════ */}
      <section id="hero" style={{ position: "relative", zIndex: 1, height: "100vh", display: "flex", alignItems: "center", padding: "70px 32px 80px 32px" }}>
        <div className="cog-hero-left speakable-hero" style={{ maxWidth: 760 }}>
          <FadeUp as="div" delay={0.1} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 32, display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--cog-copper)" }} />
            Global AI Systems
          </FadeUp>

          <FadeUp as="h1" delay={0.3} className="cog-h-display" style={{ fontSize: "clamp(30px, 3.8vw, 56px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.025em", color: "#fff", margin: "0 0 24px", maxWidth: 700 }}>
            Helping businesses embrace AI.
          </FadeUp>

          <FadeUp as="p" delay={0.55} style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.85)", maxWidth: 540, margin: "0 0 24px" }}>
            Voice agents, automations, and intelligent systems designed to integrate seamlessly into the way your business already works.
          </FadeUp>

          <FadeUp as="p" delay={0.7} className="cog-italic" style={{ fontSize: "clamp(18px, 1.6vw, 22px)", color: "var(--cog-copper-light)", lineHeight: 1.4, letterSpacing: "-0.005em", margin: "0 0 44px", maxWidth: 480 }}>
            From AI curious to AI native.
          </FadeUp>

          <FadeUp delay={0.95}>
            <div className="cog-hero-buttons" style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
              <Link href="/book" className="cog-btn-ghost-light" style={{ paddingInline: 28 }}>
                Hear it in action →
              </Link>
              <a
                href="tel:+442039960962"
                style={{ fontSize: 12, letterSpacing: "0.04em", color: "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}
              >
                or call 020 3996 0962
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════ SECTION 2 — STATEMENT (grey solid) ════════ */}
      <section id="statement" className="cog-section-pad-lg speakable-why" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          002 / 006 — The Problem
        </FadeUp>

        <h2
          className="cog-h-display"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25em",
            margin: "0 0 32px",
            maxWidth: 900,
          }}
        >
          {["EVERY", "MISSED", "CALL", "IS", "LOST"].map((w, i) => (
            <FadeUp key={w + i} as="span" delay={0.15 + i * 0.1} y={36}>
              {w}
            </FadeUp>
          ))}
          <FadeUp
            as="span"
            delay={0.65}
            y={36}
            className="cog-italic"
            style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}
          >
            revenue.
          </FadeUp>
        </h2>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", maxWidth: 1200 }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460 }}>
            <FadeUp as="p" delay={0.8} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a3a", margin: 0 }}>
              UK businesses lose tens of thousands a year to calls that ring out. Voqal AI answers every one in under two seconds, around the clock — no hold music, no voicemail, no excuses.
            </FadeUp>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 4 }}>
            {[
              ["67%", "Hang up when they can't reach a real person."],
              ["80%", "Won't leave a voicemail."],
              ["< 2s", "Voqal AI picks up."],
            ].map(([n, t], i) => (
              <FadeUp key={n} delay={0.95 + i * 0.08}>
                <div className="cog-italic" style={{ fontSize: 38, lineHeight: 1, color: "var(--cog-copper)", marginBottom: 6 }}>
                  {n}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: "#3a3a3a", maxWidth: 140 }}>{t}</div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={1.25} style={{ marginTop: 48 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#offering" className="cog-btn-primary">See what we build</a>
            <Link href="/pricing" className="cog-btn-secondary">View Pricing</Link>
          </div>
        </FadeUp>
      </section>

      {/* ════════ SECTION 3 — OFFERING ════════ */}
      <section id="offering" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          003 / 006 — Offering
        </FadeUp>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 40 }}>
          <div className="cog-services-head-col" style={{ width: "32%" }}>
            <h2
              className="cog-h-display"
              style={{
                fontSize: "clamp(26px, 3vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                maxWidth: 360,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.25em",
                margin: 0,
              }}
            >
              {["EXPLORE", "WHAT", "WE", "OFFER"].map((w, i) => (
                <FadeUp key={w} as="span" delay={0.1 + i * 0.1} y={28}>
                  {w}
                </FadeUp>
              ))}
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="p" delay={0.25} style={{ fontSize: 14, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 460, margin: 0 }}>
              We engineer end-to-end AI systems for ambitious modern businesses — voice agents, lead reactivation, and the workflow plumbing that connects it all to the tools you already use.
            </FadeUp>
          </div>
        </div>

        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, gridAutoRows: "1fr" }}>
          {SERVICE_CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={0.4 + i * 0.15}>
              <article
                style={{
                  background: "transparent",
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: 16,
                  height: "100%",
                }}
              >
                <div style={{ width: "auto", aspectRatio: "4 / 3", position: "relative", overflow: "hidden", marginInline: 16, borderRadius: 12 }}>
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}>
                    <source src={card.video} type="video/mp4" />
                  </video>
                </div>
                <div style={{ padding: "24px 28px 28px 28px" }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 10 }}>
                    {card.tag}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 14px" }}>{card.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>{card.text}</p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.9} style={{ marginTop: 32 }}>
          <div className="cog-cards-grid" style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: "28px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 10 }}>IV.</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px" }}>AI Chat Agents</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>
                Turn website visitors into booked appointments. An AI widget that answers business-specific questions, captures details, and feeds qualified leads into your CRM or calendar — around the clock.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 10 }}>V.</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px" }}>AI-Enhanced Websites</h3>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>
                Sites that generate leads while you sleep. Voice agents, chat, capture, and automations woven in from day one — not bolted on as afterthoughts. From real estate to trades.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ════════ SECTION 4 — INDUSTRIES (transparent — fixed hero video shows through) ════════ */}
      <section id="industries" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "transparent", color: "#fff" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: -1,
            background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
          004 / 006 — Case
        </FadeUp>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 40 }}>
          <div className="cog-services-head-col" style={{ width: "32%" }}>
            <h2
              className="cog-h-display"
              style={{
                fontSize: "clamp(26px, 3vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#fff",
                maxWidth: 380,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.25em",
                margin: 0,
              }}
            >
              {["BUILT", "FOR", "EVERY", "SECTOR"].map((w, i) => (
                <FadeUp key={w} as="span" delay={0.1 + i * 0.1} y={28}>
                  {w}
                </FadeUp>
              ))}
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="p" delay={0.3} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", maxWidth: 460, margin: 0 }}>
              Our voice agents adapt to the language, workflows and compliance requirements of your industry. Each deployment is custom-trained on sector-specific terminology so callers get accurate answers on the first call.
            </FadeUp>
          </div>
        </div>

        <div className="cog-industries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {INDUSTRIES.map(({ name, benefit, Icon, slug }, i) => {
            const inner = (
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 20,
                  padding: "28px 28px 32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 200,
                  transition: "border-color 0.25s ease",
                  cursor: slug ? "pointer" : "default",
                }}
              >
                <Icon size={22} strokeWidth={1.4} style={{ color: "var(--cog-copper-light)" }} />
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "20px 0 8px" }}>{name}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>{benefit}</p>
                </div>
              </div>
            );
            return (
              <FadeUp key={name} delay={0.3 + i * 0.08}>
                {slug ? <Link href={`/${slug}/`} style={{ display: "block", height: "100%", color: "inherit", textDecoration: "none" }}>{inner}</Link> : inner}
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ════════ SECTION 5 — EVIDENCE (grey solid) ════════ */}
      <section id="evidence" className="cog-section-pad-lg speakable-stats" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666" }}>
            005 / 006 — The Evidence
          </FadeUp>
          <FadeUp delay={0.05} style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.18)", maxWidth: 280 }}>{""}</FadeUp>
        </div>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 56 }}>
          <div className="cog-services-head-col" style={{ width: "40%" }}>
            <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: 0, maxWidth: 420 }}>
              The data behind <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>AI receptionists.</span>
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 14, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 480, margin: 0 }}>
              Independent research from the FSB, ONS, Forbes, PATLive, MIT, Ofcom and Gartner — the numbers that explain why answering every call within seconds is no longer optional.
            </FadeUp>
          </div>
        </div>

        <div className="cog-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {EVIDENCE.map((s, i) => (
            <FadeUp key={s.n + i} delay={0.1 + i * 0.06}>
              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 16,
                  padding: "24px 22px",
                  height: "100%",
                  background: "rgba(255,255,255,0.18)",
                }}
              >
                <div className="cog-italic" style={{ fontSize: "clamp(36px, 3.5vw, 52px)", color: "var(--cog-copper)", lineHeight: 1, marginBottom: 12 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#3a3a3a" }}>{s.l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 6 — CTA ════════ */}
      <section id="cta" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          006 / 006 — Connect
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 1100, margin: "0 0 28px" }}>
            READY TO STOP<br />
            LOSING <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>revenue?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 480, margin: "0 0 28px" }}>
            A UK receptionist costs £22,000–£28,000 a year (ONS ASHE, 2024). Voqal AI starts from £197/month — no contracts, personalised demo within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="tel:+442039960962" className="cog-btn-primary">
              <span className="cog-soundwave" aria-hidden><span /><span /><span /><span /></span>
              Speak to our AI
            </a>
            <Link href="/book" className="cog-btn-secondary">Book a Demo</Link>
            <Link href="/calculator" className="cog-btn-secondary">Cost calculator</Link>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
