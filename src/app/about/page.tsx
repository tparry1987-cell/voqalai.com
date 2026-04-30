"use client";

import { useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Linkedin } from "lucide-react";

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Voqal AI",
    "description": "Voqal AI Ltd builds AI voice agents for UK and US businesses. Co-founded by Thomas Parry and Charlie Todd, registered in England & Wales (Company No. 17080303).",
    "url": "https://voqalai.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Voqal AI",
      "url": "https://voqalai.com",
      "founders": [
        {
          "@type": "Person",
          "name": "Thomas Parry",
          "jobTitle": "Founder & CEO",
          "sameAs": "https://www.linkedin.com/in/tom-parry-698bbb29a"
        },
        {
          "@type": "Person",
          "name": "Charlie Todd",
          "jobTitle": "Co-Founder"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Charlie Todd",
    "jobTitle": "Co-Founder",
    "url": "https://voqalai.com/about",
    "worksFor": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": [
      "AI voice agents",
      "business automation",
      "process improvement",
      "international business operations"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Augusta Steffy",
    "jobTitle": "Sales Director",
    "url": "https://voqalai.com/about",
    "worksFor": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": [
      "real estate sales",
      "client onboarding",
      "AI voice agents",
      "customer communication"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrian Wilkinson",
    "jobTitle": "Strategic Partner",
    "url": "https://voqalai.com/about",
    "affiliation": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": [
      "business operations",
      "AI implementation",
      "international business",
      "process improvement"
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
  { q: "What is an AI voice agent?", a: "An AI voice agent is an intelligent phone system powered by conversational AI that answers calls, books appointments, qualifies leads, and handles enquiries — just like a trained receptionist, but available 24/7 with no sick days, holidays, or hold music." },
  { q: "How much does an AI receptionist cost in the UK?", a: "Voqal AI plans start at £197/month for 200 minutes, with no contracts or hidden fees. A full-time human receptionist costs £22,000–£28,000 per year (ONS, 2024), making AI 70–90% more cost-effective." },
  { q: "How quickly can I get set up?", a: "We’ll send you a personalised voice agent demo within 24 hours of your enquiry. From there, we handle everything — building your custom agent, integrating with your phone system, calendar, and CRM." },
  { q: "Will callers know they’re speaking to an AI?", a: "Our voice agents sound natural and conversational. They use your business’s tone, know your services inside out, and handle complex queries. Many callers don’t realise they’re speaking to an AI." },
  { q: "What is the ROI of an AI receptionist?", a: "According to PATLive (2023), 80% of callers sent to voicemail will not leave a message. Forbes (2023) found that 67% of customers hang up when they cannot reach a real person. Research from MIT and InsideSales.com showed leads are 21× more likely to convert when contacted within five minutes. At £197/month, an AI receptionist pays for itself by capturing even one or two extra bookings." },
  { q: "How does AI compare to a human receptionist?", a: "According to ONS ASHE (2024), a full-time UK receptionist earns £22,000–£28,000 per year and works standard office hours. An AI receptionist from Voqal AI costs from £197/month, operates 24/7, handles multiple simultaneous calls, and never calls in sick. Gartner (2022) projects $80 billion in contact-centre savings from conversational AI by 2026." },
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

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="section-label">About Voqal AI</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700, margin: "0 auto 1.5rem" }}>
              The team behind your <span className="italic-accent">AI voice agent.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
              Voqal AI Ltd builds bespoke voice models for UK and US businesses. With 5.5 million UK SMEs relying on inbound phone calls (Federation of Small Businesses, 2024) and 91 million active UK mobile subscriptions (Ofcom, 2024), phone communication remains the backbone of British commerce. We eliminate friction through continuous availability &mdash; engineering conversations so your team can focus on what matters.
            </p>
          </div>
        </Reveal>

        {/* Team */}
        <Reveal delay={0.15}>
          <div className="team-grid">
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #f4b08b, #db7c54)" }}>
                <img src="/images/avatars/tom.webp" alt="Thomas Parry — Founder of Voqal AI" width={120} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.65rem" }}>Founder &amp; CEO</span>
              <h3 style={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "0.5rem", color: "#111", letterSpacing: "-0.01em" }}>Thomas Parry</h3>
              <a href="https://www.linkedin.com/in/tom-parry-698bbb29a" target="_blank" rel="noopener noreferrer" aria-label="Thomas Parry on LinkedIn" style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", color: "#888", textDecoration: "none", marginBottom: "1rem", transition: "color 0.2s" }}>
                <Linkedin className="h-3.5 w-3.5" /> Connect on LinkedIn
              </a>
              <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>
                15 years of B2B and B2C experience in sales, business communications, and automation. Specialises in AI voice technology, telephony integration, and ensuring no business call goes unanswered.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #f4b08b, #db7c54)" }}>
                <img src="/images/avatars/charlie-todd.webp" alt="Charlie Todd — Co-Founder of Voqal AI" width={120} height={120} style={{ objectFit: "cover", objectPosition: "center 32%", width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.65rem" }}>Co-Founder</span>
              <h3 style={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1rem", color: "#111", letterSpacing: "-0.01em" }}>Charlie Todd</h3>
              <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>
                Charlie&rsquo;s passion is identifying opportunities to streamline with AI. With international business experience and a strong understanding of how companies operate day to day, he helps clients spot where automation can remove friction, improve response times, and create measurable growth.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #f4b08b, #db7c54)" }}>
                <img src="/images/avatars/augusta.webp" alt="Augusta Steffy — Sales Director at Voqal AI" width={120} height={120} style={{ objectFit: "cover", objectPosition: "center 20%", width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.65rem" }}>Sales Director</span>
              <h3 style={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1rem", color: "#111", letterSpacing: "-0.01em" }}>Augusta Steffy</h3>
              <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>
                5 years in real estate, bringing operational insight and deep understanding of client-facing communication. Leads sales conversations, supports client onboarding, and helps tailor each voice agent around the way customers actually enquire, book, and buy.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #f4b08b, #db7c54)" }}>
                <img src="/images/avatars/adrian-wilkinson.webp" alt="Adrian Wilkinson — Strategic Partner at Voqal AI" width={120} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.65rem" }}>Strategic Partner</span>
              <h3 style={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1rem", color: "#111", letterSpacing: "-0.01em" }}>Adrian Wilkinson</h3>
              <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>
                Three decades operating across businesses worldwide, with a unique understanding of how operations actually run and how the systems behind them either help or hinder. Adrian brings vast experience implementing AI inside real businesses &mdash; identifying where it adds genuine impact and where it simply doesn&rsquo;t belong.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ width: 120, height: 120, borderRadius: "50%", margin: "0 auto 1.25rem", background: "linear-gradient(135deg, #f4b08b, #db7c54)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic", fontSize: "1.6rem", color: "#fff" }}>&lt;/&gt;</span>
              </div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent)", fontWeight: 600, display: "block", marginBottom: "0.65rem" }}>Lead Engineer</span>
              <h3 style={{ fontWeight: 500, fontSize: "1.25rem", marginBottom: "1rem", color: "#111", letterSpacing: "-0.01em" }}>Dev Team</h3>
              <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.7 }}>
                Our engineering team specialises in conversational AI, real-time voice synthesis, and telephony infrastructure. They build, test, and deploy every voice agent &mdash; handling everything from NLP model tuning to CRM integration and call-routing architecture.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="section-padding section-alt container" style={{ textAlign: "center" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="section-label">What we stand for</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "2rem" }}>
              Every business deserves a <span className="italic-accent">world-class front door.</span>
            </h2>
            <p className="body-text" style={{ maxWidth: 640, margin: "0 auto" }}>
              A missed call used to mean a lost customer &mdash; and for most small businesses, it still does. We build the kind of receptionist most companies can&rsquo;t afford: available every hour, trained on every detail, and ready to answer in under two seconds. No hold music, no voicemail, no excuses.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center" style={{ maxWidth: 820, margin: "4rem auto 0" }}>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", fontWeight: 600, marginBottom: "0.5rem" }}>Registered</div>
              <div style={{ fontSize: "0.9rem", color: "#111", fontWeight: 500 }}>Voqal AI Ltd</div>
              <div style={{ fontSize: "0.9rem", color: "#888" }}>Company No. 17080303</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", fontWeight: 600, marginBottom: "0.5rem" }}>Based</div>
              <div style={{ fontSize: "0.9rem", color: "#111", fontWeight: 500 }}>Manchester, UK</div>
              <div style={{ fontSize: "0.9rem", color: "#888" }}>Serving UK &amp; US</div>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888", fontWeight: 600, marginBottom: "0.5rem" }}>Contact</div>
              <div style={{ fontSize: "0.9rem", color: "#111", fontWeight: 500 }}><a href="tel:+442039960962" className="hover:text-copper">020 3996 0962</a></div>
              <div style={{ fontSize: "0.9rem", color: "#888" }}><a href="mailto:info@voqalai.com">info@voqalai.com</a></div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Evidence */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">The Evidence</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 680, margin: "0 auto 1.5rem" }}>
              The data behind <span className="italic-accent">AI receptionists.</span>
            </h2>
            <p className="body-text" style={{ margin: "0 auto" }}>AI-powered call handling is one of the fastest-growing categories in business automation.</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12" style={{ marginTop: "4rem", maxWidth: 1080, marginInline: "auto" }}>
            {[
              { n: "$80B", l: "Contact-centre savings from conversational AI by 2026 (Gartner, 2022)" },
              { n: "67%", l: "Of customers hang up when they can’t reach a real person (Forbes, 2023)" },
              { n: "5.5M", l: "UK SMEs relying on inbound phone calls (Federation of Small Businesses, 2024)" },
              { n: "21×", l: "Lead conversion increase when answered within 5 minutes (MIT/InsideSales.com, 2011)" },
              { n: "£25K", l: "Average UK receptionist salary. AI costs under £2,400/yr (ONS ASHE, 2024)" },
              { n: "80%", l: "Of voicemail callers won’t leave a message (PATLive, 2023)" },
              { n: "91M", l: "Active UK mobile subscriptions (Ofcom Communications Market Report, 2024)" },
              { n: "$4.4T", l: "Annual value AI could deliver across industries (McKinsey Global Institute, 2023)" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">Questions</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 680, margin: "0 auto" }}>
              Frequently asked <span className="italic-accent">questions.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "3rem", maxWidth: 800, marginInline: "auto" }}>
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
