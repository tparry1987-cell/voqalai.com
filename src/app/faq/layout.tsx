import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Setting Up Your AI Receptionist | Voqal AI",
  description: "Frequently asked questions about Voqal AI. Setup time, pricing, integrations, GDPR compliance, and how our AI receptionists work for UK businesses.",
  alternates: { canonical: "https://voqalai.com/faq/" },
  openGraph: {
    title: "FAQ | Voqal AI",
    description: "Everything you need to know about setting up and using a Voqal AI receptionist for your business.",
    url: "https://voqalai.com/faq/",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
