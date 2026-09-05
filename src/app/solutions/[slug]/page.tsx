import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieBanner from "@/components/shared/CookieBanner";
import ArozoPresentation from "@/components/solutions/ArozoPresentation";
import { getSolution, solutions } from "@/lib/solutions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: `${solution.name} | Solutions ILOCAP`,
    description: solution.cardDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();
  if (solution.slug === "arozo") return <ArozoPresentation />;

  const accentStyle = { "--solution-accent": solution.accent } as CSSProperties;

  return (
    <>
      <Header />
      <main style={accentStyle} className="bg-[#F4F7F6] text-[#111A2E]">
        <section className="overflow-hidden bg-[#111A2E] px-gutter pb-16 pt-32 text-white md:pb-24 md:pt-40">
          <div className="section-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
            <div>
              <Link
                href="/services#accelerateurs"
                className="inline-flex items-center gap-3 font-manrope text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
              >
                <span aria-hidden="true">←</span> Solutions & accélérateurs
              </Link>
              <div className="mt-9 flex items-center gap-4">
                <div className="h-px w-12 bg-[var(--solution-accent)]" />
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">
                  {solution.category}
                </p>
              </div>
              <h1 className="mt-6 font-sora text-4xl leading-[1.04] md:text-6xl">{solution.promise}</h1>
              <p className="mt-7 max-w-2xl font-manrope text-base leading-relaxed text-white/72 md:text-lg">
                {solution.summary}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/contact?objet=demo&solution=${solution.slug}`}
                  className="button-elegant inline-flex items-center justify-center bg-[var(--solution-accent)] px-7 font-manrope text-xs font-extrabold uppercase text-[#111A2E] hover:bg-white"
                >
                  Demander une démonstration
                </Link>
                <Link
                  href="/contact?objet=devis"
                  className="button-elegant button-teal-outline inline-flex items-center justify-center px-7 font-manrope text-xs font-extrabold uppercase text-white"
                >
                  Étudier mon besoin
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-white/12 bg-[#17243B] shadow-[0_40px_110px_rgba(0,0,0,.3)]">
                <Image
                  src={solution.visual}
                  alt={solution.visualAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 54vw"
                  className="object-cover"
                  style={{ objectPosition: solution.visualPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/78 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-5 flex min-h-24 w-[min(72%,280px)] items-center justify-center rounded-[14px] border border-[#D8E2E6]/80 bg-[#F1F5F6]/92 p-4 shadow-[0_14px_38px_rgba(17,26,46,.10)] backdrop-blur md:left-8">
                <Image
                  src={solution.logo}
                  alt={`Logo ${solution.name}`}
                  width={280}
                  height={120}
                  className="max-h-20 w-auto max-w-full object-contain"
                />
              </div>
              <div className="absolute -bottom-4 right-5 h-8 w-8 rounded-full bg-[var(--solution-accent)] md:right-8" />
            </div>
          </div>
        </section>

        <section className="border-b border-[#111A2E]/10 bg-[#EBFFF5]">
          <div className="section-shell grid grid-cols-2 px-gutter py-10 md:grid-cols-4 md:py-12">
            {solution.proofs.map((proof, index) => (
              <div
                key={proof.label}
                className={`px-4 py-4 first:pl-0 md:px-7 ${index > 0 ? "border-l border-[#111A2E]/10" : ""}`}
              >
                <p className="font-sora text-2xl text-[var(--solution-accent)] md:text-3xl">{proof.value}</p>
                <p className="mt-2 font-manrope text-xs leading-relaxed text-[#334158]/62 md:text-sm">{proof.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Principes directeurs</p>
            <h2 className="mt-4 font-sora text-3xl leading-tight md:text-5xl">Une solution utile repose sur des choix clairs.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solution.pillars.map((pillar, index) => (
              <article key={pillar.title} className="premium-card rounded-[18px] border border-[#111A2E]/10 bg-white p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-sora text-3xl text-[var(--solution-accent)]">0{index + 1}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--solution-accent)]" />
                </div>
                <h3 className="mt-10 font-sora text-xl uppercase leading-tight md:text-2xl">{pillar.title}</h3>
                <p className="mt-4 font-manrope text-base leading-relaxed text-[#334158]/65">{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#EBFFF5] py-20 md:py-28">
          <div className="section-shell px-gutter">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Architecture fonctionnelle</p>
                <h2 className="mt-4 font-sora text-3xl leading-tight md:text-5xl">Une architecture modulaire, pensée comme un tout.</h2>
              </div>
              <p className="max-w-md font-manrope text-base leading-relaxed text-[#334158]/62">
                Le périmètre est configuré selon vos priorités, vos données et les outils déjà en place.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {solution.modules.map((module) => (
                <article key={module.number} className="rounded-[18px] border border-[#111A2E]/10 bg-white p-7 md:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[var(--solution-accent)]">Module {module.number}</p>
                      <h3 className="mt-4 font-sora text-xl uppercase leading-tight md:text-2xl">{module.title}</h3>
                    </div>
                    <span className="font-sora text-4xl text-[#111A2E]/10">{module.number}</span>
                  </div>
                  <p className="mt-5 font-manrope text-base leading-relaxed text-[#334158]/65">{module.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#111A2E]/10 bg-[#F4F7F6] px-3 py-2 font-manrope text-xs font-semibold text-[#334158]/72">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {solution.gallery && (
          <section className="bg-white py-20 md:py-28">
            <div className="section-shell px-gutter">
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
                <div className="lg:sticky lg:top-32">
                  <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Deux parcours complémentaires</p>
                  <h2 className="mt-4 font-sora text-3xl leading-tight md:text-5xl">De la première question à l’accompagnement.</h2>
                  <p className="mt-6 max-w-lg font-manrope text-base leading-relaxed text-[#334158]/65">
                    AroZo distingue le besoin d’information, la recherche d’un professionnel et l’urgence afin de proposer une réponse plus lisible à chaque étape.
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  {solution.gallery.map((item) => (
                    <article key={item.title} className="overflow-hidden rounded-[20px] border border-[#111A2E]/10 bg-[#F4F7F6]">
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#EAF4F3]">
                        <Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, 34vw" className="object-cover object-top" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111A2E]/42 to-transparent" />
                      </div>
                      <div className="p-6 md:p-7">
                        <h3 className="font-sora text-xl leading-tight tracking-[-0.025em] text-[#111A2E]">{item.title}</h3>
                        <p className="mt-4 font-manrope text-sm leading-relaxed text-[#334158]/65">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#111A2E] py-20 text-white md:py-24">
          <div className="section-shell px-gutter">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Contextes d’intervention</p>
                <h2 className="mt-4 font-sora text-3xl leading-tight md:text-4xl">Conçue pour les réalités du terrain.</h2>
                <p className="mt-6 font-manrope text-base leading-relaxed text-white/62">
                  La solution s’adapte aux responsabilités, aux volumes et aux contraintes propres à chaque organisation.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {solution.audiences.map((audience, index) => (
                  <article key={audience.title} className="rounded-[14px] border border-white/12 bg-white/[0.04] p-6">
                    <p className="font-sora text-sm text-[var(--solution-accent)]">0{index + 1}</p>
                    <h3 className="mt-5 font-sora text-lg uppercase leading-tight">{audience.title}</h3>
                    <p className="mt-3 font-manrope text-sm leading-relaxed text-white/60">{audience.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Déploiement & confiance</p>
            <h2 className="mt-4 font-sora text-3xl leading-tight md:text-5xl">Une base solide, adaptée à votre environnement.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solution.safeguards.map((item) => (
              <article key={item.title} className="rounded-[18px] border border-[#111A2E]/10 bg-white p-7 md:p-8">
                <div className="h-1 w-12 rounded-full bg-[var(--solution-accent)]" />
                <h3 className="mt-7 font-sora text-lg uppercase leading-tight">{item.title}</h3>
                <p className="mt-4 font-manrope text-base leading-relaxed text-[#334158]/65">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-gutter pb-20 md:pb-28">
          <div className="section-shell overflow-hidden rounded-[22px] bg-[#17243B] text-white shadow-[0_32px_90px_rgba(17,26,46,.18)]">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[var(--solution-accent)]">Passons au concret</p>
                <h2 className="mt-4 max-w-3xl font-sora text-3xl leading-tight md:text-4xl">Voyons comment {solution.shortName} peut répondre à votre réalité métier.</h2>
                <p className="mt-5 max-w-2xl font-manrope text-base leading-relaxed text-white/62">
                  Une première démonstration permet de cadrer vos priorités, les adaptations nécessaires et le chemin de déploiement.
                </p>
              </div>
              <Link
                href={`/contact?objet=demo&solution=${solution.slug}`}
                className="button-elegant inline-flex items-center justify-center bg-[var(--solution-accent)] px-7 font-manrope text-xs font-extrabold uppercase text-[#111A2E] hover:bg-white"
              >
                Planifier une démonstration
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
