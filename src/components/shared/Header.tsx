"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Institutions", href: "/institutions" },
    { label: "PME", href: "/pme" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Méthode", href: "/methodologie" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-colors duration-300 bg-[#073642]/98 border-b border-white/10">
      <div className="flex h-20 md:h-24 justify-between items-center w-full px-gutter max-w-[1440px] mx-auto">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/Logo_ilocap_dark-rm.png"
            alt="ILOCAP"
            width={426}
            height={133}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-manrope text-[11px] lg:text-xs uppercase tracking-[0.18em] transition-colors px-1 py-2 text-white/90 hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?objet=devis"
            className="button-elegant font-manrope uppercase font-bold flex items-center justify-center px-4 text-[9px] sm:px-5 sm:text-[10px] md:px-6 lg:px-7 lg:text-[11px] bg-[#B89A5A] text-[#0B0C0A] hover:bg-[#F3F1EC]"
          >
            Demander un devis
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
            className="md:hidden border-t px-gutter pb-5 bg-[#073642] border-white/10"
          >
            <div className="flex flex-col pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-manrope text-xs uppercase tracking-[0.18em] py-4 border-b text-white/90 border-white/10 hover:text-[#B89A5A]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
