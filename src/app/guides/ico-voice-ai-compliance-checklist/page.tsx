import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ICO Voice AI Compliance Checklist: 18 Points for UK Businesses | Voqal AI",
  description: "Complete 18-point ICO compliance checklist for UK businesses using AI voice systems. Privacy notices, consent, security measures, and processor vetting requirements.",
  alternates: { canonical: "https://voqalai.com/guides/ico-voice-ai-compliance-checklist/" },
  openGraph: {
    title: "ICO Voice AI Compliance Checklist: 18 Points for UK Businesses",
    description: "Complete 18-point ICO compliance checklist for UK businesses using AI voice systems.",
    url: "https://voqalai.com/guides/ico-voice-ai-compliance-checklist/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is this checklist based on official ICO guidance?", acceptedAnswer: { "@type": "Answer", text: "This checklist is based on the ICO\u2019s published guidance on AI and data protection, the UK GDPR text, and the ICO\u2019s AI and Data Protection Risk Toolkit. It is not a substitute for professional legal advice." } },
    { "@type": "Question", name: "Do I need to complete every item on this checklist?", acceptedAnswer: { "@type": "Answer", text: "Items covering lawful basis, transparency, DPA, and data subject rights are legal requirements. Others are strong recommendations. All 18 points represent good practice." } },
    { "@type": "Question", name: "How often should I review my compliance?", acceptedAnswer: { "@type": "Answer", text: "At minimum annually, or whenever you change AI providers, expand your use of AI, or when new ICO guidance is published." } },
    { "@type": "Question", name: "What if my AI provider will not sign a DPA?", acceptedAnswer: { "@type": "Answer", text: "Consider a different provider. A Data Processor Agreement is a legal requirement under Article 28 of UK GDPR." } },
    { "@type": "Question", name: "Can I use this checklist as evidence of compliance?", acceptedAnswer: { "@type": "Answer", text: "A completed checklist demonstrates due diligence but is not sufficient alone. You need the underlying documentation to support it." } },
    { "@type": "Question", name: "Does this apply to AI chat widgets as well as voice?", acceptedAnswer: { "@type": "Answer", text: "Yes. The same GDPR principles apply to any AI system processing personal data, whether voice or text-based." } },
  ],
};

type ChecklistItem = {
  num: number;
  title: string;
  tag: "Legal requirement" | "Recommended" | "Legal requirement (if recording)" | "Legal requirement (where applicable)";
  desc: string;
  ref?: string;
};

