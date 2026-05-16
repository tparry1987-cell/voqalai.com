"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type Tag = "div" | "section" | "span" | "h1" | "h2" | "h3" | "p" | "nav";

const variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  show: { opacity: 1, y: 0 },
};

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  className = "",
  style,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: Tag;
  once?: boolean;
}) {
  const props = {
    className,
    style,
    initial: "hidden",
    whileInView: "show",
    viewport: { once, amount: 0.2 },
    custom: y,
    variants,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  switch (as) {
    case "section": return <motion.section {...props}>{children}</motion.section>;
    case "span":    return <motion.span {...props}>{children}</motion.span>;
    case "h1":      return <motion.h1 {...props}>{children}</motion.h1>;
    case "h2":      return <motion.h2 {...props}>{children}</motion.h2>;
    case "h3":      return <motion.h3 {...props}>{children}</motion.h3>;
    case "p":       return <motion.p {...props}>{children}</motion.p>;
    case "nav":     return <motion.nav {...props}>{children}</motion.nav>;
    default:        return <motion.div {...props}>{children}</motion.div>;
  }
}
