"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Inbox } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

// Cinematic hero background — the Slate demo's video (the mountains one).
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260425_081506_cfddbdab-90d5-49b8-aa1a-8f52de33d335.mp4";

// ──────────────────────────────────────────────────────────────────
// Demo builds — each is a hosted standalone page shown as a live
// scaled-down preview, opening full-page on click.
// ──────────────────────────────────────────────────────────────────
const DEMO_BUILDS = [
  { vertical: "Cinematic video hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3a5a 100%)", href: "/demos/wanderful.html" },
  { vertical: "Frosted-glass dashboard", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f4456 100%)", href: "/demos/rivr.html" },
  { vertical: "Animated data dashboard", tint: "linear-gradient(135deg, #1a1a1a 0%, #234842 100%)", href: "/demos/contentflow.html" },
  { vertical: "Bold product showcase", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f5a4a 100%)", href: "/demos/wild-daisy.html" },
  { vertical: "Cinematic VHS style", tint: "linear-gradient(135deg, #1a1a1a 0%, #56303f 100%)", href: "/demos/velorah-focus-right.html" },
  { vertical: "Soft fading-video hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #33384a 100%)", href: "/demos/logoipsum.html" },
  { vertical: "Full-screen video hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3d1f 100%)", href: "/demos/weblex.html" },
  { vertical: "Bold animated headline", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a1a4a 100%)", href: "/demos/fearless-vision.html" },
  { vertical: "Looping video canvas", tint: "linear-gradient(135deg, #1a1a1a 0%, #222222 100%)", href: "/demos/microvisuals.html" },
  { vertical: "Animated text hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #1f2a3a 100%)", href: "/demos/vex.html" },
  { vertical: "Cursor-reveal cyberpunk hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #5a2222 100%)", href: "/demos/augment.html" },
  { vertical: "Character carousel hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #7a4530 100%)", href: "/demos/toonhub.html" },
  { vertical: "Luxury scroll-story hero", tint: "linear-gradient(135deg, #1a1a1a 0%, #213138 100%)", href: "/demos/velar.html" },
  { vertical: "Portal zoom + arc carousel", tint: "linear-gradient(135deg, #1a1a1a 0%, #3a3340 100%)", href: "/demos/auragate.html" },
];

function Badges({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const pill = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    letterSpacing: "0.02em",
    color: isDark ? "rgba(255,255,255,0.82)" : "#3a3a3a",
    border: isDark ? "1px solid rgba(255,255,255,0.22)" : "1px solid rgba(0,0,0,0.18)",
    borderRadius: 9999,
    padding: "5px 12px",
    background: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.4)",
  } as const;
  const ic = isDark ? "var(--cog-copper-light)" : "var(--cog-copper)";
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <span style={pill}><MessageSquare size={13} strokeWidth={1.6} style={{ color: ic }} /> Live AI chat</span>
      <span style={pill}><Phone size={13} strokeWidth={1.6} style={{ color: ic }} /> Voice line built in</span>
    </div>
  );
}

