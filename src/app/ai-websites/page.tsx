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
  { vertical: "Restaurant Website", note: "Bookings, menu questions and customer enquiries answered 24/7.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3a5a 100%)", href: "/demos/wanderful.html" },
  { vertical: "Accountancy Website", note: "Client questions, onboarding enquiries and appointment requests handled automatically.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f4456 100%)", href: "/demos/rivr.html" },
  { vertical: "Marketing Agency Website", note: "Project enquiries qualified and discovery calls booked automatically.", tint: "linear-gradient(135deg, #1a1a1a 0%, #234842 100%)", href: "/demos/contentflow.html" },
  { vertical: "Salon & Beauty Website", note: "Appointments, treatment questions and product enquiries handled instantly.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2f5a4a 100%)", href: "/demos/wild-daisy.html" },
  { vertical: "Barber Website", note: "Appointment bookings and service questions answered the moment they come in.", tint: "linear-gradient(135deg, #1a1a1a 0%, #56303f 100%)", href: "/demos/velorah-focus-right.html" },
  { vertical: "Dental Website", note: "Patient questions, appointment requests and new enquiries handled automatically.", tint: "linear-gradient(135deg, #1a1a1a 0%, #33384a 100%)", href: "/demos/logoipsum.html" },
  { vertical: "Trades Website", note: "Quote requests captured while your team is out on jobs.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a3d1f 100%)", href: "/demos/weblex.html" },
  { vertical: "Gym Website", note: "Trial bookings, memberships and class questions answered instantly.", tint: "linear-gradient(135deg, #1a1a1a 0%, #2a1a4a 100%)", href: "/demos/fearless-vision.html" },
  { vertical: "Automotive Website", note: "Stock questions, finance enquiries and test drive requests captured live.", tint: "linear-gradient(135deg, #1a1a1a 0%, #222222 100%)", href: "/demos/microvisuals.html" },
  { vertical: "Law Firm Website", note: "Case enquiries qualified and consultations booked before they reach your desk.", tint: "linear-gradient(135deg, #1a1a1a 0%, #1f2a3a 100%)", href: "/demos/vex.html" },
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
            <Link href="/book" className="cog-btn-primary">Book a demo</Link>
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
