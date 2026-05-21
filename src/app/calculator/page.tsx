"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const SCENARIOS = [
  { label: "Really cold", responseRate: 0.35, qualifiedRate: 0.10, defaultClose: 0.35 },
  { label: "Standard cold", responseRate: 0.50, qualifiedRate: 0.15, defaultClose: 0.40 },
  { label: "Lukewarm", responseRate: 0.65, qualifiedRate: 0.20, defaultClose: 0.50 },
];
const VOQAL_FEE_PER_BOOKING = 50;

type SmsMsg = { dir?: "sent" | "received"; text?: string; time?: string; pill?: string };
const SMS_THREADS: Record<string, { name: string; messages: SmsMsg[] }> = {
  trades: { name: "Northwest Electrical", messages: [
    { dir: "sent", text: "Hi Mark, it's Sophie from Northwest Electrical. You enquired about a fuse box upgrade back in July. Still on your list?", time: "14:35" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Hi Sophie, yeah we got busy with summer. Still need it doing.", time: "15:02" },
    { pill: "Lead replied" },
    { dir: "sent", text: "No worries — we've a couple of slots next week. Want me to send the calendar?", time: "15:03" },
    { dir: "received", text: "Yes please", time: "15:11" },
    { dir: "sent", text: "Here you go: cal.com/northwest-electrical — pick whatever works.", time: "15:11" },
    { dir: "received", text: "Booked Tues 10am.", time: "15:18" },
    { pill: "Booking confirmed" },
  ]},
  dental: { name: "BrightSmile Dental", messages: [
    { dir: "sent", text: "Hi Laura, Sophie from BrightSmile here. Is this the same Laura who had a cosmetic consult with us about 8 months ago?", time: "14:00" },
    { pill: "Lead engaged" },
    { dir: "received", text: "Yes that was me", time: "14:08" },
    { dir: "sent", text: "We've a few hygiene slots this month. Are you overdue for a checkup, or still thinking about the whitening plan?", time: "14:09" },
    { dir: "received", text: "Both honestly. The whitening quote scared me a bit", time: "14:18" },
    { pill: "Handling objection" },
    { dir: "sent", text: "Totally fair. Your insurance covers the checkup fully. For the whitening, we offer interest-free over 24 months.", time: "14:20" },
    { dir: "received", text: "Yes that would work", time: "14:40" },
    { pill: "Booking confirmed" },
  ]},
  gym: { name: "IronPulse Fitness", messages: [
    { dir: "sent", text: "Hi Mark, Sara from IronPulse here. Is this the same Mark who used to be a member with us a while back?", time: "10:00" },
    { dir: "received", text: "Yes that's me", time: "10:12" },
    { dir: "sent", text: "Are you still looking to get back into training?", time: "10:13" },
    { dir: "received", text: "I'd love to but I just had a baby and time is tight", time: "10:18" },
    { pill: "Handling objection" },
    { dir: "sent", text: "Congrats! New parents who train smart tend to stick with it better. Want to book a 30-min PT plan call?", time: "10:35" },
    { dir: "received", text: "Yes, sounds like a plan", time: "10:42" },
    { pill: "Booking confirmed" },
  ]},
  coaching: { name: "Threshold Coaching", messages: [
    { dir: "sent", text: "Hi Ellen, Maya from Threshold. Is this the same Ellen who booked a clarity call in February?", time: "11:00" },
    { dir: "received", text: "Yes — sorry I never showed up, work was insane", time: "11:08" },
    { dir: "sent", text: "Most people who ghost a clarity call need it the most. Still feeling stuck, or did something shift?", time: "11:09" },
    { dir: "received", text: "Honestly it's worse. Still in HR, burned out.", time: "11:20" },
    { dir: "sent", text: "We work with people in transition — you stay employed while we build the practice. Want 30 mins with our head coach?", time: "11:49" },
    { dir: "received", text: "Yes I think I'm ready for that", time: "12:05" },
    { pill: "Booking confirmed" },
  ]},
  agency: { name: "Studio Atlas", messages: [
    { dir: "sent", text: "Hi Tom, James from Studio Atlas here. You enquired about a website rebuild back in spring — still on the cards?", time: "09:30" },
    { dir: "received", text: "Yeah it is. We just kept getting busy and never closed it out", time: "09:42" },
    { dir: "sent", text: "30 mins to run through the new scope? No charge.", time: "09:56" },
    { dir: "received", text: "Yeah that works. Tomorrow afternoon any good?", time: "10:02" },
    { dir: "sent", text: "Yep — 15:00 or 16:30 free.", time: "10:03" },
    { dir: "received", text: "Booked 16:30", time: "10:08" },
    { pill: "Booking confirmed" },
  ]},
};

const fmt = new Intl.NumberFormat("en-GB");
const fmtMoney = (n: number) => "£" + fmt.format(Math.round(n));

export default function CalculatorPage() {
  const [leads, setLeads] = useState(5000);
  const [deal, setDeal] = useState(3000);
  const [scenario, setScenario] = useState(1);
  const [closeRate, setCloseRate] = useState(40);
  const [smsIndustry, setSmsIndustry] = useState("dental");

  const result = useMemo(() => {
    const sc = SCENARIOS[scenario];
    const responded = Math.round(leads * sc.responseRate);
    const qualified = Math.round(responded * sc.qualifiedRate);
    const closed = Math.round(qualified * (closeRate / 100));
    const revenue = closed * deal;
    const fee = qualified * VOQAL_FEE_PER_BOOKING;
    return { sc, responded, qualified, closed, revenue, fee, net: revenue - fee };
  }, [leads, deal, scenario, closeRate]);

  const sms = SMS_THREADS[smsIndustry];

  return (
    <div className="cog-redesign" style={{ background: "#C5C5C5", minHeight: "100vh" }}>
      <Navbar />

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5", paddingTop: 140, paddingBottom: 40 }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: 22 }}>
          Calculator · Lead Reactivation
        </FadeUp>
        <div className="cog-services-head-row" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 640 }}>
            <h1 className="cog-h-display" style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#1a1a1a", margin: 0 }}>
              STOP CHASING<br />
              FRESH LEADS.<br />
              <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>Wake up</span><br />
              THE ONES YOU HAVE.
            </h1>
          </div>
          <div className="cog-services-head-col" style={{ flex: 1, maxWidth: 460, paddingTop: 12 }}>
            <FadeUp delay={0.3}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                {[
                  { id: "trades", label: "Trades" },
                  { id: "dental", label: "Dental clinic" },
                  { id: "gym", label: "Gym" },
                  { id: "coaching", label: "Coaching" },
                  { id: "agency", label: "Agency" },
                ].map((p) => (
                  <button key={p.id} onClick={() => setSmsIndustry(p.id)} style={{
                    padding: "0.5rem 1rem", borderRadius: 999,
                    background: smsIndustry === p.id ? "#1a1a1a" : "transparent",
                    color: smsIndustry === p.id ? "#fff" : "#1a1a1a",
                    border: "1px solid " + (smsIndustry === p.id ? "#1a1a1a" : "rgba(0,0,0,0.25)"),
                    fontFamily: "inherit", fontSize: 12, fontWeight: 500, letterSpacing: "0.04em",
                  }}>{p.label}</button>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div style={{ maxWidth: "100%", background: "#1a1a1a", borderRadius: 28, padding: 24, border: "1px solid rgba(0,0,0,0.18)" }}>
                <div style={{ borderRadius: 18, background: "#0f0f0f", padding: 20, display: "flex", flexDirection: "column", gap: 14, minHeight: 460 }}>
                  <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 14, marginBottom: 4 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{sms.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>+44 7700 900 123</div>
                  </div>
                  {sms.messages.map((m, i) => {
                    if (m.pill) {
                      return (
                        <div key={i} style={{ alignSelf: "center", fontSize: 10, letterSpacing: "0.12em", color: "var(--cog-copper-light)", textTransform: "uppercase", padding: "4px 10px", border: "1px solid rgba(244,176,139,0.3)", borderRadius: 999 }}>
                          {m.pill}
                        </div>
                      );
                    }
                    const isSent = m.dir === "sent";
                    return (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: isSent ? "flex-end" : "flex-start" }}>
                        <div style={{
                          maxWidth: "75%", padding: "10px 14px", borderRadius: 14,
                          background: isSent ? "var(--cog-copper)" : "rgba(255,255,255,0.08)",
                          color: isSent ? "#fff" : "rgba(255,255,255,0.95)",
                          fontSize: 13, lineHeight: 1.45,
                        }}>{m.text}</div>
                        {m.time && (
                          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 4, letterSpacing: "0.04em" }}>{m.time}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div style={{ marginTop: 24 }}>
                <Link href="/book" className="cog-btn-primary">Book a demo</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#2e2e2e", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>THE PROBLEM</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 48px", maxWidth: 820 }}>
            Numbers that <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>pay for themselves.</span>
          </h2>
        </FadeUp>
        <div className="cog-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[
            { n: "79%", l: "Of marketing leads never convert — for lack of follow-up.", s: "Salesforce / MarketingSherpa" },
            { n: "44%", l: "Of leads, sales reps don't ring even once.", s: "Salesforce" },
            { n: "6–7×", l: "Cheaper to reactivate an old lead than acquire a new one.", s: "Industry consensus" },
            { n: "+25–95%", l: "Revenue lift from a 5% increase in reactivation.", s: "Bain & Company" },
          ].map((s, i) => (
            <FadeUp key={s.n} delay={0.15 + i * 0.08}>
              <div>
                <div className="cog-italic" style={{ fontSize: "clamp(36px, 3.5vw, 52px)", color: "var(--cog-copper-light)", lineHeight: 1, marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,0.75)", marginBottom: 8 }}>{s.l}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{s.s}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="calculator" className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#C5C5C5" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "#666", marginBottom: 20 }}>Revenue Recovery Calculator</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#1a1a1a", margin: "0 0 48px", maxWidth: 720 }}>
            You bought these leads. <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper)" }}>Let&apos;s make them pay.</span>
          </h2>
        </FadeUp>

        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, border: "1px solid rgba(0,0,0,0.18)", borderRadius: 20, padding: 32, background: "rgba(255,255,255,0.25)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <CalcRange label="Leads you've already paid for" value={leads} setValue={setLeads} min={500} max={50000} step={100} display={fmt.format(leads)} bounds={["500", "50,000"]} />
            <CalcRange label="What each deal is worth" value={deal} setValue={setDeal} min={50} max={25000} step={50} display={fmtMoney(deal)} bounds={["£50", "£25,000"]} />
            <div>
              <label style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", fontWeight: 600, marginBottom: 12, display: "block" }}>
                Lead temperature
              </label>
              <div style={{ display: "inline-flex", background: "#fff", border: "1px solid rgba(0,0,0,0.18)", borderRadius: 999, padding: 4, gap: 4, flexWrap: "wrap" }}>
                {SCENARIOS.map((s, i) => (
                  <button key={s.label} onClick={() => { setScenario(i); setCloseRate(Math.round(SCENARIOS[i].defaultClose * 100)); }} style={{
                    padding: "0.55rem 1.2rem", borderRadius: 999,
                    background: scenario === i ? "#1a1a1a" : "transparent",
                    color: scenario === i ? "#fff" : "#888",
                    border: "1px solid " + (scenario === i ? "#1a1a1a" : "transparent"),
                    fontFamily: "inherit", fontSize: 11, fontWeight: 500, letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}>{s.label}</button>
                ))}
              </div>
            </div>
            <CalcRange label="Close rate (your team's number)" value={closeRate} setValue={setCloseRate} min={5} max={90} step={1} display={`${closeRate}%`} bounds={["5%", "90%"]} />
          </div>

          <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <FunnelRow label="Your lead amount" value={fmt.format(leads)} />
              <FunnelRow label="How many re-engage" value={`${fmt.format(result.responded)}  (${Math.round(result.sc.responseRate * 100)}%)`} />
              <FunnelRow label="How many book a call" value={`${fmt.format(result.qualified)}  (${Math.round(result.sc.responseRate * result.sc.qualifiedRate * 100)}%)`} />
              <FunnelRow label="How many deals you close" value={`${fmt.format(result.closed)}  (${(result.sc.responseRate * result.sc.qualifiedRate * (closeRate / 100) * 100).toFixed(1)}%)`} last />
            </div>
            <div style={{ borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", padding: 20 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", textTransform: "uppercase", marginBottom: 10 }}>New revenue you&apos;d unlock</div>
              <div className="cog-italic" style={{ fontSize: "clamp(40px, 4vw, 56px)", color: "var(--cog-copper-light)", lineHeight: 1, marginBottom: 10 }}>
                {fmtMoney(result.revenue)}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                Voqal fee at £50/booking: <strong>{fmtMoney(result.fee)}</strong> · Your net: <strong style={{ color: "#fff" }}>{fmtMoney(result.net)}</strong>
              </div>
            </div>
            <Link href="/book" className="cog-btn-light" style={{ justifyContent: "center" }}>
              Bring these numbers to a 15-min walkthrough
            </Link>
          </div>
        </div>
      </section>

      <section className="cog-section-pad-lg" style={{ position: "relative", zIndex: 2, background: "#1a1a1a", color: "#fff" }}>
        <FadeUp delay={0} style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", marginBottom: 20 }}>The Clincher</FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="cog-h-display" style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", margin: "0 0 40px", maxWidth: 820 }}>
            We only get paid <span className="cog-italic" style={{ textTransform: "none", fontWeight: 400, color: "var(--cog-copper-light)" }}>when you do.</span>
          </h2>
        </FadeUp>
        <div className="cog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            { n: "£0", l: "Setup", sub: "No retainer" },
            { n: "£50", l: "Per confirmed booking", sub: "Only when they pick a time" },
            { n: "14d", l: "Pilot window", sub: "Cancel anytime" },
          ].map((p, i) => (
            <FadeUp key={p.n} delay={0.2 + i * 0.1}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "32px 28px", height: "100%" }}>
                <div className="cog-italic" style={{ fontSize: 56, color: "var(--cog-copper-light)", lineHeight: 1, marginBottom: 14 }}>{p.n}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{p.l}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{p.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.55} style={{ marginTop: 40 }}>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", maxWidth: 540, marginBottom: 24 }}>
            If we don&apos;t book you any calls, you owe us nothing. Bring your CRM, we&apos;ll show you the live numbers on the demo call.
          </p>
          <Link href="/book" className="cog-btn-light">Book a 15-min walkthrough</Link>
        </FadeUp>
      </section>

      <Footer />
    </div>
  );
}

function CalcRange({ label, value, setValue, min, max, step, display, bounds }: { label: string; value: number; setValue: (n: number) => void; min: number; max: number; step: number; display: string; bounds: [string, string] }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <label style={{ fontSize: 11, letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", fontWeight: 600 }}>{label}</label>
        <span className="cog-italic" style={{ fontSize: 22, color: "var(--cog-copper)" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} style={{ width: "100%", accentColor: "#1a1a1a" }} />
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#888", marginTop: 4, letterSpacing: "0.04em" }}>
        <span>{bounds[0]}</span><span>{bounds[1]}</span>
      </div>
    </div>
  );
}

function FunnelRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: last ? "none" : "1px solid rgba(255,255,255,0.12)", fontSize: 13 }}>
      <span style={{ color: "rgba(255,255,255,0.7)" }}>{label}</span>
      <span style={{ color: "#fff", fontVariantNumeric: "tabular-nums" }}>{value}</span>
    </div>
  );
}
