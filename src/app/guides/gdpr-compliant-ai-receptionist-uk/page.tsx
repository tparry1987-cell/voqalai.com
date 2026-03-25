import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR-Compliant AI Receptionist: UK Business Guide 2026 | Voqal AI",
  description: "Complete UK guide to GDPR compliance for AI voice receptionists. ICO guidelines, data retention, consent requirements, and compliance checklist for businesses.",
  alternates: { canonical: "https://voqalai.com/guides/gdpr-compliant-ai-receptionist-uk/" },
  openGraph: {
    title: "GDPR-Compliant AI Receptionist: UK Business Guide 2026",
    description: "Complete UK guide to GDPR compliance for AI voice receptionists. ICO guidelines, data retention, consent requirements.",
    url: "https://voqalai.com/guides/gdpr-compliant-ai-receptionist-uk/",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Ensure GDPR Compliance for Your AI Receptionist in the UK",
  description: "Step-by-step guide for UK businesses to deploy AI voice receptionists while meeting GDPR, ICO, and data protection requirements.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Review ICO guidelines on AI and voice data", text: "Review the ICO's guidance on AI and data protection, including requirements for voice recordings, transparency, and automated decision-making." },
    { "@type": "HowToStep", position: 2, name: "Identify your lawful basis for processing", text: "Determine whether legitimate interests, consent, or contractual necessity applies. Document your reasoning." },
    { "@type": "HowToStep", position: 3, name: "Conduct a Data Protection Impact Assessment", text: "Complete a DPIA covering the personal data your AI receptionist will process, the risks involved, and mitigations." },
    { "@type": "HowToStep", position: 4, name: "Update your privacy policy", text: "Add specific language about AI call handling, voice data processing, third-party data processors, and caller rights." },
    { "@type": "HowToStep", position: 5, name: "Sign a Data Processor Agreement", text: "Ensure a written DPA covering processing scope, security measures, sub-processor obligations, and data deletion." },
    { "@type": "HowToStep", position: 6, name: "Configure data retention and consent", text: "Set appropriate retention periods for call recordings and transcripts. Configure call notifications for callers." },
    { "@type": "HowToStep", position: 7, name: "Train staff on data subject requests", text: "Establish a documented process for handling access requests, erasure requests, and objections. Respond within one month." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is using an AI receptionist GDPR-compliant in the UK?", acceptedAnswer: { "@type": "Answer", text: "Yes, provided you meet the core requirements: establish a lawful basis for processing, maintain transparency with callers, sign a Data Processor Agreement with your provider, and set appropriate data retention periods." } },
    { "@type": "Question", name: "Do I need consent to use an AI receptionist?", acceptedAnswer: { "@type": "Answer", text: "Legitimate interests is typically the lawful basis for answering business calls via AI. Consent may be needed specifically for recording calls. Always document your chosen lawful basis." } },
    { "@type": "Question", name: "Do callers need to be told they are speaking to AI?", acceptedAnswer: { "@type": "Answer", text: "Yes. ICO transparency requirements mean callers should be informed that they are interacting with an AI system." } },
    { "@type": "Question", name: "How long can I keep call recordings under GDPR?", acceptedAnswer: { "@type": "Answer", text: "Only as long as necessary for the stated purpose. Six months is a common baseline for call recordings, but your specific business needs may vary." } },
    { "@type": "Question", name: "Do I need a DPIA for AI calls?", acceptedAnswer: { "@type": "Answer", text: "Likely yes. The ICO recommends DPIAs for any new technology that processes personal data systematically. It is good practice even when not strictly required." } },
    { "@type": "Question", name: "What happens if my AI provider stores data outside the UK?", acceptedAnswer: { "@type": "Answer", text: "You need appropriate safeguards such as Standard Contractual Clauses or reliance on a UK adequacy decision." } },
    { "@type": "Question", name: "Can the ICO fine me for using AI voice systems?", acceptedAnswer: { "@type": "Answer", text: "Fines apply to non-compliance with GDPR, not to using AI technology itself. Proper safeguards and documentation protect you." } },
    { "@type": "Question", name: "What rights do callers have under GDPR?", acceptedAnswer: { "@type": "Answer", text: "Right to be informed, right of access, right to erasure, right to rectification, and right to object to processing." } },
  ],
};

