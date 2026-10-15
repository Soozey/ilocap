import Image from "next/image";
import Link from "next/link";
import styles from "./ApprovedHero.module.css";

type Expertise = "create" | "automate" | "delegate";
const expertises: { key: Expertise; label: string; name: string; href: string }[] = [
  { key: "create", label: "Créer", name: "Design et création : sites web et applications", href: "/services#service-01" },
  { key: "automate", label: "Automatiser", name: "Automatisation", href: "/services#service-02" },
  { key: "delegate", label: "Déléguer", name: "Externalisation et support", href: "/services#service-04" },
];

function ExpertiseIcon({ type }: { type: Expertise }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {type === "create" && <><path d="m5 22-2 7 7-2L27 10a3.5 3.5 0 0 0-5-5L5 22Z" /><path d="m19 8 5 5M5 22l5 5M3 29l4-1" /></>}
      {type === "automate" && <><path d="m13 3-1 4-3 1-3-2-3 5 3 3v4l-3 3 3 5 4-2 3 2 1 4h5l1-4 3-2 4 2 3-5-3-3v-4l3-3-3-5-4 2-3-1-1-4h-6Z" /><circle cx="16.5" cy="16.5" r="5" /></>}
      {type === "delegate" && <><circle cx="16" cy="9" r="4" /><path d="M9 28v-5a7 7 0 0 1 14 0v5H9Z" /><path d="M5 16a3.5 3.5 0 1 1 2-6M27 16a3.5 3.5 0 1 0-2-6M6 20a5 5 0 0 0-4 5v2h3M26 20a5 5 0 0 1 4 5v2h-3" /></>}
    </svg>
  );
}

export default function ApprovedHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.stage}>
        <div className={styles.visual}>
          <Image src="/hero/ilocap-expertises.webp" alt="Nos expertises illustrées sur ordinateur : design et création, automatisation, externalisation. Un smartphone présente le suivi des projets." fill priority sizes="100vw" className={styles.image} />
          <nav className={styles.iconLinks} aria-label="Accès direct à nos services">
            {expertises.map((item) => (
              <Link key={item.key} href={item.href} className={styles.iconLink} aria-label={item.name}>
                <ExpertiseIcon type={item.key} />
                <span className={styles.tooltip}>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>ILOCAP · Le digital avec du sens</p>
          <h1 id="hero-title" className={styles.title}>Nous donnons vie<br className={styles.desktopBreak} /> à vos ambitions <span>digitales.</span></h1>
          <Link href="/contact?objet=devis" className={styles.cta}>Parlons de votre projet</Link>
          <p className={styles.location}>À Madagascar et à l’international.</p>
          <nav className={styles.shortcuts} aria-label="Choisir votre besoin">
            {expertises.map((item) => (
              <Link key={item.key} href={item.href} className={styles.shortcut} aria-label={`${item.label} — ${item.name}`}>
                <ExpertiseIcon type={item.key} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
