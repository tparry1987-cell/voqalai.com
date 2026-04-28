import type { Metadata } from "next";
import { IndustryLanding } from "@/components/IndustryLanding";
import { law } from "@/lib/industries";

export const metadata: Metadata = {
  title: law.metaTitle,
  description: law.metaDescription,
  alternates: { canonical: `https://voqalai.com/${law.slug}/` },
  openGraph: {
    title: law.metaTitle,
    description: law.metaDescription,
    url: `https://voqalai.com/${law.slug}/`,
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
  },
};

export default function Page() {
  return <IndustryLanding data={law} />;
}
