/* Shared, deterministic service orientation. No network or data persistence. */
(function(root){
  'use strict';
  const services = [
    {id:'platform',title:'Sites web & applications métier',short:'Plateformes digitales',description:'Des sites et des outils sur mesure, pensés pour vos utilisateurs et votre organisation.',items:['Sites vitrines et landing pages','Applications métier et extranets','E-commerce et marketplaces','Conception UX/UI et adaptation mobile'],deliverable:'Un parcours utilisateur, un périmètre fonctionnel et une plateforme adaptée à vos usages.',first:'Cadrer un parcours prioritaire et les fonctions indispensables avant de concevoir.'},
    {id:'automation',title:'IA & automatisation',short:'IA & automatisation',description:'Moins de ressaisie, des échanges plus fluides et des processus qui vous font gagner du temps.',items:['Agents IA et appui à la relation client','Automatisation des tâches et circuits de validation','Connexions entre outils et données','Scénarios, contrôles et relais humains à cadrer'],deliverable:'Un processus prioritaire simplifié, testé et documenté avec vos équipes.',first:'Cartographier une tâche répétitive, ses règles et ses exceptions, puis tester un premier workflow.'},
    {id:'bpo',title:'BPO & assistance virtuelle',short:'BPO & assistance virtuelle',description:'Une prise en charge organisée de vos tâches récurrentes, avec des consignes et des validations claires.',items:['Qualification et enrichissement de fichiers','Saisie, transcription et gestion documentaire','Assistance administrative et gestion d’agenda','Support, mise en ligne et suivi de contenus'],deliverable:'Un périmètre de mission, des consignes d’exécution et un contrôle qualité définis ensemble.',first:'Choisir une tâche pilote, préciser son volume, les consignes et les critères de validation.'},
    {id:'design',title:'Design & contenus',short:'Design & contenus',description:'Une identité claire et des contenus soignés pour rendre votre offre lisible et désirable.',items:['Identité visuelle et supports de communication','Interfaces et parcours UX/UI','Illustrations, schémas et visuels','Rédaction, vidéo et contenus multimédias'],deliverable:'Des supports cohérents avec votre marque et adaptés aux canaux choisis.',first:'Préciser votre public, le message à transmettre et les supports à produire.'},
    {id:'marketing',title:'Marketing digital & visibilité',short:'Marketing digital',description:'Les bons messages, sur les bons canaux, pour mieux faire connaître votre activité.',items:['Community management et animation','Campagnes Google et réseaux sociaux','Parcours de conversion et fidélisation','Contenus et présence digitale'],deliverable:'Un plan d’action, des contenus et des indicateurs alignés sur vos objectifs.',first:'Définir votre cible, votre offre prioritaire et l’action attendue de vos prospects.'},
    {id:'data',title:'Intégration & données',short:'Intégration & données',description:'Connectez vos sources et rendez vos informations plus fiables, lisibles et utiles à la décision.',items:['Centralisation et structuration des données','Connexion d’outils et intégrations API','Tableaux de bord et reporting','Qualité et synchronisation des données'],deliverable:'Des sources identifiées, des règles partagées et une information exploitable.',first:'Inventorier les sources, leurs responsables et les indicateurs réellement utiles.'}
  ];
  const needs = [
    {id:'web',title:'Créer ou refondre un site',hint:'Présence web & conversion',weights:{platform:5,design:2,marketing:1}},
    {id:'app',title:'Structurer mon activité',hint:'Outils & applications métier',weights:{platform:5,automation:2,data:1}},
    {id:'agents',title:'Intégrer un agent IA',hint:'Relation client & appui aux équipes',weights:{automation:6,data:2,bpo:1}},
    {id:'auto',title:'Réduire les tâches répétitives',hint:'Workflows & ressaisie',weights:{automation:5,data:2,bpo:1}},
    {id:'data',title:'Fiabiliser mes données',hint:'Intégration & reporting',weights:{data:5,automation:2}},
    {id:'brand',title:'Valoriser ma marque',hint:'Design & contenus',weights:{design:5,marketing:2}},
    {id:'visibility',title:'Gagner en visibilité',hint:'Communication & acquisition',weights:{marketing:5,design:2}},
    {id:'commerce',title:'Vendre en ligne',hint:'E-commerce & marketplace',weights:{platform:5,marketing:2,data:1}},
    {id:'delegate',title:'Déléguer des tâches',hint:'BPO & assistance virtuelle',weights:{bpo:6,automation:1}}
  ];
  const sectors={pme:'Entreprise & services',commerce:'Commerce & distribution',tourisme:'Tourisme & événementiel',institution:'ONG, institution & collectivité',conseil:'Cabinet & profession libérale',autre:'Autre activité'};
  const timings={explore:'Je prépare mon projet',quarter:'Je souhaite avancer sous 1 à 3 mois',urgent:'J’ai un besoin prioritaire à traiter'};
  function recommend(ids,context={}){
    const selected=[...new Set(ids)].map(id=>needs.find(n=>n.id===id)).filter(Boolean).slice(0,3);
    if(!selected.length)return {ranked:[],firstStep:'',selected:[]};
    const ranked=services.map((s,i)=>({...s,order:i,score:selected.reduce((sum,n)=>sum+(n.weights[s.id]||0),0),reasons:selected.filter(n=>(n.weights[s.id]||0)>0).map(n=>n.title)})).filter(s=>s.score>0).sort((a,b)=>b.score-a.score||a.order-b.order).slice(0,3);
    let firstStep=context.maturity==='existing'?'Commencer par un état des lieux de vos outils et de vos pratiques. ':'Clarifier le besoin et les utilisateurs concernés. ';
    firstStep+=ranked[0].first;
    if(context.timing==='urgent')firstStep+=' Pour votre priorité immédiate, isoler un périmètre pilote court à confirmer ensemble.';
    else if(context.timing==='quarter')firstStep+=' Préparer un calendrier de mise en œuvre et les ressources à mobiliser.';
    else firstStep+=' Formaliser une feuille de route avant de décider des investissements.';
    return {ranked,firstStep,selected};
  }
  function briefText(result,context={}){
    if(!result.selected.length)return '';
    return ['ILOCAP — LE DIGITAL AVEC DU SENS','MON BRIEF DE PROJET','', 'MES PRIORITÉS',...result.selected.map(n=>'• '+n.title),'','MON CONTEXTE','Activité : '+(sectors[context.sector]||sectors.pme),'Situation : '+(context.maturity==='existing'?'Des outils ou une organisation existent déjà':'Une idée ou un besoin à structurer'),'Horizon : '+(timings[context.timing]||timings.explore),'','EXPERTISES RECOMMANDÉES',...result.ranked.map((s,i)=>(i+1)+'. '+s.title+'\nPourquoi : '+s.reasons.join(' ; ')+'\nÀ préparer : '+s.deliverable),'','PREMIÈRE ÉTAPE',result.firstStep,'','À PRÉCISER AVEC ILOCAP','• Personnes concernées et usages attendus','• Outils et données disponibles','• Volumes, contraintes et budget envisagé','• Livrables et critères de validation','','Orientation indicative : le périmètre, les prix et les délais sont définis après cadrage.','','CONTACT','Rendez-vous : https://calendly.com/candriatiana/30min','WhatsApp : +261 34 38 078 57'].join('\n');
  }
  root.IlocapCore={services,needs,sectors,timings,recommend,briefText};
  if(typeof module!=='undefined'&&module.exports)module.exports=root.IlocapCore;
})(typeof window!=='undefined'?window:globalThis);
