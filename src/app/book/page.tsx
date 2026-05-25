"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("there");
  const [demoType, setDemoType] = useState("voice");

  // Preselect the demo type from ?demo= (e.g. the AI Websites page links to /book?demo=website)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("demo");
    if (p === "website" || p === "voice") setDemoType(p);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitting(true);

    const data = new FormData(form);
    const name = ((data.get("name") as string) || "").trim();
    setFirstName(name.split(/\s+/)[0] || "there");

    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        body.append(key, value.toString());
      });
      const response = await fetch(form.action || "/thank-you/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) {
        throw new Error(`Netlify form submission failed with ${response.status}`);
      }
    } catch (err) {
      console.error("Form submit error (non-fatal for UX):", err);
    }
    setSubmitted(true);
  };

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <Navbar />

      {/* Hidden static form for Netlify Forms detection during build. */}
      <form
        name="demo"
        method="POST"
        action="/thank-you/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="demo" />
        <input type="hidden" name="subject" value="New Voqal AI demo request" />
        <input name="demoType" />
        <input name="name" />
        <input name="email" />
        <input name="website" />
        <textarea name="message" />
        <input name="bot-field" />
      </form>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 40 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Book a Demo · Voqal AI
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              YOUR DEMO,<br />
              <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>in 24 hours.</span>
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp as="div" delay={0.3} style={{ fontSize: 15, lineHeight: 1.8, color: "#1a1a1a", margin: 0 }}>
              <div>Drop your details below.</div>
              <div>We&apos;ll build your demo.</div>
              <div>We&apos;ll email you the link within 24 hours.</div>
              <div>Click it whenever — see your AI live.</div>
            </FadeUp>
            <FadeUp as="p" delay={0.5} style={{ fontSize: 13, lineHeight: 1.6, color: "#5a5a5a", margin: "20px 0 0" }}>
              No contracts. No commitment. No card.
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0, paddingBottom: 100 }}>
        <FadeUp delay={0.15}>
          <div style={{ maxWidth: 640, marginLeft: 0, background: "rgba(255,255,255,0.35)", border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: 36 }}>
            {!submitted ? (
              <>
                <form
                  onSubmit={handleSubmit}
                  name="demo"
                  method="POST"
                  action="/thank-you/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  style={{ display: "grid", gap: 20 }}
                >
                  <input type="hidden" name="form-name" value="demo" />
                  <input type="hidden" name="subject" value="New Voqal AI demo request" />
                  <p hidden>
                    <label>Don&apos;t fill this out: <input name="bot-field" /></label>
                  </p>
                  <Field label="What would you like a demo of?" name="demoType" required value={demoType} onChange={setDemoType} options={[{ value: "voice", label: "AI Voice Agent" }, { value: "website", label: "AI Website" }]} />
                  <Field label="Your name" name="name" type="text" required placeholder="Tom Parry" />
                  <Field label="Email" name="email" type="email" required placeholder="you@business.com" />
                  <Field label="Business website" name="website" type="url" placeholder="https://yourbusiness.com" />
                  <Field label="Anything we should know?" name="message" textarea placeholder="Opening hours, typical call volume, or questions your AI should handle…" optional />

                  <button type="submit" disabled={submitting} className="cog-btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 12, marginTop: 8 }}>
                    {submitting ? "Sending…" : (<>Send my details <ArrowRight size={14} /></>)}
                  </button>
                  <p style={{ fontSize: 11, color: "#888", textAlign: "center", lineHeight: 1.6, margin: 0 }}>
                    By submitting, you agree to our <Link href="/privacy" style={{ textDecoration: "underline", color: "#1a1a1a" }}>privacy policy</Link>. Your demo link arrives by email within 24 hours. No spam, ever.
                  </p>
                </form>

                <div style={{ marginTop: 28, textAlign: "center", fontSize: 13, color: "#666" }}>
                  Prefer to speak now?{" "}
                  <a href="tel:+442039960962" style={{ color: "var(--cog-copper)", fontWeight: 600 }}>Call 020 3996 0962 →</a>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 16px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(219,124,84,0.18)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  <Check size={28} color="var(--cog-copper)" strokeWidth={2.5} />
                </div>
                <h2 className="cog-h-display" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.01em", color: "#1a1a1a", margin: "0 0 14px" }}>
                  Thanks, <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>{firstName}.</span>
                </h2>
                <p style={{ color: "#3a3a3a", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 28px" }}>
                  We&apos;ve got your details. Your demo link will land in your inbox within 24 hours — usually sooner. Click it whenever you&apos;re ready to speak to your AI.
                </p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="tel:+442039960962" className="cog-btn-primary"><Phone size={14} /> Call Alice now</a>
                  <Link href="/" className="cog-btn-secondary">Back to home</Link>
                </div>
              </div>
            )}
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder, textarea, optional, options, value, onChange }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean; optional?: boolean; options?: { value: string; label: string }[]; value?: string; onChange?: (v: string) => void }) {
  const inputStyle = { width: "100%", padding: "12px 16px", background: "#fff", border: "1px solid rgba(0,0,0,0.18)", borderRadius: 12, fontFamily: "inherit", fontSize: 14, color: "#1a1a1a" } as const;
  return (
    <div>
      <label htmlFor={name} style={{ display: "block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1a1a1a", fontWeight: 600, marginBottom: 8 }}>
        {label}
        {optional && <span style={{ color: "#888", fontSize: 10, letterSpacing: "normal", textTransform: "none", fontWeight: 400, marginLeft: 8 }}>Optional</span>}
      </label>
      {options ? (
        <select id={name} name={name} required={required} value={value} onChange={(e) => onChange?.(e.target.value)}
          style={{ ...inputStyle, appearance: "auto" }}>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      ) : textarea ? (
        <textarea id={name} name={name} rows={4} placeholder={placeholder}
          style={{ ...inputStyle, lineHeight: 1.55, resize: "vertical" }} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder}
          style={inputStyle} />
      )}
    </div>
  );
}
