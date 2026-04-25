"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { ArrowRight, Phone, Check } from "lucide-react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("there");

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
    const name = (data.get("name") as string || "").trim();
    setFirstName(name.split(/\s+/)[0] || "there");

    try {
      // Netlify Forms — POST URL-encoded form data to the current page
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        body.append(key, value.toString());
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } catch (err) {
      // Even if the Netlify POST fails (e.g. in dev), still show thank-you.
      // Real submissions are captured on production via Netlify's form detection.
      console.error("Form submit error (non-fatal for UX):", err);
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem", paddingBottom: "3rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <span className="section-label">Book a Demo</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Hear your AI <span className="italic-accent">receptionist.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 520, margin: "0 auto" }}>
              Tell us a little about your business and we&rsquo;ll build a personalised demo. You&rsquo;ll receive a call from your own AI receptionist within 24 hours &mdash; no contracts, no obligation.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Form / success */}
      <section className="section-padding section-white container" style={{ paddingTop: 0, paddingBottom: "6rem" }}>
        <Reveal delay={0.1}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            {!submitted ? (
              <>
                {/* Hidden static form for Netlify Forms detection during build.
                    The real submission is the React form below. */}
                <form name="demo" data-netlify="true" hidden>
                  <input name="name" />
                  <input name="email" />
                  <input name="website" />
                  <textarea name="message" />
                </form>

                <form onSubmit={handleSubmit} className="form-card" name="demo">
                  <input type="hidden" name="form-name" value="demo" />

                  <div style={{ display: "grid", gap: "1.5rem" }}>
                    <div>
                      <label htmlFor="name" className="form-label">Your name</label>
                      <input id="name" name="name" type="text" required autoComplete="name" className="form-input" placeholder="Tom Parry" />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email</label>
                      <input id="email" name="email" type="email" required autoComplete="email" className="form-input" placeholder="you@business.com" />
                    </div>
                    <div>
                      <label htmlFor="website" className="form-label">Business website</label>
                      <input id="website" name="website" type="url" autoComplete="url" className="form-input" placeholder="https://yourbusiness.com" />
                    </div>
                    <div>
                      <label htmlFor="message" className="form-label">
                        Anything we should know? <span style={{ color: "#bbb", textTransform: "none", letterSpacing: "normal", fontSize: "0.7rem", fontWeight: 400, marginLeft: "0.5rem" }}>Optional</span>
                      </label>
                      <textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Opening hours, typical call volume, or questions your AI should handle…" />
                    </div>
                  </div>

                  <button type="submit" disabled={submitting} className="btn rounded-full" style={{ width: "100%", marginTop: "2rem", padding: "1rem", fontSize: "0.95rem", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    {submitting ? "Sending…" : (
                      <>
                        Send My Details
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p style={{ marginTop: "1rem", fontSize: "0.75rem", color: "#999", textAlign: "center", lineHeight: 1.6 }}>
                    By submitting, you agree to our <Link href="/privacy" style={{ textDecoration: "underline", color: "inherit" }}>privacy policy</Link>. We reply within 24 hours. No spam, ever.
                  </p>
                </form>

                <div style={{ marginTop: "2.5rem", textAlign: "center", fontSize: "0.9rem", color: "#888" }}>
                  Prefer to speak now?{" "}
                  <a href="tel:+442039960962" style={{ fontWeight: 600, color: "#111" }}>
                    Call 020 3996 0962 &rarr;
                  </a>
                </div>
              </>
            ) : (
              <div className="form-card" style={{ textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(219,124,84,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <Check className="w-7 h-7" style={{ color: "var(--accent)" }} strokeWidth={2.5} />
                </div>
                <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "0.85rem" }}>
                  Thanks, <span className="italic-accent">{firstName}</span>.
                </h2>
                <p style={{ color: "#555", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 2rem" }}>
                  We&rsquo;ve got your details. Expect a personalised AI receptionist demo in your inbox within 24 hours &mdash; usually sooner.
                </p>
                <div className="cta-row">
                  <a href="tel:+442039960962" className="btn rounded-full" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                    <Phone className="w-4 h-4" />
                    Call Alice now
                  </a>
                  <Link href="/" className="btn-outline">Back to home</Link>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
