import type { Metadata } from "next";
import AudiencePage from "@/components/shared/AudiencePage";

export const metadata: Metadata = {
  title: "Solutions digitales pour PME et entrepreneurs | ILOCAP",
  description: "Sites, commerce digital, automatisation, outils de gestion et acquisition pour les PME et entrepreneurs.",
  alternates: { canonical: "/pme" },
};

export default function PmePage() {
  return (
    <AudiencePage
      eyebrow="PME & entrepreneurs"
      title="Gagnez du temps, développez vos ventes et structurez"
      accent="votre croissance."
      introduction="ILOCAP transforme vos tâches quotidiennes et vos objectifs commerciaux en outils simples, cohérents et adaptés à votre budget."
      challenges={[
        "Trop de temps consacré aux tâches répétitives et au suivi manuel.",
        "Des outils dispersés qui compliquent les ventes et la gestion.",
        "Une présence digitale qui génère encore trop peu de contacts qualifiés.",
        "Peu de visibilité sur les performances et les priorités de l’activité.",
      ]}
      solutions={[
        { title: "Sites et landing pages", description: "Des parcours clairs conçus pour présenter votre valeur et transformer les visites en demandes." },
        { title: "E-commerce et marketplaces", description: "Catalogues, boutiques, vendeurs, commandes et paiements réunis dans une expérience cohérente." },
        { title: "Outils de gestion métier", description: "CRM, tableaux de bord, suivi opérationnel et applications adaptées à votre façon de travailler." },
        { title: "Automatisation commerciale", description: "Relances, devis, qualification et service client pour gagner du temps sans perdre la relation humaine." },
        { title: "Visibilité et acquisition", description: "Identité, contenus, référencement local et campagnes ciblées reliés à des objectifs mesurables." },
        { title: "BPO et accompagnement", description: "Support opérationnel, back-office et amélioration continue pour absorber la croissance." },
      ]}
      proof={{
        image: "/realisations/primi-marketplace.png",
        alt: "Interface de marketplace réalisée pour Primi",
        label: "Commerce digital",
        title: "Des plateformes pensées pour vendre et administrer simplement.",
        description: "La technologie doit soutenir l’activité : faciliter la découverte, rassurer le client, simplifier les opérations et rendre la performance visible.",
      }}
    />
  );
}
