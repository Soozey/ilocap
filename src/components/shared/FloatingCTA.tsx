"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/contact?objet=devis"
        className="button-teal-solid flex flex-col items-center justify-center px-4 py-3 md:px-5 md:py-4 rounded-[10px] font-[family-name:var(--font-manrope)] text-[9px] md:text-[10px] uppercase tracking-[0.18em] font-extrabold hover:scale-105 transition-all duration-300"
      >
        <svg className="w-5 h-5 mb-1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 4h14v10H8l-4 3v-3H3V4Z" />
          <path d="M6 8h8M6 11h5" />
        </svg>
        <span className="leading-tight">Parler de mon</span>
        <span className="leading-tight">projet</span>
      </Link>
    </motion.div>
  );
}
