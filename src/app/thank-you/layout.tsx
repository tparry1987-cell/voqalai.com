import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Thank You – Your Voqal AI Demo Request | Voqal AI",
  description:
    "Your AI receptionist demo request has been received. Our team will be in touch within 24 hours.",
  alternates: { canonical: "https://voqalai.com/thank-you/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Thank You | Voqal AI",
    description:
      "Your AI receptionist demo request has been received. Our team will be in touch within 24 hours.",
    url: "https://voqalai.com/thank-you/",
    images: [defaultOpenGraphImage],
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
