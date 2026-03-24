"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Voqal AI",
    "description": "Voqal AI Ltd builds AI voice agents for UK and US businesses. Founded by Thomas Parry, registered in England & Wales (Company No. 17080303).",
    "url": "https://voqalai.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Voqal AI",
      "url": "https://voqalai.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is an AI voice agent?", "acceptedAnswer": { "@type": "Answer", "text": "An AI voice agent is an intelligent phone system powered by conversational AI that answers calls, books appointments, qualifies leads, and handles enquiries \u2014 just like a trained receptionist, but available 24/7 with no sick days, holidays, or hold music." } },
      { "@type": "Question", "name": "How much does an AI receptionist cost in the UK?", "acceptedAnswer": { "@type": "Answer", "text": "Voqal AI plans start at \u00a3197/month for 200 minutes, with no contracts or hidden fees. A full-time human receptionist costs \u00a322,000\u2013\u00a328,000 per year (ONS, 2024), making AI 70\u201390% more cost-effective." } },
      { "@type": "Question", "name": "How quickly can I get set up?", "acceptedAnswer": { "@type": "Answer", "text": "We\u2019ll send you a personalised voice agent demo within 24 hours of your enquiry. From there, we handle everything \u2014 building your custom agent, integrating with your phone system, calendar, and CRM." } },
      { "@type": "Question", "name": "Will callers know they\u2019re speaking to an AI?", "acceptedAnswer": { "@type": "Answer", "text": "Our voice agents sound natural and conversational. They use your business\u2019s tone, know your services inside out, and handle complex queries. Many callers don\u2019t realise they\u2019re speaking to an AI." } },
      { "@type": "Question", "name": "What is the ROI of an AI receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "According to PATLive (2023), 80% of callers sent to voicemail will not leave a message. Forbes (2023) found that 67% of customers hang up when they cannot reach a real person. Research from MIT and InsideSales.com showed leads are 21\u00d7 more likely to convert when contacted within five minutes. At \u00a3197/month, an AI receptionist pays for itself by capturing even one or two extra bookings." } },
      { "@type": "Question", "name": "How does AI compare to a human receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "A human receptionist costs \u00a322,000\u2013\u00a328,000/year and works office hours. AI costs from \u00a3197/month, works 24/7, handles multiple simultaneous calls, and never calls in sick." } },
      { "@type": "Question", "name": "Is my data safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Voqal AI Ltd (Companies House No. 17080303) processes all data in compliance with UK GDPR and the Data Protection Act 2018. Call data is encrypted in transit and at rest." } },
      { "@type": "Question", "name": "Do I need a long-term contract?", "acceptedAnswer": { "@type": "Answer", "text": "No. All managed service plans are month-to-month. Cancel anytime with no exit fees." } },
      { "@type": "Question", "name": "What industries do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "Dental practices, medical clinics, law firms, estate agents, accountancy firms, tradesmen, and many more across the UK and US. Any service-based business relying on inbound calls." } },
      { "@type": "Question", "name": "Can the AI handle multiple calls at once?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike a human receptionist, our voice agents answer multiple simultaneous calls with zero wait time. Every caller gets an immediate, personalised response." } }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://voqalai.com/" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://voqalai.com/about" }
    ]
  }
];

