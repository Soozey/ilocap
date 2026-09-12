import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#173C31]/10 bg-[#F5F2EA] text-[#173C31]">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-12 md:grid-cols-12 md:px-8 lg:px-12 lg:py-14">
        <div className="md:col-span-4">
          <Image
            src="/Logo_ilocap_coloured-rm.png"
            alt="ILOCAP"
            width={230}
            height={95}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 font-[family-name:var(--font-inter)] text-sm font-medium text-[#173C31]/80">
            Conseil · Technologie · Impact
          </p>
          <p className="mt-2 max-w-sm font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/60">
            Des solutions digitales utiles, structurées et évolutives pour faire avancer vos projets.
          </p>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#173C31]/45">Explorer</h2>
          <ul className="mt-5 space-y-3 font-[family-name:var(--font-inter)] text-sm text-[#173C31]/70">
            <li><Link href="/#expertises" className="hover:text-[#173C31]">Expertises</Link></li>
            <li><Link href="/#services" className="hover:text-[#173C31]">Services</Link></li>
            <li><Link href="/#solutions" className="hover:text-[#173C31]">Solutions</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#173C31]/45">ILOCAP</h2>
          <ul className="mt-5 space-y-3 font-[family-name:var(--font-inter)] text-sm text-[#173C31]/70">
            <li><Link href="/realisations" className="hover:text-[#173C31]">Réalisations</Link></li>
            <li><Link href="/methodologie" className="hover:text-[#173C31]">À propos</Link></li>
            <li><Link href="/contact" className="hover:text-[#173C31]">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#173C31]/45">Restons en contact</h2>
          <p className="mt-5 font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65">
            Un besoin, une idée ou un projet à structurer ? Écrivez-nous ou planifiez directement un échange.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact?objet=devis" className="inline-flex min-h-10 items-center rounded-md bg-[#173C31] px-4 font-[family-name:var(--font-inter)] text-sm font-semibold text-white">
              Nous écrire
            </Link>
            <a href="https://www.linkedin.com/company/ilocap" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center rounded-md border border-[#173C31]/20 px-4 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#173C31]/10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-5 py-6 font-[family-name:var(--font-inter)] text-[11px] text-[#173C31]/48 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} ILOCAP. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/contact" className="hover:text-[#173C31]">Mentions légales</Link>
            <Link href="/contact" className="hover:text-[#173C31]">Politique de confidentialité</Link>
            <button type="button" className="hover:text-[#173C31]">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
