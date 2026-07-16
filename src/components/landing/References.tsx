"use client";

import { motion } from "framer-motion";
import { fadeFrom, stagger } from "@/lib/motion";

const references = [
  { name: "EspaMada", sector: "E-commerce" },
  { name: "GreenVillage", sector: "Distribution" },
  { name: "Voxima", sector: "Agency" },
  { name: "Yunka Retreat", sector: "Tourisme" },
  { name: "Primimport", sector: "Import" },
  { name: "TrackFuel360", sector: "Logistics" },
  { name: "Karibo Services", sector: "Services" },
  { name: "CoursiNet", sector: "EdTech" },
  { name: "Ymagoo Project", sector: "Tech" },
  { name: "AndCorp", sector: "Corporate" },
  { name: "CIRT", sector: "Security" },
];

export default function References() {
  return (
    <section className="section-pad bg-[#F3F1EC]">
      <div className="px-gutter section-shell">
        <motion.div
          variants={fadeFrom("top")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-120px" }}
          className="mb-14 md:mb-20 text-center"
        >
          <h2 className="font-sora text-3xl md:text-4xl lg:text-5xl uppercase mb-6 text-petrol leading-tight">
            Ils nous font confiance
          </h2>
          <div className="h-[2px] w-32 bg-gold mx-auto" />
          <p className="font-manrope text-base md:text-lg text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
            Des PME aux ONG, des cabinets de conseil aux acteurs du tourisme, nous adaptons notre expertise a chaque secteur.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              variants={fadeFrom(index % 4 < 2 ? "left" : "right")}
              className="surface-soft surface-hover bg-[#F3F1EC] p-5 md:p-7 min-h-[190px] flex flex-col items-center justify-center gap-4 hover:bg-[#E8E4DC] group cursor-pointer"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-petrol/5 border border-petrol/5 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/20 transition-standard rounded-[10px]">
                <span className="font-sora text-2xl text-petrol/30 group-hover:text-gold transition-standard">
                  {ref.name[0]}
                </span>
              </div>
              <div className="text-center">
                <p className="font-sora text-xs md:text-sm uppercase text-petrol group-hover:text-gold transition-standard leading-tight">
                  {ref.name}
                </p>
                <p className="font-manrope text-[10px] uppercase text-muted tracking-wider mt-1">
                  {ref.sector}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
