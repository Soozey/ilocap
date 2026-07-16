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
        viewport={{ once: false, margin: "-120px" }}
        className="px-gutter section-shell text-center"
      >
        <motion.h2 variants={fadeFrom("top")} className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-10 text-white max-w-4xl mx-auto leading-tight">
          Pret a donner du sens a votre technologie ?
        </motion.h2>
        
        <motion.div variants={fadeFrom("bottom")} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/diagnostic"
            className="button-elegant bg-gold text-white px-8 font-manrope text-[10px] uppercase font-extrabold hover:bg-white hover:text-petrol w-full sm:w-auto sm:min-w-[220px] flex items-center justify-center text-center"
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/services"
            className="button-elegant border border-gold text-gold px-8 font-manrope text-[10px] uppercase font-bold hover:bg-gold hover:text-white w-full sm:w-auto sm:min-w-[220px] flex items-center justify-center"
          >
            Nos etudes de cas
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
