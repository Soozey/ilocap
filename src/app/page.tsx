import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const expertiseCards = [
  {
    title: "Plateformes & automatisation",
    text: "Des solutions sur mesure pour fluidifier vos processus, connecter vos outils et gagner en efficacité.",
    image: "/services/automation-trackfuel.webp",
    href: "/services",
  },
  {
    title: "Présence digitale & contenus",
    text: "Sites web, contenus, community management et traitement d’images pour renforcer votre visibilité.",
    image: "/services/creation-visuelle-greenvillage.png",
    href: "/services",
  },
  {
    title: "Conseil & structuration",
    text: "Cadrage, accompagnement et organisation pour faire avancer des projets clairs, utiles et durables.",
    image: "/realisations/symposium-cybersecurite-scene.webp",
    href: "/methodologie",
  },
];

const solutionCards = [
  {
    title: "AroZo",
    text: "Information, urgence, orientation et outils professionnels réunis dans un même espace d’accès au droit.",
    image: "/solutions/arozo-sos-droits.png",
    href: "/solutions/arozo",
  },
  {
    title: "LAMINA",
    text: "Un socle unifié pour piloter les capacités, distribuer les titres et fluidifier chaque étape du voyage.",
    image: "/solutions/lamina-fiche.png",
    href: "/solutions/lamina",
  },
  {
    title: "PATRIMONIA",
    text: "La plateforme de gouvernance patrimoniale qui relie inventaire, responsabilités, valeur, documents et décisions.",
    image: "/solutions/patrimonia-fiche.png",
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
      <main className="bg-[#F5F2EA] text-[#173C31]">
        <section className="relative flex min-h-[640px] items-center overflow-hidden pt-[74px] md:min-h-[700px]">
          <div className="absolute inset-0 bg-[#F5F2EA]" />
          <div className="absolute inset-0 opacity-[0.13]">
            <Image src="/abstract-wave.png" alt="" fill priority className="object-cover object-center" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.72),rgba(245,242,234,.24)_42%,rgba(245,242,234,.84)_78%)]" />
          <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center md:px-8">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#173C31]/60">
              ILOCAP · Transformation digitale
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl font-[family-name:var(--font-source-serif)] text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.035em] text-[#173C31] sm:text-6xl lg:text-[5.25rem]">
              Nous donnons vie à vos ambitions digitales.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl font-[family-name:var(--font-inter)] text-base leading-7 text-[#173C31]/68 md:text-lg">
              Conseil, automatisation, présence digitale et solutions métier pour structurer vos projets et accélérer leur mise en œuvre.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?objet=devis" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#173C31] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#245445]">
                Parler de votre projet&nbsp; →
              </Link>
              <Link href="#expertises" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#173C31]/35 bg-[#F5F2EA]/75 px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31] transition hover:bg-white">
                Découvrir nos expertises
              </Link>
            </div>
          </div>
        </section>

        <section id="expertises" className="bg-[#FBF9F4] py-20 md:py-28">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173C31]/55">Nos expertises</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-6xl">
                  Des expertises complémentaires pour des résultats concrets.
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65 md:text-base">
                  De la stratégie à l’exécution, nous réunissons les compétences utiles pour faire avancer vos projets sans multiplier les interlocuteurs.
                </p>
                <Link href="/services" className="mt-4 inline-flex font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31] underline decoration-[#B89A5A] underline-offset-4">
                  Découvrir l’ensemble de nos services →
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {expertiseCards.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[18px] border border-[#173C31]/10 bg-white">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#E8E3D8]">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold leading-tight">{card.title}</h3>
                    <p className="mt-3 font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/68">{card.text}</p>
                    <Link href={card.href} className="mt-5 inline-flex font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31]">
                      En savoir plus →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#EDE7DA] py-20 md:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
            <div className="flex flex-col justify-center">
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173C31]/55">Au plus près de vos équipes</p>
              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-6xl">
                Votre équipe digitale, au quotidien.
              </h2>
              <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-base leading-7 text-[#173C31]/68">
                Nous travaillons à vos côtés comme un partenaire opérationnel : cadrage, création, automatisation, amélioration continue et accompagnement des équipes.
              </p>
              <Link href="/services" className="mt-7 inline-flex w-fit min-h-12 items-center rounded-md bg-[#173C31] px-6 font-[family-name:var(--font-inter)] text-sm font-semibold text-white">
                Voir nos services →
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr] md:items-stretch">
              <div className="relative min-h-[360px] overflow-hidden rounded-[18px] bg-[#D8D0C1] md:min-h-[440px]">
                <Image src="/services/community-management.webp" alt="ILOCAP au plus près des équipes et des projets" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center rounded-[18px] bg-[#F7F3E9] p-7 md:p-8">
                {[
                  ["Conception & cadrage", "Faire émerger les bons besoins, prioriser et transformer les idées en feuille de route claire."],
                  ["Processus & workflows", "Simplifier les circuits, automatiser les tâches répétitives et améliorer la traçabilité."],
                  ["Outils connectés & évolutifs", "Construire des solutions capables de s’intégrer à votre environnement et d’évoluer avec vous."],
                ].map(([title, text], index) => (
                  <div key={title} className={index === 0 ? "pb-6" : "border-t border-[#173C31]/12 py-6 last:pb-0"}>
                    <h3 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold">{title}</h3>
                    <p className="mt-2 font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-[#EEF2E7] py-20 md:py-28">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173C31]/55">Solutions & accélérateurs</p>
                <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-6xl">
                  Des solutions concrètes pour aller plus loin.
                </h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65 md:text-base">
                Des outils déjà structurés autour de besoins métier réels, pour accélérer les projets sans sacrifier l’adaptation à votre contexte.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {solutionCards.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-[18px] border border-[#173C31]/10 bg-[#FBFCF8]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image src={card.image} alt={card.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-source-serif)] text-2xl font-semibold">{card.title}</h3>
                    <p className="mt-3 min-h-[72px] font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/68">{card.text}</p>
                    <Link href={card.href} className="mt-5 inline-flex min-h-10 items-center rounded-md border border-[#173C31]/25 px-4 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31]">
                      Découvrir la solution →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-end">
              <Link href="/services#accelerateurs" className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31] underline decoration-[#B89A5A] underline-offset-4">
                Voir toutes nos solutions →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#FBF9F4] py-16 md:py-20">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
            <div className="grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173C31]/55">Des organisations qui nous ont fait confiance</p>
                <h2 className="mt-3 font-[family-name:var(--font-source-serif)] text-4xl font-semibold tracking-[-0.025em] md:text-5xl">Ils avancent avec nous.</h2>
              </div>
              <p className="font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65 md:text-base">
                Entreprises, institutions et porteurs de projets nous confient des sujets où l’exécution, la clarté et la capacité à faire évoluer les solutions comptent réellement.
              </p>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {references.map((logo) => (
                <div key={logo.alt} className="flex h-28 items-center justify-center rounded-[14px] border border-[#173C31]/8 bg-white px-4 py-3">
                  <Image src={logo.src} alt={logo.alt} width={180} height={90} className="max-h-16 w-auto max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#173C31] py-20 text-white md:py-24">
          <div className="mx-auto max-w-[1100px] px-5 text-center md:px-8">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">Un projet ?</p>
            <h2 className="mt-4 font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-none tracking-[-0.025em] md:text-6xl">Parlons de votre projet.</h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-base leading-7 text-white/70">
              Nous concevons des dispositifs utiles, sobres et évolutifs pour vos activités.
            </p>
            <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#F5F2EA] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31]">
              Planifier un rendez-vous →
            </Link>
            <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-3 text-[#D9C27B]">
              <span className="text-3xl leading-none">↖</span>
              <p className="rotate-[-3deg] font-[family-name:var(--font-source-serif)] text-lg italic">Échangeons autour de vos idées.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
