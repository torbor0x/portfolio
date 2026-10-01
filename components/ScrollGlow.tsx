"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ScrollGlow() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yCyan = useTransform(scrollYProgress, [0, 1], ["0vh", "35vh"]);
  const yMagenta = useTransform(scrollYProgress, [0, 1], ["8vh", "-18vh"]);

  if (reduce) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: yCyan }}
        className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan/10 blur-3xl"
      />
      <motion.div
        style={{ y: yMagenta }}
        className="absolute -right-20 top-48 h-72 w-72 rounded-full bg-magenta/10 blur-3xl"
      />
    </div>
  );
}
