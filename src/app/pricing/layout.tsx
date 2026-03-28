import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Receptionist Pricing – Plans from £197/mo | Voqal AI",
  description: "Transparent AI receptionist pricing. Managed service from £197/mo or one-off build from £997. No contracts, no setup fees. 24/7 call answering for UK businesses.",
  alternates: { canonical: "https://voqalai.com/pricing/" },
  openGraph: {
    title: "AI Receptionist Pricing – Plans from £197/mo | Voqal AI",
    description: "Transparent AI receptionist pricing. Managed service from £197/mo or one-off build from £997. No contracts.",
    url: "https://voqalai.com/pricing/",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
