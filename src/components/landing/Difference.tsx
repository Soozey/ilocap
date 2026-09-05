import Link from "next/link";

const questions = [
  "Réduit-elle réellement vos coûts ?",
  "Simplifie-t-elle vos processus ?",
  "Peut-elle évoluer avec vous ?",
  "Sera-t-elle adoptée par vos équipes ?",
];

export default function Difference() {
  return (
    <section className="bg-[#111A2E] py-20 text-white md:py-28">
      <div className="section-shell px-gutter grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <div>
          <p className="section-kicker border-white/14 text-[#D6B24F]">Notre différence</p>
          <h2 className="mt-5 max-w-xl font-sora text-4xl leading-[1.06] tracking-[-0.04em] md:text-6xl">
            Le résultat compte. La manière d’y arriver aussi.
          </h2>
        </div>

        <div className="lg:pt-8">
          <p className="max-w-2xl font-manrope text-base leading-relaxed text-white/65 md:text-lg">
            Beaucoup d’équipes peuvent construire une solution. Notre rôle est de nous assurer qu’elle crée une amélioration concrète et durable pour votre organisation.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {questions.map((question, index) => (
              <div key={question} className="group flex min-h-20 items-center gap-4 rounded-[14px] border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:border-[#D6B24F]/40 hover:bg-white/[0.045]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[#D6B24F]/30 bg-[#D6B24F]/8 font-manrope text-[9px] font-extrabold text-[#D6B24F]">0{index + 1}</span>
                <p className="font-manrope text-sm font-semibold text-white/88">{question}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 rounded-r-[14px] border-l-2 border-[#D6B24F] bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-manrope text-sm leading-relaxed text-white/58">L’IA accélère la production. Le cadrage, les choix et la responsabilité restent humains.</p>
            <Link href="/insights/ia-et-expertise" className="shrink-0 font-manrope text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#D6B24F]">Lire notre analyse →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
