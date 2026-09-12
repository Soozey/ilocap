"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Expertises", href: "/#expertises" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/methodologie" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#173C31]/10 bg-[#F5F2EA]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-5 lg:px-12">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
          <Image
            src="/Logo_ilocap_coloured-rm.png"
            alt="ILOCAP"
            width={220}
            height={90}
            priority
            className="h-11 w-auto object-contain md:h-12"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-[family-name:var(--font-inter)] text-[13px] font-medium text-[#173C31]/78 transition-colors hover:text-[#173C31]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact?objet=devis"
            className="hidden min-h-11 items-center justify-center rounded-md bg-[#173C31] px-5 font-[family-name:var(--font-inter)] text-[12px] font-semibold text-white transition hover:bg-[#245445] md:inline-flex"
          >
            Parler de votre projet&nbsp; →
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#173C31]/20 text-[#173C31] lg:hidden"
          >
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#173C31]/10 bg-[#F5F2EA] px-5 pb-6 lg:hidden"
          >
            <div className="flex flex-col pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[#173C31]/10 py-4 font-[family-name:var(--font-inter)] text-sm text-[#173C31]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact?objet=devis"
                onClick={() => setIsMenuOpen(false)}
                className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-[#173C31] px-6 font-[family-name:var(--font-inter)] text-sm font-semibold text-white"
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
