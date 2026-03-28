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
    "AI Receptionist UK: 24/7 call answering, booking & lead qualification for dental, legal & trades. No contracts. From \u00a3197/mo.",
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
          text: "AI receptionist services in the UK typically range from \u00a3150\u2013\u00a3700 per month. Voqal AI plans start at \u00a3197/month for 200 minutes, with no contracts or hidden fees. For comparison, a full-time human receptionist costs \u00a322,000\u2013\u00a328,000 per year (ONS ASHE, 2024), making AI 70\u201390% more cost-effective.",
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
      {
        "@type": "Question",
        name: "What is the ROI of an AI receptionist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Research from PATLive and Forbes shows 80% of callers sent to voicemail won\u2019t leave a message, and 67% of unanswered callers will phone a competitor instead. A study by MIT and InsideSales.com found leads are 21\u00d7 more likely to convert when contacted within 5 minutes. At \u00a3197/month, an AI receptionist pays for itself by capturing even one or two bookings per month that would otherwise be lost.",
        },
      },
      {
        "@type": "Question",
        name: "How does an AI receptionist compare to a human receptionist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A human receptionist in the UK earns approximately \u00a322,000\u2013\u00a328,000 per year (ONS, 2024) and works standard office hours. An AI receptionist from Voqal AI costs from \u00a3197/month (under \u00a32,400/year), works 24/7 including weekends and bank holidays, handles multiple calls simultaneously, and never calls in sick.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe with an AI receptionist?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Voqal AI Ltd is a UK-registered company (Companies House No. 17080303) and processes all data in compliance with UK GDPR and the Data Protection Act 2018. Call data is encrypted in transit and at rest, and we do not share customer data with third parties.",
        },
      },
      {
        "@type": "Question",
        name: "What industries do you work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voqal AI serves dental practices, medical clinics, law firms, estate agents, accountancy firms, veterinary clinics, tradesmen, and many more across the UK and US. Each agent is custom-trained on your specific industry terminology and workflows.",
        },
      },
      {
        "@type": "Question",
        name: "Can the AI handle multiple calls at the same time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Unlike a human receptionist who can only handle one call at a time, Voqal AI voice agents can answer multiple simultaneous calls with no wait times or hold music. During peak periods, every caller gets an immediate, personalised response.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to calls the AI cannot handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If a caller raises a query outside the voice agent\u2019s knowledge base or requests to speak with a human, the system transfers the call to your designated team member or takes a detailed message with the caller\u2019s name, number, and reason for calling. You receive an instant notification so you can follow up promptly. According to research from MIT and InsideSales.com, responding within five minutes makes conversion 21\u00d7 more likely.",
        },
      },
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
