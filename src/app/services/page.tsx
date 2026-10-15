import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Sites, IA, marketing et externalisation | ILOCAP",
  description: "Sites web et applications, IA et automatisation, design et marketing, externalisation et assistance : découvrez les services ILOCAP adaptés à votre activité.",
  alternates: { canonical: "/services" },
};
const families = [
  { number: "01", title: "Sites & applications", promise: "Votre activité, bien outillée.", cta: "Discuter de mon projet", alt: "Illustration d’un site d’architecture sur tablette et d’une application de gestion.", items: [
    ["Sites web", "Présentez votre offre et facilitez les contacts.", "screen"],
    ["E-commerce & marketplaces", "Vendez et gérez vos commandes.", "cart"],
    ["Applications métier", "Des outils adaptés à votre activité.", "grid"],
  ] },
  { number: "02", title: "IA & automatisation", promise: "Moins de tâches. Plus de temps.", cta: "Étudier mon besoin", alt: "Illustration d’un processus de traitement de documents, de la réception à la mise à jour des outils.", items: [
    ["Automatisation des processus", "Relances, documents et validations.", "gear"],
    ["Assistants IA", "Facilitez le traitement des demandes.", "spark"],
    ["Données & intégrations", "Connectez vos outils et vos indicateurs.", "data"],
  ] },
  { number: "03", title: "Design & marketing", promise: "Attirez l’attention. Donnez envie.", cta: "Préparer ma communication", alt: "Concept de campagne Lumière : photographie de parfum, affiche et publication sur mobile.", items: [
    ["Identité & création visuelle", "Des visuels qui affirment votre marque.", "pen"],
    ["Contenus & réseaux sociaux", "Une présence utile et régulière.", "picture"],
    ["Campagnes & acquisition", "Des campagnes orientées vers l’action.", "chart"],
  ] },
  { number: "04", title: "Externalisation & assistance", promise: "Déléguez. Gardez le contrôle.", cta: "Définir les tâches à déléguer", alt: "Deux scènes illustratives : une professionnelle malgache en assistance client et un professionnel malgache en vérification de dossiers, dans des bureaux distincts.", items: [
    ["Assistance administrative", "Agendas, documents et suivi quotidien.", "person"],
    ["Back-office & données", "Saisie, fichiers et catalogues.", "file"],
    ["Relation client & suivi commercial", "Demandes clients et relances.", "chat"],
  ] },
];
const paths: Record<string, string> = {
  screen: "M3 4h26v18H3z M16 22v6 M10 28h12",
  cart: "M2 4h4l4 17h15l4-12H7 M12 27h.01 M24 27h.01",
  grid: "M3 3h10v10H3z M19 3h10v10H19z M3 19h10v10H3z M19 19h10v10H19z",
  gear: "M13 3h6l1 4 4 2 4-1 3 5-3 3v3l3 3-3 5-4-1-4 2-1 4h-6l-1-4-4-2-4 1-3-5 3-3v-3l-3-3 3-5 4 1 4-2z M21 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0",
  spark: "M16 2c0 9 5 14 14 14-9 0-14 5-14 14 0-9-5-14-14-14C11 16 16 11 16 2z",
  data: "M3 7c0-6 26-6 26 0s-26 6-26 0v18c0 6 26 6 26 0V7 M3 16c0 6 26 6 26 0",
  pen: "M4 23 22 5a4 4 0 0 1 6 6L10 29l-8 1z M19 8l6 6",
  picture: "M3 3h26v26H3z M3 24l9-10 6 7 5-5 6 7 M10 9h.01",
  chart: "M4 27V17h5v10z M14 27V10h5v17z M24 27V3h5v24z",
  person: "M22 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0 M5 29v-5c0-11 22-11 22 0v5z",
  file: "M6 2h13l7 7v21H6z M19 2v8h7 M11 16h10 M11 22h10",
  chat: "M3 3h26v21H14l-8 6v-6H3z M9 10h14 M9 16h10",
};
function ServiceIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 32 34" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
export default function ServicesPage() {
  return <><Header /><main className={styles.page}>
    <div className={styles.shell}>
      <nav className={styles.categories} aria-label="Catégories de services">
        {families.map(f => <a key={f.number} href={`#service-${f.number}`}>{f.title}</a>)}
      </nav>
      <h1 className={styles.heading}>Des expertises pour avancer.</h1>
      {families.map((f, index) => <section id={`service-${f.number}`} key={f.number} className={styles.family} aria-labelledby={`title-${f.number}`}>
        <div className={styles.copy}>
          <p className={styles.number}>{f.number}<span /></p>
          <h2 id={`title-${f.number}`}>{f.title}</h2>
          <p className={styles.promise}>{f.promise}</p>
          <ul className={styles.services}>{f.items.map(([title, text, icon]) => <li key={title}><ServiceIcon name={icon} /><div><h3>{title}</h3><p>{text}</p></div></li>)}</ul>
          <Link href={`/contact?objet=devis&service=${f.number}`} className={styles.button}>{f.cta}</Link>
        </div>
        <div className={styles.visual}><Image src={`/services/category-${f.number}.webp`} alt={f.alt} width={1440} height={720} priority={index === 0} sizes="(max-width: 900px) 100vw, 55vw" /></div>
      </section>)}
    </div>
    <section className={styles.contact}><div><h2>Parlons de votre besoin.</h2><p>Des solutions concrètes, adaptées à votre activité.</p></div><Link href="/contact?objet=devis" className={styles.lightButton}>Nous contacter</Link></section>
  </main><Footer /></>;
}