const sections: { heading: string; accent: string; items: ChecklistItem[] }[] = [
  {
    heading: "Before You Deploy",
    accent: "Deploy.",
    items: [
      { num: 1, title: "Identify your lawful basis for processing", tag: "Legal requirement", desc: "Determine whether legitimate interests, consent, or contractual necessity applies. Document your reasoning in writing.", ref: "UK GDPR Article 6" },
      { num: 2, title: "Conduct a Data Protection Impact Assessment", tag: "Legal requirement (where applicable)", desc: "Required when deploying new technology that processes personal data at scale. Document the data you will process, risks, and mitigations.", ref: "UK GDPR Article 35" },
      { num: 3, title: "Review your current privacy policy", tag: "Legal requirement", desc: "Check that it covers AI-assisted call handling, voice data processing, and third-party processors. Update before going live." },
      { num: 4, title: "Appoint or consult a Data Protection Officer", tag: "Recommended", desc: "Not legally required for all organisations, but strongly recommended when deploying AI systems that process voice data. Consider external DPO services." },
    ],
  },
  {
    heading: "Privacy and Transparency",
    accent: "Transparency.",
    items: [
      { num: 5, title: "Add AI disclosure to your call flow", tag: "Legal requirement", desc: "Callers must know they are interacting with AI. Include a clear notification at the start of each call.", ref: "UK GDPR Articles 13 & 14" },
      { num: 6, title: "Provide call recording notification", tag: "Legal requirement (if recording)", desc: "Inform callers before recording begins and state the purpose. Offer an opt-out where practical." },
      { num: 7, title: "Update your website privacy policy", tag: "Legal requirement", desc: "Add sections covering: what voice data you collect, why, how long you keep it, who processes it, and caller rights." },
      { num: 8, title: "Make your privacy notice accessible", tag: "Recommended", desc: "Provide a way for callers to access your full privacy policy. Mention your website URL during the call or in follow-up communications." },
      { num: 9, title: "Document your transparency measures", tag: "Recommended", desc: "Keep a record of how and when callers are informed. This demonstrates compliance if the ICO investigates." },
    ],
  },
  {
    heading: "Security and Technical Measures",
    accent: "Measures.",
    items: [
      { num: 10, title: "Verify your provider\u2019s security certifications", tag: "Recommended", desc: "Check for ISO 27001, SOC 2, or equivalent. Ask about encryption, access controls, and incident response procedures." },
      { num: 11, title: "Configure data retention periods", tag: "Legal requirement", desc: "Set retention periods proportionate to your stated purpose. Six months is a common baseline for call recordings. Document your reasoning.", ref: "UK GDPR Article 5(1)(e)" },
      { num: 12, title: "Enable access controls", tag: "Recommended", desc: "Restrict who in your organisation can access call recordings, transcripts, and caller data. Use role-based access where available." },
      { num: 13, title: "Establish a data breach response plan", tag: "Legal requirement", desc: "The ICO must be notified within 72 hours of becoming aware of a qualifying breach. Have a documented response plan.", ref: "UK GDPR Article 33" },
      { num: 14, title: "Test data deletion processes", tag: "Recommended", desc: "Verify that data is actually deleted when retention periods expire. Test the process before going live." },
    ],
  },
  {
    heading: "Third-Party Processor Obligations",
    accent: "Obligations.",
    items: [
      { num: 15, title: "Sign a Data Processor Agreement", tag: "Legal requirement", desc: "Must cover: processing scope, security obligations, sub-processor approval, data return or deletion on termination, and audit rights.", ref: "UK GDPR Article 28" },
      { num: 16, title: "Map your data flows", tag: "Recommended", desc: "Document where caller data goes: AI provider, sub-processors, cloud hosting, CRM integrations. Check each transfer has appropriate safeguards." },
    ],
  },
  {
    heading: "Ongoing Compliance",
    accent: "Compliance.",
    items: [
      { num: 17, title: "Establish a process for data subject requests", tag: "Legal requirement", desc: "Callers can request access, deletion, or object to processing. You must respond within one month.", ref: "UK GDPR Articles 15\u201322" },
      { num: 18, title: "Schedule annual compliance reviews", tag: "Recommended", desc: "Review your DPIA, privacy notices, retention periods, and processor agreements at least annually. Update as needed." },
    ],
  },
];

const faqs = [
  { q: "Is this checklist based on official ICO guidance?", a: "This checklist is based on the ICO\u2019s published guidance on AI and data protection, the UK GDPR text, and the ICO\u2019s AI and Data Protection Risk Toolkit. It is not a substitute for professional legal advice." },
  { q: "Do I need to complete every item on this checklist?", a: "Items covering lawful basis, transparency, DPA, and data subject rights are legal requirements under UK GDPR. Others, such as DPO appointment for smaller organisations, are strong recommendations. All 18 points represent good practice." },
  { q: "How often should I review my compliance?", a: "At minimum annually, or whenever you change AI providers, expand your use of AI, or when new ICO guidance is published." },
  { q: "What if my AI provider will not sign a DPA?", a: "Consider a different provider. A Data Processor Agreement is a legal requirement under Article 28 of UK GDPR. Any reputable AI provider will have one ready." },
  { q: "Can I use this checklist as evidence of compliance?", a: "A completed checklist demonstrates due diligence but is not sufficient alone. You need the underlying documentation \u2014 DPIA, privacy notices, DPA, processing records \u2014 to support it." },
  { q: "Does this apply to AI chat widgets as well as voice?", a: "Yes. The same GDPR principles apply to any AI system processing personal data, whether voice or text-based." },
];

