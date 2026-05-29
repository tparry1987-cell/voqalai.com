import Link from "next/link";
import { PhoneCall, CalendarCheck, Route, DatabaseZap, MessagesSquare, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Voice Agents",
    serviceType: "AI voice agents and AI receptionist systems",
    description:
      "AI voice agents that answer calls, qualify leads, book appointments, route enquiries, and update business systems 24/7.",
    provider: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
    areaServed: "Worldwide",
    url: "https://voqalai.com/voice-agents/",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voqalai.com/" },
      { "@type": "ListItem", position: 2, name: "Voice Agents", item: "https://voqalai.com/voice-agents/" },
    ],
  },
];

const capabilities = [
  { title: "Answer Every Call", text: "Respond in under two seconds, 24/7, even when your team is busy, closed, or already on another call.", Icon: PhoneCall },
  { title: "Book Appointments", text: "Check availability, capture details, confirm bookings, and reduce manual admin around enquiries.", Icon: CalendarCheck },
  { title: "Qualify & Route Leads", text: "Ask the right questions, understand intent, and route calls by urgency, service, location, or case type.", Icon: Route },
  { title: "Update Your Systems", text: "Send call outcomes, notes, lead data, and follow-up tasks into your CRM, calendar, inbox, or workflow tools.", Icon: DatabaseZap },
  { title: "Handle FAQs", text: "Answer common questions using your services, policies, opening hours, pricing guidance, and internal knowledge.", Icon: MessagesSquare },
  { title: "Escalate When Needed", text: "Transfer urgent calls, take detailed messages, or notify the right person when a human needs to step in.", Icon: ShieldCheck },
];

const workflow = [
  ["01", "Map the call flow", "We learn how your business currently handles enquiries, bookings, qualification, messages, and handoffs."],
  ["02", "Train the agent", "We build the knowledge base, tone of voice, call logic, routing rules, and fallback paths around your real operation."],
  ["03", "Connect the tools", "We integrate calendars, CRMs, inboxes, forms, notifications, and workflow systems where they matter."],
  ["04", "Test and refine", "We run realistic call scenarios, adjust the agent, and make sure it handles edge cases before launch."],
  ["05", "Go live and improve", "Once live, the agent keeps learning from call outcomes, FAQs, missed opportunities, and business changes."],
];

const sectors = [
  ["Dental Practices", "Confirm appointments, answer treatment enquiries, reduce missed calls, and capture new patient demand."],
  ["Law Firms", "Qualify enquiries by practice area, route urgent matters, and make sure potential clients get a fast response."],
  ["Trades & Home Services", "Capture job leads while teams are on-site, ask the right questions, and trigger fast follow-up."],
  ["Medical Clinics", "Support patient communication, triage routine enquiries, and provide structured after-hours response."],
  ["Estate Agents", "Book viewings, qualify buyers and sellers, and keep property enquiries moving outside office hours."],
  ["Accountancy Firms", "Handle busy-period enquiries, appointment requests, document reminders, and client communication."],
];

const outcomes = [
  ["Faster response", "Every caller gets an immediate answer instead of voicemail or a missed-call log."],
  ["Cleaner handover", "Your team receives structured notes, lead details, and next actions rather than vague messages."],
  ["Less admin", "Bookings, confirmations, updates, and follow-ups move automatically through your existing tools."],
  ["Better coverage", "The same standard of response is available at lunch, after hours, weekends, and busy periods."],
];

const evidence = [
  { n: "< 2s", l: "Answer time — every call, day or night." },
  { n: "67%", l: "Of customers hang up when they can't reach a real person. (Forbes, 2023)" },
  { n: "21×", l: "More likely to convert when answered in five minutes. (MIT / InsideSales.com)" },
  { n: "80%", l: "Of voicemail callers won't leave a message. (PATLive, 2023)" },
  { n: "£25K", l: "Average UK receptionist salary. Voqal AI from £197/mo." },
  { n: "5.5M", l: "UK SMEs rely on inbound phone calls. (FSB, 2024)" },
  { n: "91M", l: "Active UK mobile subscriptions. (Ofcom, 2024)" },
  { n: "$80B", l: "Conversational-AI savings projected by 2026. (Gartner)" },
];

