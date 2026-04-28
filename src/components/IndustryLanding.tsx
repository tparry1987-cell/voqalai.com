"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { Phone } from "lucide-react";

export type IndustryData = {
  slug: string;
  industryName: string;
  industryNameLower: string;
  pluralNoun: string;
  heroAccent: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problem: string;
  benefits: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  evidence: { stat: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export function IndustryLanding({ data }: { data: IndustryData }) {
  const url = `https://voqalai.com/${data.slug}/`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.metaTitle,
    serviceType: "AI Voice Receptionist",
    provider: {
      "@type": "Organization",
      name: "Voqal AI",
      url: "https://voqalai.com",
    },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description: data.metaDescription,
    url,
    audience: {
      "@type": "BusinessAudience",
      audienceType: data.industryName,
    },
    offers: {
      "@type": "Offer",
      price: "197",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://voqalai.com/pricing",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voqalai.com/" },
      { "@type": "ListItem", position: 2, name: data.industryName, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <span className="section-label">Industry &middot; {data.industryName}</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1.5rem" }}>
              AI Receptionist for <span className="italic-accent">{data.heroAccent}</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 680, margin: "0 auto 2.5rem" }}>
              {data.intro}
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <Link href="/book" className="hero-cta btn-accent" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600 }}>
                <Phone className="w-5 h-5" /> Book Free Demo
              </Link>
              <Link href="/pricing" className="btn-outline" style={{ padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600 }}>View Pricing</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Problem */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="section-label">The Problem</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Every missed call is <span className="italic-accent">lost revenue.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
              {data.problem}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">Why {data.industryName} Choose Voqal</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              A receptionist built for <span className="italic-accent">your sector.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="home-service-grid" style={{ marginTop: "4rem" }}>
            {data.benefits.map((b, i) => (
              <div key={i} className="service-card">
                <div className="icon">{["I.", "II.", "III.", "IV."][i] ?? "V."}</div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Use Cases */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">What It Handles</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Calls handled <span className="italic-accent">end-to-end.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="home-steps-grid" style={{ marginTop: "4rem", maxWidth: 1000, margin: "4rem auto 0" }}>
            {data.useCases.map((u, i) => (
              <div key={i} className="protocol-step">
                <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Evidence */}
      <section className="section-padding section-white container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">The Evidence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
            The data behind <span className="italic-accent">AI receptionists.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="home-stats-grid" style={{ maxWidth: 1080, margin: "0 auto" }}>
            {data.evidence.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="stat-number">{s.stat}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">Questions</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {data.industryName} &middot; <span className="italic-accent">FAQs.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "3rem", maxWidth: 800, marginInline: "auto" }}>
            {data.faqs.map((faq, i) => (
              <details key={i} className="faq-item" style={{ marginBottom: "0.75rem" }}>
                <summary className="faq-question" style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready for a {data.industryNameLower} <span className="italic-accent" style={{ color: "var(--accent-light)" }}>that never misses?</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", marginBottom: "3rem", maxWidth: 540, margin: "0 auto 3rem" }}>
              From &pound;197/month, no contracts. Personalised demo within 24 hours.
            </p>
            <div className="cta-row" style={{ justifyContent: "center" }}>
              <Link href="/book" style={{ background: "#fff", color: "#111", padding: "0.9rem 2.5rem", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em", borderRadius: "9999px", textDecoration: "none" }}>Book Free Demo</Link>
              <Link href="/pricing" style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "0.9rem 2.5rem", fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.02em", borderRadius: "9999px", textDecoration: "none" }}>View Pricing</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
