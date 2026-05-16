import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Opportunity Audit – From £497 | Voqal AI",
  description:
    "A senior Voqal advisor maps where AI saves time and money in your business. Slide-deck Opportunities Report with quantified ROI. From £497, credited 100% against implementation.",
  alternates: { canonical: "https://voqalai.com/audit/" },
  openGraph: {
    title: "AI Opportunity Audit – From £497 | Voqal AI",
    description:
      "A senior Voqal advisor maps where AI saves time and money in your business. Slide-deck Opportunities Report with quantified ROI. From £497.",
    url: "https://voqalai.com/audit/",
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
