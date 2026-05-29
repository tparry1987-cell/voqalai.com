import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import "./cognitra.css";
import { CalEmbed } from "@/components/CalEmbed";
import { RetellWidget } from "@/components/RetellWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://voqalai.com"),
  title: "AI Voice Agents, Websites & Automation | Voqal AI",
  description:
    "Voqal AI builds practical AI systems for business \u2014 voice agents, AI websites, lead reactivation, automation and integrations. UK-based, global delivery.",
  openGraph: {
    title: "AI Voice Agents, Websites & Automation | Voqal AI",
    description:
      "Practical AI systems built around how your business actually works \u2014 voice agents, AI websites, lead reactivation and automation. UK-based, global delivery.",
    type: "website",
    url: "https://voqalai.com/",
    siteName: "Voqal AI",
    locale: "en_GB",
    images: [{ url: "/images/hero-forest.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents, Websites & Automation | Voqal AI",
    description:
      "Practical AI systems for business — voice agents, AI websites, lead reactivation, automation and integrations. UK-based, global delivery.",
    images: ["/images/hero-forest.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/favicon.png",
  },
  alternates: { canonical: "https://voqalai.com/" },
  verification: {
    google: "Tivb7eP0KpHp0TDuL1ohBbOquok_JbGckqwiTHUZHHs",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://voqalai.com",
    name: "Voqal AI",
    legalName: "Voqal AI Ltd",
    foundingDate: "2025",
    taxID: "17080303",
    description:
      "Voqal AI builds practical AI systems for businesses worldwide — AI voice agents, AI websites, lead reactivation, workflow automation, CRM integrations and AI audits.",
    url: "https://voqalai.com",
    telephone: "+442039960962",
    email: "contact@voqalai.com",
    image: "https://voqalai.com/images/hero-forest.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "71-75 Shelton Street",
      addressLocality: "London",
      addressRegion: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5154,
      longitude: -0.1222,
    },
    areaServed: ["Manchester", "Greater Manchester", "United Kingdom", "Worldwide"],
    priceRange: "\u00a3\u00a3",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://voqalai.com/#organization",
    name: "Voqal AI",
    legalName: "Voqal AI Ltd",
    url: "https://voqalai.com",
    logo: "https://voqalai.com/favicon.svg",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+442039960962",
        contactType: "customer service",
        areaServed: "Global",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+13322641587",
        contactType: "customer service",
        areaServed: "Global",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "71-75 Shelton Street",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.linkedin.com/company/110916511/",
      "https://maps.google.com/?cid=13478635982727674063",
    ],
    description:
      "UK-based AI systems for businesses worldwide \u2014 AI voice agents, AI websites, lead reactivation, workflow automation, CRM integrations and AI audits. Sector-trained for dental, legal, trades, professional services and more. Plans from \u00a3197/month, no contracts. Up to 90% cost reduction compared with traditional front-desk coverage. Gartner (2022) projects $80 billion in contact-centre savings from conversational AI by 2026.",
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Thomas Parry",
        jobTitle: "Founder & CEO",
        sameAs: "https://www.linkedin.com/in/tom-parry-698bbb29a",
      },
      {
        "@type": "Person",
        name: "Charlie Todd",
        jobTitle: "Co-Founder",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 10,
    },
    knowsAbout: [
      "AI voice agents",
      "AI receptionists",
      "conversational AI",
      "AI websites",
      "lead reactivation",
      "workflow automation",
      "AI consultation and audits",
      "appointment booking automation",
      "lead qualification",
      "call handling automation",
      "CRM integration",
      "dental practice automation",
      "legal firm call handling",
      "global business telephony",
    ],
    areaServed: "Worldwide",
    serviceArea: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Receptionist Plans",
      itemListElement: [
        { "@type": "Offer", name: "Starter", price: "197", priceCurrency: "GBP" },
        { "@type": "Offer", name: "Pro", price: "397", priceCurrency: "GBP" },
        { "@type": "Offer", name: "Premium", price: "697", priceCurrency: "GBP" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas Parry",
    jobTitle: "Founder & CEO",
    description:
      "AI voice solutions specialist with 15 years of B2B and B2C experience in business communications, telephony systems, and automation.",
    url: "https://voqalai.com/about",
    sameAs: ["https://www.linkedin.com/in/tom-parry-698bbb29a"],
    worksFor: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
    knowsAbout: [
      "AI voice agents",
      "business automation",
      "conversational AI",
      "telephony systems",
      "lead qualification",
      "AI receptionists",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Voqal AI Receptionist",
    description:
      "AI-powered voice receptionist that answers calls 24/7, books appointments, qualifies leads, and integrates with CRMs and calendars for service businesses worldwide.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud-hosted (SaaS)",
    url: "https://voqalai.com",
    offers: {
      "@type": "Offer",
      price: "197",
      priceCurrency: "GBP",
      priceValidUntil: "2027-03-28",
      availability: "https://schema.org/InStock",
      url: "https://voqalai.com/pricing",
    },
    provider: {
      "@type": "Organization",
      name: "Voqal AI",
      url: "https://voqalai.com",
    },
    featureList: [
      "24/7 AI call answering",
      "Appointment booking with calendar sync",
      "Lead qualification and CRM updates",
      "Call routing and transfer",
      "Industry-specific voice flows",
      "Multi-call simultaneous handling",
      "48-hour deployment",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://voqalai.com/#service",
    name: "AI Systems for Business — Voice, Websites, Automation & Integration",
    serviceType: [
      "AI voice agents",
      "AI receptionist",
      "AI websites",
      "lead reactivation",
      "workflow automation",
      "CRM and system integration",
      "AI consultation and audits",
    ],
    description:
      "Voqal AI builds practical AI systems for businesses — AI voice agents, AI websites, lead reactivation, workflow automation, CRM integrations and AI audits. UK-based, serving businesses worldwide. Plans from £197/month, no contracts.",
    provider: { "@id": "https://voqalai.com/#organization" },
    areaServed: ["United Kingdom", "Worldwide"],
    url: "https://voqalai.com",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Voqal AI Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Agents", description: "Handle calls, bookings, enquiries, and customer communication 24/7." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Reactivation", description: "Re-engage old leads automatically through intelligent SMS outreach and follow-up." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Workflow Automation", description: "Remove repetitive admin and streamline day-to-day operations." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & System Integrations", description: "Connect AI directly into the tools your business already uses." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Consultation & Audits", description: "Identify where AI can create the biggest operational impact." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Websites & Interfaces", description: "Modern AI-powered websites with live chat and a voice agent built in." } },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Voqal AI",
    url: "https://voqalai.com",
    description:
      "Practical AI systems for businesses worldwide — AI voice agents, AI websites, lead reactivation, workflow automation, CRM integrations and AI audits.",
    publisher: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Voice Agents, Websites & Automation | Voqal AI",
    url: "https://voqalai.com/",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".speakable-hero",
        ".speakable-why",
        ".speakable-stats",
      ],
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-video-poster.jpg"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://dashboard.retellai.com" />
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="llms" href="https://voqalai.com/llms.txt" type="text/plain" />
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <CalEmbed />
        <RetellWidget />
      </body>
    </html>
  );
}
