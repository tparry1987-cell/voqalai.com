"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Sparkles, Zap } from "lucide-react";
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
  { vertical: "Travel — Wanderful", note: "A cinematic, full-screen travel brand with liquid-glass navigation.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3a5a 100%)", href: "/demos/wanderful.html" },
  { vertical: "DeFi — RIVR", note: "A glassmorphism DeFi dashboard hero with fluid-staking UI.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f4456 100%)", href: "/demos/rivr.html" },
  { vertical: "SaaS — ContentFlow", note: "A scroll-linked SaaS landing page with a live animated analytics dashboard.", tint: "linear-gradient(135deg, #1a1a1a 0%, #234842 100%)", href: "/demos/contentflow.html" },
  { vertical: "E-commerce — Wild Daisy", note: "A playful fragrance e-commerce hero with colour-block product panels and scroll reveals.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f5a4a 100%)", href: "/demos/wild-daisy.html" },
  { vertical: "Social Media — Velorah VHS", note: "A darker cinematic social post with strong vertical offset, VHS overlays, and RGB text glitch.", tint: "linear-gradient(135deg, #1a1a1a 0%, #56303f 100%)", href: "/demos/velorah-focus-right.html" },
  { vertical: "AI Platform — Logoipsum", note: "An AI data platform hero with a live query box and a fading video backdrop.", tint: "linear-gradient(135deg, #1a1a1a 0%, #33384a 100%)", href: "/demos/logoipsum.html" },
  { vertical: "Website Builder — Weblex", note: "A dark full-screen hero with a transparent nav and a seamless looping video.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3d1f 100%)", href: "/demos/weblex.html" },
  { vertical: "Creative Studio — Fearless Vision", note: "A bold creative-studio hero with kinetic headline reveals and a purple accent.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a1a4a 100%)", href: "/demos/fearless-vision.html" },
  { vertical: "AI Imaging — MicroVisuals", note: "An AI image-generation hero with a boomerang video canvas and liquid-glass nav.", tint: "linear-gradient(135deg, #1a1a1a 0%, #222222 100%)", href: "/demos/microvisuals.html" },
  { vertical: "Ventures — VEX", note: "A venture-studio hero with a kinetic char-by-char headline reveal and liquid-glass UI.", tint: "linear-gradient(135deg, #1a1a1a 0%, #1f2a3a 100%)", href: "/demos/vex.html" },
];