export default function AiWebsitesPage() {
  // Scale each live preview iframe (rendered at a fixed 1280px design width)
  // down to its card's actual width, so the desktop hero shows proportionally.
  useEffect(() => {
    const frames = Array.from(document.querySelectorAll<HTMLElement>(".aiw-frame"));
    const fit = (frame: HTMLElement) => {
      const iframe = frame.querySelector("iframe");
      if (iframe) iframe.style.transform = `scale(${frame.clientWidth / 1280})`;
    };
    const ro = new ResizeObserver((entries) => entries.forEach((e) => fit(e.target as HTMLElement)));
    frames.forEach((f) => { fit(f); ro.observe(f); });
    return () => ro.disconnect();
  }, []);

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <Navbar variant="glass" />

      {/* ════════ SECTION 1 — CINEMATIC HERO (a live demo style as the hero) ════════ */}
      <section id="hero" style={{ position: "relative", height: "100vh", minHeight: 560, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000", zIndex: 2, padding: "0 24px", textAlign: "center" }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video autoPlay muted loop playsInline preload="auto" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.72) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <FadeUp delay={0.1} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 26, display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--cog-copper)" }} />
            AI Websites
          </FadeUp>

          <FadeUp as="h1" delay={0.25} className="cog-h-display" style={{ fontSize: "clamp(38px, 6.4vw, 88px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 22px" }}>
            Do you want a website<br />
            <span className="cog-italic" style={{ fontWeight: 400, color: "var(--cog-copper-light)" }}>like this?</span>
          </FadeUp>

          <FadeUp as="p" delay={0.45} style={{ fontSize: "clamp(15px, 1.6vw, 18px)", lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 560, margin: "0 auto 30px" }}>
            Beautiful, AI-powered websites with live chat and a voice agent built in. Scroll to see what we can build.
          </FadeUp>

          <FadeUp delay={0.6}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
              <Link href="/book?demo=website" className="cog-btn-ghost-light">Book a demo →</Link>
              <a href="#work" style={{ fontSize: 12, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(255,255,255,0.35)", paddingBottom: 2 }}>See what we can build</a>
            </div>
          </FadeUp>
        </div>

        <div aria-hidden style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", zIndex: 2, fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
          Scroll ↓
        </div>
      </section>

      {/* ════════ SECTION 2 — CLIENT WORK (Adrian flagship — REAL, dark luxury) ════════ */}
      <section id="work" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 20 }}>
          Client work — real project
        </FadeUp>

        <FadeUp delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, alignItems: "stretch", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 24, overflow: "hidden", background: "rgba(255,255,255,0.04)" }}>
            {/* Preview — screenshot of the live awrealestate.co.uk site */}
            <div style={{ position: "relative", minHeight: 340, background: "#1a1a1a", overflow: "hidden" }}>
              <img
                src="/images/adrian-flagship.png"
                alt="Adrian's Luxury Real Estate website"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Detail */}
            <div style={{ padding: "34px 34px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <h3 className="cog-h-display" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", color: "#fff", margin: 0 }}>
                Adrian's Luxury Real Estate
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                A full cinematic website for Adrian&apos;s luxury off-plan property business across Cyprus and Greece, with a live AI chat assistant fielding buyer enquiries around the clock. We built it, he took it live.
              </p>

              {/* Trustpilot block — Adrian's real 5-star review (verbatim) */}
              <div style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 14, padding: "16px 18px", background: "rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 8 }}>
                  ★★★★★ &nbsp;Trustpilot
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "#fff", margin: "0 0 10px", fontStyle: "italic" }}>
                  &ldquo;Thomas worked on my Ai web solution for my real estate business selling Cypriot property. Outstanding work from start to finish giving great insight&rdquo;
                </p>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>Adrian · Trustpilot, April 2026</div>
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginTop: 4 }}>
                <a href="https://www.awrealestate.co.uk/" target="_blank" rel="noopener noreferrer" className="cog-btn-primary" style={{ background: "var(--cog-copper)", borderColor: "var(--cog-copper)" }}>View the live site →</a>
              </div>
              <Badges tone="dark" />
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ════════ SECTION 3 — DEMO BUILDS SHOWCASE (dark luxury, live previews) ════════ */}
      <section id="showcase" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontWeight: 600, marginBottom: 16 }}>
          Showcase
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "0 0 12px", maxWidth: 720 }}>
          What we can build
        </FadeUp>
        <FadeUp as="p" delay={0.18} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 0 40px" }}>
          Here are some examples of what we can build. Every one can ship with live AI chat and a voice line built in, with plenty more styles to choose from.
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {DEMO_BUILDS.map(({ vertical, tint, href }, i) => {
            const isLive = href !== "#";
            return (
            <FadeUp key={vertical} delay={0.2 + i * 0.07}>
              <div style={{ position: "relative", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, overflow: "hidden", background: "rgba(255,255,255,0.04)", height: "100%" }}>
                {/* Live animated preview — the real demo, rendered at 1280px and scaled to fit */}
                <div className="aiw-frame" style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", background: tint }}>
                  {isLive ? (
                    <iframe
                      src={href}
                      title={vertical}
                      tabIndex={-1}
                      scrolling="no"
                      loading="lazy"
                      aria-hidden="true"
                      style={{ position: "absolute", top: 0, left: 0, width: 1280, height: 800, border: 0, transformOrigin: "top left", transform: "scale(0.3)", pointerEvents: "none" }}
                    />
                  ) : (
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 18 }}>
                      <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Live demo preview</span>
                    </div>
                  )}
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "0 0 16px" }}>{vertical}</h3>
                  <Badges tone="dark" />
                  <span style={{ display: "inline-block", marginTop: 16, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "var(--cog-copper-light)" }}>
                    View website →
                  </span>
                </div>
                {isLive && (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${vertical} website`} style={{ position: "absolute", inset: 0, zIndex: 2 }} />
                )}
              </div>
            </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ════════ SECTION 4 — STATEMENT (morph back to brand style) ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp as="h2" delay={0.05} className="cog-h-display" style={{ fontSize: "clamp(30px, 4.4vw, 60px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.025em", color: "#1a1a1a", margin: "0 0 32px", maxWidth: 720 }}>
          Most websites look good.<br />
          The best ones <span className="cog-italic" style={{ fontWeight: 400, color: "var(--cog-copper)" }}>respond.</span>
        </FadeUp>
        <FadeUp as="div" delay={0.2} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 600 }}>
          <p style={{ margin: "0 0 16px" }}>Your website is often the first place a customer decides whether they trust you. Research has found people can form a first impression of a website in around 50 milliseconds, and Stanford&apos;s web credibility work shows design and usability play a major role in whether a site feels trustworthy.</p>
          <p style={{ margin: "0 0 16px" }}>But looking good is only half the job.</p>
          <p style={{ margin: "0 0 18px" }}>A modern website should help customers take action. It should answer questions, capture enquiries, book appointments, and make it easy for people to speak to your business when they are ready.</p>
          <p style={{ margin: 0, color: "#1a1a1a", fontWeight: 600, fontSize: 18 }}>That is what we build.</p>
        </FadeUp>
      </section>

      {/* ════════ SECTION 5 — WHAT MAKES IT DIFFERENT (dark, 3 cards) ════════ */}
      <section id="capabilities" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 36 }}>
          What makes it different
        </FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { Icon: MessageSquare, t: "AI chat built in", b: "A trained assistant that answers common questions, captures details, qualifies enquiries and helps visitors take the next step." },
            { Icon: Phone, t: "Voice line available", b: "Add a dedicated AI phone line so visitors can call directly from the site and get an instant response." },
            { Icon: Inbox, t: "Built around lead capture", b: "Forms, calls, chats and bookings can be routed into your inbox, CRM, calendar or follow-up system." },
          ].map(({ Icon, t, b }, i) => (
            <FadeUp key={t} delay={0.15 + i * 0.1}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "30px 28px 32px", height: "100%" }}>
                <Icon size={22} strokeWidth={1.5} style={{ color: "var(--cog-copper-light)" }} />
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "20px 0 10px" }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: 0 }}>{b}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 6 — WHY IT MATTERS (grey, stat) ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          Why it matters
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.6vw, 48px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#1a1a1a", margin: "0 0 18px", maxWidth: 680 }}>
          A better website can change how people see your business.
        </FadeUp>
        <FadeUp as="p" delay={0.2} style={{ fontSize: 16, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 600, margin: "0 0 36px" }}>
          Speed, design and response time all affect whether people stay, trust you and take action. Deloitte and Google found that improving mobile site speed by just 0.1 seconds increased conversions on retail and travel sites.
        </FadeUp>

        <FadeUp delay={0.3}>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "flex-end", marginBottom: 38 }}>
            {[
              { n: "+8.4%", l: "retail conversions" },
              { n: "+10.1%", l: "travel conversions" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 700, color: "var(--cog-copper)", lineHeight: 1, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontSize: 13, color: "#5a5a5a", marginTop: 8 }}>{l}</div>
              </div>
            ))}
            <div style={{ fontSize: 12, color: "#8a8a8a", maxWidth: 210, lineHeight: 1.5 }}>from a 0.1-second mobile speed improvement — Deloitte &amp; Google</div>
          </div>
        </FadeUp>

        <FadeUp as="div" delay={0.4} className="cog-h-display" style={{ fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.01em", color: "#1a1a1a", maxWidth: 640 }}>
          <p style={{ margin: "0 0 6px" }}>So the point is not just to have a prettier website.</p>
          <p style={{ margin: 0 }}>The point is to create a <span className="cog-italic" style={{ fontWeight: 400, color: "var(--cog-copper)" }}>faster, smarter customer journey.</span></p>
        </FadeUp>
      </section>

      {/* ════════ SECTION 6.5 — PRICING (dark, 3 build tiers) ════════ */}
      <section id="pricing" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 16 }}>
          Pricing
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 12px", maxWidth: 720 }}>
          Straightforward pricing.
        </FadeUp>
        <FadeUp as="p" delay={0.18} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 0 40px" }}>
          Clear pricing to get your business online. Every build includes a care plan from £49/mo (hosting, updates, edits). Add AI chat, a voice agent and automations whenever you&apos;re ready, priced below. Not sure which fits? We&apos;ll show you a working demo first.
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "stretch" }}>
          {[
            {
              name: "Launch Lite",
              price: "£695",
              from: true,
              who: "Get your business online fast and looking sharp, on one of our templates.",
              features: ["2 pages — home + contact", "Smart Voqal template design", "Mobile-responsive & fast", "Contact form & click-to-call", "Your details, hours & location set up"],
              highlight: false,
              cta: "Book a demo →",
            },
            {
              name: "Launch",
              price: "£997",
              from: true,
              who: "A clean, modern site shaped around your brand, built to bring in enquiries.",
              features: ["Up to 3 pages", "Design tailored to your brand", "Enquiry & contact form", "Click-to-call button", "Basic SEO setup", "Launch support"],
              highlight: false,
              cta: "Book a demo →",
            },
            {
              name: "Standard",
              price: "£2,497",
              from: false,
              who: "A bigger, premium site with booking, your branding and copy done properly.",
              features: ["Everything in Launch", "Up to 10 pages + blog / CMS", "Premium custom design & copywriting", "Booking & lead-capture flows", "CRM integration", "Full on-page SEO"],
              highlight: true,
              cta: "Book a demo →",
            },
            {
              name: "Full-Stack",
              price: "£4,997",
              from: true,
              who: "The complete build: membership, payments and the wiring for your full AI stack.",
              features: ["Everything in Standard", "Membership / login & payments", "Custom backend & integrations", "Voice-ready & chat-ready setup", "Automation wired in", "Scoped bespoke with you"],
              highlight: false,
              cta: "Talk to us →",
            },
          ].map(({ name, price, from, who, features, highlight, cta }, i) => (
            <FadeUp key={name} delay={0.2 + i * 0.1}>
              <div style={{ position: "relative", border: highlight ? "1px solid var(--cog-copper)" : "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "30px 28px 32px", height: "100%", background: highlight ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column" }}>
                {highlight && (
                  <span style={{ position: "absolute", top: 18, right: 20, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--cog-copper-light)" }}>
                    Most chosen
                  </span>
                )}
                <div style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 12 }}>{name}</div>
                <div className="cog-h-display" style={{ fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {from && <span style={{ display: "block", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontWeight: 500, marginBottom: 6 }}>From</span>}
                  {price}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: "14px 0 20px" }}>{who}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {features.map((f) => (
                    <li key={f} style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(255,255,255,0.82)", display: "flex", gap: 10 }}>
                      <span aria-hidden style={{ color: "var(--cog-copper-light)", flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/book?demo=website" className={highlight ? "cog-btn-primary" : "cog-btn-ghost-light"} style={highlight ? { background: "var(--cog-copper)", borderColor: "var(--cog-copper)" } : undefined}>
                  {cta}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp as="p" delay={0.46} style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", maxWidth: 640, margin: "20px 0 0" }}>
          Just need a single page to get online? One-page sites from £495.
        </FadeUp>

        <FadeUp as="h3" delay={0.5} style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cog-copper-light)", fontWeight: 600, margin: "44px 0 18px" }}>
          Add on as you grow
        </FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16, alignItems: "stretch" }}>
          {[
            { name: "Care plan", price: "from £49/mo", note: "Free for your first 3 months with any build, then from £49/mo. Hosting, security, backups and edits." },
            { name: "AI chat assistant", price: "£69/mo", note: "£79/mo on its own. Trained on your business, answers enquiries on your site 24/7." },
            { name: "AI voice agent", price: "from £169/mo", note: "£197/mo on its own. Save £336 a year. Answers your calls and books jobs, including out of hours." },
            { name: "Automation", price: "from £129/mo", note: "£150/mo on its own. Lead follow-up, CRM and the everyday glue between your tools." },
          ].map(({ name, price, note }, i) => (
            <FadeUp key={name} delay={0.5 + i * 0.06}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "18px 20px", height: "100%", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 6 }}>{name}</div>
                <div className="cog-h-display" style={{ fontSize: 22, fontWeight: 700, color: "var(--cog-copper-light)", letterSpacing: "-0.01em" }}>{price}</div>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.6)", margin: "8px 0 0" }}>{note}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp as="p" delay={0.8} style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 640, margin: "28px 0 0" }}>
          These are your prices as a Voqal website client, cheaper than buying them on their own. Every site ships with a privacy and cookie policy and is built to modern accessibility standards.
        </FadeUp>
      </section>

      {/* ════════ SECTION 7 — FINAL CTA ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp as="h2" delay={0.05} className="cog-h-display" style={{ fontSize: "clamp(32px, 4.8vw, 64px)", fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.025em", color: "#1a1a1a", margin: "0 0 22px", maxWidth: 820 }}>
          Want a website <span className="cog-italic" style={{ fontWeight: 400, color: "var(--cog-copper)" }}>like this?</span>
        </FadeUp>
        <FadeUp as="p" delay={0.18} style={{ fontSize: 16, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 560, margin: "0 0 8px" }}>
          Choose a style you like, send us your brand, or let us create something from scratch. We can build a working demo with AI chat and voice options connected, so you can see how it feels before committing.
        </FadeUp>
        <FadeUp delay={0.3}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "18px 0" }}>
            <Link href="/book?demo=website" className="cog-btn-primary">Book a demo</Link>
            <Link href="/contact" className="cog-btn-secondary">Talk to us</Link>
          </div>
        </FadeUp>
        <FadeUp as="p" delay={0.4} style={{ fontSize: 13, lineHeight: 1.6, color: "#5a5a5a", maxWidth: 540, margin: 0 }}>
          Already using a Voqal AI voice agent? Ask about bundling your website into the package.
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
