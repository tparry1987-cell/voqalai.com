import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Voqal AI – Book a Free Demo | Voqal AI",
  description: "Book a free AI receptionist demo. We'll build a personalised voice agent for your business within 24 hours. No commitment required.",
  alternates: { canonical: "https://voqalai.com/contact/" },
  openGraph: {
    title: "Contact Voqal AI – Book a Free Demo",
    description: "Book a free AI receptionist demo within 24 hours. No commitment required.",
    url: "https://voqalai.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
