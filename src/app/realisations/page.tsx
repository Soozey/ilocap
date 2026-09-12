import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import DigitalFibres from "@/components/shared/DigitalFibres";

export const metadata: Metadata = {
  title: "Réalisations et études de cas | ILOCAP",
  description: "Découvrez des plateformes métier, marketplaces et expériences digitales conçues avec ILOCAP.",
  alternates: { canonical: "/realisations" },
};

const projects = [
  {
    category: "Institution · Cybersécurité",
    title: "Symposium de la cybersécurité Madagascar",
    context: "Rendre un événement national identifiable, accessible et cohérent pour ses participants et partenaires.",
    solution: "Une expérience digitale structurée autour du projet, des informations utiles, des axes du symposium, des partenaires et de l’album.",
    image: "/realisations/cirt-cybersecurite.png",
    alt: "Site du Symposium de la cybersécurité Madagascar",
  },
  {
    category: "Transport · Plateforme métier",
    title: "TrackFuel360",
    context: "Réunir les informations opérationnelles d’une flotte et rendre les anomalies rapidement visibles.",
    solution: "Un tableau de bord associant véhicules, missions, carburant, maintenance, conformité, alertes et cartographie.",
    image: "/solutions/banners/trackfuel-360-v2.webp",
    alt: "Tableau de bord de la plateforme TrackFuel360",
  },
  {
    category: "Commerce · Marketplace",
    title: "Primi",
    context: "Structurer une offre multivendeur et simplifier la découverte des boutiques et de leurs produits.",
    solution: "Une marketplace organisée par univers, dotée de recherche, filtres, boutiques vérifiées et parcours vendeur.",
    image: "/solutions/banners/primimport-store-v2.webp",
    alt: "Interface de la marketplace Primi",
  },
  {
    category: "Achats professionnels · B2B",
    title: "EspaMada",
    context: "Créer un point de rencontre digital entre les besoins des entreprises et une communauté de fournisseurs.",
    solution: "Une plateforme orientée achats professionnels, mise en relation et développement d’un réseau de fournisseurs.",
    image: "/realisations/espamada.png",
    alt: "Communication de la plateforme EspaMada",
  },
  {
    category: "E-commerce · Création visuelle",
    title: "GreenVillage",
    context: "Valoriser un catalogue très dense et rendre les nouveautés immédiatement identifiables dans un univers fortement concurrentiel.",
    solution: "Un travail continu sur les visuels produits, les bannières commerciales et leur intégration dans l’expérience e-commerce.",
    image: "/realisations/greenvillage-site.png",
    alt: "Sélection de visuels e-commerce GreenVillage",
  },
  {
    category: "Commerce · Présence digitale",
    title: "EJACOS Market",
    context: "Installer une identité reconnaissable et préparer une présence digitale cohérente pour une nouvelle offre commerciale.",
    solution: "Une base de communication structurée autour de la marque, de ses engagements et de son positionnement marketplace.",
    image: "/references/logo-ejacos-transparent.png",
    alt: "Identité visuelle EJACOS Market",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F2EA] text-[#171A18]">
        <section className="relative overflow-hidden bg-[#F5F2EA] px-gutter pb-12 pt-32 md:pb-16 md:pt-36">
          <DigitalFibres />
          <div className="section-shell relative">
            <div className="mb-6 flex items-center gap-4"><div className="h-px w-12 bg-[#B89A5A]" /><span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">Réalisations</span></div>
            <h1 className="max-w-4xl font-sora text-4xl leading-[1.05] md:text-6xl">Des interfaces qui montrent ce que nous savons <span className="text-[#B89A5A]">concrètement construire.</span></h1>
            <p className="mt-5 max-w-2xl font-manrope text-base leading-relaxed text-[#343A36]">Chaque projet part d’un besoin métier précis. Les exemples ci-dessous présentent le contexte et la réponse apportée, sans exposer les informations confidentielles de nos clients.</p>
          </div>
        </section>

        <section className="section-shell space-y-8 px-gutter py-20 md:py-28">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-[16px] border border-[#073642]/10 bg-white lg:grid lg:grid-cols-2">
              <div className={`relative aspect-[2/1] bg-[#F5F2EA] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">{project.category}</p>
                <h2 className="mt-4 font-sora text-3xl uppercase leading-tight text-[#073642]">{project.title}</h2>
                <div className="mt-8 space-y-6">
                  <div><h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#073642]/45">Le contexte</h3><p className="mt-2 font-manrope text-sm leading-relaxed text-[#073642]/68">{project.context}</p></div>
                  <div><h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#073642]/45">La réponse</h3><p className="mt-2 font-manrope text-sm leading-relaxed text-[#073642]/68">{project.solution}</p></div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section-shell px-gutter pb-16">
          <h2>À découvrir aussi : nos solutions métiers</h2>
          <p className="mt-3 text-[#343A36]">Des produits à adapter à votre contexte, distincts des études de cas ci-dessus.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[{name: "LAMINA", slug: "lamina", image: "/solutions/banners/lamina-v2.webp"}, {name: "AroZo", slug: "arozo", image: "/solutions/banners/arozo-v2.webp"}].map(solution => (
              <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="block rounded-xl border border-[#171A18]/10 bg-white p-4 transition hover:border-[#173C31]/50">
                <div className="relative aspect-[2/1]"><Image src={solution.image} alt={`Présentation de ${solution.name}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" /></div>
                <h3 className="mt-4">{solution.name}</h3><p className="mt-2 text-sm">Découvrir la solution</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="bg-[#B89A5A] px-gutter py-16 text-[#073642]">
          <div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-3xl font-sora text-3xl leading-tight md:text-4xl">Votre projet peut devenir notre prochaine réalisation de référence.</h2>
            <Link href="/contact?objet=devis" className="button-elegant inline-flex shrink-0 items-center justify-center bg-[#073642] px-7 text-center font-manrope text-[10px] font-bold uppercase text-white hover:bg-white hover:text-[#073642]">Présenter mon besoin</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