const faqs = [
  { q: "What is an AI voice agent?", a: "An AI voice agent is an intelligent phone system powered by conversational AI that answers calls, books appointments, qualifies leads, and handles enquiries \u2014 just like a trained receptionist, but available 24/7 with no sick days, holidays, or hold music." },
  { q: "How much does an AI receptionist cost in the UK?", a: "Voqal AI plans start at \u00a3197/month for 200 minutes, with no contracts or hidden fees. A full-time human receptionist costs \u00a322,000\u2013\u00a328,000 per year (ONS, 2024), making AI 70\u201390% more cost-effective." },
  { q: "How quickly can I get set up?", a: "We\u2019ll send you a personalised voice agent demo within 24 hours of your enquiry. From there, we handle everything \u2014 building your custom agent, integrating with your phone system, calendar, and CRM." },
  { q: "Will callers know they\u2019re speaking to an AI?", a: "Our voice agents sound natural and conversational. They use your business\u2019s tone, know your services inside out, and handle complex queries. Many callers don\u2019t realise they\u2019re speaking to an AI." },
  { q: "What is the ROI of an AI receptionist?", a: "According to PATLive (2023), 80% of callers sent to voicemail will not leave a message. Forbes (2023) found that 67% of customers hang up when they cannot reach a real person. Research from MIT and InsideSales.com showed leads are 21\u00d7 more likely to convert when contacted within five minutes. At \u00a3197/month, an AI receptionist pays for itself by capturing even one or two extra bookings." },
  { q: "How does AI compare to a human receptionist?", a: "According to ONS ASHE (2024), a full-time UK receptionist earns \u00a322,000\u2013\u00a328,000 per year and works standard office hours. An AI receptionist from Voqal AI costs from \u00a3197/month, operates 24/7, handles multiple simultaneous calls, and never calls in sick. Gartner (2022) projects $80 billion in contact-centre savings from conversational AI by 2026." },
  { q: "Is my data safe?", a: "Yes. Voqal AI Ltd (Companies House No. 17080303) processes all data in compliance with UK GDPR and the Data Protection Act 2018. Call data is encrypted in transit and at rest." },
  { q: "Do I need a long-term contract?", a: "No. All managed service plans are month-to-month. Cancel anytime with no exit fees." },
  { q: "What industries do you serve?", a: "Dental practices, medical clinics, law firms, estate agents, accountancy firms, tradesmen, and many more across the UK and US. Any service-based business relying on inbound calls." },
  { q: "Can the AI handle multiple calls at once?", a: "Yes. Unlike a human receptionist, our voice agents answer multiple simultaneous calls with zero wait time. Every caller gets an immediate, personalised response." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = useCallback((i: number) => setOpenFaq((prev) => (prev === i ? null : i)), []);

  return (
    <>
      {aboutSchema.map((data, i) => (
        <script key={`about-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      {/* ── About ── */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">About Voqal AI</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Team Behind Your <span className="italic-accent">AI Voice Agent.</span>
          </h2>
          <p className="body-text">
            Voqal AI Ltd builds bespoke voice models for UK and US businesses. With 5.5 million UK SMEs relying on inbound phone calls (Federation of Small Businesses, 2024) and 91 million active UK mobile subscriptions (Ofcom, 2024), phone communication remains the backbone of British commerce. We eliminate friction through continuous availability &mdash; engineering conversations so your team can focus on what matters.
          </p>
        </Reveal>

        {/* The Team */}
        <Reveal delay={0.15}>
          <div className="team-grid">
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Founder &amp; CEO</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Thomas Parry</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                15 years of B2B and B2C experience in sales, business communications, and automation. Specialises in AI voice technology, telephony integration, and ensuring no business call goes unanswered.
              </p>
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Co-Founder &amp; Operations</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Augusta</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                5 years in real estate, bringing operational insight and deep understanding of client-facing communication. Handles client onboarding and voice agent tailoring.
              </p>
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Senior Business Consultant</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Joseph K.</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Over a decade advising SMEs across healthcare, legal, property, and financial services on growth strategy and operational efficiency. Bridges the gap between business needs and AI capability &mdash; ensuring every voice agent deployment translates to measurable commercial outcomes.
              </p>
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>Lead Engineer</span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Dev Team</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Our engineering team specialises in conversational AI, real-time voice synthesis, and telephony infrastructure. They build, test, and deploy every voice agent &mdash; handling everything from NLP model tuning to CRM integration and call-routing architecture.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Protocol ── */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="section-label">How We Work</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "5rem" }}>
            The <span className="italic-accent">Protocol.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16" style={{ textAlign: "left" }}>
            {[
              { step: "01", title: "Knowledge Acquisition", desc: "We extract your operational data \u2014 FAQs, schedules, service boundaries, and brand voice. Tell us exactly how you want calls handled, and we construct the baseline." },
              { step: "02", title: "Model Synthesis", desc: "Our engineers synthesise your custom voice agent. A personalised demo is delivered within 24 hours, allowing you to call and hear it live before deployment." },
              { step: "03", title: "Live Integration", desc: "Upon your final verification, the system integrates seamlessly into your existing infrastructure. It begins answering alongside your team instantly." },
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

      {/* ── Industries ── */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Who We Serve</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Built for <span className="italic-accent">Every Sector.</span>
          </h2>
          <p className="body-text">
            From high-street practices to enterprise operations &mdash; our voice agents adapt to the language, workflows, and compliance requirements of your industry.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ marginTop: "4rem" }}>
            {["Dental Practices", "Medical Clinics", "Legal Firms", "Estate Agents", "Trades & Home Services", "Accountancy Practices", "Veterinary Clinics", "Hospitality & Hotels", "Financial Services", "Recruitment Agencies", "IT & Managed Services", "E-commerce & Retail"].map((name) => (
              <div key={name} className="industry-item">{name}</div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="industries-note">
            Serving businesses across London, Manchester, Birmingham, Edinburgh, and 40+ cities in the UK and US. <Link href="/contact" className="text-link">Get in touch &rarr;</Link>
          </p>
        </Reveal>
      </section>

      {/* ── Evidence ── */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">The Evidence</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            The Data Behind <span className="italic-accent">AI Receptionists.</span>
          </h2>
          <p className="body-text">AI-powered call handling is one of the fastest-growing categories in business automation.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" style={{ marginTop: "4rem" }}>
            {[
              { n: "$80B", l: "Contact-centre savings from conversational AI by 2026 (Gartner, 2022)" },
              { n: "67%", l: "Of customers hang up when they can\u2019t reach a real person (Forbes, 2023)" },
              { n: "5.5M", l: "UK SMEs relying on inbound phone calls (Federation of Small Businesses, 2024)" },
              { n: "21\u00d7", l: "Lead conversion increase when answered within 5 minutes (MIT/InsideSales.com, 2011)" },
              { n: "\u00a325K", l: "Average UK receptionist salary. AI costs under \u00a32,400/yr (ONS ASHE, 2024)" },
              { n: "80%", l: "Of voicemail callers won\u2019t leave a message (PATLive, 2023)" },
              { n: "91M", l: "Active UK mobile subscriptions (Ofcom Communications Market Report, 2024)" },
              { n: "$4.4T", l: "Annual value AI could deliver across industries (McKinsey Global Institute, 2023)" },
            ].map((s, i) => (
              <div key={i} className="stat-block" style={{ textAlign: "center" }}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Questions</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Frequently Asked <span className="italic-accent">Questions.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button className="faq-question" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
