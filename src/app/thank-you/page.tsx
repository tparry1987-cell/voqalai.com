"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Cal global is declared elsewhere in the app — call defensively.
    const w = window as unknown as { Cal?: (action: string, params?: Record<string, unknown>) => void };
    if (w.Cal) {
      w.Cal("inline", { elementOrSelector: "#cal-embed", calLink: "voqalai/discovery" });
    }
  }, []);

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 160, paddingBottom: 60, textAlign: "center" }}>
        <FadeUp delay={0}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(219,124,84,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
            <Check size={32} color="var(--cog-copper)" strokeWidth={2.5} />
          </div>
        </FadeUp>
        <FadeUp delay={0.1} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Request Received
        </FadeUp>
        <FadeUp delay={0.2}>
          <h1 className="cog-h-display" style={{ fontSize: "clamp(40px, 6vw, 84px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 24px" }}>
            THANK <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>you.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.35}>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3a3a3a", maxWidth: 540, margin: "0 auto 28px" }}>
            We&apos;ve got your details. We&apos;ll build your personalised AI receptionist and email you the demo link within 24 hours. Click the link whenever you&apos;re ready to speak to your AI — live.
          </p>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
            <a href="tel:+442039960962" className="cog-btn-primary">
              <span className="cog-soundwave" aria-hidden><span /><span /><span /><span /></span>
              Speak now — call Alice
            </a>
            <Link href="/" className="cog-btn-secondary">Back to home</Link>
          </div>
        </FadeUp>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0, paddingBottom: 100 }}>
        <FadeUp delay={0}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 16px", textAlign: "center" }}>
            Skip the wait — <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>book a call now.</span>
          </h2>
          <p style={{ fontSize: 14, color: "#3a3a3a", textAlign: "center", maxWidth: 500, margin: "0 auto 28px" }}>
            Want to speak sooner? Pick a time that works for you and we&apos;ll call you directly.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div id="cal-embed" style={{ maxWidth: 720, margin: "0 auto" }} />
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
