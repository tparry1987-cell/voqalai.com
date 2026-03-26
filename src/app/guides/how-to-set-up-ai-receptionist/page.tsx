import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up an AI Receptionist for Your UK Business | Voqal AI",
  description: "Step-by-step guide to setting up an AI receptionist. Configure call handling, appointment booking, and lead qualification in under 24 hours.",
  alternates: { canonical: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/" },
  openGraph: {
    title: "How to Set Up an AI Receptionist for Your UK Business",
    description: "Step-by-step guide to setting up an AI receptionist. Configure call handling, appointment booking, and lead qualification in under 24 hours.",
    url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up an AI Receptionist for Your UK Business",
  description: "Complete guide to setting up and configuring an AI receptionist for 24/7 call handling and appointment booking.",
  totalTime: "PT24H",
  estimatedCost: { "@type": "MonetaryAmount", currency: "GBP", value: "197" },
  tool: [
    { "@type": "HowToTool", name: "Voqal AI Platform" },
    { "@type": "HowToTool", name: "Business phone number" },
    { "@type": "HowToTool", name: "Calendar or booking system (optional)" },
  ],
  step: [
    { "@type": "HowToStep", name: "Request a demonstration", text: "Visit voqalai.com/contact and submit your details. Our team will send you a personalised voice agent demo within 24 hours.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step1" },
    { "@type": "HowToStep", name: "Share your business knowledge", text: "We extract your operational data — FAQs, schedules, service boundaries, and brand voice. Tell us exactly how you want calls handled, and we construct the baseline.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step2" },
    { "@type": "HowToStep", name: "Review your custom voice agent", text: "Our engineers synthesise your custom voice agent. Call the demo number and hear it live — test appointment booking, enquiry handling, and call routing.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step3" },
    { "@type": "HowToStep", name: "Connect your phone system", text: "Forward your existing business number to your unique Voqal AI number, or get a new UK number. No hardware required — works with any phone system.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step4" },
    { "@type": "HowToStep", name: "Integrate your calendar and CRM", text: "Connect Google Calendar, Outlook, Cal.com, or your practice management software. Link your CRM (HubSpot, Salesforce, Zoho) for automatic lead capture.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step5" },
    { "@type": "HowToStep", name: "Go live", text: "Activate your AI receptionist. It begins answering alongside your team instantly — 24/7, every call, zero wait time. Monitor via your dashboard.", url: "https://voqalai.com/guides/how-to-set-up-ai-receptionist/#step6" },
  ],
};

const steps = [
  { id: "step1", num: "01", title: "Request a Demonstration", time: "2 minutes", desc: "Visit our contact page and submit your details. Include your business name, industry, and how you currently handle calls. Our team will build a personalised voice agent demo and send it to you within 24 hours — no payment or commitment required.", cta: { label: "Request Demo", href: "/contact/" } },
  { id: "step2", num: "02", title: "Share Your Business Knowledge", time: "30 minutes", desc: "We'll ask you about your FAQs, opening hours, services, pricing, booking rules, and brand voice. The more detail you provide, the better your AI receptionist performs. Think of it as training a new team member — except this one never forgets." },
  { id: "step3", num: "03", title: "Review Your Custom Voice Agent", time: "15 minutes", desc: "We'll send you a phone number to call and test your AI receptionist live. Try booking an appointment, asking about services, requesting a callback — test every scenario. We'll refine the model until it's perfect." },
  { id: "step4", num: "04", title: "Connect Your Phone System", time: "10 minutes", desc: "Forward your existing business number to your unique Voqal AI number. This works with any UK landline, mobile, or VoIP system. No hardware, no engineer visit — just a simple call forwarding rule. You can set it to forward all calls, or only when lines are busy or unanswered." },
  { id: "step5", num: "05", title: "Integrate Your Calendar & CRM", time: "15 minutes", desc: "Connect Google Calendar, Microsoft Outlook, Cal.com, Calendly, or practice management software like Dentally or Cliniko. Link your CRM (HubSpot, Salesforce, Zoho, Pipedrive) so every call, booking, and lead is logged automatically." },
  { id: "step6", num: "06", title: "Go Live", time: "Instant", desc: "Activate your AI receptionist and it starts answering immediately — 24/7, every call, zero wait time. Your team gets email and SMS notifications for bookings, messages, and urgent calls. Monitor everything from your dashboard." },
];

const faqs = [
  { q: "How long does the whole process take?", a: "From first enquiry to live AI receptionist: typically 24–48 hours. We handle everything — you just provide the business knowledge." },
  { q: "Do I need to change my phone number?", a: "No. You keep your existing business number. We set up call forwarding so your AI receptionist answers on your behalf." },
  { q: "What if the AI can't handle a call?", a: "It transfers to your team. You set the rules — urgent calls, specific requests, or VIP callers can always be routed to a human." },
  { q: "Can I try before I commit?", a: "Yes. We send you a free personalised demo within 24 hours. Call it, test it, and only proceed if you're satisfied. No contracts." },
  { q: "What does it cost?", a: "Plans start at £197/month for 200 minutes. No setup fees, no contracts. Cancel anytime." },
];

export default function SetupGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Step-by-Step Guide</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 700 }}>
            How to Set Up an AI Receptionist for Your <span className="italic-accent">UK Business.</span>
          </h1>
          <p className="body-text" style={{ marginTop: "1.5rem" }}>
            From first enquiry to live AI receptionist in under 24 hours. No technical knowledge required — we handle everything. Here&rsquo;s exactly how the process works.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <div className="stat-number" style={{ fontSize: "1.5rem" }}>&lt; 24hrs</div>
              <div className="stat-label">Setup time</div>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: "1.5rem" }}>&pound;197</div>
              <div className="stat-label">From per month</div>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: "1.5rem" }}>0</div>
              <div className="stat-label">Contracts</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Steps */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">The Process</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            6 Steps to <span className="italic-accent">24/7 Coverage.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "4rem" }}>
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.08}>
              <div id={step.id} className="service-card" style={{ marginBottom: "2rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2.5rem", alignItems: "start" }}>
                <div className="step-number" style={{ position: "relative", top: 0, left: 0, fontSize: "3.5rem" }}>{step.num}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 500 }}>{step.title}</h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{step.time}</span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{step.desc}</p>
                  {step.cta && (
                    <Link href={step.cta.href} className="text-link" style={{ marginTop: "1rem", display: "inline-block" }}>{step.cta.label} &rarr;</Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Common Questions</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Setup <span className="italic-accent">FAQ.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)", padding: "1.5rem 0" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>{faq.q}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready to get <span className="italic-accent">started?</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem", maxWidth: 500, margin: "0 auto 3rem" }}>
              Personalised demo within 24 hours. No contracts. From &pound;197/month.
            </p>
            <Link href="/contact" className="btn-accent rounded-full px-8 py-3.5">Request Demo</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
