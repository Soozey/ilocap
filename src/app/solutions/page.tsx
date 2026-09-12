import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions & accélérateurs | ILOCAP",
  description:
    "Découvrez les solutions métier et accélérateurs ILOCAP : AroZo, LAMINA, PATRIMONIA, TrackFuel 360, SIIRH, Primimport.store et plus encore.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F2EA] text-[#171A18]">
        <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44 lg:px-12">
          <div className="absolute inset-0 bg-[#F5F2EA]" />
          <div className="absolute inset-0 opacity-[0.08]">
            <Image src="/abstract-wave.png" alt="" fill priority className="object-cover" />
          </div>
          <div className="relative mx-auto max-w-[1320px]">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2F6B56]">
              Solutions & accélérateurs
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
              <h1 className="max-w-4xl font-[family-name:var(--font-source-serif)] text-[3rem] font-semibold leading-[0.98] tracking-[-0.035em] text-[#171A18] sm:text-6xl lg:text-[5rem]">
                Des solutions déjà structurées, adaptées à votre réalité.
              </h1>
              <p className="max-w-xl font-[family-name:var(--font-inter)] text-[17px] leading-7 text-[#343A36] md:text-[19px] md:leading-8 lg:pb-2">
                Nous partons d’un socle métier existant pour accélérer le projet, puis nous adaptons les fonctions, les intégrations et le déploiement à votre contexte.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#EEF2E7] py-20 md:py-28">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map((solution) => (
                <article
                  key={solution.slug}
                  style={{ "--card-accent": solution.accent } as CSSProperties}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-[#171A18]/10 bg-[#FBFCF8] transition duration-300 hover:-translate-y-1 hover:border-[#2F6B56]/45 hover:shadow-[0_24px_65px_rgba(23,60,49,.10)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image
                      src={solution.visual}
                      alt={solution.visualAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      style={{ objectPosition: solution.visualPosition }}
                    />
                    <div className="absolute inset-x-4 bottom-4 flex min-h-20 items-center justify-center rounded-[14px] border border-white/70 bg-white/94 px-5 py-3 shadow-[0_10px_30px_rgba(23,60,49,.10)] backdrop-blur-md">
                      <Image src={solution.logo} alt={`Logo ${solution.name}`} width={300} height={110} className="max-h-14 w-auto max-w-[78%] object-contain" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--card-accent)]">
                      {solution.category}
                    </p>
                    <h2 className="mt-3 font-[family-name:var(--font-source-serif)] text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171A18] transition-colors group-hover:text-[#2F6B56]">
                      {solution.name}
                    </h2>
                    <p className="mt-4 font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#3A403C]">
                      {solution.cardDescription}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {solution.proofs.slice(0, 3).map((proof) => (
                        <span key={proof.label} className="rounded-full border border-[#171A18]/10 bg-white px-3 py-2 font-[family-name:var(--font-inter)] text-xs font-medium text-[#343A36]">
                          {proof.value}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      className="mt-7 inline-flex w-fit min-h-11 items-center rounded-md border border-[#171A18]/20 px-5 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:border-[#2F6B56] hover:bg-[#2F6B56] hover:text-white"
                    >
                      Découvrir la solution
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FBF9F4] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-5 md:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-12">
            <div>
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2F6B56]">
                Vous avez plutôt besoin d’un accompagnement sur mesure ?
              </p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.03] tracking-[-0.025em] text-[#171A18] md:text-5xl">
                Nos services couvrent la conception, l’automatisation, la présence digitale et l’accompagnement quotidien.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center rounded-md border border-[#171A18]/20 px-5 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:border-[#2F6B56] hover:bg-[#2F6B56] hover:text-white"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#173C31] px-5 py-20 text-white md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">Une solution vous intéresse ?</p>
            <h2 className="mt-4 font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-none tracking-[-0.025em] md:text-6xl">
              Parlons de votre contexte.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-[16px] leading-7 text-white/78 md:text-[17px]">
              Nous vous présentons le socle existant, les possibilités d’adaptation et une première trajectoire de déploiement.
            </p>
            <Link href="/contact?objet=demo" className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#F5F2EA] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#171A18] transition hover:bg-white hover:text-[#2F6B56]">
              Demander une présentation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
