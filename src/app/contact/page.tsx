"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Voqal AI",
    "description": "Book a free demo or get in touch with Voqal AI. AI receptionist setup within 24 hours. No contracts.",
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

      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span className="section-label">Get Started</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 600, margin: "0 auto 2rem" }}>
              Request <span className="italic-accent">Demonstration.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 500, margin: "0 auto" }}>
              Fill in the form and our team will send you a personalised voice agent demo within 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="form-card" style={{ maxWidth: 700, margin: "0 auto" }}>
            <form name="demo" method="POST" action="/thank-you" data-netlify="true">
              <input type="hidden" name="form-name" value="demo" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="form-label">Name</label>
                  <input type="text" name="name" required className="form-input" placeholder="Your name" />
                </div>
                <div>
                  <label className="form-label">Business</label>
                  <input type="text" name="business" className="form-input" placeholder="Business name" />
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label className="form-label">Email</label>
                <input type="email" name="email" required className="form-input" placeholder="you@business.co.uk" />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label className="form-label">Phone</label>
                <input type="tel" name="phone" className="form-input" placeholder="+44..." />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label className="form-label">Tell us about your needs</label>
                <textarea name="message" rows={4} className="form-textarea" placeholder="How can we help?" />
              </div>

              <button type="submit" className="btn-accent w-full rounded-full" style={{ marginTop: "2.5rem", padding: "1rem", fontSize: "1rem" }}>
                Request Demo
              </button>
            </form>
          </div>
        </Reveal>

        {/* Contact info */}
        <Reveal delay={0.2}>
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <div>
                <span className="form-label" style={{ marginBottom: "0.5rem" }}>UK</span>
                <a href="tel:+442039960962" style={{ display: "block", fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 400 }}>020 3996 0962</a>
              </div>
              <div style={{ width: 1, height: 40, background: "var(--border-subtle)" }} className="hidden sm:block" />
              <div>
                <span className="form-label" style={{ marginBottom: "0.5rem" }}>US</span>
                <a href="tel:+13322641587" style={{ display: "block", fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 400 }}>+1 (332) 264-1587</a>
              </div>
              <div style={{ width: 1, height: 40, background: "var(--border-subtle)" }} className="hidden sm:block" />
              <div>
                <span className="form-label" style={{ marginBottom: "0.5rem" }}>Email</span>
                <a href="mailto:info@voqalai.com" style={{ display: "block", fontSize: "1.1rem", color: "var(--text-primary)", fontWeight: 400 }}>info@voqalai.com</a>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
