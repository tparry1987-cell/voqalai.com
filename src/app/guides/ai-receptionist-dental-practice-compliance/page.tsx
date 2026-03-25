import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Receptionist for Dental Practices: UK Compliance Guide 2026 | Voqal AI",
  description: "Complete compliance guide for dental practices using AI receptionists in the UK. Covers NHS data protection, GDC standards, patient confidentiality, and CQC requirements.",
  alternates: { canonical: "https://voqalai.com/guides/ai-receptionist-dental-practice-compliance/" },
  openGraph: {
    title: "AI Receptionist for Dental Practices: UK Compliance Guide 2026",
    description: "Complete compliance guide for dental practices using AI receptionists. NHS data protection, GDC standards, and CQC requirements.",
    url: "https://voqalai.com/guides/ai-receptionist-dental-practice-compliance/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can dental practices legally use AI receptionists?", acceptedAnswer: { "@type": "Answer", text: "Yes. There is no legal prohibition. You must comply with UK GDPR, maintain GDC professional standards, and meet CQC requirements." } },
    { "@type": "Question", name: "Does the AI need access to patient clinical records?", acceptedAnswer: { "@type": "Answer", text: "No. For appointment booking and general enquiries, the AI needs access to your scheduling system only. Clinical records should remain separate." } },
    { "@type": "Question", name: "Will CQC inspect our AI receptionist system?", acceptedAnswer: { "@type": "Answer", text: "CQC may ask about any digital system that handles patient data. Include your AI receptionist in your information governance documentation." } },
    { "@type": "Question", name: "Do we need to complete the DSPT for AI voice systems?", acceptedAnswer: { "@type": "Answer", text: "If your practice processes NHS patient data, your AI voice system should be included in your annual DSPT self-assessment." } },
    { "@type": "Question", name: "Can the AI handle NHS and private patient calls differently?", acceptedAnswer: { "@type": "Answer", text: "Yes. AI receptionists can be configured with different call flows for NHS and private enquiries." } },
    { "@type": "Question", name: "What if a patient discloses clinical symptoms to the AI?", acceptedAnswer: { "@type": "Answer", text: "Configure your AI to recognise clinical discussions and transfer them to a human team member. The AI should not provide clinical guidance." } },
    { "@type": "Question", name: "How does Voqal AI integrate with dental practice software?", acceptedAnswer: { "@type": "Answer", text: "Voqal AI integrates with Dentally for appointment management, syncing available slots for direct booking." } },
  ],
};

const nhsSections = [
  { title: "Data Security and Protection Toolkit (DSPT)", desc: "All organisations processing NHS patient data must complete the annual DSPT self-assessment. AI voice systems that handle patient appointment data fall within scope. When completing your DSPT, include your AI receptionist under third-party data processors, technical security controls, and staff training." },
  { title: "Caldicott Principles", desc: "The seven Caldicott Principles govern patient information use in NHS settings. For AI receptionists: justify the purpose (appointment booking), use only when necessary, collect minimum necessary data (name, contact, appointment preference), and restrict access on a strict need-to-know basis." },
  { title: "NHS Digital Standards", desc: "NHS organisations must follow NHS Digital\u2019s data and technology standards. Check that your AI provider\u2019s data handling aligns with NHS requirements for encryption, access control, and audit trails." },
];

const confidentialitySteps = [
  { title: "Configure call greetings", desc: "The AI should identify itself and the practice name at the start of each call. Avoid discussing patient details until identity is verified." },
  { title: "Limit data collection", desc: "Collect only what is needed: patient name, contact number, preferred appointment time, and a general reason for the visit. Do not ask for or record detailed clinical information." },
  { title: "Caller verification", desc: "Implement a simple verification step (date of birth or postcode) before confirming existing appointment details. This mirrors what a human receptionist would do." },
  { title: "Waiting room awareness", desc: "If your practice plays calls through speakers or has the AI system audible, ensure other patients cannot overhear personal information." },
  { title: "Voicemail and callbacks", desc: "If the AI leaves voicemails or sends SMS confirmations, ensure messages do not contain clinical details. Keep outbound messages to appointment time and practice name only." },
];