const OUTCOMES = [
  "Respond instantly, every time",
  "Capture every enquiry",
  "Qualify leads automatically",
  "Reduce missed opportunities",
  "Increase booked appointments",
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
            Beautiful, AI-powered websites with live chat and a voice agent built in. Scroll to see what we&apos;ve built.
          </FadeUp>

          <FadeUp delay={0.6}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap" }}>
              <Link href="/book" className="cog-btn-ghost-light">Book a demo →</Link>
              <a href="#work" style={{ fontSize: 12, letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)", borderBottom: "1px solid rgba(255,255,255,0.35)", paddingBottom: 2 }}>See what we&apos;ve built</a>
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
                alt="Adrian Wilkinson Luxury Real Estate website"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Detail */}
            <div style={{ padding: "34px 34px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
              <h3 className="cog-h-display" style={{ fontSize: "clamp(22px, 2.4vw, 32px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", color: "#fff", margin: 0 }}>
                Adrian Wilkinson Luxury Real Estate
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
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>Adrian Wilkinson · Trustpilot, April 2026</div>
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
          Demo builds
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "0 0 12px", maxWidth: 720 }}>
          A few of the styles we can build
        </FadeUp>
        <FadeUp as="p" delay={0.18} style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 0 40px" }}>
          Design demos built on premium licensed templates, shown to illustrate what we can build for you — not client projects. Each one can ship with the live chat and voice line working.
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {DEMO_BUILDS.map(({ vertical, note, tint, href }, i) => {
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
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 8px" }}>{vertical}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.65)", margin: "0 0 16px" }}>{note}</p>
                  <Badges tone="dark" />
                  <span style={{ display: "inline-block", marginTop: 16, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, color: "var(--cog-copper-light)" }}>
                    Explore the demo →
                  </span>
                </div>
                {isLive && (
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${vertical} demo`} style={{ position: "absolute", inset: 0, zIndex: 2 }} />
                )}
              </div>
            </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ════════ SECTION 4 — HOW IT'S DIFFERENT (morph back to brand style) ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          Why it&apos;s different
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 12px", maxWidth: 760 }}>
          The website is the front door. The AI is what&apos;s behind it.
        </FadeUp>
        <FadeUp as="p" delay={0.2} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 560, margin: "0 0 44px" }}>
          Anyone can build you a nice-looking website. We build one that works a shift while you&apos;re asleep.
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { Icon: Sparkles, t: "Designs that stop the scroll", b: "Premium, animated hero sections tailored to your brand. The kind of site people screenshot and remember." },
            { Icon: MessageSquare, t: "A chat assistant that knows your business", b: "Answers questions, qualifies enquiries and books appointments — trained on how you actually operate." },
            { Icon: Zap, t: "Instant response, every time", b: "No more leads waiting until Monday. Every enquiry is captured and answered the moment it lands." },
          ].map(({ Icon, t, b }, i) => (
            <FadeUp key={t} delay={0.25 + i * 0.1}>
              <div style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: "28px 26px 30px", height: "100%", background: "rgba(255,255,255,0.14)" }}>
                <Icon size={22} strokeWidth={1.4} style={{ color: "var(--cog-copper)" }} />
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "20px 0 8px" }}>{t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>{b}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ════════ SECTION 5 — WHAT THIS REPLACES (pain, dark) ════════ */}
      <section id="replaces" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 28 }}>
          What it replaces
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40, alignItems: "center" }}>
          <div className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 44px)", fontWeight: 600, lineHeight: 1.22, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.55)" }}>
            {["Missed calls.", "Slow replies.", "Lost leads.", "Contact forms nobody answers.", "Customers waiting until Monday morning."].map((line, i) => (
              <FadeUp key={line} as="div" delay={0.05 + i * 0.1} y={20}>{line}</FadeUp>
            ))}
          </div>
          <FadeUp as="div" delay={0.6} style={{ alignSelf: "center" }}>
            <h2 className="cog-h-display" style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: 0 }}>
              Your website should <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>fix that.</span>
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* ════════ SECTION 6 — MANIFESTO SEPARATOR ════════ */}
      <section id="manifesto" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff", padding: "clamp(80px, 12vw, 160px) 32px", textAlign: "center" }}>
        <FadeUp as="p" delay={0.05} className="cog-h-display" style={{ fontSize: "clamp(40px, 8vw, 104px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", textTransform: "uppercase", margin: 0 }}>
          One site.<br />
          Working <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>three shifts.</span>
        </FadeUp>
      </section>

      {/* ════════ SECTION 7 — VOICE LINE SPOTLIGHT (dark) ════════ */}
      <section id="voice" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 18 }}>
              The part most agencies can&apos;t do
            </FadeUp>
            <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(28px, 3.8vw, 52px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "0 0 18px", maxWidth: 520 }}>
              A website people can actually call
            </FadeUp>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 0 24px" }}>
              Every site can include a dedicated AI phone line.
            </FadeUp>
            <FadeUp as="div" delay={0.3} className="cog-h-display" style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 500, lineHeight: 1.45, color: "#fff" }}>
              {["Customers click to call.", "The AI answers instantly.", "It handles questions, captures enquiries, books appointments, and routes urgent jobs automatically."].map((line, i) => (
                <FadeUp key={line} as="p" delay={0.35 + i * 0.12} y={18} style={{ margin: "0 0 10px", color: i === 2 ? "rgba(255,255,255,0.7)" : "#fff", fontSize: i === 2 ? 15 : undefined, fontWeight: i === 2 ? 400 : 500, lineHeight: i === 2 ? 1.6 : 1.45 }}>
                  {line}
                </FadeUp>
              ))}
            </FadeUp>
          </div>

          {/* Click-to-call visual */}
          <FadeUp delay={0.4} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.18)", borderRadius: 24, padding: "40px 36px", background: "rgba(255,255,255,0.04)", textAlign: "center", maxWidth: 340, width: "100%" }}>
              <div style={{ width: 64, height: 64, borderRadius: 9999, background: "var(--cog-copper)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Phone size={26} strokeWidth={1.8} style={{ color: "#fff" }} />
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Tap to talk to the AI</div>
              <div className="cog-h-display" style={{ fontSize: 26, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>020 3996 0962</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 14 }}>Answered instantly. 24/7.</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════ SECTION 8 — REAL BUSINESS OUTCOMES (ROI) ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "flex-start" }}>
          <div>
            <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
              Built for results
            </FadeUp>
            <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(26px, 3.4vw, 46px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 18px", maxWidth: 480 }}>
              Built for real business outcomes
            </FadeUp>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 16, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 460, margin: 0 }}>
              A missed call from Google Ads can cost hundreds. A slow response can lose the booking completely.
            </FadeUp>
          </div>

          <FadeUp as="div" delay={0.25} style={{ paddingTop: 8 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5a5a5a", marginBottom: 18 }}>
              Voqal AI websites are designed to:
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {OUTCOMES.map((o, i) => (
                <FadeUp key={o} as="div" delay={0.3 + i * 0.08} y={16} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderTop: i === 0 ? "1px solid rgba(0,0,0,0.14)" : undefined, borderBottom: "1px solid rgba(0,0,0,0.14)" }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 9999, background: "var(--cog-copper)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>{i + 1}</span>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "#1a1a1a" }}>{o}</span>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════ SECTION 9 — CTA ════════ */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0.05}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(30px, 4.5vw, 60px)", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 820, margin: "0 0 22px" }}>
            Want one like this?
          </h2>
        </FadeUp>
        <FadeUp as="p" delay={0.18} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 540, margin: "0 0 14px" }}>
          Pick a style you like, or send us your brand. We&apos;ll build a demo with the chat assistant and voice line already working, so you can try it before you commit.
        </FadeUp>
        <FadeUp as="p" delay={0.26} style={{ fontSize: 14, lineHeight: 1.6, color: "#5a5a5a", maxWidth: 540, margin: "0 0 28px" }}>
          Already getting a voice agent with us? Ask about bundling the website in.
        </FadeUp>
        <FadeUp delay={0.34}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="cog-btn-primary">Book a demo</Link>
            <Link href="/contact" className="cog-btn-secondary">Talk to us</Link>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
