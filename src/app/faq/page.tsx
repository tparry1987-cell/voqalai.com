"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const faqs = [
  { q: "How long does setup take?", a: "From sign-up to live calls, the process typically takes a few days. The majority of that time is spent building and training your AI on your specific business information. The technical phone forwarding step takes under 10 minutes." },
  { q: "Do I need any technical skills?", a: "No. We handle all the technical configuration. You provide your business information, and we build and deploy the AI receptionist for you. Calendar and CRM integrations are set up via simple authorisation flows (click, sign in, approve)." },
  { q: "Can I keep my existing phone number?", a: "Yes. You forward your existing number to your Voqal AI number. Callers still dial the same number they always have — the experience is seamless." },
  { q: "What happens if the AI cannot handle a call?", a: "The AI transfers the call to a staff member based on your routing rules. If no one is available, it takes a detailed message and sends an immediate notification via email and SMS." },
  { q: "Can I change the AI's behaviour after going live?", a: "Yes, at any time. You can update FAQs, change call routing rules, add services, or adjust the AI's tone and scripts. Changes are applied without any downtime." },
  { q: "Will callers know they are speaking to an AI?", a: "Our voice agents are incredibly natural, mimicking human inflection and pacing. However, we typically recommend a brief, transparent greeting such as 'Hello, you've reached the AI assistant for [Business Name].'" },
  { q: "How does pricing work?", a: "We operate on a transparent monthly subscription based on minutes used. Our Starter plan begins at £197/month for 200 minutes. There are no long-term contracts. You can view all our plans on our Pricing page." },
  { q: "Does the AI receptionist integrate with my calendar?", a: "Yes. We integrate with all major calendars including Google Calendar, Outlook, Calendly, Cal.com, and industry-specific software to book appointments seamlessly during the call." },
  { q: "Is Voqal AI GDPR compliant?", a: "Yes, Voqal AI is fully GDPR compliant. All data is processed securely, and we do not use your customers' personal data to train public models. We adhere to the highest standards of data protection." },
  { q: "How do you handle out-of-hours calls?", a: "Your AI is available 24/7. It can be configured to act as an overflow during the day, and shift to an after-hours booking and message-taking configuration during the evening." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a }
  }))
};

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 40 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Support · Voqal AI
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              FREQUENTLY ASKED <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>questions.</span>
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp as="p" delay={0.3} style={{ fontSize: 15, lineHeight: 1.65, color: "#3a3a3a", margin: 0 }}>
              Everything you need to know about setting up and using a Voqal AI receptionist for your business.
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <div style={{ maxWidth: 880 }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <FadeUp key={faq.q} delay={0.05 * i}>
                <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{
                  width: "100%", background: "transparent",
                  borderTop: i === 0 ? "1px solid rgba(0,0,0,0.18)" : "none",
                  borderBottom: "1px solid rgba(0,0,0,0.18)",
                  borderLeft: "none", borderRight: "none",
                  padding: "22px 0", textAlign: "left",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 24, color: "#1a1a1a",
                }}>
                  <span style={{ fontSize: 15, fontWeight: 500 }}>{faq.q}</span>
                  {isOpen ? <Minus size={18} style={{ color: "var(--cog-copper)" }} /> : <Plus size={18} style={{ color: "#666" }} />}
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                  <p style={{ padding: "0 0 22px", fontSize: 14, lineHeight: 1.75, color: "#3a3a3a", maxWidth: 780, margin: 0 }}>{faq.a}</p>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
          Still have questions?
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 24px", maxWidth: 720 }}>
            Speak with our <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>team.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", maxWidth: 540, marginBottom: 28 }}>
            Book a demo or consultation and we&apos;ll answer any technical or service questions you might have.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/book" className="cog-btn-light">Book Consultation →</Link>
            <a href="tel:+442039960962" className="cog-btn-ghost-light">Call 020 3996 0962</a>
          </div>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}
