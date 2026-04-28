import type { Metadata } from "next";
import { IndustryLanding } from "@/components/IndustryLanding";
import { medical } from "@/lib/industries";

export const metadata: Metadata = {
  title: medical.metaTitle,
  description: medical.metaDescription,
  alternates: { canonical: `https://voqalai.com/${medical.slug}/` },
  openGraph: {
    title: medical.metaTitle,
    description: medical.metaDescription,
    url: `https://voqalai.com/${medical.slug}/`,
    type: "website",
    siteName: "Voqal AI",
    locale: "en_GB",
  },
};

export default function Page() {
  return <IndustryLanding data={medical} />;
}
