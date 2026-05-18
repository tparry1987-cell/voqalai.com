import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About Voqal AI – AI Voice Agent Specialists | Voqal AI",
  description: "Meet the team behind Voqal AI, including Thomas Parry, Charlie Todd, Augusta Steffy, Adrian Wilkinson and Joe Kemp.",
  alternates: { canonical: "https://voqalai.com/about/" },
  openGraph: {
    title: "About Voqal AI – AI Voice Agent Specialists",
    description: "Meet the Voqal AI team building AI voice agents and automation for modern businesses worldwide.",
    url: "https://voqalai.com/about/",
    images: [defaultOpenGraphImage],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
