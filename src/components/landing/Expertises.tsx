import Image from "next/image";
import Link from "next/link";

const recurringServices = [
  {
    number: "01",
    title: "Création visuelle",
    description: "Traitement d’images, contenus de marque et supports digitaux soignés.",
    tag: "Images · contenus",
    image: "/services/creation-visuelle-greenvillage.png",
    alt: "Sélection de créations visuelles et de contenus de marque",
    position: "object-center",
  },
  {
    number: "02",
    title: "Community management",
    description: "Planification, création et animation régulière de vos communautés.",
    tag: "Présence · engagement",
    image: "/services/community-management.webp",
    alt: "Communication digitale ILOCAP lors du symposium de la cybersécurité",
    position: "object-center",
  },
  {
    number: "03",
    title: "Automatisation & support",
    description: "Workflows, reporting et amélioration continue de vos opérations.",
    tag: "Processus · reporting",
    image: "/services/automation-trackfuel.webp",
    alt: "Tableau de bord métier TrackFuel 360",
    position: "object-top",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Conception de plateformes",
    description: "Applications, portails et plateformes pensés autour de vos usages réels.",
  },
  {
    number: "02",
    title: "Processus & workflows",
    description: "Validations, échanges et tâches répétitives rendus plus simples et plus fluides.",
  },
  {
    number: "03",
    title: "Outils connectés & évolutifs",
    description: "Données, intégrations et architecture conçues pour grandir avec votre activité.",
  },
];

export default function Expertises() {
  return (
    <>
      <section id="expertise" className="bg-[#EBFFF5] py-20 md:py-28">
        <div className="section-shell px-gutter">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker w-fit border-[#18845B]/20 text-[#18845B]">Expertise phare</p>
              <p className="mt-5 max-w-md font-manrope text-sm leading-relaxed text-[#334158]/62">Une vision métier traduite en expérience, en technologie et en résultats concrets.</p>
            </div>
            <p className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#111A2E]/35">Stratégie · Design · Technologie</p>
          </div>

          <article className="relative mt-10 overflow-hidden rounded-[24px] border border-[#111A2E]/10 bg-[#111A2E] px-6 py-8 text-white shadow-[0_30px_90px_rgba(17,26,46,.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#8FD8D0]/55 to-transparent" />

            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#78D9C5]">Plateformes & automatisation</p>
                <h2 className="mt-4 font-sora text-3xl leading-[1.08] tracking-[-0.04em] md:text-[42px]">
                  Plateformes digitales & <span className="text-[#A9E2D4]">automatisation métier.</span>
                </h2>
                <p className="mt-5 max-w-2xl font-manrope text-sm leading-relaxed text-white/62 md:text-base">
                  De l’idée au déploiement, nous simplifions vos processus et créons des outils réellement utiles.
                </p>
              </div>

              <Link href="/services" className="button-elegant button-home-secondary inline-flex min-h-[54px] w-fit items-center justify-center gap-5 px-7 font-manrope text-[11px] font-extrabold uppercase">
                Voir cette expertise <span aria-hidden="true" className="text-base">→</span>
              </Link>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {capabilities.map((capability) => (
                <div key={capability.number} className="group relative min-h-[220px] overflow-hidden rounded-[14px] border border-white/12 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#78D9C5]/42 hover:bg-white/[0.045] md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-manrope text-[10px] font-extrabold tracking-[0.18em] text-[#78D9C5]">{capability.number}</span>
                    <span className="h-2 w-2 rounded-full border border-[#C8B46E]/70 bg-[#C8B46E]/20 transition duration-300 group-hover:bg-[#C8B46E]/80" />
                  </div>
                  <div className="mt-7 h-px w-10 bg-gradient-to-r from-[#78D9C5] to-[#C8B46E]" />
                  <h3 className="mt-5 max-w-xs font-sora text-xl leading-tight tracking-[-0.025em] text-white md:text-[22px]">{capability.title}</h3>
                  <p className="mt-4 max-w-sm font-manrope text-sm leading-relaxed text-white/55">{capability.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="services-continus" className="bg-white py-20 md:py-24">
        <div className="section-shell px-gutter">
          <div className="grid gap-6 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker border-[#18845B]/20 text-[#18845B]">Services digitaux continus</p>
              <h2 className="mt-5 font-sora text-3xl leading-[1.06] tracking-[-0.04em] text-[#111A2E] md:text-5xl">
                Votre équipe digitale,<span className="block text-[#18845B]">au quotidien.</span>
              </h2>
            </div>
            <p className="max-w-md font-manrope text-sm leading-relaxed text-[#334158]/65 md:justify-self-end md:text-right">Des interventions régulières, calibrées selon vos priorités et votre rythme.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {recurringServices.map((service) => (
              <article key={service.number} className="group overflow-hidden rounded-[18px] border border-[#111A2E]/10 bg-[#FBFCFC] transition duration-300 hover:-translate-y-1 hover:border-[#18845B]/28 hover:shadow-[0_24px_60px_rgba(17,26,46,.1)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF1EF]">
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${service.position} transition duration-700 group-hover:scale-[1.035]`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111A2E]/36 via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#111A2E]/72 px-3 py-1.5 font-manrope text-[9px] font-extrabold tracking-[0.18em] text-white backdrop-blur-lg">{service.number}</span>
                </div>

                <div className="p-6 md:p-7">
                  <p className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#8A6A20]">{service.tag}</p>
                  <h3 className="mt-3 font-sora text-xl leading-tight tracking-[-0.025em] text-[#111A2E] md:text-2xl">{service.title}</h3>
                  <div className="mt-5 h-px w-10 bg-gradient-to-r from-[#18845B] to-[#C39C3D]" />
                  <p className="mt-5 max-w-sm font-manrope text-sm leading-relaxed text-[#334158]/68">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
