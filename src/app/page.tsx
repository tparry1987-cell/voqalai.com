"use client";

import { useEffect, useRef } from "react";
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
    poster: "/images/offering-voice-ai.jpg",
    title: "Voice AI Agents",
    text: "Our voice agents answer calls in under two seconds, 24/7. They handle booking, FAQs, lead qualification, and urgent routing — custom-trained on your business so every caller gets the right answer from the first ring.",
    tag: "I.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4",
    poster: "/images/offering-lead-reactivation.jpg",
    title: "Lead Reactivation",
    text: "Most businesses have hundreds of dormant contacts sitting untouched. Our AI reactivates them with natural SMS conversations and you only pay when a lead converts. Zero upfront cost.",
    tag: "II.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4",
    poster: "/images/offering-process-automation.jpg",
    title: "Process Automation",
    text: "Eliminate redundant data entry by connecting your phone, CRM, calendar, and workflow tools into a single pipeline. Every call outcome flows into the right system without your team lifting a finger.",
    tag: "III.",
  },
];

const INDUSTRIES = [
  { name: "Dental Practices", benefit: "Reduce no-shows, automate confirmations, and handle patient enquiries more efficiently.", Icon: Stethoscope, slug: "ai-receptionist-dental-practices" },
  { name: "Law Firms", benefit: "Qualify enquiries, route cases faster, and improve client response times.", Icon: Scale, slug: "ai-receptionist-law-firms" },
  { name: "Trades & Home Services", benefit: "Capture every lead, automate follow-ups, and respond while your team are on-site.", Icon: Wrench, slug: "ai-receptionist-tradesmen" },
  { name: "Medical Clinics", benefit: "Handle patient communication, triage enquiries, and support after-hours response.", Icon: HeartPulse, slug: "ai-receptionist-medical-practices" },
  { name: "Estate Agents", benefit: "Book viewings instantly, qualify leads, and engage buyers 24/7.", Icon: HomeIcon, slug: "ai-receptionist-estate-agents" },
  { name: "Accountancy Firms", benefit: "Streamline client communication, appointment booking, and enquiry handling during busy periods.", Icon: Calculator, slug: null as string | null },
];

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playHeroVideo = () => {
      const video = heroVideoRef.current;
      if (!video) return;

      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => {
        // Some mobile browsers pause autoplay in low-power or data-saver modes.
      });
    };

    playHeroVideo();
    window.addEventListener("pageshow", playHeroVideo);
    document.addEventListener("visibilitychange", playHeroVideo);

    return () => {
      window.removeEventListener("pageshow", playHeroVideo);
      document.removeEventListener("visibilitychange", playHeroVideo);
    };
  }, []);

  return (
    <div className="cog-redesign" id="top" style={{ position: "relative", background: "#C5C5C5", minHeight: "100vh" }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={heroVideoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        poster="/images/hero-video-poster.jpg"
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

      <div className="hero-mobile-poster" aria-hidden="true" />

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
                Get my demo in 24 hours →
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
          002 / 005 — The Shift
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
          {["AI", "SHOULD", "WORK", "IN", "THE", "REAL", "WORLD"].map((w, i) => (
            <FadeUp key={w + i} as="span" delay={0.15 + i * 0.1} y={36}>
              {w}
            </FadeUp>
          ))}
          <FadeUp
            as="span"
            delay={0.85}
            y={36}
            className="cog-italic"
            style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}
          >
            not just in decks.
          </FadeUp>
        </h2>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", maxWidth: 1200 }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460 }}>
            <FadeUp as="p" delay={0.8} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a3a", margin: 0 }}>
              Voqal AI helps companies turn AI from a vague opportunity into practical systems that improve response times, reduce repetitive work, and connect cleanly with the tools already running the business.
            </FadeUp>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, display: "flex", gap: 32, flexWrap: "wrap", paddingTop: 4 }}>
            {[
              ["Voice", "AI agents for calls, enquiries, and customer communication."],
              ["Workflow", "Automations that remove manual steps and handoffs."],
              ["Systems", "Integrations that make AI useful inside daily operations."],
            ].map(([n, t], i) => (
              <FadeUp key={n} delay={0.95 + i * 0.08}>
                <div className="cog-italic" style={{ fontSize: "clamp(28px, 3vw, 38px)", lineHeight: 1, color: "var(--cog-copper)", marginBottom: 6 }}>
                  {n}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.5, color: "#3a3a3a", maxWidth: 170 }}>{t}</div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={1.25} style={{ marginTop: 48 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#offering" className="cog-btn-primary">See what we build</a>
            <Link href="/audit" className="cog-btn-secondary">Explore the audit</Link>
          </div>
        </FadeUp>
      </section>

      {/* ════════ SECTION 3 — OFFERING ════════ */}
      <section id="offering" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          003 / 005 — Offering
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
                <div className="offering-media-frame">
                  <img
                    className="offering-media-poster"
                    src={card.poster}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video
                    className="offering-media-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                    poster={card.poster}
                  >
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

        <FadeUp delay={1.05} style={{ marginTop: 24 }}>
          <div
            className="cog-services-head-row"
            style={{
              border: "1px solid rgba(0,0,0,0.18)",
              borderRadius: 20,
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              background: "rgba(255,255,255,0.22)",
            }}
          >
            <div style={{ maxWidth: 680 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 10, textTransform: "uppercase" }}>
                AI Opportunity Audit
              </div>
              <h3 style={{ fontSize: "clamp(22px, 2.4vw, 34px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 12px" }}>
                Not sure where AI actually fits?
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "#3a3a3a", margin: 0 }}>
                We can audit your business, map the workflows where AI can create the most leverage, and show you what to automate first — from customer communication to internal operations.
              </p>
            </div>
            <Link href="/audit/" className="cog-btn-primary" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
              Explore the audit
            </Link>
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
          004 / 005 — Case
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
              {["PRACTICAL", "AI", "FOR", "REAL", "BUSINESSES"].map((w, i) => (
                <FadeUp key={w} as="span" delay={0.1 + i * 0.1} y={28}>
                  {w}
                </FadeUp>
              ))}
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="div" delay={0.3} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: 0 }}>
              <p style={{ margin: "0 0 14px" }}>Every business operates differently.</p>
              <p style={{ margin: "0 0 14px" }}>That&apos;s why we build AI systems around the way your business actually works — from voice AI and lead response systems to automations, integrations, and intelligent workflows.</p>
              <p style={{ margin: "0 0 14px" }}>Our solutions are designed to improve response times, remove repetitive work, enhance customer experience, and help businesses operate more efficiently.</p>
              <p style={{ margin: "0 0 16px", color: "rgba(255,255,255,0.86)", fontWeight: 600 }}>Guiding businesses from AI curious to AI native.</p>
              <p className="cog-italic" style={{ margin: 0, color: "var(--cog-copper-light)", fontSize: 16 }}>AI systems built around how your business operates.</p>
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

      {/* ════════ SECTION 5 — CTA ════════ */}
      <section id="cta" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          005 / 005 — Connect
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 1100, margin: "0 0 28px" }}>
            READY TO BUILD<br />
            PRACTICAL <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>AI?</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 480, margin: "0 0 28px" }}>
            Tell us where your team loses time, leads, or momentum. We will show you the AI systems that make sense first — from voice agents to automations, integrations, and intelligent workflows.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="cog-btn-primary">Book a Demo</Link>
            <Link href="/voice-agents" className="cog-btn-secondary">Explore Voice Agents</Link>
            <Link href="/audit" className="cog-btn-secondary">AI Opportunity Audit</Link>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