const checklist = [
  "Complete your annual DSPT self-assessment (include AI systems)",
  "Update your practice privacy notice to mention AI call handling",
  "Add AI disclosure to your phone greeting",
  "Sign a Data Processor Agreement with your AI provider",
  "Configure the AI for appointments only (route clinical queries to staff)",
  "Implement caller verification before sharing appointment details",
  "Set data retention periods (call recordings can have shorter retention than clinical records)",
  "Document your AI system in your information governance framework",
  "Include AI data handling in CQC inspection preparation",
  "Train all practice staff on the AI system and patient confidentiality",
  "Establish a process for patient data subject access requests",
  "Review Caldicott compliance annually",
];

const faqs = [
  { q: "Can dental practices legally use AI receptionists?", a: "Yes. There is no legal prohibition on dental practices using AI for reception tasks. You must comply with UK GDPR, maintain GDC professional standards, and meet CQC requirements, just as you would with any other digital system handling patient data." },
  { q: "Does the AI receptionist need access to patient clinical records?", a: "No. For appointment booking and general enquiries, the AI needs access to your scheduling system only. Clinical records should remain separate and accessible only to clinical staff." },
  { q: "Will CQC inspect our AI receptionist system?", a: "CQC may ask about any digital system that handles patient data during an inspection. Include your AI receptionist in your information governance documentation and ensure staff can explain how it works." },
  { q: "Do we need to complete the DSPT for AI voice systems?", a: "If your practice processes NHS patient data, which includes appointment scheduling for NHS patients, you should already complete the DSPT annually. Your AI voice system should be included in your self-assessment." },
  { q: "Can the AI handle NHS and private patient calls differently?", a: "Yes. AI receptionists can be configured with different call flows for NHS and private enquiries. This is useful because NHS appointment booking may have different scheduling rules." },
  { q: "What if a patient discloses clinical symptoms to the AI?", a: "Configure your AI to recognise when a caller discusses symptoms or clinical concerns and transfer them to a human team member. The AI should not attempt to provide clinical guidance." },
  { q: "How does Voqal AI integrate with dental practice software?", a: "Voqal AI integrates with Dentally for appointment management. The integration syncs available slots so the AI can book directly into your practice diary without double-booking." },
];

