import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";

const figures = [
  { value: "24/7", label: "Assistance juridique" },
  { value: "< 3 min", label: "Première orientation" },
  { value: "SOS Droits", label: "Parcours d’urgence" },
  { value: "Annuaire", label: "Professionnels du droit" },
];

const journeys = [
  {
    number: "01",
    eyebrow: "Citoyens & familles",
    title: "Comprendre, agir et demander de l’aide.",
    description:
      "Face à une interpellation, une convocation, une audition ou une difficulté juridique, AroZo propose un parcours guidé pour qualifier la situation et identifier la prochaine action utile.",
    points: ["Accès direct au parcours SOS Droits", "Guides et réflexes adaptés à la situation", "Orientation vers un professionnel pertinent"],
    tone: "border-[#E9782A]/25 bg-[#FFF8F2]",
    accent: "text-[#C85D16]",
  },
  {
    number: "02",
    eyebrow: "Professionnels & organisations",
    title: "Structurer les dossiers et sécuriser les échanges.",
    description:
      "Avocats, cabinets, entreprises et acteurs institutionnels disposent d’un socle pour organiser les dossiers, partager les pièces et suivre les demandes dans un environnement maîtrisé.",
    points: ["Gestion et suivi des dossiers", "Échanges documentaires confidentiels", "Parcours dédiés aux cabinets et aux équipes RH"],
    tone: "border-[#0B8075]/20 bg-[#F0FBF9]",
    accent: "text-[#0B8075]",
  },
];

const modules = [
  {
    number: "01",
    title: "SOS & urgence citoyenne 24/7",
    description: "Qualifier l’urgence, guider les premières actions et faciliter une orientation rapide lorsque chaque minute compte.",
    tags: ["Alerte", "Premiers réflexes", "Orientation"],
  },
  {
    number: "02",
    title: "Gestion de dossiers & cabinets",
    description: "Centraliser les dossiers, les pièces, les échéances et les échanges dans un espace professionnel structuré.",
    tags: ["Dossiers", "Documents", "Suivi"],
  },
  {
    number: "03",
    title: "Base de connaissances & droits",
    description: "Rendre les droits, les démarches et les modèles pratiques plus lisibles et plus simples à mobiliser.",
    tags: ["Guides", "Démarches", "Modèles"],
  },
  {
    number: "04",
    title: "Gestion sociale & entreprises",
    description: "Accompagner les équipes RH sur le droit du travail, les contrats, la prévention et le traitement des situations sensibles.",
    tags: ["Droit social", "Contrats", "Prévention"],
  },
];

const steps = [
  { number: "01", title: "Comprendre", text: "Décrire simplement la situation et accéder aux informations essentielles." },
  { number: "02", title: "Qualifier", text: "Distinguer une demande d’information, une démarche ou une urgence." },
  { number: "03", title: "Orienter", text: "Identifier le bon parcours, le bon outil ou le professionnel adapté." },
  { number: "04", title: "Accompagner", text: "Conserver un suivi lisible jusqu’à la prochaine étape utile." },
];

const audiences = [
  ["Citoyens & familles", "Comprendre leurs droits, préparer une démarche ou trouver rapidement une orientation."],
  ["Avocats & cabinets", "Recevoir des demandes mieux qualifiées et organiser les échanges avec leurs clients."],
  ["Entreprises & équipes RH", "Prévenir les risques et structurer le traitement des situations sociales."],
  ["Institutions & associations", "Faciliter l’accès au droit et améliorer l’orientation des publics accompagnés."],
];

