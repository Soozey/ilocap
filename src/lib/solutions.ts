export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  promise: string;
  summary: string;
  cardDescription: string;
  logo: string;
  visual: string;
  visualAlt: string;
  visualPosition?: string;
  accent: string;
  proofs: Array<{ value: string; label: string }>;
  pillars: Array<{ title: string; description: string }>;
  modules: Array<{ number: string; title: string; description: string; tags: string[] }>;
  gallery?: Array<{ title: string; description: string; image: string; alt: string }>;
  audiences: Array<{ title: string; description: string }>;
  safeguards: Array<{ title: string; description: string }>;
};

export const solutions: Solution[] = [
  {
    slug: "siirh",
    name: "SIIRH",
    shortName: "SIIRH",
    category: "Gestion RH · Temps · Paie",
    promise: "L’humain au cœur du temps, de la paie et de l’équité sociale.",
    summary:
      "Une suite unifiée de gestion RH, de pointage réglementaire et de clôture de paie pensée pour les organisations qui doivent conjuguer rigueur, conformité et lisibilité.",
    cardDescription:
      "Une suite RH souveraine pour fiabiliser les dossiers, le temps de travail, la paie et le pilotage social.",
    logo: "/solutions/logo-siirh.png",
    visual: "/solutions/siirh-fiche.png",
    visualAlt: "Présentation de la suite de gestion RH SIIRH",
    visualPosition: "center top",
    accent: "#E8782A",
    proofs: [
      { value: "120K+", label: "salariés et agents ciblés" },
      { value: "0 litige", label: "objectif de conformité sociale" },
      { value: "42+", label: "grades administratifs et EPIC" },
      { value: "100%", label: "souverain et sécurisé" },
    ],
    pillars: [
      {
        title: "Équité",
        description:
          "Des règles de paie, de présence et de traitement appliquées de façon cohérente, traçable et compréhensible.",
      },
      {
        title: "Transparence",
        description:
          "Des calculs auditables, des justificatifs accessibles et une vision claire pour les équipes comme pour la direction.",
      },
      {
        title: "Croissance & développement",
        description:
          "Un socle RH structuré pour accompagner les effectifs, les compétences et l’évolution de l’organisation.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Dossier salarié & registre RH",
        description:
          "Centraliser les informations administratives, les pièces et l’historique de chaque collaborateur.",
        tags: ["Registre unique", "GED", "Historique RH"],
      },
      {
        number: "02",
        title: "Temps, pointage & équité",
        description:
          "Gérer horaires, absences, missions et règles de présence dans un cadre homogène et vérifiable.",
        tags: ["Pointage", "Absences", "Règles métier"],
      },
      {
        number: "03",
        title: "Paie & clôture légale",
        description:
          "Sécuriser les variables, les calculs, les contrôles et la préparation des clôtures périodiques.",
        tags: ["Variables de paie", "Contrôles", "Clôture"],
      },
      {
        number: "04",
        title: "Tableaux de bord & pilotage",
        description:
          "Transformer les données sociales en indicateurs lisibles pour décider et anticiper.",
        tags: ["Indicateurs", "Alertes", "BI sociale"],
      },
    ],
    audiences: [
      { title: "EPIC & entreprises industrielles", description: "Effectifs importants, contraintes opérationnelles et règles sociales structurées." },
      { title: "Institutions & ministères", description: "Grades, statuts, obligations réglementaires et exigences d’audit." },
      { title: "Collectivités & établissements publics", description: "Organisation multi-sites et besoin de traçabilité administrative." },
      { title: "PME structurées & ONG", description: "Croissance des équipes, consolidation des pratiques et contrôle de la paie." },
    ],
    safeguards: [
      { title: "Déploiement maîtrisé", description: "Hébergement souverain, sur site ou selon les contraintes de votre organisation." },
      { title: "Données protégées", description: "Chiffrement, contrôle des accès et protection des informations sensibles." },
      { title: "Auditabilité", description: "Journalisation des actions, historique des modifications et preuves de traitement." },
    ],
  },
  {
    slug: "trackfuel-360",
    name: "TrackFuel 360",
    shortName: "TrackFuel 360",
    category: "Flotte · Carburant · Maintenance",
    promise: "Maîtrisez chaque goutte, sécurisez chaque kilomètre.",
    summary:
      "Une plateforme de suivi de flotte qui rapproche télématique, carburant, missions, chauffeurs et maintenance pour rendre chaque anomalie visible et chaque décision plus rapide.",
    cardDescription:
      "Le pilotage unifié de la flotte, du carburant et de la maintenance, avec des alertes directement exploitables.",
    logo: "/solutions/logo-trackfuel360.png",
    visual: "/realisations/trackfuel-dashboard.png",
    visualAlt: "Tableau de bord de suivi de flotte TrackFuel 360",
    visualPosition: "center top",
    accent: "#1B8FE5",
    proofs: [
      { value: "−28%", label: "fraude carburant potentielle" },
      { value: "99,4%", label: "précision des trajets" },
      { value: "+35%", label: "efficacité opérationnelle visée" },
      { value: "< 45 j", label: "retour sur investissement projeté" },
    ],
    pillars: [
      {
        title: "Éco-conduite",
        description:
          "Suivre les comportements, comparer les consommations et transformer les écarts en actions concrètes.",
      },
      {
        title: "Transparence totale",
        description:
          "Relier véhicule, trajet, chauffeur, carburant et justificatif dans une même chaîne de preuve.",
      },
      {
        title: "Croissance durable",
        description:
          "Faire évoluer la flotte sans perdre en maîtrise, en sécurité ni en qualité de service.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Télématique haute précision",
        description:
          "Visualiser les trajets, les positions, les arrêts et les événements importants en temps utile.",
        tags: ["GPS", "Alertes", "Historique"],
      },
      {
        number: "02",
        title: "FuelSecure",
        description:
          "Comparer les consommations, détecter les écarts et documenter les opérations de ravitaillement.",
        tags: ["Carburant", "Anomalies", "Contrôle"],
      },
      {
        number: "03",
        title: "Missions & chauffeurs",
        description:
          "Affecter les missions, suivre leur exécution et améliorer la coordination des équipes terrain.",
        tags: ["Missions", "Chauffeurs", "Planning"],
      },
      {
        number: "04",
        title: "Maintenance & Safety Park",
        description:
          "Planifier les entretiens, suivre les échéances et réduire les immobilisations non anticipées.",
        tags: ["Maintenance", "Documents", "Sécurité"],
      },
    ],
    audiences: [
      { title: "Transport routier & fret", description: "Trajets nombreux, carburant critique et engagement de délais." },
      { title: "BTP, mines & chantiers", description: "Engins dispersés, sites multiples et conditions d’exploitation exigeantes." },
      { title: "Collectivités & services publics", description: "Parcs hétérogènes, continuité de service et obligation de rendre compte." },
      { title: "Flottes commerciales & livraison", description: "Tournées, véhicules légers et optimisation quotidienne des opérations." },
    ],
    safeguards: [
      { title: "Échanges sécurisés", description: "Chiffrement des flux et contrôle des accès aux données de la flotte." },
      { title: "Déploiement flexible", description: "Cloud managé, sur site ou architecture hybride selon vos contraintes." },
      { title: "Matériel adapté au terrain", description: "Compatibilité avec des boîtiers télématiques conçus pour des usages intensifs." },
    ],
  },
  {
    slug: "lamina",
    name: "LAMINA",
    shortName: "LAMINA",
    category: "Billetterie · Réservation · Flux passagers",
    promise: "Le moteur de réservation et de billetterie des réseaux à haute capacité.",
    summary:
      "Inspirée des standards des grands systèmes de distribution, LAMINA relie inventaire, réservation, paiement et contrôle pour les trains urbains, les grandes lignes, les autocars et les réseaux interurbains.",
    cardDescription:
      "Un socle unifié pour piloter les capacités, distribuer les titres et fluidifier chaque étape du voyage.",
    logo: "/solutions/logo-lamina.png",
    visual: "/solutions/lamina-fiche.png",
    visualAlt: "Présentation de la plateforme de réservation et de billetterie LAMINA",
    visualPosition: "center top",
    accent: "#3E78A7",
    proofs: [
      { value: "GDS / API", label: "architecture ouverte" },
      { value: "360 jours", label: "horizon de vente" },
      { value: "99,9 %", label: "SLA haute disponibilité cible" },
      { value: "Omnicanal", label: "vente et paiement" },
    ],
    pillars: [
      {
        title: "Vision temps réel",
        description:
          "Rapprocher capacités, ventes, places, horaires et mouvements pour donner une lecture opérationnelle continue du réseau.",
      },
      {
        title: "Distribution fluide",
        description:
          "Proposer les titres sur plusieurs canaux sans fragmenter l’inventaire, le paiement ni la relation voyageur.",
      },
      {
        title: "Exploitation maîtrisée",
        description:
          "Faire évoluer les lignes, les offres, les tarifs et les volumes tout en conservant un socle cohérent et pilotable.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Horizon dynamique 360°",
        description:
          "Piloter les programmes, les capacités et l’ouverture des ventes avec une visibilité continue sur l’offre disponible.",
        tags: ["Inventaire", "Horaires", "Prévisions"],
      },
      {
        number: "02",
        title: "Seat map haute densité",
        description:
          "Administrer les plans de voitures, les classes, les compartiments et l’attribution des sièges selon les règles du réseau.",
        tags: ["Places", "Classes", "Attribution"],
      },
      {
        number: "03",
        title: "Paiement omnicanal souverain",
        description:
          "Centraliser les paiements issus du web, du mobile, des guichets et des terminaux dans une chaîne de réconciliation lisible.",
        tags: ["Mobile money", "Carte", "Réconciliation"],
      },
      {
        number: "04",
        title: "E-billet multimodal sécurisé",
        description:
          "Émettre des titres vérifiables, utilisables sur plusieurs segments et contrôlables même dans des contextes de connectivité limitée.",
        tags: ["QR sécurisé", "Multimodal", "Contrôle"],
      },
    ],
    audiences: [
      { title: "Opérateurs ferroviaires", description: "Réseaux urbains, grandes lignes et services régionaux à forte capacité." },
      { title: "Autorités organisatrices", description: "Pilotage des offres, des obligations de service et de la performance des réseaux." },
      { title: "Réseaux interurbains", description: "Autocars, dessertes régulées et exploitation de lignes multi-arrêts." },
      { title: "Exploitants multimodaux", description: "Combinaison de plusieurs modes et continuité du parcours voyageur." },
    ],
    safeguards: [
      { title: "Continuité de service", description: "Architecture conçue pour absorber les pics de vente et maintenir les fonctions critiques disponibles." },
      { title: "Transactions sécurisées", description: "Protection des paiements, des titres, des contrôles et des données voyageurs selon le contexte retenu." },
      { title: "Déploiement progressif", description: "Mise en œuvre par ligne, canal ou périmètre pilote avant généralisation maîtrisée." },
    ],
  },
  {
    slug: "patrimonia",
    name: "PATRIMONIA",
    shortName: "PATRIMONIA",
    category: "Patrimoine · Gouvernance · Actifs",
    promise: "Une vision fiable, souveraine et exploitable de chaque actif.",
    summary:
      "PATRIMONIA unifie l’inventaire physique et comptable, la cartographie, les affectations, les documents et les contrôles pour transformer un patrimoine dispersé en information gouvernable.",
    cardDescription:
      "La plateforme de gouvernance patrimoniale qui relie inventaire, responsabilités, valeur, documents et décisions.",
    logo: "/solutions/logo-patrimonia.png",
    visual: "/solutions/patrimonia-fiche.png",
    visualAlt: "Présentation de la plateforme de gestion et de gouvernance des actifs PATRIMONIA",
    visualPosition: "center top",
    accent: "#587A99",
    proofs: [
      { value: "M57 / M14", label: "référentiels comptables" },
      { value: "Cartographie", label: "vision géolocalisée" },
      { value: "Audit", label: "traçabilité des opérations" },
      { value: "RGPD", label: "gouvernance des données" },
    ],
    pillars: [
      {
        title: "Exhaustivité",
        description:
          "Consolider les actifs, leurs caractéristiques, leurs documents et leur localisation dans un registre commun.",
      },
      {
        title: "Responsabilité",
        description:
          "Relier chaque bien à son affectation, à son responsable, à son état et aux décisions qui jalonnent son cycle de vie.",
      },
      {
        title: "Pilotage",
        description:
          "Transformer les données patrimoniales en alertes, arbitrages, plans d’action et éléments de reddition des comptes.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Inventaire & géolocalisation",
        description:
          "Recenser les biens mobiliers et immobiliers, structurer leurs fiches et les situer sur une cartographie exploitable.",
        tags: ["Registre", "QR", "Cartographie"],
      },
      {
        number: "02",
        title: "Affectation & responsabilités",
        description:
          "Documenter les détenteurs, les usages, les transferts et les responsabilités rattachées à chaque actif.",
        tags: ["Affectations", "Transferts", "Historique"],
      },
      {
        number: "03",
        title: "Documentation & titres",
        description:
          "Centraliser les actes, titres, plans, diagnostics et pièces nécessaires à la preuve et à la conformité.",
        tags: ["GED", "Titres", "Conformité"],
      },
      {
        number: "04",
        title: "Valorisation & amortissements",
        description:
          "Suivre la valeur, les amortissements et les référentiels comptables applicables au patrimoine administré.",
        tags: ["Valeur", "M57 / M14", "Amortissements"],
      },
      {
        number: "05",
        title: "Contrôles & maintenance",
        description:
          "Planifier les inspections, conserver les constats et transformer les écarts en interventions suivies.",
        tags: ["Contrôles", "Maintenance", "Interventions"],
      },
      {
        number: "06",
        title: "Alertes & échéances",
        description:
          "Anticiper les renouvellements, les obligations, les contrats et les décisions à préparer.",
        tags: ["Alertes", "Échéances", "Décisions"],
      },
    ],
    audiences: [
      { title: "Services de l’État & ministères", description: "Inventaires importants, responsabilités multiples et exigences de conformité." },
      { title: "Collectivités territoriales", description: "Patrimoine réparti, compétences croisées et besoin de vision consolidée." },
      { title: "Établissements publics", description: "Actifs immobiliers, techniques et administratifs soumis à des contrôles réguliers." },
      { title: "Gestionnaires d’infrastructures", description: "Sites, équipements, concessions et programmes de maintenance à coordonner." },
    ],
    safeguards: [
      { title: "Souveraineté des données", description: "Choix d’hébergement et d’architecture adaptés aux exigences de l’organisation et à la sensibilité du patrimoine." },
      { title: "Auditabilité", description: "Journalisation, historique des modifications et pièces de preuve rattachées aux opérations." },
      { title: "Interopérabilité", description: "Échanges structurés avec les référentiels, outils comptables et systèmes déjà en place." },
    ],
  },
  {
    slug: "primimport-store",
    name: "Primimport.store",
    shortName: "Primi",
    category: "Marketplace · Commerce multivendeur",
    promise: "Une place de marché structurée pour vendre, découvrir et faire grandir des boutiques.",
    summary:
      "Une marketplace multivendeur conçue pour organiser les catalogues, valoriser les enseignes et simplifier le parcours entre la recherche d’un produit et la découverte d’une boutique.",
    cardDescription:
      "Une marketplace claire et évolutive pour fédérer des vendeurs, structurer leurs offres et fluidifier la découverte des produits.",
    logo: "/solutions/logo-primimport.png",
    visual: "/realisations/primi-marketplace.png",
    visualAlt: "Interface de la marketplace Primimport.store",
    visualPosition: "center top",
    accent: "#B5773E",
    proofs: [
      { value: "Multi", label: "vendeurs et boutiques" },
      { value: "Vérifié", label: "repérage des enseignes" },
      { value: "Ciblé", label: "recherche et filtres" },
      { value: "Évolutif", label: "catalogues et univers" },
    ],
    pillars: [
      {
        title: "Visibilité",
        description:
          "Donner à chaque boutique un espace identifiable et rendre ses nouveautés immédiatement accessibles.",
      },
      {
        title: "Confiance",
        description:
          "Clarifier l’identité des vendeurs, la présentation des offres et les informations utiles à la décision.",
      },
      {
        title: "Croissance commerciale",
        description:
          "Créer une base capable d’accueillir de nouveaux vendeurs, catégories et parcours sans repartir de zéro.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Boutiques & vendeurs",
        description:
          "Créer des vitrines distinctes, gérer les profils vendeurs et valoriser les enseignes vérifiées.",
        tags: ["Onboarding", "Vitrines", "Vérification"],
      },
      {
        number: "02",
        title: "Catalogue multivers",
        description:
          "Structurer produits, catégories et univers commerciaux dans une navigation simple à faire évoluer.",
        tags: ["Produits", "Catégories", "Nouveautés"],
      },
      {
        number: "03",
        title: "Recherche & découverte",
        description:
          "Combiner recherche, filtres et sélections pour réduire le temps nécessaire à trouver la bonne offre.",
        tags: ["Recherche", "Filtres", "Sélections"],
      },
      {
        number: "04",
        title: "Pilotage commercial",
        description:
          "Administrer les contenus, les vendeurs et les mises en avant depuis un espace centralisé.",
        tags: ["Back-office", "Modération", "Mise en avant"],
      },
    ],
    audiences: [
      { title: "Réseaux de commerçants", description: "Regrouper plusieurs enseignes sous une expérience commune et cohérente." },
      { title: "Distributeurs & importateurs", description: "Organiser un catalogue dense et animer plusieurs univers de produits." },
      { title: "Associations professionnelles", description: "Donner de la visibilité aux membres et faciliter la découverte de leurs offres." },
      { title: "Promoteurs de marketplace", description: "Lancer une place de marché sur une base déjà structurée et extensible." },
    ],
    safeguards: [
      { title: "Administration centralisée", description: "Gestion des vendeurs, boutiques, catalogues et contenus depuis un même espace." },
      { title: "Parcours évolutifs", description: "Ajout progressif de catégories, règles commerciales et intégrations selon le modèle retenu." },
      { title: "Données maîtrisées", description: "Rôles, permissions et traitement structuré des informations vendeurs et produits." },
    ],
  },
  {
    slug: "arozo",
    name: "AroZo",
    shortName: "AroZo",
    category: "Accès au droit · Assistance juridique",
    promise: "Le droit pour tous, la protection pour chacun.",
    summary:
      "Une plateforme numérique d’accès au droit qui réunit information juridique, parcours d’urgence, mise en relation et outils professionnels dans une expérience claire et sécurisée.",
    cardDescription:
      "Information, urgence, orientation et outils professionnels réunis dans un même espace d’accès au droit.",
    logo: "/solutions/logo-arozo.png",
    visual: "/solutions/arozo-sos-droits.png",
    visualAlt: "Parcours d’assistance juridique immédiate proposé par AroZo",
    visualPosition: "center top",
    accent: "#18A89B",
    proofs: [
      { value: "24/7", label: "assistance juridique" },
      { value: "< 3 min", label: "première orientation" },
      { value: "SOS Droits", label: "parcours d’urgence" },
      { value: "Annuaire", label: "professionnels du droit" },
    ],
    pillars: [
      {
        title: "Comprendre",
        description:
          "Expliquer les droits et les premières démarches dans une langue claire, avec des guides adaptés aux situations courantes.",
      },
      {
        title: "Agir",
        description:
          "Donner un parcours immédiat lorsque la situation exige une orientation, une mise en sécurité ou un rendez-vous rapide.",
      },
      {
        title: "Être accompagné",
        description:
          "Mettre la personne en relation avec un avocat ou un professionnel correspondant à son besoin et à sa localisation.",
      },
    ],
    modules: [
      {
        number: "01",
        title: "Assistance & SOS Droits",
        description:
          "Qualifier l’urgence, proposer les premières actions utiles et faciliter une prise en charge rapide.",
        tags: ["Orientation 24/7", "Urgence", "Mise en relation"],
      },
      {
        number: "02",
        title: "Espace citoyen sécurisé",
        description:
          "Centraliser demandes, échanges, documents et rendez-vous dans un parcours confidentiel et lisible.",
        tags: ["Dossier", "Documents", "Suivi"],
      },
      {
        number: "03",
        title: "Annuaire des professionnels",
        description:
          "Rechercher un avocat ou un intervenant selon la spécialité, la disponibilité et la zone géographique.",
        tags: ["Spécialités", "Disponibilités", "Localisation"],
      },
      {
        number: "04",
        title: "Guides & outils citoyens",
        description:
          "Rendre accessibles les droits essentiels, les modèles pratiques et les démarches à connaître.",
        tags: ["Guides", "Modèles", "Prévention"],
      },
    ],
    gallery: [
      {
        title: "Trouver le bon professionnel",
        description: "Un parcours par spécialité, disponibilité et localisation pour orienter la demande vers le bon interlocuteur.",
        image: "/solutions/arozo-annuaire.png",
        alt: "Annuaire et parcours de recherche d’un professionnel sur AroZo",
      },
      {
        title: "Obtenir une assistance immédiate",
        description: "Un parcours d’urgence guidé pour comprendre la situation, sécuriser les premières actions et demander de l’aide.",
        image: "/solutions/arozo-sos-droits.png",
        alt: "Parcours SOS Droits et assistance juridique immédiate sur AroZo",
      },
    ],
    audiences: [
      { title: "Citoyens & familles", description: "Comprendre une situation, préparer une démarche ou trouver rapidement de l’aide." },
      { title: "Avocats & professionnels du droit", description: "Présenter leurs domaines d’intervention et recevoir des demandes mieux qualifiées." },
      { title: "Barreaux & associations", description: "Structurer l’orientation juridique et renforcer les actions d’accès au droit." },
      { title: "Institutions & collectivités", description: "Diffuser une information fiable et orienter les citoyens vers les bons interlocuteurs." },
    ],
    safeguards: [
      { title: "Confidentialité", description: "Protection des échanges, des documents et des informations personnelles partagées." },
      { title: "Consentement clair", description: "Maîtrise des informations transmises avant toute mise en relation ou prise en charge." },
      { title: "Traçabilité", description: "Historique des demandes, des orientations et des étapes importantes du parcours." },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