const requirements = [
  { title: "Lawful Basis for Processing", ref: "Article 6", desc: "Every instance of personal data processing needs a lawful basis. For AI receptionists handling business calls, legitimate interests is typically the most appropriate basis. You must conduct a Legitimate Interest Assessment to document this. If you record calls, you may need explicit consent as the lawful basis for the recording itself." },
  { title: "Transparency and Privacy Notices", ref: "Articles 13 & 14", desc: "Callers must be informed about how their data is processed. This means telling callers they are speaking to an AI system, informing them if the call is recorded, making your privacy policy accessible, and explaining what data is collected and how long it is stored." },
  { title: "Data Protection Impact Assessment", ref: "Article 35", desc: "The ICO recommends a DPIA when deploying new technology that processes personal data systematically. Your DPIA should cover what data the AI processes, the risks to callers\u2019 rights, safeguards in place, and whether processing is proportionate to your aim." },
  { title: "Data Processor Agreements", ref: "Article 28", desc: "Your AI provider is a data processor acting on your instructions. UK GDPR requires a written DPA covering processing scope, security measures, sub-processor obligations, data deletion on termination, and your right to audit." },
  { title: "Data Retention", ref: "Article 5(1)(e)", desc: "Personal data must not be kept longer than necessary. Define clear retention periods, document your reasoning, and ensure data is actually deleted when the period expires. Six months is a common baseline for call recordings." },
  { title: "Automated Decision-Making", ref: "Article 22", desc: "If your AI makes decisions with legal or significant effects, individuals have the right to human review. Most receptionist tasks (booking, routing) don\u2019t trigger this, but lead qualification scoring might." },
  { title: "International Data Transfers", ref: "Articles 44\u201349", desc: "Check where your AI provider hosts data. If data leaves the UK, you need appropriate safeguards: UK adequacy decisions, Standard Contractual Clauses, or Transfer Impact Assessments." },
];

const checklist = [
  "Identify your lawful basis for processing caller data",
  "Conduct a Data Protection Impact Assessment",
  "Update your privacy policy to mention AI call handling",
  "Add a call notification informing callers about AI and recording",
  "Sign a Data Processor Agreement with your AI provider",
  "Configure appropriate data retention periods",
  "Document your processing activities (Article 30 record)",
  "Establish a process for handling data subject access requests",
  "Train staff on data protection responsibilities",
  "Review and update your compliance annually",
];

const faqs = [
  { q: "Is using an AI receptionist GDPR-compliant in the UK?", a: "Yes, provided you meet the core requirements: establish a lawful basis for processing, maintain transparency with callers, sign a Data Processor Agreement with your provider, and set appropriate data retention periods. The technology itself is not non-compliant \u2014 it is how you implement and manage it that determines compliance." },
  { q: "Do I need consent to use an AI receptionist?", a: "Legitimate interests is typically the lawful basis for answering business calls via AI. Consent may be needed specifically for recording calls. Always document your chosen lawful basis and the reasoning behind it." },
  { q: "Do callers need to be told they are speaking to AI?", a: "Yes. ICO transparency requirements mean callers should be informed that they are interacting with an AI system. Voqal AI agents identify themselves at the start of each call." },
  { q: "How long can I keep call recordings under GDPR?", a: "Only as long as necessary for the stated purpose. You must document your retention period and be able to justify it. Six months is a common baseline, but your specific business needs may require a shorter or longer period." },
  { q: "Do I need a Data Protection Impact Assessment for AI calls?", a: "Likely yes. The ICO recommends DPIAs for any new technology that processes personal data systematically. Even when not strictly required, completing a DPIA is good practice and demonstrates due diligence." },
  { q: "What happens if my AI provider stores data outside the UK?", a: "You need appropriate safeguards in place, such as Standard Contractual Clauses or reliance on a UK adequacy decision. Check where your provider\u2019s servers are located and what transfer mechanisms they use." },
  { q: "Can the ICO fine me for using AI voice systems?", a: "Fines apply to non-compliance with GDPR, not to using AI technology itself. If you process data lawfully with proper safeguards, transparency, and documentation, you are protected." },
  { q: "What rights do callers have under GDPR?", a: "Right to be informed about data processing, right of access to their data, right to erasure, right to rectification, and right to object to processing. Your AI provider should support you in fulfilling these rights." },
];

