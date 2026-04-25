import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - How Voqal AI Protects Your Data",
  description: "Privacy Policy for Voqal AI. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://voqalai.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Voqal AI",
    description: "Learn how Voqal AI collects, uses, and protects your personal information.",
    url: "https://voqalai.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar variant="light" />

      <section className="section-padding section-white container" style={{ paddingTop: "10rem" }}>
        <Reveal>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="section-label">Legal</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Privacy <span className="italic-accent">Policy.</span>
            </h1>
            <p className="body-text" style={{ marginTop: "0.5rem" }}>Last updated: February 2026</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ marginTop: "4rem" }} className="legal-content">
            <h2>1. Introduction</h2>
            <p>At Voqal AI Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in England &amp; Wales (Company No. 17080303) with registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h2>2. Information We Collect</h2>
            <p><strong>Personal Information:</strong> We may collect personal information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Business information (company name, industry)</li>
              <li>Communication preferences</li>
              <li>Information provided during discovery calls or consultations</li>
            </ul>
            <p><strong>Automatically Collected Information:</strong> When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referrer URLs and search terms</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our AI automation services</li>
              <li>Respond to your enquiries and schedule consultations</li>
              <li>Send you service updates and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing &amp; Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our business (such as Cal.com for scheduling, email service providers, and analytics tools), subject to confidentiality agreements.</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>7. Cookies &amp; Tracking</h2>
            <p>Our website uses cookies to enhance your browsing experience:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant content</li>
            </ul>
            <p>You can control cookie preferences through your browser settings.</p>

            <h2>8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <p>
              Email: <Link href="mailto:info@voqalai.com">info@voqalai.com</Link><br />
              Phone: <Link href="tel:+442039960962">+44 20 3996 0962</Link> (UK) / <Link href="tel:+13322641587">+1 (332) 264-1587</Link> (US)
            </p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
