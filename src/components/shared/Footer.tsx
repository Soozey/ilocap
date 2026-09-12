"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#171A18]/10 bg-[#F5F2EA] text-[#171A18]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-12 md:grid-cols-12 md:px-8 lg:px-12 lg:py-14">
        <div className="md:col-span-4">
          <Image
            src="/Logo_ilocap_coloured-rm.png"
            alt="ILOCAP"
            width={230}
            height={95}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 font-[family-name:var(--font-inter)] text-[15px] font-medium text-[#171A18]/82">
            Conseil · Technologie · Impact
          </p>
          <p className="mt-2 max-w-sm font-[family-name:var(--font-inter)] text-[15px] leading-6 text-[#343A36]">
            Des solutions digitales utiles, structurées et évolutives pour faire avancer vos projets.
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F6B56]">Explorer</h2>
          <ul className="mt-5 space-y-3 font-[family-name:var(--font-inter)] text-[15px] text-[#343A36]">
            <li><Link href="/services" className="transition-colors hover:text-[#2F6B56]">Services</Link></li>
            <li><Link href="/solutions" className="transition-colors hover:text-[#2F6B56]">Solutions</Link></li>
            <li><Link href="/realisations" className="transition-colors hover:text-[#2F6B56]">Réalisations</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F6B56]">ILOCAP</h2>
          <ul className="mt-5 space-y-3 font-[family-name:var(--font-inter)] text-[15px] text-[#343A36]">
            <li><Link href="/methodologie" className="transition-colors hover:text-[#2F6B56]">À propos</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-[#2F6B56]">Contact</Link></li>
            <li><a href="https://www.linkedin.com/company/ilocap" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#2F6B56]">LinkedIn</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F6B56]">Restons en contact</h2>
          <p className="mt-5 font-[family-name:var(--font-inter)] text-[15px] leading-6 text-[#343A36]">
            Un besoin, une idée ou un projet à structurer ? Écrivez-nous ou planifiez directement un échange.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact?objet=devis" className="inline-flex min-h-10 items-center rounded-md bg-[#173C31] px-4 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#2F6B56]">
              Nous écrire
            </Link>
            <a href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-md border border-[#171A18]/20 px-4 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#171A18] transition hover:border-[#2F6B56] hover:text-[#2F6B56]">
              Rendez-vous
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#171A18]/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-6 font-[family-name:var(--font-inter)] text-[11px] text-[#171A18]/52 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} ILOCAP. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/contact?objet=mentions-legales" className="transition-colors hover:text-[#2F6B56]">Demander les mentions légales</Link>
            <Link href="/contact?objet=confidentialite" className="transition-colors hover:text-[#2F6B56]">Questions de confidentialité</Link>
            <button type="button" onClick={() => window.dispatchEvent(new Event("ilocap:open-cookie-settings"))} className="transition-colors hover:text-[#2F6B56]">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
