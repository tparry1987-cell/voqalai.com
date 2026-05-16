"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

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

const OTHER_INDUSTRIES: Array<{ slug: string; shortName: string }> = [
  { slug: "ai-receptionist-dental-practices", shortName: "Dental Practices" },
  { slug: "ai-receptionist-law-firms", shortName: "Law Firms" },
  { slug: "ai-receptionist-tradesmen", shortName: "Tradesmen" },
  { slug: "ai-receptionist-estate-agents", shortName: "Estate Agents" },
  { slug: "ai-receptionist-medical-practices", shortName: "Medical Practices" },
];

export function IndustryLanding({ data }: { data: IndustryData }) {
  const url = `https://voqalai.com/${data.slug}/`;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.metaTitle,
    serviceType: "AI Voice Receptionist",
    provider: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    description: data.metaDescription,
    url,
    audience: { "@type": "BusinessAudience", audienceType: data.industryName },
    offers: { "@type": "Offer", price: "197", priceCurrency: "GBP", availability: "https://schema.org/InStock", url: "https://voqalai.com/pricing" },
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
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* Hero — dark */}
      <section id="industry-hero" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff", paddingTop: 140, paddingBottom: 80 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: 22 }}>
          AI Receptionist · {data.industryName}
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "0 0 28px", maxWidth: 1100 }}>
            AI receptionist for<br />
            <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>{data.heroAccent}</span>
          </h1>
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 580 }}>
            <FadeUp as="p" delay={0.25} style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.85)", margin: "0 0 28px" }}>
              {data.intro}
            </FadeUp>
            <FadeUp delay={0.4} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="tel:+442039960962" className="cog-btn-light">
                <span className="cog-soundwave" aria-hidden><span /><span /><span /><span /></span>
                Speak to our AI
              </a>
              <Link href="/book" className="cog-btn-ghost-light">Book Free Demo</Link>
            </FadeUp>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460 }}>
            <FadeUp as="p" delay={0.35} style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.6)", margin: 0, paddingTop: 8 }}>
              {data.problem}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits — grey */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>THE BENEFITS</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 720, margin: "0 0 48px" }}>
            Built for the way <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>{data.industryName.toLowerCase()} run.</span>
          </h2>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {data.benefits.map((b, i) => (
            <FadeUp key={b.title} delay={0.15 + i * 0.08}>
              <div style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: "28px 32px", height: "100%", background: "rgba(255,255,255,0.2)" }}>
                <Check size={22} strokeWidth={1.8} style={{ color: "var(--cog-copper)", marginBottom: 16 }} />
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1a1a1a", margin: "0 0 12px" }}>{b.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#3a3a3a", margin: 0 }}>{b.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Use Cases — dark grey */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>USE CASES</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", maxWidth: 720, margin: "0 0 48px" }}>
            What it actually <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>handles.</span>
          </h2>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {data.useCases.map((u, i) => (
            <FadeUp key={u.title} delay={0.15 + i * 0.08}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "28px 32px", height: "100%" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper-light)", fontWeight: 600, marginBottom: 12, textTransform: "uppercase" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "0 0 10px" }}>{u.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0 }}>{u.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Evidence — grey */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>THE EVIDENCE</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 48px" }}>
            The numbers behind it.
          </h2>
        </FadeUp>
        <div className="cog-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {data.evidence.map((s, i) => (
            <FadeUp key={s.stat + i} delay={0.15 + i * 0.08}>
              <div>
                <div className="cog-italic" style={{ fontSize: "clamp(36px, 3.5vw, 52px)", color: "var(--cog-copper)", lineHeight: 1, marginBottom: 14 }}>{s.stat}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#3a3a3a" }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FAQ — grey */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>FREQUENTLY ASKED</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 32px" }}>
            Common questions.
          </h2>
        </FadeUp>
        <div style={{ maxWidth: 820 }}>
          {data.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <FadeUp key={faq.q} delay={0.05 * i}>
                <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{
                  width: "100%", background: "transparent",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.18)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.18)",
                  borderLeft: "none", borderRight: "none",
                  padding: "20px 0", textAlign: "left",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 24, color: "#1a1a1a",
                }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{faq.q}</span>
                  {isOpen ? <Minus size={16} style={{ color: "var(--cog-copper)" }} /> : <Plus size={16} style={{ color: "#666" }} />}
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                  <p style={{ padding: "0 0 22px", fontSize: 13, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 720, margin: 0 }}>{faq.a}</p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
        <FadeUp delay={0.5} style={{ marginTop: 60 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="cog-btn-primary">Book Free Demo</Link>
            <Link href="/pricing" className="cog-btn-secondary">View Pricing</Link>
          </div>
        </FadeUp>
      </section>

      {/* Other industries strip */}
      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>OTHER INDUSTRIES WE SERVE</FadeUp>
        <div className="cog-industries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {OTHER_INDUSTRIES.filter((x) => x.slug !== data.slug).map(({ slug, shortName }) => (
            <FadeUp key={slug} delay={0.1}>
              <Link href={`/${slug}/`} style={{ display: "block", border: "1px solid rgba(0,0,0,0.18)", borderRadius: 14, padding: "20px 22px", background: "rgba(255,255,255,0.15)", color: "#1a1a1a" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--cog-copper)", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>
                  AI Receptionist
                </div>
                <div style={{ fontSize: 15, fontWeight: 500 }}>{shortName} →</div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
