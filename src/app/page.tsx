import Image from "next/image";
import DigitalFibres from "@/components/shared/DigitalFibres";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const serviceCards = [
  {
    "title": "Concevoir vos plateformes",
    "text": "Sites, applications et plateformes métier, du cadrage à la mise en ligne.",
    "image": "/services/conception-cadrage.svg",
    "href": "/services#service-01"
  },
  {
    "title": "Automatiser vos opérations",
    "text": "Workflows, données connectées et reporting pour simplifier le quotidien.",
    "image": "/services/automation-trackfuel.webp",
    "href": "/services#service-02"
  },
  {
    "title": "Développer votre visibilité",
    "text": "Traitement d’images, contenus et réseaux sociaux pour valoriser votre activité.",
    "image": "/services/creation-visuelle-greenvillage.png",
    "href": "/services#service-03"
  },
  {
    "title": "Accompagner vos équipes",
    "text": "Support, BPO et formation pour faire fonctionner et évoluer vos outils.",
    "image": "/services/community-management.webp",
    "href": "/services#service-04"
  }
];

const solutionCards = [
  {
    title: "AroZo",
    text: "Information, urgence, orientation et outils professionnels réunis dans un même espace d’accès au droit.",
    logo: "/solutions/logo-arozo.png",
    image: "/solutions/banners/arozo-v2.webp",
    href: "/solutions/arozo",
  },
  {
    title: "LAMINA",
    text: "Un socle unifié pour piloter les capacités, distribuer les titres et fluidifier chaque étape du voyage.",
    logo: "/solutions/logo-lamina.png",
    image: "/solutions/banners/lamina-v2.webp",
    href: "/solutions/lamina",
  },
  {
    title: "PATRIMONIA",
    text: "La plateforme de gouvernance patrimoniale qui relie inventaire, responsabilités, valeur, documents et décisions.",
    logo: "/solutions/logo-patrimonia.png",
    image: "/solutions/banners/patrimonia-v2.webp",
    href: "/solutions/patrimonia",
  },
];

