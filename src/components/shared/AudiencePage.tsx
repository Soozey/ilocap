import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import CookieBanner from "@/components/shared/CookieBanner";

type AudiencePageProps = {
  eyebrow: string;
  title: string;
  accent: string;
  introduction: string;
  challenges: string[];
  solutions: Array<{ title: string; description: string }>;
  proof: {
    image: string;
    alt: string;
    label: string;
    title: string;
    description: string;
  };
};

export default function AudiencePage({ eyebrow, title, accent, introduction, challenges, solutions, proof }: AudiencePageProps) {
  return (
    <>
      <Header />
      <main className="bg-[#F3F1EC] text-[#073642]">
        <section className="relative overflow-hidden bg-[#073642] px-gutter pb-20 pt-36 text-white md:pb-28 md:pt-44">
          <div className="absolute -right-24 top-24 h-96 w-96 rounded-full border border-[#B89A5A]/20" />
          <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px w-12 bg-[#B89A5A]" />
                <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">{eyebrow}</span>
              </div>
              <h1 className="max-w-4xl font-sora text-4xl leading-[1.06] md:text-6xl">{title} <span className="text-[#B89A5A]">{accent}</span></h1>
            </div>
            <div>
              <p className="max-w-xl font-manrope text-base leading-relaxed text-white/72 md:text-lg">{introduction}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?objet=devis" className="button-elegant inline-flex items-center justify-center bg-[#B89A5A] px-6 text-center font-manrope text-[10px] font-bold uppercase text-[#073642] hover:bg-white">Demander un devis</Link>
                <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="button-elegant inline-flex items-center justify-center border border-white/25 px-6 text-center font-manrope text-[10px] font-bold uppercase text-white hover:border-[#B89A5A] hover:text-[#B89A5A]">Parler à un expert</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Vos enjeux</p>
              <h2 className="mt-4 font-sora text-3xl leading-tight md:text-4xl">Partir du problème, pas de la technologie.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {challenges.map((challenge, index) => (
                <div key={challenge} className="flex gap-4 rounded-[12px] border border-[#073642]/10 bg-white p-5">
                  <span className="font-sora text-sm text-[#B89A5A]">0{index + 1}</span>
                  <p className="font-manrope text-sm leading-relaxed text-[#073642]/72">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="section-shell px-gutter">
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Ce que nous pouvons construire</p>
            <h2 className="mt-4 max-w-3xl font-sora text-3xl leading-tight text-[#073642] md:text-5xl">Une réponse dimensionnée à votre réalité.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <article key={solution.title} className="rounded-[12px] border border-[#073642]/10 bg-[#F3F1EC] p-6 md:p-7">
                  <span className="font-sora text-2xl text-[#B89A5A]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-sora text-lg uppercase leading-tight text-[#073642]">{solution.title}</h3>
                  <p className="mt-4 font-manrope text-sm leading-relaxed text-[#073642]/65">{solution.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-gutter py-20 md:py-28">
          <div className="overflow-hidden rounded-[18px] border border-[#073642]/10 bg-[#073642] text-white lg:grid lg:grid-cols-2">
            <div className="relative min-h-[310px] lg:min-h-[500px]">
              <Image src={proof.image} alt={proof.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">{proof.label}</p>
              <h2 className="mt-5 font-sora text-3xl leading-tight md:text-4xl">{proof.title}</h2>
              <p className="mt-6 font-manrope text-base leading-relaxed text-white/68">{proof.description}</p>
              <Link href="/realisations" className="mt-8 inline-flex font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89A5A]">Voir nos réalisations →</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#B89A5A] px-gutter py-16 text-[#073642]">
          <div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em]">Passons du besoin au projet</p>
              <h2 className="mt-3 max-w-3xl font-sora text-3xl leading-tight md:text-4xl">Recevez une première orientation adaptée à votre situation.</h2>
            </div>
            <Link href="/contact?objet=devis" className="button-elegant inline-flex shrink-0 items-center justify-center bg-[#073642] px-7 text-center font-manrope text-[10px] font-bold uppercase text-white hover:bg-white hover:text-[#073642]">Présenter mon projet</Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <CookieBanner />
    </>
  );
}