export default function GdprGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Compliance Guide</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 800 }}>
            GDPR-Compliant AI Receptionist: UK Business Guide <span className="italic-accent">2026.</span>
          </h1>
          <p className="body-text" style={{ marginTop: "1.5rem" }}>
            Everything UK businesses need to know about using AI voice systems while meeting GDPR, ICO, and data protection requirements.
          </p>
        </Reveal>
      </section>

      {/* Why GDPR Matters */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">The Stakes</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Why GDPR Compliance Matters for AI <span className="italic-accent">Voice Systems.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              AI receptionists process personal data on every call. Caller voices, names, phone numbers, appointment details, and conversation content are all personal data under UK GDPR.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Non-compliance carries serious consequences. The ICO can issue fines of up to <strong style={{ color: "var(--text-primary)" }}>&pound;17.5 million or 4% of global annual turnover</strong> (whichever is higher). Beyond fines, a data protection breach damages customer trust &mdash; something no business can afford.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
              The good news: using an AI receptionist is not inherently non-compliant. With the right safeguards, documentation, and processes, UK businesses can deploy AI voice systems confidently.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Key Requirements */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Legal Framework</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Key GDPR Requirements for AI <span className="italic-accent">Receptionists.</span>
          </h2>
        </Reveal>

        <div style={{ marginTop: "3rem" }}>
          {requirements.map((req, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="service-card" style={{ marginBottom: "2rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start" }}>
                <div className="step-number" style={{ position: "relative", top: 0, left: 0, fontSize: "3rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 500 }}>{req.title}</h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{req.ref}</span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{req.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ICO Guidance */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">ICO</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            ICO Guidance for Voice AI <span className="italic-accent">Systems.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            <div style={{ borderBottom: "1px solid var(--border-subtle)", padding: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>Call Recording Requirements</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>Callers must be informed before recording begins, the purpose must be stated, and an opt-out should be offered where practical.</p>
            </div>
            <div style={{ borderBottom: "1px solid var(--border-subtle)", padding: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>AI Transparency</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>The ICO emphasises that organisations must be transparent about the use of AI in communications. Callers should know they are interacting with AI, not a human.</p>
            </div>
            <div style={{ borderBottom: "1px solid var(--border-subtle)", padding: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>AI and Data Protection Risk Toolkit</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>The ICO provides a risk toolkit for organisations deploying AI, covering governance, accountability, transparency, fairness, and security.</p>
            </div>
            <div style={{ padding: "1.5rem 0" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: "0.75rem" }}>Enforcement Approach</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>The ICO has increased its focus on AI systems. Demonstrating that you have considered data protection from the outset puts you in a strong position if the ICO investigates.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How Voqal AI Supports Compliance */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Our Approach</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How Voqal AI Supports Your <span className="italic-accent">Compliance.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Call Notification", desc: "AI agents identify themselves at the start of each call. Callers know who \u2014 and what \u2014 they are speaking to." },
              { title: "Data Processor Agreement", desc: "A DPA is provided to all clients as standard, covering processing scope, security obligations, and data deletion." },
              { title: "Configurable Retention", desc: "Set retention periods that match your documented policy. Data is deleted when your chosen window expires." },
              { title: "UK-Based Business", desc: "Voqal AI Ltd (Company No. 17080303), providing transparent data practices under UK jurisdiction." },
              { title: "DSAR Support", desc: "We support data subject access requests and provide the information you need for your DPIA and processing records." },
            ].map((item, i) => (
              <div key={i} className="service-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Checklist */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Action Items</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            GDPR Compliance <span className="italic-accent">Checklist.</span>
          </h2>
          <p className="body-text" style={{ marginTop: "1rem" }}>Complete these ten steps before deploying an AI voice receptionist.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            {checklist.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1rem", alignItems: "baseline", padding: "1rem 0", borderBottom: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Related Guides */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Further Reading</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Related <span className="italic-accent">Guides.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", display: "grid", gap: "1.5rem", maxWidth: 800 }}>
            <Link href="/guides/ico-voice-ai-compliance-checklist/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>ICO Voice AI Compliance Checklist</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>18-point actionable checklist based on ICO guidance and UK GDPR requirements.</p>
            </Link>
            <Link href="/guides/ai-receptionist-dental-practice-compliance/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>AI Receptionist Compliance for Dental Practices</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>NHS data protection, GDC standards, and CQC requirements for dental practices.</p>
            </Link>
            <Link href="/guides/how-to-set-up-ai-receptionist/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>How to Set Up an AI Receptionist</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Step-by-step guide to configuring and going live with your AI receptionist.</p>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section-padding section-alt container">
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
      <section className="section-padding section-white container">
        <Reveal>
          <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", maxWidth: 700, fontStyle: "italic", lineHeight: 1.7 }}>
            This guide provides general information about GDPR compliance for AI voice systems. It is not legal advice. For specific compliance guidance, consult a qualified data protection officer or solicitor. Regulations and ICO guidance may change &mdash; verify current requirements before making compliance decisions.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Ready to deploy <span className="italic-accent">compliantly?</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem", maxWidth: 500, margin: "0 auto 3rem" }}>
              Data Processor Agreement included. UK-based. No contracts.
            </p>
            <Link href="/contact" className="btn-accent rounded-full px-8 py-3.5">Request Demo</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
