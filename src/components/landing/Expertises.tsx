"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeFrom, stagger } from "@/lib/motion";

export default function Expertises() {
  const [activeTab, setActiveTab] = useState(0);

  const expertises = [
    {
      title: "Solutions IA et Data",
      subtitle: "L'intelligence business",
      description: "Passez de l'intuition a la decision pilotee par la donnee.",
      items: [
        { title: "Anticiper", desc: "Analyse predictive pour detecter les tendances avant vos concurrents." },
        { title: "Automatiser", desc: "Assistants virtuels intelligents pour un service client 24/7." },
        { title: "Maitriser", desc: "Vision 360° de votre business via la centralisation des donnees." },
      ],
    },
    {
      title: "Plateformes Digitales",
      subtitle: "L'infrastructure",
      description: "Des outils sur-mesure pour des besoins specifiques.",
      items: [
        { title: "Outils metiers et Extranets", desc: "Fluidifier la collaboration et securiser vos echanges." },
        { title: "Ecosystemes de Vente", desc: "E-commerce et Marketplaces haute performance." },
        { title: "Vitrines Strategiques", desc: "Landing pages optimisees pour la conversion." },
      ],
    },
    {
      title: "Design et Marketing",
      subtitle: "La visibilite",
      description: "Devenez incontournable sur votre marche.",
      items: [
        { title: "Branding et contenus", desc: "Captiver par un graphisme percutant qui raconte votre histoire." },
        { title: "Acquisition ciblee", desc: "Campagnes publicitaires optimisees pour atteindre vos clients." },
        { title: "Google Business et CM", desc: "Gestion de communaute authentique pour creer un lien durable." },
      ],
    },
    {
      title: "Automatisation et BPO",
      subtitle: "L'optimisation",
      description: "Optimisez vos operations, liberez vos equipes.",
      items: [
        { title: "Processus intelligents", desc: "Eliminez les taches chronophages et repetitives." },
        { title: "Services informatiques", desc: "Infrastructure IT geree par des experts dedies et proactifs." },
        { title: "Support client", desc: "Disponibilite continue et reactivite qui depasse les attentes." },
      ],
    },
  ];

  return (
    <section id="expertises" className="section-pad bg-[#F3F1EC]">
      <div className="px-gutter section-shell">
        <motion.div
          variants={fadeFrom("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-petrol leading-tight">
            Nos Expertises
          </h2>
          <div className="h-[2px] w-32 bg-gold" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }}
            className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3"
          >
            {expertises.map((exp, index) => (
              <motion.button
                key={exp.title}
                variants={fadeFrom(index % 2 === 0 ? "left" : "right")}
                onClick={() => setActiveTab(index)}
                className={`surface-hover w-full text-left p-5 md:p-6 border rounded-[10px] min-h-[132px] ${
                  activeTab === index
                    ? "border-gold bg-[#F3F1EC] shadow-[0_18px_50px_rgba(7,54,66,0.08)]"
                    : "border-petrol/10 hover:border-gold bg-[#F3F1EC]/70"
                }`}
              >
                <span className={`font-manrope text-[10px] uppercase tracking-[0.2em] ${
                  activeTab === index ? "text-gold" : "text-[#073642]/55"
                }`}>
                  {exp.subtitle}
                </span>
                <h3 className={`font-sora text-lg md:text-xl uppercase mt-3 leading-tight ${
                  activeTab === index ? "text-petrol" : "text-[#073642]/70"
                }`}>
                  {exp.title}
                </h3>
              </motion.button>
            ))}
          </motion.div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={fadeFrom("bottom")}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 16, transition: { duration: 0.2 } }}
                className="surface-soft bg-[#F3F1EC] p-6 md:p-10 lg:p-12 h-full min-h-[480px]"
              >
                <p className="font-manrope text-base md:text-lg text-muted mb-10 leading-relaxed max-w-2xl">
                  {expertises[activeTab].description}
                </p>
                <div className="space-y-6 md:space-y-8">
                  {expertises[activeTab].items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      variants={fadeFrom(i % 2 === 0 ? "left" : "right")}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-5 md:gap-6 items-start"
                    >
                      <div className="w-9 h-9 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-1 rounded-[8px]">
                        <span className="text-gold font-sora text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-sora text-base md:text-lg uppercase text-petrol mb-2 leading-tight">
                          {item.title}
                        </h4>
                        <p className="font-manrope text-sm text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
