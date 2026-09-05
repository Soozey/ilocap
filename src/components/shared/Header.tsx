"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLogo from "@/components/shared/AnimatedLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Expertise", href: "/#expertise" },
    { label: "Services continus", href: "/#services-continus" },
    { label: "Solutions", href: "/services#accelerateurs" },
    { label: "Réalisations", href: "/realisations" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111A2E]/95 backdrop-blur-xl transition-colors duration-300">
      <div className="flex h-20 md:h-24 justify-between items-center w-full px-gutter max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <AnimatedLogo />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-1 py-2 font-manrope text-[11px] uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-[#78D9C5] lg:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?objet=devis"
            className="button-elegant button-logo-lavender hidden items-center justify-center px-6 font-manrope text-[10px] font-extrabold uppercase md:flex lg:px-7 lg:text-[11px]"
          >
            Parler d’un projet
          </Link>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden w-11 h-11 border flex flex-col items-center justify-center gap-1.5 transition-colors rounded-[8px] border-white/20 text-white hover:border-[#B89A5A]"
          >
            <span className="w-5 h-px bg-current" />
            <span className="w-5 h-px bg-current" />
            <span className="w-5 h-px bg-current" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-[#111A2E] px-gutter pb-5 md:hidden"
          >
            <div className="flex flex-col pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-manrope text-xs uppercase tracking-[0.18em] text-white/90 hover:text-[#78D9C5]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact?objet=devis"
                onClick={() => setIsMenuOpen(false)}
                className="button-elegant button-home-primary mt-5 flex min-h-12 items-center justify-center px-6 text-center font-manrope text-[10px] font-extrabold uppercase tracking-[0.16em]"
              >
                Parler de votre projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
