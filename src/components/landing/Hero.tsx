import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111A2E] pb-16 pt-32 text-white md:pb-20 md:pt-40 lg:h-[calc(100svh-74px)] lg:min-h-[580px] lg:max-h-[720px] lg:py-0">
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D6B24F]/10 blur-[120px]" />
      <div className="section-shell px-gutter relative z-10 lg:flex lg:h-full lg:items-center lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="section-kicker border-white/14 text-[#9ADDCB] lg:px-[13px] lg:py-2 lg:text-[10px]">
              ILOCAP · Studio digital
            </p>
            <h1 className="mt-6 max-w-2xl font-sora text-[2.55rem] leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.15rem]">
              Nous donnons forme à <span className="brand-gradient-text">vos ambitions digitales.</span>
            </h1>
            <p className="mt-6 max-w-lg font-manrope text-base leading-relaxed text-white/62 lg:text-[1.15rem]">
              Des solutions pensées pour vos métiers, utiles aujourd’hui et conçues pour évoluer avec vous.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?objet=devis" className="button-elegant button-home-primary inline-flex items-center justify-center px-8 font-manrope text-[11px] font-extrabold uppercase lg:min-h-[58px] lg:px-10 lg:text-xs">
                Parler de votre projet
              </Link>
              <Link href="/realisations" className="button-elegant button-home-secondary inline-flex items-center justify-center px-8 font-manrope text-[11px] font-extrabold uppercase lg:min-h-[58px] lg:px-10 lg:text-xs">
                Voir nos réalisations
              </Link>
            </div>
          </div>

          <div className="relative lg:scale-[1.1] xl:scale-[1.15]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[#17243B] shadow-[0_45px_120px_rgba(0,0,0,.35)]">
              <Image src="/hero-studio-digital.webp" alt="Studio digital premium illustrant le savoir-faire ILOCAP" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111A2E]/22 via-transparent to-[#D6B24F]/8" />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 flex items-center justify-between rounded-[14px] border border-white/10 bg-[#17243B]/90 px-5 py-4 backdrop-blur-xl md:left-10 md:right-10">
              <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-white/62">Stratégie · Design · Technologie</p>
              <span className="h-2.5 w-2.5 rounded-full bg-[#D6B24F] shadow-[0_0_18px_rgba(214,178,79,.72)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
