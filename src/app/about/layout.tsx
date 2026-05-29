import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About Voqal AI – Practical AI Systems for Business | Voqal AI",
  description: "Meet the team behind Voqal AI, including Thomas Parry, Charlie Todd, Augusta Steffy, Adrian Wilkinson and Joe Kemp.",
  alternates: { canonical: "https://voqalai.com/about/" },
  openGraph: {
    title: "About Voqal AI – Practical AI Systems for Business",
    description: "Meet the Voqal AI team building practical AI systems — voice agents, AI websites, automation and integrations — for modern businesses worldwide.",
    url: "https://voqalai.com/about/",
    images: [defaultOpenGraphImage],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
