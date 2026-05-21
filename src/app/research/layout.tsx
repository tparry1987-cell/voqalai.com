import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI Receptionist Research & Guides | Voqal AI",
  description: "Research, guides and compliance resources for businesses considering AI voice agents, automation, GDPR, ICO compliance, setup guides and industry analysis.",
  alternates: { canonical: "https://voqalai.com/research/" },
  openGraph: {
    title: "AI Receptionist Research & Guides | Voqal AI",
    description: "Research and guides for businesses considering AI voice agents and automation.",
    url: "https://voqalai.com/research/",
    images: [defaultOpenGraphImage],
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
