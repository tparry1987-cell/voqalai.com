import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist Research & Guides | Voqal AI",
  description: "Research, guides and compliance resources for UK businesses considering AI receptionists. GDPR, ICO compliance, setup guides and industry analysis.",
  alternates: { canonical: "https://voqalai.com/research/" },
  openGraph: {
    title: "AI Receptionist Research & Guides | Voqal AI",
    description: "Research and guides for UK businesses considering AI receptionists.",
    url: "https://voqalai.com/research/",
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
