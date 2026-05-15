"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

const enquireSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Strategic AI Audit — Enquiry",
    "description": "Tell Voqal AI about your business and we'll scope a Strategic AI Audit. Reply with a fixed quote within two working days.",
    "url": "https://voqalai.com/audit/enquire"
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://voqalai.com/" },
      { "@type": "ListItem", "position": 2, "name": "Audit", "item": "https://voqalai.com/audit" },
      { "@type": "ListItem", "position": 3, "name": "Strategic Audit Enquiry", "item": "https://voqalai.com/audit/enquire" }
    ]
  }
];

const fieldLabel: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontWeight: 600,
  color: "var(--accent)",
  marginBottom: "0.65rem",
};

const fieldInput: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  color: "#111",
  background: "#fff",
  border: "1px solid var(--border-subtle)",
  borderRadius: 8,
};

const fieldTextarea: React.CSSProperties = {
  ...fieldInput,
  minHeight: 110,
  resize: "vertical",
  lineHeight: 1.5,
};

const fieldGroup: React.CSSProperties = {
  marginBottom: "1.75rem",
};

const sectionHeading: React.CSSProperties = {
  fontFamily: "'Instrument Serif', serif",
  fontStyle: "italic",
  fontSize: "1.5rem",
  color: "#111",
  borderBottom: "1px solid var(--border-subtle)",
  paddingBottom: "0.75rem",
  marginBottom: "2rem",
  marginTop: "3rem",
};

export default function AuditEnquirePage() {
  return (
    <>
      {enquireSchema.map((data, i) => (
        <script key={`enquire-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "9rem" }}>
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            <span className="section-label">Strategic AI Audit — Enquiry</span>
            <h1 className="heading" style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)", marginBottom: "1.25rem", lineHeight: 1.1 }}>
              Tell us about your business. We&rsquo;ll come back with a <span className="italic-accent">scoped quote.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 580, margin: "0 auto" }}>
              Every business at this scale runs differently. Five minutes here saves an hour on the call. We&rsquo;ll reply with a fixed scope and price inside two working days.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            name="audit-enquiry"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you/"
            style={{ maxWidth: 680, margin: "3.5rem auto 0", background: "#fff", padding: "0", borderRadius: 16 }}
          >
            {/* Netlify form-name (required for static deploys) */}
            <input type="hidden" name="form-name" value="audit-enquiry" />
            {/* Honeypot field — hidden from humans, bots fill it */}
            <p style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <h2 style={sectionHeading}>About you</h2>

            <div style={fieldGroup}>
              <label htmlFor="name" style={fieldLabel}>Your name</label>
              <input id="name" name="name" type="text" required autoComplete="name" style={fieldInput} />
            </div>

            <div style={fieldGroup}>
              <label htmlFor="email" style={fieldLabel}>Email + phone</label>
              <input id="email" name="email" type="email" required autoComplete="email" placeholder="Email" style={{ ...fieldInput, marginBottom: "0.75rem" }} />
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional but helps us reply faster)" style={fieldInput} />
            </div>

            <h2 style={sectionHeading}>About your business</h2>

            <div style={fieldGroup}>
              <label htmlFor="business" style={fieldLabel}>Business name + website</label>
              <input id="business" name="business" type="text" required placeholder="Acme Ltd — acme.co.uk" style={fieldInput} />
            </div>

            <div style={fieldGroup}>
              <label htmlFor="headcount" style={fieldLabel}>Headcount</label>
              <select id="headcount" name="headcount" required style={fieldInput}>
                <option value="">Select...</option>
                <option value="1-5">1–5</option>
                <option value="6-20">6–20</option>
                <option value="21-50">21–50</option>
                <option value="51-200">51–200</option>
                <option value="200+">200+</option>
              </select>
            </div>

            <div style={fieldGroup}>
              <label htmlFor="revenue" style={fieldLabel}>Annual revenue</label>
              <select id="revenue" name="revenue" required style={fieldInput}>
                <option value="">Select...</option>
                <option value="<£500k">Under £500k</option>
                <option value="£500k-£2m">£500k – £2m</option>
                <option value="£2m-£10m">£2m – £10m</option>
                <option value="£10m+">£10m+</option>
                <option value="prefer-not-say">Rather not say</option>
              </select>
            </div>

            <div style={fieldGroup}>
              <label htmlFor="sites" style={fieldLabel}>How many sites or locations?</label>
              <input id="sites" name="sites" type="text" required placeholder="e.g. 1 head office + 3 sites" style={fieldInput} />
            </div>

            <h2 style={sectionHeading}>What you do</h2>

            <div style={fieldGroup}>
              <label htmlFor="what" style={fieldLabel}>In your own words, what does the business do?</label>
              <textarea id="what" name="what" required style={fieldTextarea} />
            </div>

            <div style={fieldGroup}>
              <label htmlFor="role" style={fieldLabel}>Who&rsquo;s running this?</label>
              <input id="role" name="role" type="text" required placeholder="Founder, Ops Director, Head of Customer Service..." style={fieldInput} />
            </div>

            <h2 style={sectionHeading}>What&rsquo;s prompted this</h2>

            <div style={fieldGroup}>
              <label htmlFor="headache" style={fieldLabel}>Biggest operational headache right now</label>
              <textarea id="headache" name="headache" required placeholder="The thing that, if AI sorted it tomorrow, would change your week." style={fieldTextarea} />
            </div>

            <div style={fieldGroup}>
              <label htmlFor="ai-tools" style={fieldLabel}>Already using any AI tools?</label>
              <textarea id="ai-tools" name="ai-tools" placeholder="ChatGPT for drafts, Otter for notes, a chatbot on the site... or nothing yet. Either is fine." style={fieldTextarea} />
            </div>

            <h2 style={sectionHeading}>Scope &amp; urgency</h2>

            <div style={fieldGroup}>
              <label htmlFor="budget" style={fieldLabel}>Budget range for the audit itself</label>
              <select id="budget" name="budget" required style={fieldInput}>
                <option value="">Select...</option>
                <option value="<£1k">Under £1k</option>
                <option value="£1k-£5k">£1k – £5k</option>
                <option value="£5k-£15k">£5k – £15k</option>
                <option value="£15k+">£15k+</option>
                <option value="no-idea">No idea yet — guide us</option>
              </select>
            </div>

            <div style={fieldGroup}>
              <label htmlFor="timing" style={fieldLabel}>When are you hoping to start?</label>
              <select id="timing" name="timing" required style={fieldInput}>
                <option value="">Select...</option>
                <option value="this-month">This month</option>
                <option value="this-quarter">This quarter</option>
                <option value="next-quarter">Next quarter</option>
                <option value="exploring">Just exploring</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn"
              style={{ width: "100%", marginTop: "1rem", padding: "1.1rem 2rem", fontSize: "0.95rem" }}
            >
              Send enquiry &rarr;
            </button>

            <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#888", textAlign: "center", lineHeight: 1.6 }}>
              We&rsquo;ll reply within two working days with a scoped proposal — or a redirect to the £497 Standard Audit if it&rsquo;s a better fit.
            </p>
          </form>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
