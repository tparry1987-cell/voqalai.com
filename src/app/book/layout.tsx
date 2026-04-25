import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free AI Receptionist Demo | Voqal AI",
  description: "Book a free personalised AI receptionist demo. Tell us about your business and we'll build you a bespoke voice agent you can call and test within 24 hours. No contracts.",
  alternates: { canonical: "https://voqalai.com/book/" },
  openGraph: {
    title: "Book a Free AI Receptionist Demo | Voqal AI",
    description: "Tell us about your business and we'll build you a bespoke voice agent you can call and test within 24 hours.",
    url: "https://voqalai.com/book/",
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
