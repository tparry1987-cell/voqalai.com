import type { Metadata } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { CalEmbed } from "@/components/CalEmbed";
import { CookieConsent } from "@/components/CookieConsent";
import { RetellWidget } from "@/components/RetellWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://voqalai.com"),
  title: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
  description:
    "AI Receptionist UK: 24/7 call answering, booking & lead qualification for dental, legal & trades. No contracts. From \u00a3197/mo.",
  openGraph: {
    title: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
    description:
      "AI voice agents that answer 100% of your calls 24/7. Appointment booking, lead qualification, and voice cloning. From \u00a3197/mo.",
    type: "website",
    url: "https://voqalai.com/",
    siteName: "Voqal AI",
    locale: "en_GB",
    images: [{ url: "/images/hero-forest.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
    description:
      "AI Receptionist UK: 24/7 call answering, booking & lead qualification. Dental, legal, trades & more. No contracts. From \u00a3197/mo.",
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
      "AI Receptionist UK: 24/7 AI voice agents that answer calls, book appointments, and qualify leads for UK and US businesses.",
    url: "https://voqalai.com",
    telephone: "+442039960962",
    email: "info@voqalai.com",
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
    areaServed: { "@type": "Country", name: "United Kingdom" },
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
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+13322641587",
        contactType: "customer service",
        areaServed: "US",
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
    sameAs: ["https://www.linkedin.com/in/tom-parry-698bbb29a"],
    description:
      "AI Receptionist UK: 24/7 call answering, appointment booking and lead qualification for 5.5 million UK SMEs (FSB, 2024). Sector-trained for dental, legal, trades and more. Plans from \u00a3197/month, no contracts. Up to 90% cost reduction compared with a full-time UK receptionist earning \u00a322,000\u2013\u00a328,000/year (ONS ASHE, 2024). Gartner (2022) projects $80 billion in contact-centre savings from conversational AI by 2026.",
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
      "appointment booking automation",
      "lead qualification",
      "call handling automation",
      "CRM integration",
      "dental practice automation",
      "legal firm call handling",
      "UK business telephony",
    ],
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceArea: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
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
      "AI-powered voice receptionist that answers calls 24/7, books appointments, qualifies leads, and integrates with CRMs and calendars for UK and US service businesses.",
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
    "@type": "WebSite",
    name: "Voqal AI",
    url: "https://voqalai.com",
    description:
      "AI Receptionist UK \u2014 24/7 AI phone answering, appointment booking, and lead qualification for UK and US service businesses.",
    publisher: { "@type": "Organization", name: "Voqal AI", url: "https://voqalai.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
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
          href="/images/mobile-hero-still-2x.jpg"
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
        <CookieConsent />
      </body>
    </html>
  );
}