export default function IcoChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Compliance Checklist</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 800 }}>
            ICO Voice AI Compliance Checklist: <span className="italic-accent">18 Points.</span>
          </h1>
          <p className="body-text" style={{ marginTop: "1.5rem" }}>
            Actionable checklist for UK businesses deploying AI voice systems. Based on ICO guidance and UK GDPR requirements.
          </p>
        </Reveal>
      </section>

      {/* How to use */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Instructions</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How to Use This <span className="italic-accent">Checklist.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "2rem", maxWidth: 800 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Work through each section before deploying an AI voice system. Revisit annually or when you change providers.
              Items tagged <strong style={{ color: "var(--text-primary)" }}>&ldquo;Legal requirement&rdquo;</strong> are obligations under UK GDPR.
              Items tagged <strong style={{ color: "var(--text-primary)" }}>&ldquo;Recommended&rdquo;</strong> are strong good practice that demonstrates due diligence.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Checklist sections */}
      {sections.map((section, si) => (
        <section key={si} className={`section-padding ${si % 2 === 0 ? "section-white" : "section-alt"} container`}>
          <Reveal>
            <span className="section-label">Section {si + 1} of {sections.length}</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              {section.heading.replace(section.accent, "")}<span className="italic-accent">{section.accent}</span>
            </h2>
          </Reveal>

          <div style={{ marginTop: "3rem" }}>
            {section.items.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.06}>
                <div className="service-card" style={{ marginBottom: "2rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start" }}>
                  <div className="step-number" style={{ position: "relative", top: 0, left: 0, fontSize: "3rem" }}>
                    {String(item.num).padStart(2, "0")}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 500 }}>{item.title}</h3>
                      <span style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: item.tag.startsWith("Legal") ? "rgba(135,251,137,0.15)" : "var(--border-subtle)",
                        color: item.tag.startsWith("Legal") ? "#1a6b1c" : "var(--text-secondary)",
                      }}>
                        {item.tag}
                      </span>
                    </div>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{item.desc}</p>
                    {item.ref && (
                      <p style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--text-faint)" }}>Reference: {item.ref}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* Related Guides */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Further Reading</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Related <span className="italic-accent">Guides.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", display: "grid", gap: "1.5rem", maxWidth: 800 }}>
            <Link href="/guides/gdpr-compliant-ai-receptionist-uk/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>GDPR-Compliant AI Receptionist Guide</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Complete UK guide to GDPR compliance for AI voice receptionists.</p>
            </Link>
            <Link href="/guides/ai-receptionist-dental-practice-compliance/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>AI Receptionist Compliance for Dental Practices</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>NHS data protection, GDC standards, and CQC requirements.</p>
            </Link>
            <Link href="/guides/how-to-set-up-ai-receptionist/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>How to Set Up an AI Receptionist</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Step-by-step setup guide for UK businesses.</p>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Common Questions</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Frequently Asked <span className="italic-accent">Questions.</span>
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

      {/* Disclaimer */}
      <section className="section-padding section-alt container">
        <Reveal>
          <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", maxWidth: 700, fontStyle: "italic", lineHeight: 1.7 }}>
            This checklist provides general guidance based on publicly available ICO resources and UK GDPR requirements. It is not legal advice. For specific compliance guidance, consult a qualified data protection officer or solicitor.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Need a compliant AI <span className="italic-accent">provider?</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem", maxWidth: 500, margin: "0 auto 3rem" }}>
              DPA included with every plan. UK-based. No contracts.
            </p>
            <Link href="/contact" className="btn-accent rounded-full px-8 py-3.5">Request Demo</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
