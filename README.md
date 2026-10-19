# ILOCAP — Le digital avec du sens

Le site public est déployé sur **https://ilocap.com** par le workflow `Deploy to VPS`. Un push sur `main` récupère le dépôt sur le VPS et reconstruit le conteneur Docker. Le port et les secrets du déploiement existant restent inchangés.

## Présentation validée

Le HTML, les styles, scripts et 21 visuels actifs sont dans `public/`. Ils reprennent la version validée du projet ILOCAP (source Sites `5dcd6387817ec92486c9254b0d360c5f977be05c`), avec quatre expertises indépendantes, huit solutions, leurs fiches, le diagnostic, quatre landing pages et la confidentialité. Les fichiers `content/`, `seo.config.json` et les générateurs Python permettent de maintenir les contenus. Les anciens liens publics sont redirigés vers leurs remplaçants.

Le route handler `/` sert le document complet sans lui ajouter les anciens scripts d’analyse ou la mise en page React historique. Le précédent service worker est retiré pour éviter de conserver l’ancienne présentation. Le stockage local des choix et les données des anciennes bases ne sont pas supprimés.

## Formulaires et CRM

Le VPS conserve le CRM opérationnel existant sur `https://ilocap-digital-sens.lunarfrog7.chatgpt.site`. Seuls `/api/context` (GET), `/api/leads` et `/api/events` (POST) sont relayés, côté serveur, vers ce service fixe. Le corps est limité à 16 000 octets. Cookies, identité et jetons du visiteur ne sont jamais transmis. Les validations de consentement, l’idempotence et le stockage D1 restent assurés par le service existant. Les formulaires conservent leur saisie si le service est indisponible.

`/suivi` conduit à l’espace CRM protégé par la connexion du propriétaire. Les opérations `/api/admin/*` sont refusées sur le VPS. `/demo-crm` utilise exclusivement des données fictives locales, sans accès aux vrais prospects. Le CRM reste donc dépendant de l’hébergement Sites : il n’a pas été migré vers Supabase. Les anciennes intégrations Supabase/Resend sont conservées pour compatibilité, sans migration ni suppression de leurs données ou secrets.

## Vérification

```sh
npm ci
node checks/gateway.mjs
node checks/solutions.cjs
node checks/solution-deck.cjs
node checks/expertise-book.cjs
node checks/floating-reader.cjs
node checks/crm-demo.mjs
python3 checks/seo.py
npm run build
```

Le conteneur expose `/api/release` pour le contrôle de disponibilité. Les tests du relais couvrent notamment le refus des routes privées et des origines externes, la non-transmission des identités et cookies, les limites de taille, les références reçues et les erreurs. Le contrôle de déploiement vérifie aussi les réponses HTTP publiques.

Pour revenir à une version précédente, effectuer un `git revert` du commit de livraison sur `main` : le même workflow reconstruit cette version. Les données du CRM ne sont pas affectées par le retour du code.