const references = [
  { src: "/references/logo-cirt-transparent.png", alt: "CIRT Madagascar" },
  { src: "/references/logo-espamada-transparent.png", alt: "EspaMada" },
  { src: "/references/logo-greenvillage-transparent.png", alt: "GreenVillage" },
  { src: "/references/logo-ymagoo-transparent.png", alt: "Ymagoo" },
  { src: "/references/logo-yunka-transparent.png", alt: "Yunka Retreat" },
  { src: "/references/logo-andcorp-transparent.png", alt: "Andcorp" },
  { src: "/references/logo-ejacos-transparent.png", alt: "EJACOS Market" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F2EA] text-[#171A18]">
        <section className="relative flex min-h-[440px] items-center overflow-hidden pt-[74px] md:min-h-[480px]">
          <div className="absolute inset-0 bg-[#F5F2EA]" />
          <DigitalFibres />
          <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-14 text-center md:px-8 md:py-16">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.25em] text-[#171A18]/70">
              ILOCAP · STUDIO DIGITAL
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-source-serif)] text-[2.75rem] font-semibold leading-[1] tracking-[-0.035em] text-[#171A18] sm:text-[3.7rem] lg:text-[4.55rem]">
              Nous donnons vie à vos ambitions digitales.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#343A36] md:text-[18px] md:leading-8">
              Des solutions pensées pour vos métiers, utiles aujourd’hui et conçues pour évoluer avec vous.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?objet=devis" className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#173C31] px-8 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-white transition hover:bg-[#102F27]">
                Parler de votre projet
              </Link>
              <Link href="/services" className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-[#171A18]/25 bg-[#F5F2EA]/90 px-8 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:border-[#171A18]/55 hover:bg-white">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FBF9F4] py-12 md:py-16">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#171A18]/68">Services</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.025em] text-[#171A18] md:text-[3.35rem]">
                  Votre équipe digitale, du projet au quotidien.
                </h2>
              </div>
              <div className="lg:pb-1">
                <p className="font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#3A403C]">
                  Un partenaire pour concevoir, automatiser, créer vos contenus et accompagner vos équipes. En mission ponctuelle ou dans la durée.
                </p>
                <Link href="/services" className="mt-4 inline-flex font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] underline decoration-[#B89A5A] underline-offset-4 transition-opacity hover:opacity-65">
                  Choisir votre service
                </Link>
              </div>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((card) => (
                <article key={card.title} className="group overflow-hidden rounded-[18px] border border-[#171A18]/10 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-[#173C31]/35 hover:shadow-[0_18px_50px_rgba(23,60,49,.08)]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E3D8]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition duration-700 `}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold leading-tight text-[#171A18]">{card.title}</h3>
                    <p className="mt-3 font-[family-name:var(--font-inter)] text-[15px] leading-6 text-[#3A403C]">{card.text}</p>
                    <Link href={card.href} className="mt-5 inline-flex font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition-opacity hover:opacity-65">
                      En savoir plus
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EEF2E7] py-12 md:py-16">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#171A18]/68">Solutions & accélérateurs</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-[2.35rem] font-semibold leading-[1.04] tracking-[-0.025em] text-[#171A18] md:text-[3.35rem]">
                  Des solutions concrètes pour aller plus loin.
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#3A403C]">
                Des outils déjà structurés autour de besoins métier réels, pour accélérer les projets sans sacrifier l’adaptation à votre contexte.
              </p>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {solutionCards.map((card) => (
                <article key={card.title} className="group overflow-hidden rounded-[18px] border border-[#171A18]/10 bg-[#FBFCF8] transition duration-300 hover:-translate-y-0.5 hover:border-[#173C31]/35 hover:shadow-[0_18px_50px_rgba(23,60,49,.08)]">
                  <Link href={card.href} aria-label={`Découvrir ${card.title}`} className="relative block aspect-[2/1] overflow-hidden border-b border-[#171A18]/10 bg-[#F5F2EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#173C31]">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain transition duration-500 group-hover:scale-[1.015]" />
                  </Link>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold text-[#171A18]">{card.title}</h3>
                    <p className="mt-3 min-h-[72px] font-[family-name:var(--font-inter)] text-[15px] leading-6 text-[#3A403C]">{card.text}</p>
                    <Link href={card.href} className="mt-5 inline-flex min-h-10 items-center rounded-md border border-[#171A18]/20 px-4 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:border-[#171A18]/45 hover:bg-white">
                      Découvrir la solution
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <Link href="/solutions" className="font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] underline decoration-[#B89A5A] underline-offset-4 transition-opacity hover:opacity-65">
                Voir toutes nos solutions
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FBF9F4] py-14 md:py-16">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#171A18]/68">Des organisations qui nous ont fait confiance</p>
                <h2 className="mt-3 font-[family-name:var(--font-source-serif)] text-[2.25rem] font-semibold tracking-[-0.025em] text-[#171A18] md:text-[3rem]">Ils avancent avec nous.</h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#3A403C]">
                Entreprises, institutions et porteurs de projets nous confient des sujets où l’exécution, la clarté et la capacité à faire évoluer les solutions comptent réellement.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {references.map((logo) => (
                <Link href="/realisations" key={logo.alt} aria-label={`${logo.alt} — voir nos réalisations`} className="flex h-24 items-center justify-center rounded-[14px] border border-[#171A18]/8 bg-white px-4 py-3 transition duration-300 hover:border-[#173C31]/35">
                  <Image src={logo.src} alt={logo.alt} width={180} height={90} className="max-h-14 w-auto max-w-full object-contain" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#173C31] py-16 text-white md:py-20">
          <div className="relative mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="mx-auto max-w-[760px] text-center xl:mr-[320px]">
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white/58">Un projet ?</p>
              <h2 className="mt-4 font-[family-name:var(--font-source-serif)] text-[2.4rem] font-semibold leading-none tracking-[-0.025em] md:text-[3.5rem]">Parlons de votre projet.</h2>
              <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-[16px] leading-7 text-white/78 md:text-[17px]">
                Nous concevons des dispositifs utiles, sobres et évolutifs pour vos activités.
              </p>
              <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-md bg-[#F5F2EA] px-8 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:bg-white">
                Planifier un rendez-vous
              </Link>
            </div>

            <div className="pointer-events-none absolute right-10 top-1/2 hidden w-[250px] -translate-y-1/2 text-[#E2C56D] xl:block">
              <p className="rotate-[-7deg] text-right font-[family-name:var(--font-handwritten)] text-[24px] leading-[1.15]">
                Échangeons autour de vos idées.
              </p>
              <svg className="ml-auto mt-1 h-14 w-36" viewBox="0 0 150 58" fill="none" aria-hidden="true">
                <path d="M145 8C109 11 93 20 77 33C58 48 36 52 8 51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 43L7 51L19 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
