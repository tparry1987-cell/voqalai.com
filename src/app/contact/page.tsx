"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

function ContactRow({ Icon, label, value, href }: { Icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <Icon size={18} style={{ color: "var(--cog-copper)", flexShrink: 0 }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 10, letterSpacing: "0.18em", color: "#888", textTransform: "uppercase", marginBottom: 4 }}>{label}</span>
        <span style={{ fontSize: 16, color: "#1a1a1a", fontWeight: 500 }}>{value}</span>
      </div>
    </>
  );
  const style = {
    display: "flex" as const, alignItems: "center" as const, gap: 16,
    padding: "18px 22px",
    border: "1px solid rgba(0,0,0,0.18)", borderRadius: 14,
    background: "rgba(255,255,255,0.35)",
  };
  return href ? <a href={href} style={style}>{inner}</a> : <div style={style}>{inner}</div>;
}

export default function ContactPage() {
  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 60 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Connect · Voqal AI
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 1100, margin: "0 0 28px" }}>
            READY TO STOP<br />
            LOSING <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>revenue?</span>
          </h1>
        </FadeUp>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 480 }}>
            <FadeUp as="p" delay={0.25} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", margin: "0 0 28px" }}>
              Missed calls, slow replies, and manual admin cost businesses revenue every day. Voqal AI starts from £197/month — no contracts, personalised demo within 24 hours.
            </FadeUp>
            <FadeUp delay={0.4} style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
              <a href="tel:+442039960962" className="cog-btn-primary">
                <span className="cog-soundwave" aria-hidden><span /><span /><span /><span /></span>
                Speak to our AI
              </a>
              <Link href="/pricing" className="cog-btn-secondary">View Pricing</Link>
            </FadeUp>
            <FadeUp delay={0.5}>
              <p style={{ fontSize: 13, color: "#3a3a3a", lineHeight: 1.7, margin: 0 }}>
                Prefer to write? Drop us a line at <a href="mailto:contact@voqalai.com" style={{ color: "var(--cog-copper)" }}>contact@voqalai.com</a>. We reply within one working day, always by a real human.
              </p>
            </FadeUp>
          </div>

          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 520, display: "flex", flexDirection: "column", gap: 14 }}>
            <FadeUp delay={0.3}><ContactRow Icon={Phone} label="Main line" value="020 3996 0962" href="tel:+442039960962" /></FadeUp>
            <FadeUp delay={0.4}><ContactRow Icon={Phone} label="International" value="+1 (332) 264-1587" href="tel:+13322641587" /></FadeUp>
            <FadeUp delay={0.5}><ContactRow Icon={Mail} label="Email" value="contact@voqalai.com" href="mailto:contact@voqalai.com" /></FadeUp>
            <FadeUp delay={0.55}><ContactRow Icon={MapPin} label="Operating from" value="Manchester, United Kingdom" /></FadeUp>
            <FadeUp delay={0.65}><ContactRow Icon={MapPin} label="Registered office" value="71–75 Shelton Street, London WC2H 9JQ" /></FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