export default function VoiceAgentsPage() {
  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      {schema.map((data, i) => (
        <script key={`voice-agent-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 56 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Voice Agents · Voqal AI
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 700 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              AI VOICE AGENTS FOR BUSINESSES THAT <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>can&apos;t miss calls.</span>
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 480, paddingTop: 12 }}>
            <FadeUp as="p" delay={0.25} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", margin: "0 0 24px" }}>
              A voice agent is more than an answering service. It can qualify enquiries, book appointments, route urgent calls, answer business-specific questions, and update the systems your team already uses.
            </FadeUp>
            <FadeUp delay={0.4}>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/book/" className="cog-btn-primary">Book a Demo</Link>
                <a href="tel:+442039960962" className="cog-btn-secondary">Call 020 3996 0962</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
          What it handles
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 22px", maxWidth: 780 }}>
            Your front desk, lead response, and first-line customer communication.
          </h2>
        </FadeUp>
        <FadeUp as="p" delay={0.2} style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", maxWidth: 620, margin: "0 0 42px" }}>
          Built around your services, your tone, and the way your team actually works.
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {capabilities.map(({ title, text, Icon }, i) => (
            <FadeUp key={title} delay={0.25 + i * 0.08}>
              <article style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "26px 26px 30px", height: "100%" }}>
                <Icon size={22} strokeWidth={1.5} style={{ color: "var(--cog-copper-light)", marginBottom: 22 }} />
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.68)", margin: 0 }}>{text}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 48 }}>
          <div className="cog-services-head-col" style={{ width: "36%" }}>
            <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>How it works</FadeUp>
            <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              From call script to live AI system.
            </FadeUp>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 32 }}>
            <FadeUp as="p" delay={0.25} style={{ fontSize: 14, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 560, margin: 0 }}>
              We do the heavy lifting: call logic, knowledge base, integrations, testing, deployment, monitoring, and ongoing improvements. The goal is simple: an AI system that feels natural to callers and useful to your team.
            </FadeUp>
          </div>
        </div>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {workflow.map(([n, title, body], i) => (
            <FadeUp key={n} delay={0.1 + i * 0.08}>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.18)", paddingTop: 18, height: "100%" }}>
                <div className="cog-italic" style={{ fontSize: 32, color: "var(--cog-copper)", lineHeight: 1, marginBottom: 14 }}>{n}</div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ fontSize: 12, lineHeight: 1.55, color: "#3a3a3a", margin: 0 }}>{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 20 }}>
          <FadeUp delay={0}>
            <div style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: "30px 32px", height: "100%" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 14, textTransform: "uppercase" }}>Outcomes</div>
              <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 24px" }}>
                What changes when every call is handled properly.
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                {outcomes.map(([title, body]) => (
                  <div key={title}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", margin: "0 0 8px" }}>{title}</h3>
                    <p style={{ fontSize: 12, lineHeight: 1.6, color: "#3a3a3a", margin: 0 }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div style={{ border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: "30px 32px", height: "100%", background: "rgba(255,255,255,0.22)" }}>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--cog-copper)", fontWeight: 600, marginBottom: 14, textTransform: "uppercase" }}>Human handoff</div>
              <h2 className="cog-h-display" style={{ fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 18px" }}>
                AI where it helps. People where it matters.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#3a3a3a", margin: 0 }}>
                Your voice agent can transfer urgent calls, flag sensitive enquiries, send instant notifications, or take a detailed message. It is designed to support your team, not trap customers in a dead-end script.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>
          Built by sector
        </FadeUp>
        <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 42px", maxWidth: 780 }}>
          The same technology, shaped around different business realities.
        </FadeUp>
        <div className="cog-industries-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {sectors.map(([title, body], i) => (
            <FadeUp key={title} delay={0.15 + i * 0.08}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "26px 28px", minHeight: 170, height: "100%" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.66)", margin: 0 }}>{body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="evidence" className="cog-section-pad-lg speakable-stats" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666" }}>
            005 / 006 — The Evidence
          </FadeUp>
          <FadeUp delay={0.05} style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.18)", maxWidth: 280 }}>{""}</FadeUp>
        </div>

        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start", marginBottom: 56 }}>
          <div className="cog-services-head-col" style={{ width: "40%" }}>
            <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: 0, maxWidth: 420 }}>
              The data behind <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>AI receptionists.</span>
            </h2>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, paddingTop: 8 }}>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 14, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 480, margin: 0 }}>
              Independent research from the FSB, ONS, Forbes, PATLive, MIT, Ofcom and Gartner — the numbers that explain why answering every call within seconds is no longer optional.
            </FadeUp>
          </div>
        </div>

        <div className="cog-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {evidence.map((s, i) => (
            <FadeUp key={s.n + i} delay={0.1 + i * 0.06}>
              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.18)",
                  borderRadius: 16,
                  padding: "24px 22px",
                  height: "100%",
                  background: "rgba(255,255,255,0.18)",
                }}
              >
                <div className="cog-italic" style={{ fontSize: "clamp(36px, 3.5vw, 52px)", color: "var(--cog-copper)", lineHeight: 1, marginBottom: 12 }}>
                  {s.n}
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "#3a3a3a" }}>{s.l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 0 }}>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "center" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 760 }}>
            <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>006 / 006 — Connect</FadeUp>
            <FadeUp as="h2" delay={0.1} className="cog-h-display" style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 24px" }}>
              READY TO STOP<br />
              LOSING <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>revenue?</span>
            </FadeUp>
            <FadeUp as="p" delay={0.2} style={{ fontSize: 15, lineHeight: 1.7, color: "#3a3a3a", maxWidth: 560, margin: 0 }}>
              A UK receptionist costs £22,000–£28,000 a year (ONS ASHE, 2024). Voqal AI starts from £197/month — no contracts, personalised demo within 24 hours.
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="tel:+442039960962" className="cog-btn-primary">Speak to our AI</a>
              <Link href="/book/" className="cog-btn-secondary">Book a Demo</Link>
              <Link href="/lead-reactivation/" className="cog-btn-secondary">Cost calculator</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </div>
  );
}
