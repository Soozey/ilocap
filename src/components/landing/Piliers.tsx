"use client";

import { motion } from "framer-motion";
import { fadeFrom, stagger } from "@/lib/motion";

const piliers = [
  {
    icon: "◆",
    title: "SENS",
    description: "Redefinir l'intention derriere chaque action technologique pour aligner vision metier et execution technique.",
  },
  {
    icon: "◉",
    title: "DURABILITE",
    description: "Concevoir des architectures resilientes et des processus perennes qui resistent aux cycles d'obsolescence.",
  },
  {
    icon: "◊",
    title: "TRANSITION",
    description: "Accompagner le changement humain et technologique avec une rigueur methodologique sans compromis.",
  },
];

export default function Piliers() {
  return (
    <section className="section-pad bg-[#F3F1EC] relative">
      <div className="px-gutter section-shell">
        <motion.div
          variants={fadeFrom("right")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
          className="mb-14 md:mb-20"
        >
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-petrol leading-tight">
            Nos Piliers Structurants
          </h2>
          <div className="h-[2px] w-32 bg-gold" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {piliers.map((pilier, index) => (
            <motion.div
              key={pilier.title}
              variants={fadeFrom(index === 0 ? "left" : index === 1 ? "bottom" : "right")}
              className="surface-soft surface-hover bg-[#F3F1EC] p-8 md:p-10 lg:p-12 hover:bg-[#E8E4DC] group min-h-[360px] flex flex-col"
            >
              <div className="text-gold mb-8 text-5xl font-sora leading-none">
                {pilier.icon}
              </div>
              <h3 className="font-sora text-xl lg:text-2xl uppercase mb-5 text-petrol leading-tight">
                {pilier.title}
              </h3>
              <p className="font-manrope text-base text-muted leading-relaxed font-light mb-10 flex-1">
                {pilier.description}
              </p>
              <div className="text-gold/20 group-hover:text-gold transition-standard">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 100 100">
                  <path d="M30 10H70L90 30V70L70 90H30L10 70V30L30 10Z" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
