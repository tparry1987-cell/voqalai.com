"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How long does setup take?",
      a: "From sign-up to live calls, the process takes around 48 hours. The majority of that time is spent building and training your AI on your specific business information. The technical phone forwarding step takes under 10 minutes."
    },
    {
      q: "Do I need any technical skills?",
      a: "No. We handle all the technical configuration. You provide your business information, and we build and deploy the AI receptionist for you. Calendar and CRM integrations are set up via simple authorisation flows (click, sign in, approve)."
    },
    {
      q: "Can I keep my existing phone number?",
      a: "Yes. You forward your existing number to your Voqal AI number. Callers still dial the same number they always have — the experience is seamless."
    },
    {
      q: "What happens if the AI cannot handle a call?",
      a: "The AI transfers the call to a staff member based on your routing rules. If no one is available, it takes a detailed message and sends an immediate notification via email and SMS."
    },
    {
      q: "Can I change the AI's behaviour after going live?",
      a: "Yes, at any time. You can update FAQs, change call routing rules, add services, or adjust the AI's tone and scripts. Changes are applied without any downtime."
    },
    {
      q: "Will callers know they are speaking to an AI?",
      a: "Our voice agents are incredibly natural, mimicking human inflection and pacing. However, we typically recommend a brief, transparent greeting such as 'Hello, you've reached the AI assistant for [Business Name].'"
    },
    {
      q: "How does pricing work?",
      a: "We operate on a transparent monthly subscription based on minutes used. Our Starter plan begins at £197/month for 200 minutes. There are no long-term contracts. You can view all our plans on our Pricing page."
    },
    {
      q: "Does the AI receptionist integrate with my calendar?",
      a: "Yes. We integrate with all major calendars including Google Calendar, Outlook, Calendly, Cal.com, and industry-specific software to book appointments seamlessly during the call."
    },
    {
      q: "Is Voqal AI GDPR compliant?",
      a: "Yes, Voqal AI is fully GDPR compliant. All data is processed securely, and we do not use your customers' personal data to train public models. We adhere to the highest standards of data protection."
    },
    {
      q: "How do you handle out-of-hours calls?",
      a: "Your AI is available 24/7. It can be configured to act as an overflow during the day, and shift to an after-hours booking and message-taking configuration during the evening."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "12rem", minHeight: "80vh" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Support</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "3rem" }}>
              Frequently Asked <span className="italic-accent">Questions.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 640, margin: "0 auto 4rem" }}>
              Everything you need to know about setting up and using a Voqal AI receptionist for your business.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    {faq.q}
                    <Plus className="faq-icon" style={{ transform: isOpen ? "rotate(45deg)" : "none" }} />
                  </button>
                  <div className="faq-answer" style={{ maxHeight: isOpen ? "500px" : "0", paddingBottom: isOpen ? "1.5rem" : "0" }}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "6rem" }}>
            <span className="section-label">Still have questions?</span>
            <h2 className="heading" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "1.5rem" }}>
              Speak with our <span className="italic-accent">Team.</span>
            </h2>
            <p className="body-text" style={{ margin: "0 auto 2rem" }}>
              Book a demo or consultation and we'll answer any technical or service questions you might have.
            </p>
            <Link href="/contact" className="btn-accent rounded-full text-center" style={{ padding: "0.9rem 2.5rem" }}>
              Book Consultation &rarr;
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
