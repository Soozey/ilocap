"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const initialForm = {
  nom: "",
  organisation: "",
  email: "",
  telephone: "",
  profil: "",
  typeProjet: "",
  echeance: "",
  budget: "",
  message: "",
  optIn: false,
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "Votre demande n’a pas pu être envoyée.");
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Une erreur est survenue. Réessayez ou contactez-nous par email.");
    }
  };

  const fieldClass = "mt-2 w-full rounded-[8px] border border-[#073642]/12 bg-[#F3F1EC] p-4 font-manrope text-sm text-[#073642] outline-none transition placeholder:text-[#073642]/35 focus:border-[#B89A5A] focus:ring-2 focus:ring-[#B89A5A]/15";
  const labelClass = "font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#073642]/62";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F3F1EC] text-[#073642]">
        <section className="bg-[#073642] px-gutter pb-16 pt-36 text-white md:pb-20 md:pt-44">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-4"><div className="h-px w-12 bg-[#B89A5A]" /><span className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#B89A5A]">Demande de devis</span></div>
              <h1 className="max-w-4xl font-sora text-4xl leading-[1.05] md:text-6xl">Présentez-nous votre projet, même s’il est encore <span className="text-[#B89A5A]">au stade de l’idée.</span></h1>
            </div>
            <p className="font-manrope text-base leading-relaxed text-white/70 md:text-lg">Nous analyserons votre demande et reviendrons vers vous avec une première orientation et les informations nécessaires pour cadrer la suite.</p>
          </div>
        </section>

        <section className="section-shell grid gap-10 px-gutter py-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16 lg:py-24">
          <aside>
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Contact direct</p>
            <h2 className="mt-4 font-sora text-3xl leading-tight">Vous préférez échanger directement ?</h2>
            <div className="mt-8 space-y-6 rounded-[14px] border border-[#073642]/10 bg-white p-6">
              <div><p className={labelClass}>Email</p><a href="mailto:management@ilocap.com" className="mt-2 block font-manrope text-sm hover:text-[#B89A5A]">management@ilocap.com</a></div>
              <div><p className={labelClass}>Téléphone / WhatsApp</p><a href="https://wa.me/261343807857" target="_blank" rel="noopener noreferrer" className="mt-2 block font-manrope text-sm hover:text-[#B89A5A]">+261 34 38 07 857</a></div>
              <div><p className={labelClass}>Localisation</p><p className="mt-2 font-manrope text-sm text-[#073642]/65">Antananarivo, Madagascar</p></div>
            </div>
            <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="button-elegant mt-5 inline-flex w-full items-center justify-center border border-[#B89A5A] px-6 text-center font-manrope text-[10px] font-bold uppercase text-[#073642] hover:bg-[#B89A5A] hover:text-white">Réserver un échange de 30 min</Link>
          </aside>

          <div className="rounded-[16px] border border-[#073642]/10 bg-white p-6 shadow-[0_24px_80px_rgba(7,54,66,0.08)] md:p-10">
            {status === "success" ? (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B89A5A]/15 text-2xl text-[#B89A5A]">✓</div>
                <h2 className="mt-7 font-sora text-3xl">Votre demande a bien été transmise.</h2>
                <p className="mt-4 max-w-lg font-manrope text-sm leading-relaxed text-[#073642]/65">Nous allons l’étudier et vous contacter pour préciser le besoin. Vous pouvez aussi réserver immédiatement un créneau si le projet est urgent.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer" className="button-elegant inline-flex items-center justify-center bg-[#073642] px-6 font-manrope text-[10px] font-bold uppercase text-white hover:bg-[#B89A5A]">Choisir un créneau</Link>
                  <button type="button" onClick={() => { setForm(initialForm); setStatus("idle"); }} className="button-elegant border border-[#073642]/15 px-6 font-manrope text-[10px] font-bold uppercase text-[#073642] hover:border-[#B89A5A]">Nouvelle demande</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div><p className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89A5A]">Votre demande</p><h2 className="mt-3 font-sora text-2xl md:text-3xl">Quelques informations suffisent pour commencer.</h2></div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className={labelClass}>Nom et prénom *<input name="name" autoComplete="name" required value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} className={fieldClass} /></label>
                  <label className={labelClass}>Organisation<input name="organization" autoComplete="organization" value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} className={fieldClass} /></label>
                  <label className={labelClass}>Email professionnel *<input type="email" name="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldClass} /></label>
                  <label className={labelClass}>Téléphone / WhatsApp<input type="tel" name="tel" autoComplete="tel" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} className={fieldClass} /></label>
                  <label className={labelClass}>Votre profil *<select name="profil" required value={form.profil} onChange={(e) => setForm({ ...form, profil: e.target.value })} className={fieldClass}><option value="">Sélectionner</option><option>Entreprise ou institution</option><option>PME ou entrepreneur</option><option>Partenaire ou intégrateur</option></select></label>
                  <label className={labelClass}>Type de projet *<select name="project-type" required value={form.typeProjet} onChange={(e) => setForm({ ...form, typeProjet: e.target.value })} className={fieldClass}><option value="">Sélectionner</option><option>Plateforme ou application métier</option><option>IA ou automatisation</option><option>Fintech ou paiement</option><option>Site, e-commerce ou marketplace</option><option>Marketing et acquisition</option><option>Conseil ou cadrage</option><option>Autre besoin</option></select></label>
                  <label className={labelClass}>Échéance souhaitée<select name="timeline" value={form.echeance} onChange={(e) => setForm({ ...form, echeance: e.target.value })} className={fieldClass}><option value="">À préciser</option><option>Moins de 3 mois</option><option>3 à 6 mois</option><option>6 à 12 mois</option><option>Plus de 12 mois</option></select></label>
                  <label className={labelClass}>Budget indicatif<select name="budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={fieldClass}><option value="">Je souhaite être conseillé</option><option>Moins de 10 000 €</option><option>10 000 à 30 000 €</option><option>30 000 à 100 000 €</option><option>Plus de 100 000 €</option></select></label>
                </div>
                <label className={labelClass}>Quel problème souhaitez-vous résoudre ? *<textarea name="message" required rows={6} placeholder="Décrivez brièvement le contexte, les utilisateurs concernés et le résultat attendu." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${fieldClass} resize-y`} /></label>
                <label className="flex items-start gap-3 font-manrope text-xs leading-relaxed text-[#073642]/60"><input type="checkbox" required checked={form.optIn} onChange={(e) => setForm({ ...form, optIn: e.target.checked })} className="mt-0.5 h-4 w-4 accent-[#B89A5A]" /><span>J’accepte que mes informations soient utilisées pour répondre à cette demande.</span></label>
                {status === "error" && <p role="alert" className="rounded-[8px] border border-red-200 bg-red-50 p-4 font-manrope text-sm text-red-700">{error}</p>}
                <button type="submit" disabled={status === "sending"} className="button-elegant w-full bg-[#B89A5A] px-7 font-manrope text-[10px] font-bold uppercase text-[#073642] hover:bg-[#073642] hover:text-white disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Envoi en cours…" : "Envoyer ma demande de devis →"}</button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
