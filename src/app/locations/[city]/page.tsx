import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import { Phone } from "lucide-react";

export async function generateStaticParams() {
  return [
    { city: "london" },
    { city: "manchester" },
    { city: "birmingham" },
    { city: "edinburgh" },
    { city: "leeds" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
  return {
    title: `AI Receptionist in ${capitalizedCity} | Voqal AI`,
    description: `AI voice agents for businesses in ${capitalizedCity}. 24/7 call answering, appointment booking, and lead qualification for ${capitalizedCity} companies.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `AI Receptionist in ${capitalizedCity}`,
    "provider": {
      "@type": "Organization",
      "name": "Voqal AI",
      "url": "https://voqalai.com"
    },
    "description": `24/7 AI voice receptionist serving businesses in ${capitalizedCity}. Handles appointment booking, emergency triage, new patient intake, and after-hours coverage.`,
    "areaServed": {
      "@type": "City",
      "name": capitalizedCity,
      "containedInPlace": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    },
    "serviceType": "AI Voice Receptionist"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar variant="light" />

      {/* Hero */}
      <section className="section-padding section-white container" style={{ paddingTop: "12rem" }}>
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Local Coverage</span>
            <h1 className="heading" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: "1.5rem" }}>
              AI Receptionist in <span className="italic-accent">{capitalizedCity}.</span>
            </h1>
            <p className="body-text" style={{ maxWidth: 700, margin: "0 auto" }}>
              Intelligent call answering, appointment booking, and lead qualification for businesses across {capitalizedCity}. Never miss another prospect.
            </p>
            <div style={{ marginTop: "3rem" }}>
              <Link href="/contact" className="hero-cta btn-accent" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.5rem", borderRadius: "9999px", fontWeight: 600 }}>
                <Phone className="w-5 h-5" /> Book Free Demo
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The Problem / Intro */}
      <section className="section-padding section-alt container">
        <Reveal>
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "2rem" }}>
              Serving <span className="italic-accent">{capitalizedCity}</span> Businesses.
            </h2>
            <p className="body-text" style={{ maxWidth: "none", marginBottom: "1.5rem" }}>
              From local clinics to professional service firms, businesses in {capitalizedCity} lose valuable opportunities when incoming calls go unanswered. Our AI receptionist ensures you capture every lead, answering incoming queries 24/7 with regional understanding and industry-specific context.
            </p>
            <p className="body-text" style={{ maxWidth: "none" }}>
              Whether you&apos;re based in the city centre or the surrounding areas, our voice agents seamlessly integrate with your existing phone number and calendar. You receive instant notifications for urgent requests while the AI handles routine tasks like appointment rescheduling or FAQ responses.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Solution Overview */}
      <section className="section-padding section-white container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <span className="section-label">Capabilities</span>
            <h2 className="heading" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "4rem" }}>
              A Complete <span className="italic-accent">Front Desk</span> Solution.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card reveal">
              <div className="icon">I.</div>
              <h3>24/7 Availability</h3>
              <p>Your AI receptionist works around the clock, ensuring evening and weekend callers receive immediate support instead of leaving a voicemail.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="icon">II.</div>
              <h3>Intelligent Booking</h3>
              <p>Syncs directly with your calendar. Books appointments, handles reschedules, and manages patient/client intake smoothly.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="icon">III.</div>
              <h3>Call Routing</h3>
              <p>Recognises priority requests or emergencies and transfers calls immediately to the designated staff member.</p>
            </div>

            <div className="service-card reveal" style={{ transitionDelay: "0.3s" }}>
              <div className="icon">IV.</div>
              <h3>CRM Integration</h3>
              <p>Automatically logs every interaction into your system, providing full call transcripts and ensuring no data entry is required from your team.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
