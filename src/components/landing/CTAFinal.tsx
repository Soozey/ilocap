"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeFrom, stagger } from "@/lib/motion";

export default function CTAFinal() {
  return (
    <section id="contact" className="bg-petrol section-pad border-y border-white/5 overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="px-gutter section-shell text-center"
      >
        <motion.h2 variants={fadeFrom("top")} className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-10 text-white max-w-4xl mx-auto leading-tight">
          Vous avez un projet, un processus à améliorer ou une idée à structurer ?
        </motion.h2>
        
        <motion.div variants={fadeFrom("bottom")} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact?objet=devis"
            className="button-elegant bg-gold text-white px-8 font-manrope text-[10px] uppercase font-extrabold hover:bg-white hover:text-petrol w-full sm:w-auto sm:min-w-[220px] flex items-center justify-center text-center"
          >
            Demander une étude et un devis
          </Link>
          <Link
            href="https://calendly.com/candriatiana/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="button-elegant border border-gold text-gold px-8 font-manrope text-[10px] uppercase font-bold hover:bg-gold hover:text-white w-full sm:w-auto sm:min-w-[220px] flex items-center justify-center"
          >
            Réserver un échange de 30 min
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
