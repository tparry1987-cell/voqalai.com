import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Voqal AI – AI Voice Agent Specialists | Voqal AI",
  description: "Meet the team behind Voqal AI. Co-founded by Thomas Parry and Charlie Todd, building AI voice agents for UK dental, legal, trades and service businesses.",
  alternates: { canonical: "https://voqalai.com/about/" },
  openGraph: {
    title: "About Voqal AI – AI Voice Agent Specialists",
    description: "Meet the team behind Voqal AI. Building AI voice agents for UK service businesses.",
    url: "https://voqalai.com/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
