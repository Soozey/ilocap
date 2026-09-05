"use client";

import { motion } from "framer-motion";
import { fadeFrom, stagger } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Cadrage et stratégie",
    description: "Nous clarifions les objectifs, les utilisateurs, les contraintes et les priorités afin de construire une feuille de route réaliste.",
  },
  {
    number: "02",
    title: "Conception utile",
    description: "Nous concevons les parcours, les interfaces et l’architecture autour de vos usages, sans complexité inutile.",
  },
  {
    number: "03",
    title: "Déploiement maîtrisé",
    description: "Nous développons, intégrons et testons la solution par étapes pour sécuriser la mise en service et les données.",
  },
  {
    number: "04",
    title: "Adoption et amélioration",
    description: "Nous formons les équipes, accompagnons le changement et faisons évoluer la solution à partir des retours terrain.",
  },
];

export default function Methodologie() {
  return (
    <section id="methodologie" className="section-pad bg-[#F3F1EC]">
      <div className="px-gutter section-shell">
        <motion.div
          variants={fadeFrom("left")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-petrol leading-tight">
            Une méthode qui va jusqu’au résultat
          </h2>
          <div className="h-[2px] w-32 bg-gold" />
          <p className="font-manrope text-base md:text-lg text-muted mt-6 max-w-2xl leading-relaxed">
            Un interlocuteur engagé, du premier cadrage à l’adoption par vos équipes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gold/30" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeFrom(index % 2 === 0 ? "bottom" : "top")}
                className="relative surface-soft surface-hover bg-[#F3F1EC] p-6 md:p-7 lg:p-8 min-h-[260px]"
              >
                <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-[#F3F1EC] border border-gold mb-8 relative z-10 rounded-[8px]">
                  <span className="font-sora text-lg text-gold">{step.number}</span>
                </div>

                <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-[#F3F1EC] border border-gold mb-6 rounded-[8px]">
                  <span className="font-sora text-lg text-gold">{step.number}</span>
                </div>

                <h3 className="font-sora text-lg md:text-xl uppercase text-petrol mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="font-manrope text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
