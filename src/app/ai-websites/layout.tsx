import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI Websites — Sites with Live Chat & a Voice Agent Built In | Voqal AI",
  description:
    "AI-powered websites with a live chat assistant and a real voice agent built in. Beautiful designs that answer questions, book jobs, and capture every enquiry around the clock.",
  alternates: { canonical: "https://voqalai.com/ai-websites/" },
  openGraph: {
    title: "AI Websites — Sites with Live Chat & a Voice Agent Built In | Voqal AI",
    description:
      "AI-powered websites with a live chat assistant and a real voice agent built in. Designs that look the part and do the work.",
    url: "https://voqalai.com/ai-websites/",
    images: [defaultOpenGraphImage],
  },
};

export default function AiWebsitesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
