import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Entreprises & institutions", href: "/institutions" },
  { label: "PME & entrepreneurs", href: "/pme" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre méthode", href: "/methodologie" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#073642]/10 bg-[#F3F1EC]">
      <div className="section-shell grid gap-12 px-gutter py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Image src="/Logo_ilocap_coloured-rm.png" alt="ILOCAP" width={180} height={70} className="h-auto w-40 object-contain" />
          <p className="mt-7 max-w-md font-manrope text-base leading-relaxed text-[#073642]/65">
            Conseil, conception et déploiement de solutions digitales pour les organisations qui veulent transformer concrètement leurs opérations.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/company/ilocap" target="_blank" rel="noopener noreferrer" className="rounded-[8px] border border-[#073642]/15 px-4 py-3 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#073642] hover:border-[#B89A5A] hover:text-[#B89A5A]">LinkedIn</a>
            <a href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="rounded-[8px] border border-[#073642]/15 px-4 py-3 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#073642] hover:border-[#B89A5A] hover:text-[#B89A5A]">Rendez-vous</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Explorer</h2>
          <ul className="mt-6 space-y-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-manrope text-sm text-[#073642]/70 transition hover:text-[#073642]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Démarrer un projet</h2>
          <p className="mt-6 font-manrope text-sm leading-relaxed text-[#073642]/65">
            Présentez-nous votre besoin. Nous vous répondrons avec une première orientation et les prochaines étapes possibles.
          </p>
          <Link href="/contact?objet=devis" className="button-elegant mt-7 inline-flex items-center justify-center bg-[#073642] px-6 font-manrope text-[10px] font-bold uppercase text-white hover:bg-[#B89A5A]">
            Demander une étude et un devis
          </Link>
        </div>
      </div>

      <div className="border-t border-[#073642]/10">
        <div className="section-shell flex flex-col gap-4 px-gutter py-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#073642]/55">© {new Date().getFullYear()} ILOCAP. Tous droits réservés.</p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#073642]/55 hover:text-[#073642]">Contact</Link>
            <Link href="/contact" className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#073642]/55 hover:text-[#073642]">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
