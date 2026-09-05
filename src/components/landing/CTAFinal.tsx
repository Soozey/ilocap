import Link from "next/link";

export default function CTAFinal() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#111A2E] py-20 text-white md:py-28">
      <div className="absolute left-1/2 top-full h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#267E82]/24 blur-[110px]" />
      <div className="section-shell px-gutter relative z-10 text-center">
        <p className="section-kicker border-white/14 text-[#78D9C5]">Construisons quelque chose de remarquable</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-sora text-4xl leading-[1.08] tracking-[-0.04em] text-white md:text-6xl">Votre prochain projet mérite plus qu’un simple prestataire.</h2>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact?objet=devis" className="button-elegant button-home-primary inline-flex min-h-[56px] items-center justify-center gap-4 px-9 font-manrope text-[11px] font-extrabold uppercase">Demander un devis <span aria-hidden="true" className="text-base leading-none">→</span></Link>
          <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="button-elegant button-home-secondary inline-flex min-h-[56px] items-center justify-center gap-4 px-9 font-manrope text-[11px] font-extrabold uppercase">Planifier un rendez-vous <span aria-hidden="true" className="text-base leading-none">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
