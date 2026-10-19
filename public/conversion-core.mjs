export const services={
 'sites-applications':'Sites & applications', 'ia-automatisation':'IA & automatisation',
 'design-marketing':'Design & marketing', 'externalisation-bpo':'Externalisation & assistance', general:'Projet à préciser'
};
export const offers={
 'site-vitrine':{service:'sites-applications',label:'Site vitrine',headline:'Votre offre, clairement présentée.',emphasis:'Un site qui facilite le contact.',lead:'Présentez votre activité avec des pages utiles, un parcours mobile lisible et un point de contact simple. Le premier échange permet de définir les pages, les contenus et les fonctions nécessaires.',prompt:'Votre activité, les pages utiles et ce que le visiteur doit pouvoir faire…'},
 'agents-relation-client':{service:'ia-automatisation',label:'Agents IA pour la relation client',headline:'Des agents IA pour votre relation client.',emphasis:'Pensés pour votre organisation.',lead:'Entreprises et centres d’appels : définissons les scénarios, les outils et les interactions entre l’agent IA et vos équipes. Les canaux et les intégrations font partie du périmètre à valider.',prompt:'Les demandes concernées, vos canaux actuels, les volumes et le relais attendu vers vos équipes…',cta:'Étudier mon projet d’agent IA',ctaAlt:'Cadrer mon scénario d’agent IA'},
 'workflow-pilote':{service:'ia-automatisation',label:'Premier processus automatisé',headline:'Une tâche répétitive en moins.',emphasis:'Commençons par un processus.',lead:'Partons d’une relance, d’un document ou d’une ressaisie. Nous définissons les règles, les outils à connecter et un premier test, avec les validations humaines nécessaires.',prompt:'La tâche répétitive, les outils utilisés et les exceptions à prévoir…'},
 'communication':{service:'design-marketing',label:'Communication d’une offre',headline:'Votre offre mérite un message clair.',emphasis:'Et les bons supports.',lead:'Clarifions la cible, le message et l’action attendue avant de produire vos supports. Nous cadrons les formats, les validations et le canal de diffusion autour d’une offre prioritaire.',prompt:'Votre offre, votre cible et les supports dont vous avez besoin…'},
 'catalogues':{service:'externalisation-bpo',label:'Saisie et mise à jour de catalogues',headline:'Vos catalogues, à jour.',emphasis:'Votre équipe, disponible.',lead:'Confiez la saisie et la mise à jour de vos fiches produits selon vos consignes. Nous commençons par un échantillon validé ensemble, avec des critères de qualité et un suivi des corrections.',prompt:'Le nombre de fiches, les informations disponibles et la fréquence des mises à jour…'}
};
export const campaignKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
export const clean=(v,n=100)=>typeof v==='string'?v.replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,n):'';
export const tag=v=>clean(v,100).replace(/[^\p{L}\p{N} _.,:/-]/gu,'');
export function campaign(search){const q=new URLSearchParams(search);const out={};for(const k of campaignKeys){const v=tag(q.get(k));if(v)out[k]=v;}return out;}
export function serviceFrom(path,search=''){const slug=path.split('/').pop().replace(/\.html$/,'');if(services[slug])return slug;const s=new URLSearchParams(search).get('origine');return services[s]?s:'general';}
export function validPage(v){const p=clean(v,100);return /^\/(?:(?:index|accompagnement|sites-applications|ia-automatisation|design-marketing|externalisation-bpo)(?:\.html)?)?$/.test(p)?p:'/';}
export function safeTouch(v){return {page:validPage(v?.page),...campaign(new URLSearchParams(v?.campaign||{}).toString())};}
export function validOffer(key,service){return offers[key]?.service===service?key:'';}
export function attribution(search,path,referrer=''){
 const c=campaign(search);let source=c.utm_source||'direct',medium=c.utm_medium||'';
 if(source==='direct'&&referrer){try{const h=new URL(referrer).hostname;if(h){source=tag(h);medium='referral';}}catch{}}
 return {page:validPage(path),campaign:c,source,medium};
}
export function buildCampaignLink(origin,service,offer,fields={},variant='a'){
 if(!services[service]||service==='general')throw new Error('Service inconnu');
 const u=new URL(service+'.html',origin);const o=validOffer(offer,service);if(o)u.searchParams.set('offre',o);
 for(const [k,v] of Object.entries(campaign(new URLSearchParams(fields).toString())))u.searchParams.set(k,v);
 u.searchParams.set('variante',variant==='b'?'b':'a');return u.href;
}
