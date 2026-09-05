"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative [perspective:1600px] ${className}`}>
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0.72, y: 56, rotateX: 3.2, scale: 0.992 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.08, margin: "0px 0px -6% 0px" }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.78,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "50% 0%", backfaceVisibility: "hidden" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
