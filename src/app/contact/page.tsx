"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Voqal AI",
    "description": "Get in touch with Voqal AI. Personalised AI receptionist demo within 24 hours. No contracts.",
    "url": "https://voqalai.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Voqal AI",
      "url": "https://voqalai.com",
      "telephone": "+442039960962",
      "email": "info@voqalai.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://voqalai.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://voqalai.com/contact" }
    ]
  }
];

export default function ContactPage() {
  return (
    <>
      {contactSchema.map((data, i) => (
        <script key={`contact-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="section-label">Get in touch</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700, margin: "0 auto 1.5rem" }}>
              Speak to the team, <span className="italic-accent">not a bot.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 560, margin: "0 auto" }}>
              Pick the channel that suits you. We reply to every enquiry within 24 hours &mdash; usually much sooner.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: 1080, margin: "4rem auto 0" }}>
            <div className="service-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, color: "var(--accent)", marginBottom: "0.85rem" }}>United Kingdom</div>
              <div style={{ fontSize: "1.35rem", fontWeight: 500, color: "#111", marginBottom: "0.25rem", letterSpacing: "-0.015em" }}>020 3996 0962</div>
              <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1.25rem" }}>24/7 &mdash; speak to our AI receptionist</div>
              <a href="tel:+442039960962" className="text-link">Call now &rarr;</a>
            </div>
            <div className="service-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, color: "var(--accent)", marginBottom: "0.85rem" }}>United States</div>
              <div style={{ fontSize: "1.35rem", fontWeight: 500, color: "#111", marginBottom: "0.25rem", letterSpacing: "-0.015em" }}>+1 (332) 264-1587</div>
              <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1.25rem" }}>24/7 &mdash; speak to our AI receptionist</div>
              <a href="tel:+13322641587" className="text-link">Call now &rarr;</a>
            </div>
            <div className="service-card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, color: "var(--accent)", marginBottom: "0.85rem" }}>Email</div>
              <div style={{ fontSize: "1.35rem", fontWeight: 500, color: "#111", marginBottom: "0.25rem", letterSpacing: "-0.015em" }}>info@voqalai.com</div>
              <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "1.25rem" }}>Reply within 24 hours</div>
              <a href="mailto:info@voqalai.com" className="text-link">Send email &rarr;</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ maxWidth: 960, margin: "4rem auto 0" }}>
            <div style={{ background: "var(--bg-footer)", color: "#fff", borderRadius: "16px", padding: "3rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: "1rem" }}>Prefer a personalised demo?</div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}>
                We&rsquo;ll build you a demo in <span className="italic-accent" style={{ color: "var(--accent-light)" }}>24 hours.</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto 2rem", lineHeight: 1.6 }}>
                Tell us about your business and we&rsquo;ll build a bespoke AI receptionist you can call and test before deciding anything.
              </p>
              <Link href="/book" style={{ background: "#fff", color: "#111", borderRadius: "999px", padding: "0.9rem 2rem", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none", display: "inline-block" }}>
                Book Free Demo &rarr;
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div style={{ marginTop: "4rem", textAlign: "center", fontSize: "0.85rem", color: "#888" }}>
            <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, color: "#999", marginBottom: "0.5rem" }}>Registered office</div>
            <p style={{ lineHeight: 1.7 }}>
              Voqal AI Ltd &middot; Company No. 17080303<br />
              71&ndash;75 Shelton Street, Covent Garden, London, WC2H 9JQ<br />
              <span style={{ color: "#aaa" }}>Operating from Manchester &middot; Serving UK &amp; US</span>
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
