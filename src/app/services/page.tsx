import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieBanner from "@/components/shared/CookieBanner";

export const metadata: Metadata = {
  title: "Solutions digitales et produits | ILOCAP",
  description: "Plateformes métier, intelligence artificielle, automatisation, Fintech, commerce digital et produits ILOCAP.",
  alternates: { canonical: "/services" },
};

const coreSolutions = [
  { title: "Transformation & plateformes métier", description: "Audit, conception d’applications et portails, dématérialisation, gestion documentaire, interopérabilité et tableaux de bord.", items: ["Web & mobile", "Portails sécurisés", "Données & intégrations"] },
  { title: "IA & automatisation", description: "Assistants intelligents, automatisation du service client, traitement documentaire et optimisation des processus internes.", items: ["Assistants IA", "Automatisation", "Pilotage par la donnée"] },
  { title: "Fintech & services transactionnels", description: "Parcours de paiement, wallets, mobile money, agrégation et intégration sécurisée aux systèmes financiers existants.", items: ["Paiement", "Wallets", "Intégrations sécurisées"] },
];

const complementary = [
  { title: "Design & acquisition", description: "Identité, expérience utilisateur, landing pages, contenus, SEO local et campagnes reliées à vos objectifs commerciaux." },
  { title: "Automatisation commerciale & BPO", description: "Qualification, relances, support client et back-office pour gagner en capacité sans alourdir l’organisation." },
  { title: "Conduite du changement", description: "Formation, documentation, assistance au déploiement et accompagnement des équipes dans l’adoption des nouveaux usages." },
];

const products = [
  { name: "TrackFuel360", description: "Gestion de flotte, suivi du carburant, alertes et pilotage opérationnel.", image: "/realisations/trackfuel-dashboard.png", alt: "TrackFuel360" },
  { name: "Primi", description: "Marketplace multivendeur avec boutiques, catalogue, recherche et parcours vendeur.", image: "/realisations/primi-marketplace.png", alt: "Primi marketplace" },
  { name: "Lawmate", description: "Gestion de dossiers et mise en relation dans le domaine juridique.", image: null, alt: "" },
  { name: "PARAFEO", description: "Signature électronique, horodatage et traçabilité documentaire.", image: null, alt: "" },
  { name: "PharmXpress", description: "Recherche et mise en relation autour de la disponibilité des médicaments.", image: null, alt: "" },
  { name: "Medilibre", description: "Téléconsultation, suivi patient et parcours de soins digitaux.", image: null, alt: "" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F3F1EC] text-[#073642]">
        <section className="bg-[#073642] px-gutter pb-20 pt-36 text-white md:pb-24 md:pt-44">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div><div className="mb-6 flex items-center gap-4"><div className="h-px w-12 bg-[#B89A5A]" /><span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">Solutions & produits</span></div><h1 className="max-w-4xl font-sora text-4xl leading-[1.05] md:text-6xl">La bonne combinaison d’expertise, sans <span className="text-[#B89A5A]">surdimensionnement.</span></h1></div>
            <p className="font-manrope text-base leading-relaxed text-white/70 md:text-lg">Nous assemblons conseil, technologie et accompagnement en fonction du problème à résoudre, de votre maturité et de vos contraintes.</p>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Expertises principales</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {coreSolutions.map((solution, index) => (
              <article key={solution.title} className="rounded-[14px] border border-[#073642]/10 bg-white p-7 md:p-8">
                <span className="font-sora text-3xl text-[#B89A5A]">0{index + 1}</span>
                <h2 className="mt-6 font-sora text-xl uppercase leading-tight">{solution.title}</h2>
                <p className="mt-4 font-manrope text-sm leading-relaxed text-[#073642]/65">{solution.description}</p>
                <ul className="mt-6 space-y-3">{solution.items.map((item) => <li key={item} className="flex items-center gap-3 font-manrope text-xs font-semibold uppercase tracking-[0.08em] text-[#073642]/70"><span className="h-1.5 w-1.5 rounded-full bg-[#B89A5A]" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="section-shell px-gutter">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div><p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Compétences complémentaires</p><h2 className="mt-4 font-sora text-3xl leading-tight md:text-4xl">Ce qui transforme une solution en résultat.</h2></div>
              <div className="grid gap-4">{complementary.map((item) => <article key={item.title} className="rounded-[12px] border border-[#073642]/10 bg-[#F3F1EC] p-6"><h3 className="font-sora text-lg uppercase">{item.title}</h3><p className="mt-3 font-manrope text-sm leading-relaxed text-[#073642]/65">{item.description}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Solutions & accélérateurs</p><h2 className="mt-4 font-sora text-3xl leading-tight md:text-5xl">Des bases déjà construites pour aller plus vite.</h2></div><p className="max-w-md font-manrope text-sm leading-relaxed text-[#073642]/65">Chaque produit peut être configuré ou étendu selon votre contexte. Démonstration et étude d’adéquation sur demande.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[14px] border border-[#073642]/10 bg-white">
                {product.image ? <div className="relative aspect-[16/9] bg-[#E8E4DC]"><Image src={product.image} alt={product.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" /></div> : <div className="flex aspect-[16/9] items-center justify-center bg-[#073642]"><span className="font-sora text-3xl text-[#B89A5A]">{product.name.slice(0, 2).toUpperCase()}</span></div>}
                <div className="p-6"><h3 className="font-sora text-xl uppercase">{product.name}</h3><p className="mt-3 font-manrope text-sm leading-relaxed text-[#073642]/65">{product.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#B89A5A] px-gutter py-16 text-[#073642]"><div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center"><h2 className="max-w-3xl font-sora text-3xl leading-tight md:text-4xl">Identifions la solution la plus adaptée à votre besoin et à votre budget.</h2><Link href="/contact?objet=devis" className="button-elegant inline-flex shrink-0 items-center justify-center bg-[#073642] px-7 font-manrope text-[10px] font-bold uppercase text-white hover:bg-white hover:text-[#073642]">Demander une étude</Link></div></section>
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
