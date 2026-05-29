import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "FAQ – Voqal AI Services, Setup & Pricing | Voqal AI",
  description: "Frequently asked questions about Voqal AI. Services, setup time, pricing, integrations, compliance, and how our AI systems work for businesses worldwide.",
  alternates: { canonical: "https://voqalai.com/faq/" },
  openGraph: {
    title: "FAQ | Voqal AI",
    description: "Everything you need to know about setting up and using a Voqal AI receptionist for your business.",
    url: "https://voqalai.com/faq/",
    images: [defaultOpenGraphImage],
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