export default function ArozoPresentation() {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[#F5F8FA] text-[#0F1C2C]">
        <section className="relative bg-[#0F1C2C] px-gutter pb-20 pt-32 text-white md:pb-28 md:pt-40">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_18%_28%,rgba(24,168,155,.28),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(233,120,42,.16),transparent_22%)]" />
          <div className="section-shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
            <div>
              <Link href="/services#accelerateurs" className="inline-flex items-center gap-3 font-manrope text-xs font-semibold uppercase tracking-[0.16em] text-white/55 transition hover:text-white">
                <span aria-hidden="true">←</span> Solutions & accélérateurs
              </Link>

              <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#18A89B]/35 bg-[#18A89B]/10 px-4 py-2 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#75E0D6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#75E0D6]" /> LegalTech civique · Madagascar
              </div>

              <h1 className="mt-7 max-w-3xl font-sora text-4xl leading-[1.03] tracking-[-0.045em] md:text-6xl lg:text-[4.35rem]">
                L’accès au droit, pensé pour <span className="text-[#75E0D6]">chaque situation.</span>
              </h1>
              <p className="mt-6 font-sora text-xl leading-relaxed text-[#F0B47B] md:text-2xl">Le droit pour tous, la protection pour chacun.</p>
              <p className="mt-6 max-w-2xl font-manrope text-base leading-relaxed text-white/68 md:text-lg">
                AroZo réunit information juridique, parcours d’urgence, mise en relation et outils professionnels dans une expérience claire, accessible et sécurisée.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="#parcours" className="button-elegant inline-flex items-center justify-center bg-[#18A89B] px-7 font-manrope text-xs font-extrabold uppercase text-[#0F1C2C] hover:bg-[#75E0D6]">
                  Découvrir les parcours
                </Link>
                <Link href="/contact?objet=demo&solution=arozo" className="button-elegant inline-flex items-center justify-center border border-white/25 bg-white/[0.04] px-7 font-manrope text-xs font-extrabold uppercase text-white hover:border-white/55 hover:bg-white/10">
                  Demander une démonstration
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[650px] pb-8 pt-4">
              <div className="absolute left-[8%] top-[12%] h-[68%] w-[84%] rounded-[32px] border border-[#75E0D6]/15 bg-[#14263A] shadow-[0_45px_120px_rgba(0,0,0,.35)]" />
              <div className="relative ml-auto mr-[8%] w-[46%] rotate-[3deg] overflow-hidden rounded-[28px] border-[7px] border-[#263548] bg-white shadow-[0_35px_90px_rgba(0,0,0,.45)]">
                <div className="relative aspect-[9/16] bg-[#EDF5FF]">
                  <Image src="/solutions/arozo-sos-droits.png" alt="Parcours d’assistance juridique et SOS Droits AroZo" fill priority sizes="(max-width: 1024px) 46vw, 300px" className="object-cover object-top" />
                </div>
              </div>
              <div className="absolute bottom-0 left-[3%] w-[42%] -rotate-[4deg] overflow-hidden rounded-[24px] border-[6px] border-[#DCE8EC] bg-white shadow-[0_28px_70px_rgba(0,0,0,.38)]">
                <div className="relative aspect-[9/14] bg-[#EDF5FF]">
                  <Image src="/solutions/arozo-annuaire.png" alt="Annuaire des professionnels du droit AroZo" fill sizes="(max-width: 1024px) 42vw, 270px" className="object-cover object-top" />
                </div>
              </div>
              <div className="absolute bottom-10 right-0 flex w-[58%] items-center justify-center rounded-[15px] border border-white/15 bg-[#F1F5F6]/95 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,.25)] backdrop-blur-xl">
                <Image src="/solutions/logo-arozo.png" alt="Logo AroZo" width={512} height={148} className="h-auto max-h-16 w-auto max-w-full object-contain" />
              </div>
              <div className="absolute right-[4%] top-0 rounded-full bg-[#E9782A] px-4 py-2 font-manrope text-xs font-extrabold uppercase tracking-[0.15em] text-white shadow-lg">SOS Droits</div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#0F1C2C]/8 bg-white">
          <div className="section-shell grid grid-cols-2 px-gutter py-9 md:grid-cols-4 md:py-12">
            {figures.map((item, index) => (
              <div key={item.label} className={`px-4 py-3 md:px-8 ${index > 0 ? "border-l border-[#0F1C2C]/10" : ""}`}>
                <p className="font-sora text-2xl leading-none text-[#0B8075] md:text-3xl">{item.value}</p>
                <p className="mt-3 font-manrope text-sm leading-snug text-[#42536A]/68">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="parcours" className="section-shell scroll-mt-24 px-gutter py-20 md:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
            <div>
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B8075]">Deux portes d’entrée</p>
              <h2 className="mt-5 max-w-xl font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">Une plateforme, deux façons d’avancer.</h2>
              <p className="mt-6 max-w-lg font-manrope text-base leading-relaxed text-[#42536A]/70">La première répond aux besoins immédiats des citoyens. La seconde structure le travail des professionnels et des organisations.</p>
            </div>
            <div className="grid gap-5">
              {journeys.map((journey) => (
                <article key={journey.number} className={`rounded-[22px] border p-7 md:p-9 ${journey.tone}`}>
                  <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                    <div>
                      <p className={`font-manrope text-xs font-extrabold uppercase tracking-[0.19em] ${journey.accent}`}>{journey.eyebrow}</p>
                      <h3 className="mt-4 max-w-2xl font-sora text-2xl leading-tight tracking-[-0.03em] md:text-3xl">{journey.title}</h3>
                    </div>
                    <span className={`font-sora text-5xl leading-none opacity-30 ${journey.accent}`}>{journey.number}</span>
                  </div>
                  <p className="mt-6 max-w-3xl font-manrope text-base leading-relaxed text-[#42536A]/75">{journey.description}</p>
                  <div className="mt-7 grid gap-3 md:grid-cols-3">
                    {journey.points.map((point) => <p key={point} className="rounded-[12px] border border-[#0F1C2C]/8 bg-white/75 px-4 py-3 font-manrope text-sm font-semibold leading-snug text-[#27384D]">{point}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EAF5F5] py-20 md:py-28">
          <div className="section-shell px-gutter">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B8075]">Architecture fonctionnelle</p>
                <h2 className="mt-5 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">Quatre modules pour relier le droit à l’action.</h2>
              </div>
              <p className="max-w-md font-manrope text-base leading-relaxed text-[#42536A]/70">Chaque module peut être configuré selon les publics, les responsabilités et le niveau d’accompagnement recherché.</p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {modules.map((module, index) => (
                <article key={module.number} className="group relative overflow-hidden rounded-[22px] border border-[#0F1C2C]/9 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B8075]/30 hover:shadow-[0_24px_65px_rgba(15,28,44,.10)] md:p-9">
                  <div className={`absolute inset-y-0 left-0 w-1 ${index === 0 ? "bg-[#E9782A]" : "bg-[#18A89B]"}`} />
                  <div className="flex items-start justify-between gap-6">
                    <p className={`font-manrope text-xs font-extrabold uppercase tracking-[0.18em] ${index === 0 ? "text-[#C85D16]" : "text-[#0B8075]"}`}>Module {module.number}</p>
                    <span className="font-sora text-5xl leading-none text-[#0F1C2C]/8">{module.number}</span>
                  </div>
                  <h3 className="mt-5 max-w-xl font-sora text-2xl leading-tight tracking-[-0.03em]">{module.title}</h3>
                  <p className="mt-5 max-w-2xl font-manrope text-base leading-relaxed text-[#42536A]/70">{module.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {module.tags.map((tag) => <span key={tag} className="rounded-full border border-[#0F1C2C]/9 bg-[#F5F8FA] px-3 py-2 font-manrope text-xs font-bold text-[#42536A]/75">{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0F1C2C] py-20 text-white md:py-28">
          <div className="section-shell px-gutter">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#75E0D6]">Un parcours cohérent</p>
              <h2 className="mt-5 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">Réduire la distance entre la question et la prochaine action.</h2>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <article key={step.number} className="relative rounded-[18px] border border-white/12 bg-white/[0.045] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-sora text-3xl text-[#75E0D6]">{step.number}</span>
                    {index < steps.length - 1 && <span aria-hidden="true" className="hidden text-xl text-white/25 lg:block">→</span>}
                  </div>
                  <h3 className="mt-8 font-sora text-xl">{step.title}</h3>
                  <p className="mt-4 font-manrope text-sm leading-relaxed text-white/58">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="section-shell grid gap-12 px-gutter lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-32">
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B8075]">L’expérience AroZo</p>
              <h2 className="mt-5 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">Deux interfaces, un même niveau de clarté.</h2>
              <p className="mt-6 max-w-lg font-manrope text-base leading-relaxed text-[#42536A]/70">Le parcours SOS guide une situation urgente. L’annuaire aide à trouver le professionnel correspondant au besoin, à la spécialité et à la localisation.</p>
              <div className="mt-8 rounded-[16px] border border-[#0B8075]/15 bg-[#EAF5F5] p-5">
                <p className="font-manrope text-sm font-semibold leading-relaxed text-[#27384D]">La fiche présente une vision fonctionnelle de la solution. Les modalités de prise en charge et de déploiement sont définies selon le contexte du projet.</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="overflow-hidden rounded-[24px] border border-[#0F1C2C]/10 bg-[#F5F8FA] p-4 shadow-[0_24px_70px_rgba(15,28,44,.10)]">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] bg-[#EDF5FF]">
                  <Image src="/solutions/arozo-sos-droits.png" alt="Interface du parcours SOS Droits AroZo" fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover object-top" />
                </div>
                <div className="px-2 pb-2 pt-6"><p className="font-manrope text-xs font-extrabold uppercase tracking-[0.17em] text-[#C85D16]">Parcours 01</p><h3 className="mt-3 font-sora text-xl">Assistance & SOS Droits</h3></div>
              </article>
              <article className="mt-0 overflow-hidden rounded-[24px] border border-[#0F1C2C]/10 bg-[#F5F8FA] p-4 shadow-[0_24px_70px_rgba(15,28,44,.10)] sm:mt-14">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] bg-[#EDF5FF]">
                  <Image src="/solutions/arozo-annuaire.png" alt="Interface de l’annuaire des professionnels AroZo" fill sizes="(max-width: 640px) 100vw, 35vw" className="object-cover object-top" />
                </div>
                <div className="px-2 pb-2 pt-6"><p className="font-manrope text-xs font-extrabold uppercase tracking-[0.17em] text-[#0B8075]">Parcours 02</p><h3 className="mt-3 font-sora text-xl">Annuaire des professionnels</h3></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B8075]">Publics concernés</p>
              <h2 className="mt-5 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">Conçue pour l’écosystème de l’accès au droit.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map(([title, description], index) => (
                <article key={title} className="rounded-[18px] border border-[#0F1C2C]/9 bg-white p-6 md:p-7">
                  <p className="font-sora text-sm text-[#0B8075]">0{index + 1}</p>
                  <h3 className="mt-5 font-sora text-lg leading-tight">{title}</h3>
                  <p className="mt-3 font-manrope text-sm leading-relaxed text-[#42536A]/68">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#EAF5F5] py-20 md:py-24">
          <div className="section-shell px-gutter">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
              <div>
                <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B8075]">Confidentialité & confiance</p>
                <h2 className="mt-5 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-5xl">La confiance n’est pas une option fonctionnelle.</h2>
                <p className="mt-6 max-w-2xl font-manrope text-base leading-relaxed text-[#42536A]/70">Les droits d’accès, le consentement, la protection des échanges et la traçabilité doivent être pensés dès l’architecture de la solution.</p>
              </div>
              <div className="grid gap-3">
                {[
                  ["Confidentialité", "Protéger les échanges, les documents et les informations personnelles partagées."],
                  ["Consentement clair", "Maîtriser les informations transmises avant toute orientation ou mise en relation."],
                  ["Traçabilité", "Conserver un historique lisible des demandes, des décisions et des étapes importantes."],
                ].map(([title, text], index) => (
                  <article key={title} className="flex gap-5 rounded-[16px] border border-[#0F1C2C]/8 bg-white p-5 md:p-6">
                    <span className="font-sora text-xl text-[#0B8075]">0{index + 1}</span>
                    <div><h3 className="font-sora text-lg">{title}</h3><p className="mt-2 font-manrope text-sm leading-relaxed text-[#42536A]/68">{text}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-gutter py-20 md:py-28">
          <div className="section-shell overflow-hidden rounded-[26px] bg-[#0F1C2C] text-white shadow-[0_32px_90px_rgba(15,28,44,.18)]">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
              <div>
                <p className="font-manrope text-xs font-extrabold uppercase tracking-[0.2em] text-[#75E0D6]">Passons au concret</p>
                <h2 className="mt-5 max-w-3xl font-sora text-3xl leading-tight tracking-[-0.035em] md:text-5xl">Étudions le parcours AroZo adapté à votre organisation.</h2>
                <p className="mt-5 max-w-2xl font-manrope text-base leading-relaxed text-white/62">Une démonstration permet de préciser les publics, les responsabilités, les intégrations et le mode de déploiement.</p>
              </div>
              <Link href="/contact?objet=demo&solution=arozo" className="button-elegant inline-flex items-center justify-center bg-[#18A89B] px-7 font-manrope text-xs font-extrabold uppercase text-[#0F1C2C] hover:bg-[#75E0D6]">Planifier une démonstration</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
