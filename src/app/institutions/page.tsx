import type { Metadata } from "next";
import AudiencePage from "@/components/shared/AudiencePage";

export const metadata: Metadata = {
  title: "Solutions digitales pour entreprises et institutions | ILOCAP",
  description: "Plateformes métier, interopérabilité, IA, Fintech et accompagnement de la transformation digitale des entreprises et institutions.",
  alternates: { canonical: "/institutions" },
};

export default function InstitutionsPage() {
  return (
    <AudiencePage
      eyebrow="Entreprises & institutions"
      title="Modernisez vos opérations sans perdre la maîtrise de"
      accent="vos enjeux métier."
      introduction="ILOCAP vous accompagne dans la conception et le déploiement de plateformes fiables, interopérables et réellement adoptées par vos équipes."
      challenges={[
        "Des procédures encore manuelles, dispersées ou difficiles à tracer.",
        "Des systèmes qui communiquent peu et fragmentent l’information.",
        "Des exigences fortes de sécurité, de conformité et de continuité.",
        "Des projets numériques qui doivent mobiliser plusieurs parties prenantes.",
      ]}
      solutions={[
        { title: "Audit et feuille de route", description: "Cartographie des processus, priorisation des besoins et définition d’un scénario de transformation réaliste." },
        { title: "Plateformes et portails métier", description: "Applications web et mobiles adaptées aux règles, responsabilités et parcours de votre organisation." },
        { title: "Interopérabilité et données", description: "Connexion des systèmes, centralisation de l’information, tableaux de bord et traçabilité." },
        { title: "IA et automatisation", description: "Traitement documentaire, assistants intelligents et automatisation des tâches à faible valeur ajoutée." },
        { title: "Fintech et transactions", description: "Parcours de paiement, wallets, services financiers digitaux et intégrations sécurisées." },
        { title: "Adoption et continuité", description: "Formation, conduite du changement, support, maintenance et évolution de la solution." },
      ]}
      proof={{
        image: "/realisations/symposium-cybersecurite-ilocap.webp",
        alt: "Présence ILOCAP au Symposium de la cybersécurité Madagascar",
        label: "Écosystème institutionnel",
        title: "Au contact des acteurs qui construisent la confiance numérique.",
        description: "Notre approche associe compréhension des enjeux institutionnels, maîtrise technologique et capacité à coordonner des partenaires autour d’un résultat commun.",
      }}
    />
  );
}
