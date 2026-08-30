import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieBanner from "@/components/shared/CookieBanner";

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
    image: "/realisations/trackfuel-dashboard.png",
    alt: "Tableau de bord de la plateforme TrackFuel360",
  },
  {
    category: "Commerce · Marketplace",
    title: "Primi",
    context: "Structurer une offre multivendeur et simplifier la découverte des boutiques et de leurs produits.",
    solution: "Une marketplace organisée par univers, dotée de recherche, filtres, boutiques vérifiées et parcours vendeur.",
    image: "/realisations/primi-marketplace.png",
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
];

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F3F1EC] text-[#073642]">
        <section className="bg-[#073642] px-gutter pb-20 pt-36 text-white md:pb-24 md:pt-44">
          <div className="section-shell">
            <div className="mb-6 flex items-center gap-4"><div className="h-px w-12 bg-[#B89A5A]" /><span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">Réalisations</span></div>
            <h1 className="max-w-4xl font-sora text-4xl leading-[1.05] md:text-6xl">Des interfaces qui montrent ce que nous savons <span className="text-[#B89A5A]">concrètement construire.</span></h1>
            <p className="mt-7 max-w-2xl font-manrope text-base leading-relaxed text-white/70 md:text-lg">Chaque projet part d’un besoin métier précis. Les exemples ci-dessous présentent le contexte et la réponse apportée, sans exposer les informations confidentielles de nos clients.</p>
          </div>
        </section>

        <section className="section-shell space-y-8 px-gutter py-20 md:py-28">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-[16px] border border-[#073642]/10 bg-white lg:grid lg:grid-cols-2">
              <div className={`relative min-h-[300px] bg-[#E8E4DC] lg:min-h-[470px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
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

        <section className="bg-[#B89A5A] px-gutter py-16 text-[#073642]">
          <div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-3xl font-sora text-3xl leading-tight md:text-4xl">Votre projet peut devenir notre prochaine réalisation de référence.</h2>
            <Link href="/contact?objet=devis" className="button-elegant inline-flex shrink-0 items-center justify-center bg-[#073642] px-7 text-center font-manrope text-[10px] font-bold uppercase text-white hover:bg-white hover:text-[#073642]">Présenter mon besoin</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
