import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI Voice Agents for Businesses | Voqal AI",
  description:
    "AI voice agents that answer calls, qualify leads, book appointments, route enquiries, and update your systems 24/7. Built around how your business works.",
  alternates: { canonical: "https://voqalai.com/voice-agents/" },
  openGraph: {
    title: "AI Voice Agents for Businesses | Voqal AI",
    description:
      "A dedicated AI voice agent page from Voqal AI. Call answering, lead qualification, booking, CRM updates, routing, and human handoff.",
    url: "https://voqalai.com/voice-agents/",
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
    images: [defaultOpenGraphImage],
  },
};

export default function VoiceAgentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