export default function DentalCompliancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Dental Compliance</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 800 }}>
            AI Receptionist for Dental Practices: UK Compliance Guide <span className="italic-accent">2026.</span>
          </h1>
          <p className="body-text" style={{ marginTop: "1.5rem" }}>
            How dental practices can deploy AI voice receptionists while meeting NHS data protection, GDC standards, and CQC requirements.
          </p>
        </Reveal>
      </section>

      {/* Why specific guidance */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Context</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Why Dental Practices Need Specific <span className="italic-accent">Guidance.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Dental practices handle <strong style={{ color: "var(--text-primary)" }}>special category health data</strong> under Article 9 of UK GDPR, which carries additional obligations beyond standard personal data processing.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>On top of GDPR, dental practices must navigate:</p>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--text-secondary)", lineHeight: 2 }}>
              <li><strong style={{ color: "var(--text-primary)" }}>NHS contract obligations</strong> &mdash; additional data handling requirements for NHS patient data</li>
              <li><strong style={{ color: "var(--text-primary)" }}>GDC professional standards</strong> &mdash; Standards for the Dental Team apply to all patient communications</li>
              <li><strong style={{ color: "var(--text-primary)" }}>CQC inspection requirements</strong> &mdash; digital systems are increasingly reviewed during inspections</li>
              <li><strong style={{ color: "var(--text-primary)" }}>Patient trust</strong> &mdash; data mishandling damages your practice&rsquo;s reputation</li>
            </ul>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginTop: "1.5rem" }}>
              None of this means you cannot use an AI receptionist. It means you need to deploy one thoughtfully, with the right safeguards.
            </p>
          </div>
        </Reveal>
      </section>

      {/* NHS Data Protection */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">NHS</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            NHS Data Protection <span className="italic-accent">Requirements.</span>
          </h2>
        </Reveal>
        <div style={{ marginTop: "3rem" }}>
          {nhsSections.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="service-card" style={{ marginBottom: "2rem", padding: "2rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GDC Standards */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Professional Standards</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            GDC Professional <span className="italic-accent">Standards.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The GDC&rsquo;s <strong style={{ color: "var(--text-primary)" }}>Standards for the Dental Team</strong> require maintaining patient confidentiality (Standard 4). AI systems handling patient calls must maintain the same confidentiality standards as human staff.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              If your AI receptionist handles calls where patients discuss treatment or symptoms, this data requires higher protection. Call recordings containing clinical information should be treated as clinical records.
            </p>
            <div className="service-card" style={{ padding: "1.5rem 2rem", borderLeft: "3px solid var(--accent)" }}>
              <p style={{ color: "var(--text-primary)", fontWeight: 500, marginBottom: "0.5rem" }}>Practical recommendation</p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Configure your AI to handle appointment logistics only &mdash; booking, rescheduling, cancellations, and general enquiries. Route clinical queries to a human team member.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CQC */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Inspections</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            CQC <span className="italic-accent">Considerations.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", maxWidth: 800 }}>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              CQC inspects dental practices under the <strong style={{ color: "var(--text-primary)" }}>&ldquo;Safe&rdquo;</strong> and <strong style={{ color: "var(--text-primary)" }}>&ldquo;Well-led&rdquo;</strong> domains. Digital systems, including AI, fall within scope. Inspectors may ask about what data the AI collects, where it is stored, how patients are informed, and how staff have been trained.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "0.5rem" }}>Prepare by:</p>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--text-secondary)", lineHeight: 2 }}>
              <li>Including your AI receptionist in your information governance framework</li>
              <li>Adding it to your practice&rsquo;s risk register with identified risks and mitigations</li>
              <li>Documenting staff training on the AI system</li>
              <li>Keeping a summary document any team member can reference if asked by an inspector</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Patient Confidentiality */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">In Practice</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Patient Confidentiality in <span className="italic-accent">Practice.</span>
          </h2>
        </Reveal>
        <div style={{ marginTop: "3rem" }}>
          {confidentialitySteps.map((step, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="service-card" style={{ marginBottom: "2rem", display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start" }}>
                <div className="step-number" style={{ position: "relative", top: 0, left: 0, fontSize: "3rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 500, marginBottom: "0.75rem" }}>{step.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="section-padding section-white container">
        <Reveal>
          <span className="section-label">Action Items</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Compliance Checklist for Dental <span className="italic-accent">Practices.</span>
          </h2>
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

      {/* How Voqal AI works with dental */}
      <section className="section-padding section-alt container">
        <Reveal>
          <span className="section-label">Our Approach</span>
          <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How Voqal AI Works with Dental <span className="italic-accent">Practices.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Dentally Integration", desc: "Syncs available slots so the AI can book directly into your practice diary without double-booking." },
              { title: "AI Identification", desc: "Identifies itself at the start of every call, meeting transparency obligations from the first moment of patient contact." },
              { title: "Appointments Only", desc: "Configurable to handle booking, rescheduling, and cancellations only. Clinical queries routed to your team." },
              { title: "DPA Included", desc: "Data Processor Agreement provided as standard, covering the specific requirements of health data processing." },
              { title: "Configurable Retention", desc: "Set data retention periods that align with your documented policy. Deleted when your window expires." },
            ].map((item, i) => (
              <div key={i} className="service-card" style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
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
            <Link href="/guides/gdpr-compliant-ai-receptionist-uk/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>GDPR-Compliant AI Receptionist Guide</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Complete UK guide to GDPR compliance for AI voice receptionists.</p>
            </Link>
            <Link href="/guides/ico-voice-ai-compliance-checklist/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>ICO Voice AI Compliance Checklist</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>18-point actionable checklist based on ICO guidance.</p>
            </Link>
            <Link href="/guides/how-to-set-up-ai-receptionist/" className="service-card" style={{ padding: "1.5rem 2rem", display: "block" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.5rem" }}>How to Set Up an AI Receptionist</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Step-by-step setup guide for UK businesses.</p>
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
            This guide provides general compliance information for dental practices considering AI receptionist systems. It is not legal advice and does not constitute guidance from the GDC, CQC, or NHS Digital. For specific requirements, consult your data protection officer, dental defence organisation, or specialist healthcare solicitor.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--bg-footer)", padding: "8rem 0", textAlign: "center" }}>
        <div className="container">
          <Reveal>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              AI built for dental <span className="italic-accent">practices.</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", marginBottom: "3rem", maxWidth: 500, margin: "0 auto 3rem" }}>
              Dentally integration. DPA included. No contracts.
            </p>
            <Link href="/contact" className="btn-accent rounded-full px-8 py-3.5">Request Demo</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
