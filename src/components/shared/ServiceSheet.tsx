"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ServiceSheet({ id, number, title, description, children }: { id: string; number: string; title: string; description: string; children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const openTarget = () => {
      if (window.location.hash === `#${id}` && ref.current) {
        ref.current.open = true;
        ref.current.scrollIntoView({ block: "start" });
      }
    };
    openTarget();
    window.addEventListener("hashchange", openTarget);
    return () => window.removeEventListener("hashchange", openTarget);
  }, [id]);
  return (
    <details ref={ref} id={id} className="service-sheet scroll-mt-24 self-start overflow-hidden rounded-xl border border-[#173C31]/15 bg-[#FBF9F4]" onToggle={event => { if (event.currentTarget.open) trackEvent("service_explore", { service_family: id }); }}>
      <summary className="cursor-pointer list-none p-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#173C31]">
        <div className="flex items-start justify-between gap-4"><div><span className="text-xs tracking-widest text-[#75623D]">{number}</span><h2 className="service-sheet-title mt-2">{title}</h2></div><span aria-hidden="true" className="sheet-indicator mt-5 text-2xl text-[#173C31]">+</span></div>
        <p className="mt-3 max-w-xl text-[15px] leading-6 text-[#343A36]">{description}</p>
        <span className="mt-4 inline-block text-sm font-semibold text-[#173C31]"><span className="sheet-closed">Voir les prestations</span><span className="sheet-open">Masquer les prestations</span></span>
      </summary>
      <div className="border-t border-[#173C31]/10 p-6 pt-5">{children}</div>
    </details>
  );
}
