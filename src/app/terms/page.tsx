import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions - Voqal AI Service Agreement",
  description: "Terms and Conditions for Voqal AI. Read our terms of service, payment terms, and service level agreements.",
  alternates: { canonical: "https://voqalai.com/terms" },
  openGraph: {
    title: "Terms & Conditions | Voqal AI",
    description: "Terms and Conditions for Voqal AI. Read our terms of service, payment terms, and service level agreements.",
    url: "https://voqalai.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <span className="section-label">Legal</span>
          <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Terms &amp; <span className="italic-accent">Conditions.</span>
          </h1>
          <p className="body-text">Last updated: February 2026</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "4rem", maxWidth: 800 }} className="legal-content">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using the services provided by Voqal AI Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in England &amp; Wales (Company No. 17080303) with registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

            <h2>2. Services Description</h2>
            <p>Voqal AI Ltd provides AI-powered communication services including:</p>
            <ul>
              <li>AI Phone Agents (inbound and outbound call handling)</li>
              <li>AI Chat Agents</li>
              <li>Lead Reactivation campaigns</li>
              <li>Process Automation</li>
              <li>Outbound marketing campaigns</li>
            </ul>

            <h2>3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information during onboarding</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful or fraudulent purposes</li>
              <li>Provide timely feedback during the implementation process</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <ul>
              <li>All invoices are due within 14 days of issuance</li>
              <li>We reserve the right to suspend services for overdue accounts</li>
              <li>Fees are non-refundable unless otherwise agreed in writing</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>Voqal AI retains all intellectual property rights in our technology, software, and methodologies. Clients receive a licence to use deliverables upon full payment, but ownership of the underlying technology remains with Voqal AI.</p>

            <h2>6. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of our business relationship. This obligation survives the termination of our agreement.</p>

            <h2>7. Service Level &amp; Support</h2>
            <ul>
              <li>We strive for maximum reliability with minimal downtime</li>
              <li>Standard support: Monday&ndash;Friday, 9am&ndash;6pm GMT</li>
              <li>Emergency support available per individual agreement</li>
            </ul>

            <h2>8. Limitation of Liability</h2>
            <p>Voqal AI shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client in the preceding 12-month period.</p>

            <h2>9. Termination</h2>
            <p>Either party may terminate the agreement with 30 days&rsquo; written notice. Voqal AI reserves the right to terminate immediately in cases of material breach by the client.</p>

            <h2>10. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes shall be resolved through good-faith negotiation or, failing that, through the courts of England and Wales.</p>

            <h2>11. Contact Us</h2>
            <p>For questions about these Terms and Conditions, please contact us:</p>
            <p>
              Email: <a href="mailto:info@voqalai.com" className="text-link">info@voqalai.com</a><br />
              Phone: <a href="tel:+442039960962" className="text-link">+44 20 3996 0962</a> (UK) / <a href="tel:+13322641587" className="text-link">+1 (332) 264-1587</a> (US)
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
