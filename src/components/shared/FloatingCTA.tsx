"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.35 }}
      className="fixed bottom-6 right-6 z-40 hidden lg:block"
    >
      <Link
        href="/contact?objet=devis"
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#173C31] px-5 font-[family-name:var(--font-inter)] text-[12px] font-semibold text-white shadow-[0_14px_36px_rgba(23,60,49,.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2F6B56]"
      >
        Parler de mon projet
      </Link>
    </motion.div>
  );
}
