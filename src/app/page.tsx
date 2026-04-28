"use client";

import { Star, Stethoscope, Scale, Wrench, HeartPulse, Home as HomeIcon, Calculator } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";
import Link from "next/link";

const integrations = [
  "OpenAI", "Anthropic", "Gemini", "Retell", "ElevenLabs",
  "Vapi", "Twilio", "Telnyx", "n8n", "Zapier", "HubSpot", "Cal.com",
];

export default function Home() {
  return (
    <>
      {/* ═══ CINEMATIC HERO — fixed backdrop ═══ */}
      <section className="home-hero" aria-label="Hero">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/mobile-hero-still-2x.jpg"
          className="hero-video"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4" type="video/mp4" />
        </video>
        <div className="bottom-blur" />

        <div className="hero-stage">
          <Navbar variant="glass" />

          <div className="hero-content">
            <div className="hero-content-row">
              <div className="hero-copy">
                <div className="hero-kicker blur-fade-up" style={{ animationDelay: "250ms" }}>
                  <span />
                  A new era for modern business
                </div>

                <h1 className="hero-title blur-fade-up" style={{ animationDelay: "400ms" }}>
                  The world is changing.
                </h1>
                <h2 className="hero-subtitle blur-fade-up serif-italic" style={{ animationDelay: "600ms" }}>
                  Time to step through.
                </h2>

                <p className="hero-lede blur-fade-up" style={{ animationDelay: "800ms" }}>
                  Your AI receptionist. Every call answered, every lead captured &mdash; 24/7, in under two seconds.
                </p>

                <div className="hero-proof blur-fade-up" style={{ animationDelay: "950ms" }}>
                  <div><span /><span>&lt; 2s answer</span></div>
                  <div><span /><span>24/7 &middot; 365</span></div>
                  <div><span /><span>Demo in 24 hours</span></div>
                  <div><span /><span>No contracts</span></div>
                </div>

                <div className="hero-cta-row">
                  <a href="tel:+442039960962" className="hero-primary-cta blur-fade-up" style={{ animationDelay: "1100ms" }}>
                    <span className="soundwave" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
                    Speak to our AI now
                  </a>
                  <Link href="/pricing" className="hero-secondary-cta blur-fade-up liquid-glass" style={{ animationDelay: "1200ms" }}>
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>

            {/* Works-with marquee */}
            <div className="hero-marquee blur-fade-up" style={{ animationDelay: "1550ms" }}>
              <div className="hero-marquee-row">
                <span>Works with</span>
                <div className="hero-marquee-mask marquee-mask">
                  <div className="hero-marquee-track animate-marquee">
                    {[...integrations, ...integrations].map((name, i) => (
                      <span key={i}>{name}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCROLLING WHITE CONTENT (overlays fixed hero) ═══ */}
      <div className="relative" style={{ marginTop: "100vh", backgroundColor: "var(--bg-primary)", zIndex: 30 }}>

        {/* ─── 01 · The Problem ─── */}
        <section className="section-padding section-white container" style={{ paddingTop: "7rem" }}>
          <Reveal>
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <span className="section-label">01 &mdash; The Problem</span>
              <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
                Every missed call is <span className="italic-accent">lost revenue.</span>
              </h2>
              <p className="body-text" style={{ maxWidth: 560, margin: "0 auto" }}>
                UK businesses lose tens of thousands of pounds a year to calls that ring out. Voqal AI answers every one of them &mdash; in under two seconds, 24/7.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="why-grid" style={{ marginTop: "4rem" }}>
              <div className="why-tile">
                <div className="why-number">67%</div>
                <h3>Hang up &amp; walk away</h3>
                <p>Of customers hang up when they can&rsquo;t reach a real person &mdash; and go straight to a competitor. <span className="why-source">Forbes, 2023</span></p>
              </div>
              <div className="why-tile">
                <div className="why-number">62%</div>
                <h3>Won&rsquo;t leave voicemail</h3>
                <p>Of callers sent to voicemail hang up without leaving a message. Voicemail is a dead end. <span className="why-source">PATLive, 2023</span></p>
              </div>
              <div className="why-tile">
                <div className="why-number">&lt; 2s</div>
                <h3>Answered, every time</h3>
                <p>Voqal AI picks up in under two seconds, around the clock &mdash; no hold music, no missed calls, no excuses.</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ─── 02 · Services ─── */}
        <section id="services" className="section-padding section-alt container">
          <Reveal>
            <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
              <span className="section-label">02 &mdash; What We Do</span>
              <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
                Intelligent <span className="italic-accent">capabilities.</span>
              </h2>
              <p className="body-text" style={{ maxWidth: "none", margin: "0 auto" }}>
                With 5.5 million UK SMEs relying on phone calls (FSB, 2024), every missed call is lost revenue. 80% of callers sent to voicemail will not leave a message (PATLive, 2023) &mdash; they simply move on to the next business in their search results.
              </p>
              <p className="body-text" style={{ marginTop: "1rem", maxWidth: "none", margin: "1rem auto 0" }}>
                Our AI voice agents answer every call, book appointments, and qualify leads &mdash; 24/7. Leads contacted within five minutes are 21&times; more likely to convert (MIT / InsideSales.com).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="home-service-grid" style={{ marginTop: "4rem" }}>
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

              <Link href="/book" className="service-card home-service-wide block" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="icon">V.</div>
                <h3>AI-Enhanced Websites</h3>
                <p>Your website should generate leads while you sleep, not just sit there looking pretty. We design and build professional sites with voice agents, intelligent chat, lead capture, and smart automations woven in from day one &mdash; not bolted on as afterthoughts. From real estate to trades, our clients get sites that actively convert visitors into booked appointments around the clock.</p>
                <span className="text-link" style={{ marginTop: 12, display: "inline-block" }}>Get in touch &rarr;</span>
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ─── 03 · How It Works ─── */}
        <section className="section-padding section-white container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="section-label">03 &mdash; How We Work</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "5rem" }}>
              How it <span className="italic-accent">works.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="home-steps-grid" style={{ textAlign: "left", maxWidth: 1000, margin: "0 auto" }}>
              {[
                { step: "01", title: "We learn your business", desc: "Share your FAQs, opening hours, services, and how you want calls handled. We use this to train your AI receptionist on your specific business." },
                { step: "02", title: "We build your AI agent", desc: "Our team builds your custom voice agent. You get a personalised demo within 24 hours — call it and hear it live before going ahead." },
                { step: "03", title: "You go live", desc: "Once you’re happy, we connect it to your phone system. Your AI receptionist starts answering calls alongside your team instantly." },
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

        <div className="home-industries-divider" />

        {/* ─── 04 · Industries ─── */}
        <section id="industries" className="home-industries-section">
          <Reveal className="home-industries-heading">
            <span className="section-label">04 &mdash; Who We Serve</span>
            <h2>
              Built for <span className="italic-accent">every sector.</span>
            </h2>
            <p>
              Our voice agents adapt to the language, workflows, and compliance requirements of your industry. Each deployment is custom-trained on sector-specific terminology so callers get accurate answers on the first call.
            </p>
          </Reveal>

          <Reveal className="home-industries-grid-wrap" delay={0.15}>
            <div className="sector-grid">
              {[
                { name: "Dental Practices", benefit: "Reduce no-shows with automated appointment confirmations", Icon: Stethoscope },
                { name: "Law Firms", benefit: "Qualify new enquiries by case type before they reach a fee earner", Icon: Scale },
                { name: "Trades & Home Services", benefit: "Capture every job lead while you’re on-site", Icon: Wrench },
                { name: "Medical Clinics", benefit: "Triage patient enquiries after hours and route urgent cases", Icon: HeartPulse },
                { name: "Estate Agents", benefit: "Book viewings instantly and capture buyer requirements 24/7", Icon: HomeIcon },
                { name: "Accountancy Firms", benefit: "Handle tax-deadline call surges without temporary staff", Icon: Calculator },
              ].map(({ name, benefit, Icon }) => (
                <div key={name} className="sector-tile">
                  <Icon className="sector-icon" size={22} strokeWidth={1.5} />
                  <strong>{name}</strong>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ─── 05 · The Evidence ─── */}
        <section className="speakable-stats section-padding section-white container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="section-label">05 &mdash; The Evidence</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              The data behind <span className="italic-accent">AI receptionists.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="home-stats-grid" style={{ maxWidth: 1080, margin: "0 auto" }}>
              {[
                { n: "80%", l: "Of callers sent to voicemail will not leave a message and will call a competitor instead (PATLive, 2023)" },
                { n: "21×", l: "Increase in lead conversion when calls are answered within 5 minutes (MIT & InsideSales.com)" },
                { n: "£25K", l: "Average UK receptionist salary per year (ONS ASHE, 2024). AI costs under £2,400/yr — a 90% saving" },
                { n: "5.5M", l: "Private-sector businesses in the UK, the vast majority relying on inbound phone calls (FSB, 2024)" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div className="stat-number">{s.n}</div>
                  <div className="stat-label">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ─── 06 · Real Reviews ─── */}
        <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
          <Reveal>
            <span className="section-label">What Our Clients Say</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginBottom: "1.5rem" }}>
              Real results, <span className="italic-accent">real reviews.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 520, margin: "0 auto 3rem" }}>
              Don&rsquo;t just take our word for it &mdash; hear from a client who trusted us to build their AI-enhanced website.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="home-reviews-grid" style={{ maxWidth: 840, margin: "0 auto 3rem" }}>
              {/* Trustpilot review */}
              <div style={{ padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-subtle)", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "var(--bg-white)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00b67a", background: "rgba(0,182,122,0.08)", padding: "0.3rem 0.65rem", borderRadius: "4px" }}>AI-Enhanced Website</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5" style={{ fill: "#00b67a", color: "#00b67a" }} />
                    ))}
                  </div>
                  <blockquote className="italic-accent" style={{ fontSize: "1.05rem", color: "#111", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    &ldquo;Thomas worked on my AI web solution for my real estate business selling Cypriot property. Outstanding work from start to finish giving great insight.&rdquo;
                  </blockquote>
                </div>
                <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "#555" }}>Adrian Wilkinson</span>
                  <a href="https://www.trustpilot.com/review/voqalai.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#00b67a", textDecoration: "none", fontWeight: 500 }}>Trustpilot &rarr;</a>
                </div>
              </div>

              {/* LinkedIn recommendation */}
              <div style={{ padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-subtle)", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "var(--bg-white)" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0a66c2", background: "rgba(10,102,194,0.08)", padding: "0.3rem 0.65rem", borderRadius: "4px" }}>AI-Enhanced Website</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1rem" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5" style={{ fill: "#0a66c2", color: "#0a66c2" }} />
                    ))}
                  </div>
                  <blockquote className="italic-accent" style={{ fontSize: "1.05rem", color: "#111", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                    &ldquo;Tom worked on my AI web solution for Cyprus property. Excellent work with incredible content on schedule.&rdquo;
                  </blockquote>
                </div>
                <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.85rem", color: "#555" }}>Adrian Wilkinson</span>
                  <span style={{ fontSize: "0.8rem", color: "#0a66c2", fontWeight: 500 }}>LinkedIn</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <a href="https://www.trustpilot.com/review/voqalai.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.95rem", color: "#00b67a", textDecoration: "none", fontWeight: 500, marginBottom: "2rem" }}>
              Read our reviews on Trustpilot &rarr;
            </a>
            <TrustpilotWidget />
          </Reveal>
        </section>

        {/* ─── 07 · CTA Banner ─── */}
        <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
          <div className="container">
            <Reveal>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Ready to stop losing <span className="italic-accent" style={{ color: "var(--accent-light)" }}>revenue?</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: "3rem", maxWidth: 540, margin: "0 auto 3rem" }}>
                A UK receptionist costs &pound;22,000&ndash;&pound;28,000 per year (ONS ASHE, 2024). Our AI starts from &pound;197/month &mdash; no contracts, personalised demo within 24 hours.
              </p>
              <div className="cta-row">
                <Link href="/book" style={{ background: "#fff", color: "#111", padding: "0.9rem 2.5rem", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em", borderRadius: "9999px", textDecoration: "none" }}>Book Free Demo</Link>
                <Link href="/pricing" style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "0.9rem 2.5rem", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em", borderRadius: "9999px", textDecoration: "none" }}>View Pricing</Link>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
