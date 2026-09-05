import Link from "next/link";
import AnimatedLogo from "@/components/shared/AnimatedLogo";

const links = [
  { label: "Solutions & accélérateurs", href: "/services#accelerateurs" },
  { label: "Entreprises & institutions", href: "/institutions" },
  { label: "PME & entrepreneurs", href: "/pme" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Notre méthode", href: "/methodologie" },
  { label: "Notre regard sur l’IA", href: "/insights/ia-et-expertise" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#111A2E]/10 bg-[#EBFFF5]">
      <div className="section-shell grid gap-12 px-gutter py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <AnimatedLogo variant="coloured" placement="footer" />
          <p className="mt-7 max-w-md font-manrope text-base leading-relaxed text-[#111A2E]/65">
            Nous créons des plateformes digitales intelligentes, de la stratégie au déploiement.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/company/ilocap" target="_blank" rel="noopener noreferrer" className="rounded-[8px] border border-[#111A2E]/15 px-4 py-3 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#111A2E] hover:border-[#18845B] hover:text-[#18845B]">LinkedIn</a>
            <a href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="rounded-[8px] border border-[#111A2E]/15 px-4 py-3 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#111A2E] hover:border-[#18845B] hover:text-[#18845B]">Rendez-vous</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#18845B]">Explorer</h2>
          <ul className="mt-6 space-y-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-manrope text-sm text-[#111A2E]/70 transition hover:text-[#111A2E]">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#18845B]">Démarrer un projet</h2>
          <p className="mt-6 font-manrope text-sm leading-relaxed text-[#111A2E]/65">
            Présentez-nous votre besoin. Nous vous répondrons avec une première orientation et les prochaines étapes possibles.
          </p>
          <Link href="/contact?objet=devis" className="button-elegant mt-7 inline-flex items-center justify-center bg-[#111A2E] px-6 font-manrope text-[10px] font-bold uppercase text-white hover:bg-[#18845B]">
            Parler d’un projet
          </Link>
        </div>
      </div>

      <div className="border-t border-[#111A2E]/10">
        <div className="section-shell flex flex-col gap-4 px-gutter py-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#111A2E]/55">© {new Date().getFullYear()} ILOCAP. Tous droits réservés.</p>
          <div className="flex justify-center gap-6">
            <Link href="/contact" className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#111A2E]/55 hover:text-[#111A2E]">Contact</Link>
            <Link href="/contact" className="font-manrope text-[10px] uppercase tracking-[0.16em] text-[#111A2E]/55 hover:text-[#111A2E]">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
