import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieBanner from "@/components/shared/CookieBanner";
import { solutions } from "@/lib/solutions";

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

const otherAccelerators = [
  { name: "PharmXpress", description: "Recherche et mise en relation autour de la disponibilité des médicaments." },
  { name: "Medilibre", description: "Téléconsultation, suivi patient et parcours de soins digitaux." },
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

        <section id="accelerateurs" className="section-shell scroll-mt-24 px-gutter py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker w-fit border-[#18845B]/20 text-[#18845B]">Solutions & accélérateurs</p>
              <h2 className="mt-5 font-sora text-3xl leading-[1.06] tracking-[-0.04em] text-[#111A2E] md:text-5xl">Des solutions déjà structurées, adaptées à votre réalité.</h2>
            </div>
            <p className="max-w-md font-manrope text-base leading-relaxed text-[#334158]/65">Chaque solution part d’un socle éprouvé, puis se configure selon vos processus, vos contraintes et votre ambition.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <article
                key={solution.slug}
                style={{ "--card-accent": solution.accent } as CSSProperties}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#111A2E]/10 bg-[#FBFCFC] transition duration-300 hover:-translate-y-1 hover:border-[#18845B]/30 hover:shadow-[0_26px_70px_rgba(17,26,46,.12)]"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#17243B] lg:aspect-[16/9]">
                  <Image
                    src={solution.visual}
                    alt={solution.visualAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    style={{ objectPosition: solution.visualPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/82 via-transparent to-transparent" />
                  <Link
                    href={`/solutions/${solution.slug}`}
                    aria-label={`Découvrir la fiche ${solution.name}`}
                    className="group/logo absolute bottom-4 left-4 right-4 flex min-h-20 items-center justify-center rounded-[14px] border border-[#D8E2E6]/85 bg-[#F6F9FA]/95 px-5 py-3 shadow-[0_12px_34px_rgba(17,26,46,.12)] backdrop-blur-xl transition duration-300 hover:border-[var(--card-accent)] hover:bg-white"
                  >
                    <Image src={solution.logo} alt={`Logo ${solution.name}`} width={300} height={110} className="max-h-16 w-auto max-w-[82%] object-contain transition duration-300 group-hover/logo:scale-[1.035]" />
                    <span aria-hidden="true" className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#111A2E]/10 bg-white font-manrope text-sm text-[#111A2E]/55 transition group-hover/logo:border-[var(--card-accent)] group-hover/logo:text-[var(--card-accent)]">↗</span>
                  </Link>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--card-accent)]">{solution.category}</p>
                  <h3 className="mt-4 font-sora text-2xl leading-tight tracking-[-0.025em] text-[#111A2E]">{solution.name}</h3>
                  <p className="mt-4 font-manrope text-base leading-relaxed text-[#334158]/65">{solution.cardDescription}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {solution.proofs.slice(0, 3).map((proof) => (
                      <span key={proof.label} className="rounded-full border border-[#111A2E]/10 bg-[#EBFFF5] px-3 py-2 font-manrope text-xs font-semibold text-[#334158]/75">
                        {proof.value}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="mt-8 inline-flex items-center justify-between rounded-[12px] border border-[#111A2E] bg-[#111A2E] px-5 py-4 font-manrope text-xs font-extrabold uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_rgba(17,26,46,.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--card-accent)] hover:bg-[var(--card-accent)] hover:text-[#111A2E]"
                  >
                    Découvrir la solution <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-[#111A2E]/12 pt-10">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#8A6A20]">Également dans notre atelier</p>
                <h3 className="mt-3 font-sora text-2xl leading-tight tracking-[-0.03em] text-[#111A2E] md:text-3xl">D’autres accélérateurs à activer selon le besoin.</h3>
              </div>
              <p className="font-manrope text-sm text-[#334158]/55">Présentation sur demande</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {otherAccelerators.map((product, index) => (
                <article key={product.name} className="rounded-[14px] border border-[#111A2E]/10 bg-white p-5 transition hover:border-[#18845B]/30">
                  <div className="flex items-center justify-between">
                    <span className="font-sora text-sm text-[#18845B]">0{index + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6B24F]" />
                  </div>
                  <h4 className="mt-6 font-sora text-lg uppercase">{product.name}</h4>
                  <p className="mt-3 font-manrope text-sm leading-relaxed text-[#334158]/62">{product.description}</p>
                </article>
              ))}
            </div>
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
