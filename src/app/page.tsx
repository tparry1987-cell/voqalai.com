"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Stethoscope, Scale, Wrench, HeartPulse, Home as HomeIcon, Calculator } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4";

// The 3 cinematic symbol stills + matching motion plates we reuse across
// the 6-card grid. The bottom row repeats them rotated by one column so no
// symbol sits directly under itself.
const SYMBOL_VOICE = "/images/offering-voice-ai.jpg";
const SYMBOL_LEAD = "/images/offering-lead-reactivation.jpg";
const SYMBOL_FLOW = "/images/offering-process-automation.jpg";
const VIDEO_VOICE = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4";
const VIDEO_LEAD = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4";
const VIDEO_FLOW = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4";

const HELP_CARDS = [
  {
    title: "AI Voice Agents",
    text: "Handle calls, bookings, enquiries, and customer communication 24/7.",
    href: "/voice-agents/",
    symbol: SYMBOL_VOICE,
    video: VIDEO_VOICE,
  },
  {
    title: "Lead Reactivation",
    text: "Re-engage old leads automatically through intelligent outreach and follow-up.",
    href: "/calculator/",
    symbol: SYMBOL_LEAD,
    video: VIDEO_LEAD,
  },
  {
    title: "Workflow Automation",
    text: "Remove repetitive admin and streamline day-to-day operations.",
    href: "/audit/",
    symbol: SYMBOL_FLOW,
    video: VIDEO_FLOW,
  },
  {
    title: "CRM & System Integrations",
    text: "Connect AI directly into the tools your business already uses.",
    href: "/audit/",
    symbol: SYMBOL_FLOW,
    video: VIDEO_FLOW,
  },
  {
    title: "AI Consultation & Audits",
    text: "Identify where AI can create the biggest operational impact.",
    href: "/audit/",
    symbol: SYMBOL_VOICE,
    video: VIDEO_VOICE,
  },
  {
    title: "AI Websites & Interfaces",
    text: "Modern AI-powered experiences designed to improve engagement and conversion.",
    href: "/ai-websites/",
    symbol: SYMBOL_LEAD,
    video: VIDEO_LEAD,
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
            We Help Businesses Evolve With AI
          </FadeUp>

          <FadeUp as="p" delay={0.55} style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.85)", maxWidth: 540, margin: "0 0 24px" }}>
            From voice AI and automations to intelligent integrations and operational workflows, we help businesses implement practical AI systems that save time, improve customer experience, and create operational leverage.
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

      {/* ════════ SECTION 2 — WHAT WE HELP WITH ════════ */}
      <section id="offering" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          002 / 005 — Capabilities
        </FadeUp>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 28 }}>
          <div className="cog-services-head-col" style={{ width: "40%" }}>
            <h2 className="cog-h-display" style={{ fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0, maxWidth: 560 }}>
              What We Help Businesses With
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 440, margin: 0 }}>
              Practical AI systems designed around the way your business operates.
            </FadeUp>
          </div>
        </div>

        <div className="cog-help-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, gridAutoRows: "1fr" }}>
          {HELP_CARDS.map(({ title, text, href, symbol, video }, i) => (
            <FadeUp key={title} delay={0.15 + i * 0.08}>
              <Link href={href} className="cog-help-card" style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, paddingTop: 16, height: "100%", display: "flex", flexDirection: "column", color: "inherit", textDecoration: "none", background: "rgba(255,255,255,0.14)", overflow: "hidden" }}>
                <div className="offering-media-frame">
                  <img
                    className="offering-media-poster"
                    src={symbol}
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
                    poster={symbol}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div style={{ padding: "24px 28px 28px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 10px" }}>{title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>{text}</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 3 — PRACTICAL AI ════════ */}
      <section id="statement" className="cog-section-pad-lg speakable-why" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          003 / 005 — Approach
        </FadeUp>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 28 }}>
          <div className="cog-services-head-col" style={{ width: "40%" }}>
            <h2
              className="cog-h-display"
              style={{
                fontSize: "clamp(30px, 4vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                maxWidth: 560,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.25em",
                margin: 0,
              }}
            >
              {["PRACTICAL", "AI", "FOR", "REAL", "BUSINESSES"].map((w, i) => (
                <FadeUp key={w} as="span" delay={0.1 + i * 0.1} y={28} style={w === "AI" ? { color: "var(--cog-copper)" } : undefined}>
                  {w}
                </FadeUp>
              ))}
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="div" delay={0.25} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 600, margin: "0 0 0 auto" }}>
              <p style={{ margin: "0 0 14px" }}>Every business operates differently.</p>
              <p style={{ margin: "0 0 14px" }}>That&apos;s why we build AI systems around the way your business actually works — from voice AI and lead response systems to automations, integrations, and intelligent workflows.</p>
              <p style={{ margin: "0 0 14px" }}>Our solutions are designed to improve response times, remove repetitive work, enhance customer experience, and help businesses operate more efficiently.</p>
              <p style={{ margin: "0 0 16px", color: "#1a1a1a", fontWeight: 600 }}>Guiding businesses from AI curious to AI native.</p>
              <p className="cog-italic" style={{ margin: 0, color: "var(--cog-copper)", fontSize: 18 }}>AI systems built around how your business operates.</p>
            </FadeUp>
          </div>
        </div>

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

        <div className="cog-services-head-row" style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 28 }}>
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
              {["BUILT", "AROUND", "YOUR", "BUSINESS"].map((w, i) => (
                <FadeUp key={w} as="span" delay={0.1 + i * 0.1} y={28}>
                  {w}
                </FadeUp>
              ))}
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="div" delay={0.3} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", maxWidth: 560, margin: 0 }}>
              <p style={{ margin: "0 0 14px" }}>Different sectors need different call flows, workflows, integrations, and customer journeys.</p>
              <p style={{ margin: "0 0 14px" }}>We shape each AI system around the realities of the business, so the result feels useful from day one rather than generic.</p>
              <p className="cog-italic" style={{ margin: 0, color: "var(--cog-copper-light)", fontSize: 16 }}>Operational AI, designed for the way the work actually happens.</p>
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
