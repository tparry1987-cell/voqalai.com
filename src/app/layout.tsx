import type { Metadata } from "next";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "./globals.css";
import { CalEmbed } from "@/components/CalEmbed";
import { CookieConsent } from "@/components/CookieConsent";
import { RetellWidget } from "@/components/RetellWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://voqalai.com"),
  title: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
  description:
    "AI Receptionist UK: 24/7 call answering, booking & lead qualification. Dental, legal, trades & more. No contracts. From \u00a3197/mo.",
  openGraph: {
    title: "AI Receptionist UK \u2013 24/7 Phone Answering | Voqal AI",
    description:
      "AI voice agents that answer 100% of your calls 24/7. Appointment booking, lead qualification, and voice cloning. No setup fees. From \u00a3197/mo.",
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
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+13322641587",
        contactType: "sales",
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
      "AI Receptionist UK: 24/7 call answering, appointment booking and lead qualification. Sector-trained for dental, legal, trades and more. Plans from \u00a3197/month, no contracts. 90% cost reduction vs. hiring a full-time receptionist (ONS ASHE, 2024).",
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Thomas Parry",
        jobTitle: "Founder & CEO",
        sameAs: "https://www.linkedin.com/in/tom-parry-698bbb29a",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "1-10",
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
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an AI voice agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI voice agent is an intelligent phone system powered by conversational AI that answers calls, books appointments, qualifies leads, and handles enquiries \u2014 just like a trained receptionist, but available 24/7 with no sick days, holidays, or hold music.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an AI receptionist cost in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI receptionist services in the UK typically range from \u00a3150\u2013\u00a3700 per month. Voqal AI plans start at \u00a3197/month for 200 minutes, with no contracts or hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I get set up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We\u2019ll send you a personalised voice agent demo within 24 hours of your enquiry. We handle everything \u2014 from building your custom agent to integrating it with your existing phone system, calendar, and CRM.",
        },
      },
      {
        "@type": "Question",
        name: "Will callers know they\u2019re speaking to an AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our voice agents are built to sound natural and conversational. Many callers don\u2019t realise they\u2019re speaking to an AI \u2014 they just know they got a helpful, immediate answer.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to sign a long-term contract?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All Voqal AI managed service plans are month-to-month with no lock-in contracts. You can cancel anytime with no exit fees.",
        },
      },
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
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://dashboard.retellai.com" />
        <link rel="preconnect" href="https://app.cal.com" />
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
