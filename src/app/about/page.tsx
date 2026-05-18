"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const aboutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Voqal AI",
    "description": "Voqal AI Ltd builds AI voice agents for businesses worldwide. Co-founded by Thomas Parry and Charlie Todd, registered in England & Wales (Company No. 17080303).",
    "url": "https://voqalai.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Voqal AI",
      "url": "https://voqalai.com",
      "founders": [
        { "@type": "Person", "name": "Thomas Parry", "jobTitle": "Founder & CEO", "sameAs": "https://www.linkedin.com/in/tom-parry-698bbb29a" },
        { "@type": "Person", "name": "Charlie Todd", "jobTitle": "Co-Founder" }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Charlie Todd",
    "jobTitle": "Co-Founder & COO",
    "url": "https://voqalai.com/about",
    "worksFor": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": ["AI strategy", "business operations", "growth", "international company setup"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joe Kemp",
    "jobTitle": "AI Integration Consultant",
    "url": "https://voqalai.com/about",
    "worksFor": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": ["AI integration", "SME operations", "professional services", "AI voice agents"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Augusta Steffy",
    "jobTitle": "Director of Client Experience",
    "url": "https://voqalai.com/about",
    "worksFor": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": ["client onboarding", "customer communication", "AI implementation", "client support"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adrian Wilkinson",
    "jobTitle": "Strategic Partnerships Director",
    "url": "https://voqalai.com/about",
    "affiliation": { "@type": "Organization", "name": "Voqal AI", "url": "https://voqalai.com" },
    "knowsAbout": ["strategic partnerships", "AI automation", "customer experience", "business operations"]
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

const CREW = [
  { name: "Thomas Parry", role: "Founder & CEO", bio: "Tom founded Voqal AI with a vision of helping businesses move from AI curious to AI native. Focused on intelligent systems, automation, and modern business operations, he works closely with companies to integrate AI in ways that improve efficiency, communication, and long-term growth.", img: "/images/avatars/tom.webp", linkedin: "https://www.linkedin.com/in/tom-parry-698bbb29a" },
  { name: "Charlie Todd", role: "Co-Founder & COO", bio: "Charlie works alongside Tom shaping Voqal AI's strategy, growth, and direction. With experience in business operations and international company setup, he helps companies identify where AI can improve efficiency, workflows, and scalability.", img: "/images/avatars/charlie-todd.webp" },
  { name: "Augusta Steffy", role: "Director of Client Experience", bio: "Augusta focuses on client onboarding, communication, and ongoing support, helping businesses feel confident as they begin integrating AI into their operations.", img: "/images/avatars/augusta.webp", imgPosition: "center 18%" },
  { name: "Adrian Wilkinson", role: "Strategic Partnerships Director", bio: "Adrian works closely with businesses to identify opportunities where AI and automation can improve customer experience, communication, and day-to-day operations.", img: "/images/avatars/adrian-wilkinson.webp" },
  { name: "Joe Kemp", role: "AI Integration Consultant", bio: "Joe has worked with businesses across recruitment, HR, employment law, and professional services. At Voqal AI, he helps companies across sectors integrate AI naturally into existing workflows to improve communication, streamline processes, and operate more efficiently.", img: "/images/avatars/joe-kemp.webp" },
  { name: "Dev Team", role: "Engineering", bio: "Conversational AI, real-time voice synthesis, and telephony infrastructure. They build, test and deploy every voice agent — from model tuning to CRM integration.", img: null as string | null },
];

const FAQS = [
  { q: "How quickly can I get set up?", a: "We send a personalised voice agent demo within 24 hours of your enquiry. From there we handle building, integration with your phone system, calendar, and CRM, and going live." },
  { q: "Will callers know they're speaking to an AI?", a: "Our agents disclose they're AI when asked, but sound natural and conversational. They use your tone of voice and know your services inside out. Many callers happily complete bookings without realising." },
  { q: "Do I need a long-term contract?", a: "No. All managed plans are month-to-month. Cancel any time with no exit fees." },
  { q: "Is my data safe?", a: "Voqal AI Ltd (No. 17080303) processes all data in compliance with UK GDPR and the Data Protection Act 2018. Call data is encrypted in transit and at rest." },
  { q: "What industries do you serve?", a: "Dental, medical, law, estate agents, trades, accountancy, professional services and many more — anywhere a business relies on inbound calls, bookings, enquiries, or repeatable customer communication." },
  { q: "Can the AI handle multiple calls at once?", a: "Yes. Unlike a human receptionist, our voice agents answer multiple simultaneous calls with zero wait time. Every caller gets an immediate response." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      {aboutSchema.map((data, i) => (
        <script key={`about-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 40 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Crew · Voqal AI
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              THE TEAM BEHIND <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>your voice agent.</span>
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp as="p" delay={0.3} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", margin: 0 }}>
              Voqal AI Ltd builds bespoke voice agents for businesses worldwide. Founded in the UK and working with companies globally, we eliminate friction through continuous availability, intelligent automation, and customer communication that keeps moving.
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="crew" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
          THE PEOPLE
        </FadeUp>
        <div className="cog-crew-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {CREW.map((m, i) => (
            <FadeUp key={m.name} delay={0.15 + i * 0.08}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "24px 22px", height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", marginBottom: 18, background: "linear-gradient(135deg, #f4b08b, #db7c54)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {m.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: m.imgPosition || "center center" }} />
                  ) : (
                    <span className="cog-italic" style={{ fontSize: 22, color: "#fff" }}>{"</>"}</span>
                  )}
                </div>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--cog-copper-light)", fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>
                  {m.role}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff", margin: "0 0 12px" }}>{m.name}</h3>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0, flex: 1 }}>{m.bio}</p>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="cog-nav-link" style={{ marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.7)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Linkedin size={12} /> LinkedIn
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>
          WHAT WE STAND FOR
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.6vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", maxWidth: 720, margin: "0 0 20px" }}>
            Every business deserves a <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>world-class front door.</span>
          </h2>
        </FadeUp>
        <FadeUp as="p" delay={0.2} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 640, margin: "0 0 60px" }}>
          A missed call used to mean a lost customer — and for most small businesses, it still does. We build the kind of receptionist most companies can&apos;t afford: available every hour, trained on every detail, and ready to answer in under two seconds.
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 900, marginBottom: 60 }}>
            {[
              ["Registered", "Voqal AI Ltd", "Company No. 17080303"],
              ["Based", "Manchester, UK", "Serving businesses globally"],
              ["Contact", "020 3996 0962", "info@voqalai.com"],
            ].map(([k, v1, v2]) => (
              <div key={k} style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 14, padding: "18px 22px" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "#888", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}>{v1}</div>
                <div style={{ fontSize: 13, color: "#666" }}>{v2}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.4} style={{ marginTop: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 16 }}>FREQUENTLY ASKED</div>
          <h3 className="cog-h-display" style={{ fontSize: "clamp(22px, 2.6vw, 32px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 28px" }}>
            Questions, answered.
          </h3>
        </FadeUp>

        <div style={{ maxWidth: 820 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <FadeUp key={faq.q} delay={0.05 * i}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "transparent",
                    borderTop: i === 0 ? "1px solid rgba(0,0,0,0.18)" : "none",
                    borderBottom: "1px solid rgba(0,0,0,0.18)",
                    borderLeft: "none", borderRight: "none",
                    padding: "20px 0", textAlign: "left",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    gap: 24, color: "#1a1a1a",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{faq.q}</span>
                  {isOpen ? <Minus size={16} style={{ color: "var(--cog-copper)" }} /> : <Plus size={16} style={{ color: "#666" }} />}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{ padding: "0 0 22px", fontSize: 13, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 720, margin: 0 }}>{faq.a}</p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.6} style={{ marginTop: 60 }}>
          <Link href="/contact" className="cog-btn-primary">Get in touch</Link>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
