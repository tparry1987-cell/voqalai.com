import type { Metadata } from "next";
import { IndustryLanding } from "@/components/IndustryLanding";
import { estate } from "@/lib/industries";

export const metadata: Metadata = {
  title: estate.metaTitle,
  description: estate.metaDescription,
  alternates: { canonical: `https://voqalai.com/${estate.slug}/` },
  openGraph: {
    title: estate.metaTitle,
    description: estate.metaDescription,
    url: `https://voqalai.com/${estate.slug}/`,
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
  },
};

export default function Page() {
  return <IndustryLanding data={estate} />;
}
