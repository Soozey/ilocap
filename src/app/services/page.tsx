import type { Metadata } from "next";
import Image from "next/image";
import ServiceSheet from "@/components/shared/ServiceSheet";
import DigitalFibres from "@/components/shared/DigitalFibres";
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
    "number": "01",
    "eyebrow": "Concevoir vos plateformes",
    "description": "Du besoin métier à une plateforme prête à développer.",
    "image": "/services/conception-cadrage.svg",
    "imageAlt": "Concevoir vos plateformes",
    "items": [
      {
        "title": "Sites web & applications",
        "text": "Des interfaces utiles, adaptées à vos utilisateurs."
      },
      {
        "title": "Portails & plateformes métier",
        "text": "Des outils sur mesure pour vos activités."
      },
      {
        "title": "Cadrage & parcours utilisateurs",
        "text": "Des besoins et priorités clairs avant le développement."
      }
    ]
  },
  {
    "number": "02",
    "eyebrow": "Automatiser vos opérations",
    "description": "Moins de tâches répétitives, des outils mieux connectés.",
    "image": "/services/automation-trackfuel.webp",
    "imageAlt": "Automatiser vos opérations",
    "items": [
      {
        "title": "Workflows & validations",
        "text": "Automatiser les relances et les circuits de validation."
      },
      {
        "title": "Données & intégrations",
        "text": "Faire circuler les informations entre vos outils."
      },
      {
        "title": "Tableaux de bord & reporting",
        "text": "Suivre vos opérations avec des indicateurs utiles."
      }
    ]
  },
  {
    "number": "03",
    "eyebrow": "Développer votre visibilité",
    "description": "Des images et des contenus qui mettent votre activité en valeur.",
    "image": "/services/creation-visuelle-greenvillage.png",
    "imageAlt": "Développer votre visibilité",
    "items": [
      {
        "title": "Traitement d’images & création",
        "text": "Retouches, visuels produits et supports de marque."
      },
      {
        "title": "Community management",
        "text": "Planifier, publier et animer vos réseaux sociaux."
      },
      {
        "title": "Contenus & acquisition",
        "text": "Des pages et des contenus pensés pour générer des contacts."
      }
    ]
  },
  {
    "number": "04",
    "eyebrow": "Accompagner vos équipes",
    "description": "Un appui régulier pour exploiter vos outils et soutenir votre activité.",
    "image": "/services/community-management.webp",
    "imageAlt": "Accompagner vos équipes",
    "items": [
      {
        "title": "Support & amélioration continue",
        "text": "Maintenir vos outils et les faire évoluer."
      },
      {
        "title": "BPO & back-office",
        "text": "Prendre en charge vos tâches administratives et commerciales."
      },
      {
        "title": "Formation & adoption",
        "text": "Former les équipes et faciliter les nouveaux usages."
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F2EA] text-[#171A18]">
        <section className="relative overflow-hidden px-5 pb-14 pt-32 md:px-8 md:pb-16 md:pt-36 lg:px-12">
          <div className="absolute inset-0 bg-[#F5F2EA]" />
          <DigitalFibres />
          <div className="relative mx-auto max-w-[1320px]">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#171A18]/68">Services</p>
            <div className="mt-4 grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <h1 className="max-w-4xl font-[family-name:var(--font-source-serif)] text-[2.65rem] font-semibold leading-[1] tracking-[-0.035em] text-[#171A18] sm:text-[3.5rem] lg:text-[4.25rem]">
                Ce que nous pouvons faire avec vous.
              </h1>
              <div className="lg:pb-1">
                <p className="max-w-xl font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#343A36] md:text-[18px] md:leading-8">
                  De l’idée au fonctionnement quotidien, ILOCAP réunit conseil, technologie, contenus et accompagnement autour d’un même objectif : faire avancer votre activité.
                </p>
                <Link href="/contact?objet=devis" className="mt-5 inline-flex min-h-[52px] items-center rounded-md bg-[#173C31] px-7 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-white transition hover:bg-[#102F27]">
                  Parler de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Nos quatre familles de services" className="mx-auto grid max-w-[1320px] gap-5 px-5 pb-16 md:grid-cols-2 md:px-8 lg:px-12">
          {serviceFamilies.map(family => (
            <ServiceSheet key={family.number} id={`service-${family.number}`} number={family.number} title={family.eyebrow} description={family.description}>
              <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg bg-white"><Image src={family.image} alt={family.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain p-2" /></div>
              <ul className="space-y-4">{family.items.map(item => <li key={item.title}><h3 className="font-semibold">{item.title}</h3><p className="mt-1 text-[15px] leading-6 text-[#343A36]">{item.text}</p></li>)}</ul>
              <Link href={`/contact?objet=devis&service=${family.number}`} className="mt-6 inline-flex min-h-11 items-center rounded-md bg-[#173C31] px-5 text-sm font-semibold text-white hover:bg-[#102F27]">Parlons de votre besoin</Link>
            </ServiceSheet>
          ))}
        </section>

        <section className="bg-[#FBF9F4] py-14 md:py-16">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-5 md:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:px-12">
            <div>
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#171A18]/68">Vous cherchez plutôt un produit déjà structuré ?</p>
              <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-source-serif)] text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.025em] text-[#171A18] md:text-[3rem]">
                Nos solutions partent d’un socle existant, puis s’adaptent à votre contexte.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md font-[family-name:var(--font-inter)] text-[16px] leading-7 text-[#3A403C]">
                AroZo, LAMINA, PATRIMONIA, TrackFuel 360, SIIRH et nos autres accélérateurs sont présentés séparément pour rendre le choix plus simple.
              </p>
              <Link href="/solutions" className="mt-6 inline-flex min-h-11 items-center rounded-md border border-[#171A18]/20 px-5 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:border-[#171A18]/45 hover:bg-white">
                Découvrir nos solutions
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#173C31] px-5 py-16 text-white md:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58">Un projet ?</p>
            <h2 className="mt-4 font-[family-name:var(--font-source-serif)] text-[2.4rem] font-semibold leading-none tracking-[-0.025em] md:text-[3.5rem]">Parlons de votre projet.</h2>
            <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-inter)] text-[16px] leading-7 text-white/78 md:text-[17px]">
              Nous pouvons partir d’un besoin précis, d’un processus à améliorer ou simplement d’un objectif métier à clarifier.
            </p>
            <a href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-[52px] items-center rounded-md bg-[#F5F2EA] px-8 font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#171A18] transition hover:bg-white">
              Planifier un rendez-vous
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
