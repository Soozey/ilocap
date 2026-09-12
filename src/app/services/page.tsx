import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";

export const metadata: Metadata = {
  title: "Services digitaux | ILOCAP",
  description:
    "Conception de plateformes, automatisation, présence digitale, contenus et accompagnement opérationnel pour entreprises et institutions.",
  alternates: { canonical: "/services" },
};

const serviceFamilies = [
  {
    number: "01",
    eyebrow: "Concevoir · structurer",
    title: "Transformer un besoin métier en solution claire.",
    description:
      "Nous partons des usages réels, des contraintes et des objectifs pour concevoir un dispositif utile avant de choisir la technologie.",
    image: "/realisations/trackfuel-dashboard.png",
    imageAlt: "Tableau de bord métier TrackFuel 360 conçu par ILOCAP",
    background: "bg-[#FBF9F4]",
    items: [
      {
        title: "Conception de plateformes",
        text: "Applications, portails et plateformes pensés autour de vos usages réels.",
      },
      {
        title: "Cadrage fonctionnel & parcours",
        text: "Besoins, priorités, règles métier et parcours utilisateurs structurés avant la mise en œuvre.",
      },
      {
        title: "Conseil & structuration",
        text: "Une feuille de route lisible pour faire avancer le projet, arbitrer et préparer son évolution.",
      },
    ],
  },
  {
    number: "02",
    eyebrow: "Automatiser · connecter",
    title: "Des processus plus fluides et des outils qui travaillent ensemble.",
    description:
      "Nous simplifions les circuits, réduisons les tâches répétitives et connectons les données pour rendre les opérations plus lisibles et plus efficaces.",
    image: "/services/automation-trackfuel.webp",
    imageAlt: "Automatisation et pilotage des processus avec ILOCAP",
    background: "bg-[#EEF2E7]",
    items: [
      {
        title: "Processus & workflows",
        text: "Validations, échanges et tâches répétitives rendus plus simples et plus fluides.",
      },
      {
        title: "Outils connectés & évolutifs",
        text: "Données, intégrations et architecture conçues pour grandir avec votre activité.",
      },
      {
        title: "Automatisation & reporting",
        text: "Déclenchements, alertes, tableaux de bord et suivi opérationnel pour mieux piloter l’activité.",
      },
      {
        title: "Données & intégrations",
        text: "Des échanges structurés avec vos outils existants, API, plateformes métier et systèmes tiers.",
      },
    ],
  },
  {
    number: "03",
    eyebrow: "Visibilité · engagement",
    title: "Une présence digitale qui reste utile, cohérente et active.",
    description:
      "Nous construisons les supports et les contenus qui rendent une activité plus visible, plus compréhensible et plus régulière dans le temps.",
    image: "/services/creation-visuelle-greenvillage.png",
    imageAlt: "Création visuelle et traitement d’images réalisés par ILOCAP",
    background: "bg-[#F5F2EA]",
    items: [
      {
        title: "Création visuelle",
        text: "Traitement d’images, contenus de marque et supports digitaux soignés.",
      },
      {
        title: "Community management",
        text: "Planification, création et animation régulière de vos communautés.",
      },
      {
        title: "Sites, contenus & acquisition",
        text: "Sites web, landing pages, contenus éditoriaux et dispositifs pensés pour soutenir vos objectifs commerciaux.",
      },
    ],
  },
  {
    number: "04",
    eyebrow: "Accompagner · faire évoluer",
    title: "Votre équipe digitale, au quotidien.",
    description:
      "Un projet ne s’arrête pas à sa mise en ligne. Nous pouvons rester à vos côtés pour exploiter, améliorer, documenter et faire évoluer le dispositif.",
    image: "/services/community-management.webp",
    imageAlt: "Communication digitale et accompagnement ILOCAP lors du symposium de la cybersécurité",
    background: "bg-[#EDE7DA]",
    items: [
      {
        title: "Automatisation & support",
        text: "Workflows, reporting, assistance et amélioration continue de vos opérations.",
      },
      {
        title: "BPO & back-office",
        text: "Des activités opérationnelles prises en charge avec des processus structurés et des indicateurs de suivi.",
      },
      {
        title: "Formation & adoption",
        text: "Documentation, formation et accompagnement des équipes pour ancrer les nouveaux usages.",
      },
      {
        title: "Automatisation commerciale",
        text: "Qualification, relances, suivi et assistance pour renforcer la capacité commerciale sans alourdir l’organisation.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F2EA] text-[#173C31]">
        <section className="relative overflow-hidden px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44 lg:px-12">
          <div className="absolute inset-0 bg-[#F5F2EA]" />
          <div className="absolute inset-0 opacity-[0.1]">
            <Image src="/abstract-wave.png" alt="" fill priority className="object-cover" />
          </div>
          <div className="relative mx-auto max-w-[1320px]">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#173C31]/55">
              Services
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <h1 className="max-w-4xl font-[family-name:var(--font-source-serif)] text-[3rem] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-[5rem]">
                Ce que nous pouvons faire avec vous.
              </h1>
              <div className="lg:pb-2">
                <p className="max-w-xl font-[family-name:var(--font-inter)] text-base leading-7 text-[#173C31]/68 md:text-lg">
                  De l’idée au fonctionnement quotidien, ILOCAP réunit conseil, technologie, contenus et accompagnement autour d’un même objectif : faire avancer votre activité.
                </p>
                <Link
                  href="/contact?objet=devis"
                  className="mt-6 inline-flex min-h-12 items-center rounded-md bg-[#173C31] px-6 font-[family-name:var(--font-inter)] text-sm font-semibold text-white transition hover:bg-[#245445]"
                >
                  Parler de votre projet →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#173C31]/10 bg-[#FBF9F4]">
          <div className="mx-auto grid max-w-[1320px] divide-y divide-[#173C31]/10 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-8 lg:px-12">
            {serviceFamilies.map((family) => (
              <a key={family.number} href={`#service-${family.number}`} className="group py-6 md:px-5 md:py-7 first:md:pl-0 last:md:pr-0">
                <span className="font-[family-name:var(--font-inter)] text-[10px] font-semibold tracking-[0.18em] text-[#B89A5A]">{family.number}</span>
                <p className="mt-2 font-[family-name:var(--font-source-serif)] text-lg font-semibold leading-tight transition group-hover:text-[#6E5A24]">{family.eyebrow}</p>
              </a>
            ))}
          </div>
        </section>

        {serviceFamilies.map((family, familyIndex) => (
          <section id={`service-${family.number}`} key={family.number} className={`${family.background} scroll-mt-20 py-20 md:py-28`}>
            <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:px-12">
              <div className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${familyIndex % 2 === 1 ? "" : ""}`}>
                <div className={familyIndex % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold tracking-[0.2em] text-[#B89A5A]">{family.number}</span>
                    <span className="h-px w-10 bg-[#B89A5A]/70" />
                    <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#173C31]/55">{family.eyebrow}</p>
                  </div>
                  <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.02] tracking-[-0.025em] md:text-6xl">
                    {family.title}
                  </h2>
                  <p className="mt-6 max-w-xl font-[family-name:var(--font-inter)] text-base leading-7 text-[#173C31]/68">
                    {family.description}
                  </p>

                  <div className="mt-9 border-t border-[#173C31]/12">
                    {family.items.map((item, index) => (
                      <article key={item.title} className="grid gap-2 border-b border-[#173C31]/12 py-5 sm:grid-cols-[36px_1fr]">
                        <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold text-[#173C31]/38">0{index + 1}</span>
                        <div>
                          <h3 className="font-[family-name:var(--font-source-serif)] text-xl font-semibold md:text-2xl">{item.title}</h3>
                          <p className="mt-2 max-w-xl font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65">{item.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={`relative min-h-[360px] overflow-hidden rounded-[20px] border border-[#173C31]/10 bg-white md:min-h-[520px] ${familyIndex % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={family.image}
                    alt={family.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C31]/18 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-[#FBF9F4] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-5 md:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-12">
            <div>
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#173C31]/50">
                Vous cherchez plutôt un produit déjà structuré ?
              </p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-[1.03] tracking-[-0.025em] md:text-5xl">
                Nos solutions partent d’un socle existant, puis s’adaptent à votre contexte.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md font-[family-name:var(--font-inter)] text-sm leading-6 text-[#173C31]/65 md:text-base">
                AroZo, LAMINA, PATRIMONIA, TrackFuel 360, SIIRH et nos autres accélérateurs sont présentés séparément pour rendre le choix plus simple.
              </p>
              <Link
                href="/solutions"
                className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#173C31]/25 px-5 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31] transition hover:bg-[#173C31] hover:text-white"
              >
                Découvrir nos solutions →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#173C31] px-5 py-20 text-white md:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">Un projet ?</p>
            <h2 className="mt-4 font-[family-name:var(--font-source-serif)] text-4xl font-semibold leading-none tracking-[-0.025em] md:text-6xl">
              Parlons de votre projet.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-base leading-7 text-white/68">
              Nous pouvons partir d’un besoin précis, d’un processus à améliorer ou simplement d’un objectif métier à clarifier.
            </p>
            <a
              href="https://calendly.com/candriatiana/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-md bg-[#F5F2EA] px-7 font-[family-name:var(--font-inter)] text-sm font-semibold text-[#173C31]"
            >
              Planifier un rendez-vous →
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
