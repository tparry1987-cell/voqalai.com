import type { Metadata } from "next";
import { IndustryLanding } from "@/components/IndustryLanding";
import { dental } from "@/lib/industries";

export const metadata: Metadata = {
  title: dental.metaTitle,
  description: dental.metaDescription,
  alternates: { canonical: `https://voqalai.com/${dental.slug}/` },
  openGraph: {
    title: dental.metaTitle,
    description: dental.metaDescription,
    url: `https://voqalai.com/${dental.slug}/`,
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
  },
};

export default function Page() {
  return <IndustryLanding data={dental} />;
}
