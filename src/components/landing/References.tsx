import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    title: "Écosystème cyber et événementiel",
    category: "Institution & cybersécurité",
    description: "Une présence digitale structurée pour informer, valoriser les partenaires et prolonger l’impact d’un rendez-vous national.",
    image: "/realisations/cirt-cybersecurite.png",
    alt: "Interface du Symposium de la cybersécurité Madagascar",
  },
  {
    title: "Pilotage de flotte et du carburant",
    category: "Plateforme métier",
    description: "Un tableau de bord opérationnel réunissant flotte, missions, alertes, dépenses et suivi géographique.",
    image: "/realisations/trackfuel-dashboard.png",
    alt: "Tableau de bord TrackFuel360",
  },
  {
    title: "Marketplace multivendeur",
    category: "Commerce digital",
    description: "Une expérience de vente structurée autour des boutiques, des catégories, de la recherche et de la mise en avant des vendeurs.",
    image: "/realisations/primi-marketplace.png",
    alt: "Interface de la marketplace Primi",
  },
];

const logos = [
  { src: "/references/cirt-shield.png", alt: "CIRT Madagascar" },
  { src: "/references/logo-espamada.jpg", alt: "EspaMada" },
  { src: "/references/logo-greenvillage.jpg", alt: "GreenVillage" },
  { src: "/references/logo-ymagoo.png", alt: "Ymagoo Project" },
  { src: "/references/logo-yunka.jpg", alt: "Yunka Retreat" },
  { src: "/references/logo-andcorp.png", alt: "AndCorp" },
];

export default function References() {
  return (
    <section id="realisations" className="section-pad bg-[#F3F1EC]">
      <div className="section-shell px-gutter">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="eyebrow-line" />
              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">Réalisations</span>
            </div>
            <h2 className="max-w-3xl font-sora text-3xl leading-tight text-[#073642] md:text-5xl">
              Des projets visibles, des usages concrets.
            </h2>
          </div>
          <Link href="/realisations" className="font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#073642] underline decoration-[#B89A5A] decoration-2 underline-offset-8">
            Découvrir les études de cas →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-[14px] border border-[#073642]/10 bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#073642]/5">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.025]" />
              </div>
              <div className="p-6 md:p-7">
                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89A5A]">{item.category}</p>
                <h3 className="mt-3 font-sora text-xl uppercase leading-tight text-[#073642]">{item.title}</h3>
                <p className="mt-4 font-manrope text-sm leading-relaxed text-[#073642]/62">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[#073642]/10 pt-10">
          <p className="text-center font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#073642]/45">
            Ils ont choisi de construire avec nous
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div key={logo.alt} className="relative flex h-24 items-center justify-center rounded-[10px] border border-[#073642]/8 bg-white px-5">
                <Image src={logo.src} alt={logo.alt} width={160} height={80} className="max-h-14 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
