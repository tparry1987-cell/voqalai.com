import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revenue Recovery Calculator – Lead Reactivation | Voqal AI",
  description:
    "Calculate revenue trapped in dormant CRM leads. Voqal AI texts your old leads with personalised SMS and books calls back. £0 setup, pay only when we book.",
  keywords: [
    "lead reactivation",
    "dormant lead calculator",
    "revenue recovery calculator",
    "AI SMS lead reactivation",
    "CRM revenue recovery",
    "pay per booking SMS",
    "wake up dormant leads",
    "dormant CRM leads",
  ],
  alternates: { canonical: "https://voqalai.com/calculator/" },
  openGraph: {
    title: "Revenue Recovery Calculator – Wake Up Your Dormant Leads | Voqal AI",
    description:
      "60-second diagnosis of revenue trapped in your dormant CRM leads. AI-powered SMS reactivation. £0 setup, £50 per booked call. We only get paid when you do.",
    url: "https://voqalai.com/calculator/",
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
    images: [
      {
        url: "https://voqalai.com/images/hero-forest.jpg",
        width: 1200,
        height: 630,
        alt: "Voqal AI Revenue Recovery Calculator — wake up your dormant pipeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Recovery Calculator | Voqal AI",
    description:
      "How much revenue is asleep in your CRM? 60-second diagnosis. AI texts your dormant leads, books calls back. £0 setup, pay only when we book.",
    images: ["https://voqalai.com/images/hero-forest.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const calculatorSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://voqalai.com/calculator/#webpage",
    name: "Revenue Recovery Calculator – Lead Reactivation",
    url: "https://voqalai.com/calculator/",
    description:
      "Interactive calculator that estimates how much revenue is trapped in dormant CRM leads, paired with a live demo of AI-powered SMS lead reactivation.",
    isPartOf: { "@id": "https://voqalai.com/#website" },
    inLanguage: "en-GB",
    primaryImageOfPage: { "@id": "https://voqalai.com/images/hero-forest.jpg" },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://voqalai.com/calculator/"],
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".calc-hero-headline", ".calc-result-number", ".calc-pricing-card"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://voqalai.com/" },
      { "@type": "ListItem", position: 2, name: "Revenue Recovery Calculator", item: "https://voqalai.com/calculator/" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://voqalai.com/calculator/#lead-reactivation-service",
    name: "AI SMS Lead Reactivation",
    serviceType: "Lead reactivation and dormant CRM follow-up",
    description:
      "AI-powered SMS reactivation of dormant CRM leads. Voqal AI sends personalised text-message conversations to your old leads, handles objections, and books qualified calls into your calendar. £0 setup, £50 per confirmed booking.",
    provider: {
      "@type": "Organization",
      "@id": "https://voqalai.com/#organization",
      name: "Voqal AI",
      url: "https://voqalai.com",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Small and medium service businesses with dormant CRM leads",
    },
    offers: {
      "@type": "Offer",
      name: "Pay-on-Booking Lead Reactivation",
      description: "£0 setup, £50 per confirmed booking, 14-day pilot, cancel anytime.",
      price: "50",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "50",
        priceCurrency: "GBP",
        unitText: "per confirmed booking",
      },
      availability: "https://schema.org/InStock",
      url: "https://voqalai.com/calculator/",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lead Reactivation Use Cases",
      itemListElement: [
        { "@type": "Offer", name: "Trades & Electrical lead reactivation" },
        { "@type": "Offer", name: "Plumbing & Heating lead reactivation" },
        { "@type": "Offer", name: "Dental Practice patient reactivation" },
        { "@type": "Offer", name: "Gym membership reactivation" },
        { "@type": "Offer", name: "Coaching enrolment reactivation" },
        { "@type": "Offer", name: "Agency client reactivation" },
        { "@type": "Offer", name: "Estate agency lead reactivation" },
        { "@type": "Offer", name: "Law firm enquiry reactivation" },
        { "@type": "Offer", name: "Hair salon and beauty client reactivation" },
        { "@type": "Offer", name: "Accountancy client reactivation" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Voqal AI Revenue Recovery Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://voqalai.com/calculator/",
    description:
      "Interactive calculator that estimates revenue locked in dormant CRM leads and demonstrates a live AI SMS reactivation conversation.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Three reactivation scenarios (Really cold / Standard cold / Lukewarm)",
      "Adjustable close-rate slider",
      "Personalised SMS conversation simulator across 10 industries",
      "Shareable URL with prefilled numbers",
      "Live break-down of fee, revenue and net profit",
    ],
  },
];

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {calculatorSchema.map((data, i) => (
        <script
          key={`calc-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      {children}
    </>
  );
}
