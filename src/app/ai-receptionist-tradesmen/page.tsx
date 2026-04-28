import type { Metadata } from "next";
import { IndustryLanding } from "@/components/IndustryLanding";
import { trades } from "@/lib/industries";

export const metadata: Metadata = {
  title: trades.metaTitle,
  description: trades.metaDescription,
  alternates: { canonical: `https://voqalai.com/${trades.slug}/` },
  openGraph: {
    title: trades.metaTitle,
    description: trades.metaDescription,
    url: `https://voqalai.com/${trades.slug}/`,
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
  },
};

export default function Page() {
  return <IndustryLanding data={trades} />;
}
