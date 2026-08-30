import Link from "next/link";

const expertises = [
  {
    number: "01",
    title: "Transformation & plateformes métier",
    description: "Digitalisez vos processus avec des plateformes web et mobiles conçues autour de vos règles métier, de vos utilisateurs et de vos exigences de sécurité.",
    items: ["Audit et feuille de route", "Applications et portails métier", "Interopérabilité et données"],
  },
  {
    number: "02",
    title: "IA & automatisation opérationnelle",
    description: "Réduisez les tâches répétitives, accélérez le traitement de l’information et améliorez la qualité de service grâce à une automatisation maîtrisée.",
    items: ["Assistants intelligents", "Automatisation des processus", "Pilotage par la donnée"],
  },
  {
    number: "03",
    title: "Fintech & services transactionnels",
    description: "Concevez des parcours de paiement et des services financiers digitaux fiables, intégrés aux usages locaux et aux systèmes existants.",
    items: ["Paiement et mobile money", "Wallets et services financiers", "Intégration et sécurisation"],
  },
];

export default function Expertises() {
  return (
    <section id="solutions" className="section-pad bg-white">
      <div className="section-shell px-gutter">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <div className="eyebrow-line" />
              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">
                Nos expertises principales
              </span>
            </div>
            <h2 className="font-sora text-3xl leading-tight text-[#073642] md:text-5xl">
              Trois leviers pour produire des résultats durables.
            </h2>
            <p className="mt-6 max-w-lg font-manrope text-base leading-relaxed text-[#073642]/65">
              Nous mobilisons uniquement les compétences utiles à votre projet, de la définition du besoin à l’accompagnement des équipes.
            </p>
            <Link href="/services" className="mt-8 inline-flex font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#073642] underline decoration-[#B89A5A] decoration-2 underline-offset-8">
              Voir toutes nos solutions →
            </Link>
          </div>

          <div className="grid gap-4">
            {expertises.map((expertise) => (
              <article key={expertise.number} className="grid gap-5 rounded-[14px] border border-[#073642]/10 bg-[#F3F1EC] p-6 md:grid-cols-[70px_1fr] md:p-8">
                <div className="font-sora text-3xl text-[#B89A5A]">{expertise.number}</div>
                <div>
                  <h3 className="font-sora text-xl uppercase leading-tight text-[#073642] md:text-2xl">{expertise.title}</h3>
                  <p className="mt-4 font-manrope text-sm leading-relaxed text-[#073642]/65 md:text-base">{expertise.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {expertise.items.map((item) => (
                      <span key={item} className="rounded-full border border-[#073642]/12 bg-white px-3 py-2 font-manrope text-[10px] font-semibold uppercase tracking-[0.08em] text-[#073642]/72">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
