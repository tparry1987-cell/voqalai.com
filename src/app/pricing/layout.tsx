import type { Metadata } from "next";
import { defaultOpenGraphImage } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "AI Receptionist Pricing – Plans from £197/mo | Voqal AI",
  description: "Transparent AI receptionist pricing. Managed service from £197/mo or one-off build from £997. No contracts or lock-ins. UK-based, global delivery.",
  alternates: { canonical: "https://voqalai.com/pricing/" },
  openGraph: {
    title: "AI Receptionist Pricing – Plans from £197/mo | Voqal AI",
    description: "Transparent AI receptionist pricing. Managed service from £197/mo or one-off build from £997. No contracts.",
    url: "https://voqalai.com/pricing/",
    images: [defaultOpenGraphImage],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
