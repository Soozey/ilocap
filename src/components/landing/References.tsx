import Image from "next/image";
import Link from "next/link";

const cases = [
  { title: "TrackFuel 360", category: "Plateforme métier", image: "/realisations/trackfuel-dashboard.png", alt: "Tableau de bord TrackFuel 360" },
  { title: "Primi", category: "Marketplace", image: "/realisations/primi-marketplace.png", alt: "Interface de la marketplace Primi" },
  { title: "EspaMada", category: "Présence digitale", image: "/realisations/espamada.png", alt: "Expérience digitale EspaMada" },
];

const logos = [
  { src: "/references/logo-cirt-transparent.png", alt: "CIRT Madagascar", tone: "light" },
  { src: "/references/logo-espamada-transparent.png", alt: "EspaMada", tone: "light" },
  { src: "/references/logo-greenvillage-transparent.png", alt: "Green Village", tone: "light" },
  { src: "/references/logo-ymagoo-transparent.png", alt: "Ymagoo Project", tone: "light" },
  { src: "/references/logo-yunka-transparent.png", alt: "Yunka Retreat", tone: "light" },
  { src: "/references/logo-andcorp-transparent.png", alt: "Andcorp", tone: "dark" },
  { src: "/references/logo-ejacos-transparent.png", alt: "EJACOS Market", tone: "light" },
];

export default function References() {
  return (
    <section id="realisations" className="bg-white py-20 md:py-28">
      <div className="section-shell px-gutter">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker border-[#18845B]/20 text-[#18845B]">Travaux sélectionnés</p>
            <h2 className="mt-5 font-sora text-4xl tracking-[-0.04em] text-[#111A2E] md:text-6xl">La qualité <span className="bg-gradient-to-r from-[#17766E] to-[#A57D20] bg-clip-text text-transparent">se voit.</span></h2>
          </div>
          <Link href="/realisations" className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#8B6C1F]">Toutes les réalisations →</Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="group overflow-hidden rounded-[20px] border border-white/8 bg-[#111A2E] p-3 shadow-[0_24px_70px_rgba(17,26,46,.12)] lg:row-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[13px] lg:h-[540px] lg:aspect-auto"><Image src={cases[0].image} alt={cases[0].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" /></div>
            <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-5 text-white"><div><p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#D6B24F]">{cases[0].category}</p><h3 className="mt-1 font-sora text-xl">{cases[0].title}</h3></div><span className="text-xl text-[#D6B24F]">↗</span></div>
          </article>
          {cases.slice(1).map((item) => (
            <article key={item.title} className="group grid overflow-hidden rounded-[20px] border border-[#111A2E]/8 bg-[#F3FBF7] p-3 transition duration-300 hover:border-[#B88C27]/30 hover:shadow-[0_20px_50px_rgba(17,26,46,.08)] sm:grid-cols-[1.25fr_.75fr] sm:items-stretch">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[13px] sm:aspect-auto sm:min-h-[250px]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 32vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" /></div>
              <div className="flex flex-col justify-between p-5 text-[#111A2E]"><p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#18845B]">{item.category}</p><div><h3 className="font-sora text-xl">{item.title}</h3><span className="mt-4 inline-block text-xl text-[#A77E21]">↗</span></div></div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
          <article className="group overflow-hidden rounded-[20px] border border-[#111A2E]/9 bg-[#F3FBF7] p-3 transition duration-300 hover:border-[#18845B]/28 hover:shadow-[0_22px_55px_rgba(17,26,46,.08)]">
            <div className="overflow-hidden rounded-[13px] bg-[#111A2E]">
              <div className="relative aspect-[32/5] overflow-hidden border-b border-white/8">
                <Image src="/realisations/greenvillage-banner.jpg" alt="Bannière produit réalisée pour GreenVillage" fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover transition duration-700 group-hover:scale-[1.015]" />
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/8">
                <div className="relative aspect-[16/4] overflow-hidden bg-[#111A2E]"><Image src="/realisations/greenvillage-falcon.jpg" alt="Visuel Falcon X réalisé pour GreenVillage" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /></div>
                <div className="relative aspect-[16/4] overflow-hidden bg-[#111A2E]"><Image src="/realisations/greenvillage-puff-ice.jpg" alt="Visuel Puff Ice réalisé pour GreenVillage" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /></div>
              </div>
            </div>
            <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-5 text-[#111A2E]">
              <div><p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#18845B]">E-commerce · Traitement d’images</p><h3 className="mt-1 font-sora text-xl">GreenVillage</h3></div>
              <span className="text-xl text-[#18845B]">↗</span>
            </div>
          </article>

          <article className="group flex min-h-[290px] flex-col overflow-hidden rounded-[20px] border border-white/9 bg-[#111A2E] p-6 text-white transition duration-300 hover:border-[#D6B24F]/35 hover:shadow-[0_22px_55px_rgba(17,26,46,.14)]">
            <div className="flex flex-1 items-center justify-center rounded-[14px] border border-white/8 bg-white p-5">
              <Image src="/references/logo-ejacos-transparent.png" alt="Logo EJACOS Market" width={300} height={300} className="max-h-44 w-auto object-contain transition duration-500 group-hover:scale-[1.025]" />
            </div>
            <div className="flex items-end justify-between gap-4 pt-5"><div><p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#D6B24F]">Marketplace · Présence digitale</p><h3 className="mt-1 font-sora text-xl">EJACOS Market</h3></div><span className="text-xl text-[#D6B24F]">↗</span></div>
          </article>
        </div>

        <div className="mt-16 border-t border-[#111A2E]/10 pt-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-sora text-xl tracking-[-0.02em] text-[#111A2E] md:text-2xl">Ils nous ont confié leurs projets.</p>
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#111A2E]/40">Références sélectionnées</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {logos.map((logo) => (
              <div key={logo.alt} className={`relative flex h-32 items-center justify-center overflow-hidden rounded-[14px] border p-5 transition duration-300 hover:-translate-y-1 hover:border-[#B88C27]/40 ${logo.tone === "dark" ? "border-white/10 bg-[#111A2E]" : "border-[#111A2E]/8 bg-[#F7FAF8]"}`}>
                <Image src={logo.src} alt={logo.alt} width={180} height={100} className="max-h-[82px] w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
