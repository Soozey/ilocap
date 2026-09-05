export default function NewsStrip() {
  return (
    <section aria-label="Actualité ILOCAP" className="border-y border-white/8 bg-[#0D1729] text-white">
      <div className="section-shell px-gutter flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between md:py-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#78D9C5] shadow-[0_0_16px_rgba(120,217,197,.7)]" />
          <p className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#78D9C5]">Fil d’actualité</p>
        </div>

        <div className="flex flex-1 flex-col gap-1 sm:ml-8 sm:flex-row sm:items-baseline sm:gap-4">
          <p className="font-sora text-base tracking-[-0.02em] text-white md:text-lg">Mada Tech Arena</p>
          <p className="font-manrope text-xs leading-relaxed text-white/58 md:text-sm">Deux jours de compétition, d’ateliers et de rencontres pour les jeunes talents du numérique.</p>
        </div>

        <time dateTime="2026-11-20" className="w-fit rounded-full border border-[#78D9C5]/30 bg-[#78D9C5]/7 px-4 py-2 font-manrope text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#C9F2E7]">
          Save the date · 20–21 novembre 2026
        </time>
      </div>
    </section>
  );
}
