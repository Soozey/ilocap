import Link from "next/link";

const deliverySteps = ["Cadrage", "Conception", "Déploiement"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F1EC] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#073642] lg:block" />
      <div className="absolute left-[8%] top-36 h-72 w-72 rounded-full border border-[#B89A5A]/15" />
      <div className="absolute left-[13%] top-48 h-48 w-48 rounded-full border border-[#073642]/10" />

      <div className="section-shell px-gutter relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <div className="eyebrow-line" />
              <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#073642] md:text-xs">
                Transformation digitale · IA · plateformes métier
              </p>
            </div>

            <h1 className="font-sora text-[2.45rem] leading-[1.04] text-[#073642] sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              Transformons vos enjeux en solutions digitales <span className="text-[#B89A5A]">concrètes.</span>
            </h1>

            <p className="mt-7 max-w-2xl font-manrope text-base leading-relaxed text-[#073642]/72 md:text-xl">
              ILOCAP accompagne les institutions, les entreprises et les entrepreneurs, de la stratégie au déploiement, avec des solutions utiles, sécurisées et adaptées à leurs réalités.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?objet=devis"
                className="button-elegant inline-flex items-center justify-center bg-[#073642] px-7 text-center font-manrope text-[11px] font-bold uppercase text-white hover:bg-[#B89A5A]"
              >
                Demander une étude et un devis
              </Link>
              <Link
                href="https://calendly.com/candriatiana/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="button-elegant inline-flex items-center justify-center border border-[#B89A5A] bg-white/50 px-7 text-center font-manrope text-[11px] font-bold uppercase text-[#073642] hover:bg-[#B89A5A] hover:text-white"
              >
                Prendre rendez-vous
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#073642]/10 pt-6">
              {deliverySteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#B89A5A]/40 font-sora text-[10px] text-[#B89A5A]">
                    {index + 1}
                  </span>
                  <span className="font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-[#073642]/70">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="rounded-[18px] border border-[#B89A5A]/30 bg-[#073642] p-6 text-white shadow-[0_28px_80px_rgba(7,54,66,0.24)] md:p-8">
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.24em] text-[#B89A5A]">
                Deux parcours, un même engagement
              </p>
              <div className="mt-6 space-y-4">
                <Link href="/institutions" className="group block rounded-[12px] border border-white/12 bg-white/5 p-5 transition hover:border-[#B89A5A]/70 hover:bg-white/10">
                  <p className="font-sora text-lg uppercase">Entreprises & institutions</p>
                  <p className="mt-2 font-manrope text-sm leading-relaxed text-white/65">
                    Digitaliser les processus, interconnecter les systèmes et sécuriser les opérations.
                  </p>
                  <span className="mt-4 inline-flex font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89A5A]">
                    Explorer ce parcours →
                  </span>
                </Link>
                <Link href="/pme" className="group block rounded-[12px] border border-white/12 bg-white/5 p-5 transition hover:border-[#B89A5A]/70 hover:bg-white/10">
                  <p className="font-sora text-lg uppercase">PME & entrepreneurs</p>
                  <p className="mt-2 font-manrope text-sm leading-relaxed text-white/65">
                    Gagner du temps, mieux vendre et automatiser les opérations quotidiennes.
                  </p>
                  <span className="mt-4 inline-flex font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89A5A]">
                    Explorer ce parcours →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
