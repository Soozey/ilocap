"use client";

import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

const LEVIERS = [
  {
    title: "Clarifier votre positionnement",
    description: "Exprimer clairement votre valeur et construire des parcours cohérents pour vos publics.",
    icon: (
      <svg className="w-7 h-7 text-[#B89A5A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
      </svg>
    )
  },
  {
    title: "Exceller opérationnellement",
    description: "Automatiser les tâches chronophages pour concentrer les équipes sur les priorités stratégiques.",
    icon: (
      <svg className="w-7 h-7 text-[#B89A5A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Affirmer votre valeur",
    description: "Relier chaque décision digitale à une valeur concrète pour vos clients, usagers et équipes.",
    icon: (
      <svg className="w-7 h-7 text-[#B89A5A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
      </svg>
    )
  },
  {
    title: "Mesurer pour progresser",
    description: "Piloter par la donnée pour améliorer chaque décision et chaque investissement.",
    icon: (
      <svg className="w-7 h-7 text-[#B89A5A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="14" width="3" height="7" rx="0.5" fill="currentColor" stroke="none"/>
        <rect x="10.5" y="9" width="3" height="12" rx="0.5" fill="currentColor" stroke="none"/>
        <rect x="17" y="4" width="3" height="17" rx="0.5" fill="currentColor" stroke="none"/>
        <path d="M4 11l5-5 5 4 5-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const ETAPES = [
  {
    num: "01",
    title: "Cadrage & stratégie",
    description: "Objectifs, utilisateurs, contraintes et priorités réunis dans une feuille de route réaliste."
  },
  {
    num: "02",
    title: "Conception utile",
    description: "Des parcours, interfaces et choix techniques proportionnés à vos usages."
  },
  {
    num: "03",
    title: "Déploiement maîtrisé",
    description: "Développement, intégration et tests par étapes pour sécuriser la mise en service."
  },
  {
    num: "04",
    title: "Adoption & évolution",
    description: "Formation, accompagnement des équipes et amélioration continue après le lancement."
  }
];

export default function MethodologiePage() {
  return (
    <>
    <main className="min-h-screen bg-[#F5F3EE] text-[#073642]">
      <Header />
      
      <section className="pt-32 pb-24 px-6 lg:px-16">
        <div className="max-w-[1000px] mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#B89A5A]" />
            <span className="font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-[0.3em] text-[#B89A5A]">
              Notre méthode
            </span>
            <div className="w-8 h-[1px] bg-[#B89A5A]" />
          </div>
          <h1 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl uppercase leading-[1.1] mb-6">
            Cessez de subir le digital. <span className="text-[#B89A5A]">Faites-en</span> votre levier.
          </h1>
          <p className="font-[family-name:var(--font-manrope)] text-sm md:text-base text-[#073642]/60 max-w-2xl mx-auto">
            Chez ILOCAP, la transformation digitale n’est pas une obligation technique.
            Nous la concevons comme un levier de performance. Un digital humain, accessible
            et parfaitement aligné avec vos enjeux.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl uppercase mb-6">
                Transformez vos ambitions en <span className="text-[#B89A5A]">résultats mesurables</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#B89A5A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-sm uppercase text-[#073642]">Vision stratégique</p>
                    <p className="font-[family-name:var(--font-manrope)] text-xs text-[#073642]/60">Vos objectifs pilotent la technologie, jamais l’inverse.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#B89A5A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-sm uppercase text-[#073642]">Impact progressif</p>
                    <p className="font-[family-name:var(--font-manrope)] text-xs text-[#073642]/60">Des résultats utiles dès les premières étapes, puis améliorés avec les retours terrain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#B89A5A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-sm uppercase text-[#073642]">Partenariat de confiance</p>
                    <p className="font-[family-name:var(--font-manrope)] text-xs text-[#073642]/60">Nous travaillons comme le prolongement de votre équipe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#B89A5A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-sora)] text-sm uppercase text-[#073642]">Impact vérifiable</p>
                    <p className="font-[family-name:var(--font-manrope)] text-xs text-[#073642]/60">Chaque fonctionnalité doit répondre à un objectif observable.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 border border-[#B89A5A]/20 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border border-[#B89A5A]/10 rounded-full animate-pulse" />
                <div className="text-center">
                  <p className="font-[family-name:var(--font-sora)] text-4xl text-[#B89A5A]">360°</p>
                  <p className="font-[family-name:var(--font-manrope)] text-xs text-[#073642]/60 mt-2">Vision complète<br/>du projet</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-16 bg-white">
        <div className="max-w-[1200px] mx-auto py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#B89A5A]" />
              <span className="font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-[0.3em] text-[#B89A5A]">
                Stratégie globale
              </span>
              <div className="w-8 h-[1px] bg-[#B89A5A]" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl uppercase">
              Quatre leviers pour <span className="text-[#B89A5A]">transformer</span> votre organisation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEVIERS.map((levier, idx) => (
              <motion.div
                key={levier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F3EE] border border-[#E5E5E5] p-8 hover:border-[#B89A5A] transition-all duration-300 rounded-sm"
              >
                <div className="text-[#B89A5A] mb-4">{levier.icon}</div>
                <h3 className="font-[family-name:var(--font-sora)] text-lg uppercase tracking-widest mb-3 text-[#073642]">
                  {levier.title}
                </h3>
                <p className="font-[family-name:var(--font-manrope)] text-sm text-[#073642]/60 leading-relaxed">
                  {levier.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#B89A5A]" />
              <span className="font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-[0.3em] text-[#B89A5A]">
                Notre approche
              </span>
              <div className="w-8 h-[1px] bg-[#B89A5A]" />
            </div>
            <h2 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl uppercase">
              Une méthodologie <span className="text-[#B89A5A]">éprouvée</span>, de l’idée au déploiement
            </h2>
          </div>

          <div className="space-y-8">
            {ETAPES.map((etape, idx) => (
              <motion.div
                key={etape.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-start gap-8"
              >
                <div className="font-[family-name:var(--font-sora)] text-4xl text-[#B89A5A]/30 flex-shrink-0 w-16">
                  {etape.num}
                </div>
                <div className="border-l border-[#B89A5A]/20 pl-8 py-2">
                  <h3 className="font-[family-name:var(--font-sora)] text-lg uppercase tracking-widest mb-2 text-[#073642]">
                    {etape.title}
                  </h3>
                  <p className="font-[family-name:var(--font-manrope)] text-sm text-[#073642]/60 leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-16 text-center">
        <h2 className="font-[family-name:var(--font-sora)] text-2xl uppercase mb-8 text-[#073642]">
          Prêt à transformer un besoin en <span className="text-[#B89A5A]">projet concret</span> ?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?objet=devis"
            className="bg-[#073642] text-[#F3F1EC] px-12 py-5 font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#B89A5A] transition-all rounded-sm"
          >
            Demander une étude et un devis →
          </Link>
          <Link
            href="https://calendly.com/candriatiana/30min"
            target="_blank"
            className="border border-[#B89A5A] text-[#B89A5A] px-12 py-5 font-[family-name:var(--font-manrope)] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#B89A5A] hover:text-[#0B0C0A] transition-all rounded-sm"
          >
            Prendre RDV ↗
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
