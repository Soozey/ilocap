import {defaultRules,nextFollowup,report} from './crm-core.mjs';
export function createDemoStore(now=new Date()){
 let rules={...defaultRules},leads=[],histories=new Map();
 const ago=n=>new Date(new Date(now).getTime()-n*86400000).toISOString();
 function make(name,service,status,source,message,days,offer=''){
  const id=crypto.randomUUID(),created=ago(days);return {id,reference:'DEMO-'+id.slice(0,8).toUpperCase(),created_at:created,updated_at:created,name:'Démo · '+name,contact:'contact-'+id.slice(0,4)+'@example.test',service,offer,message,details:'Scénario fictif destiné à la présentation du CRM.',source,medium:source==='facebook'?'social':'manuel',campaign:source==='facebook'?'demo_relation_client':'',content:'demo',term:'',first_touch:'{}',last_touch:'{}',entry_page:'/',variant:'a',status,owner:rules.owner,next_followup:nextFollowup(status,rules,ago(days)),notes:'Prochaine étape : préciser le périmètre et valider les informations utiles.',amount:status==='gagne'?1500000:0,is_test:0,consent_version:'demo'};
 }
 function reset(){rules={...defaultRules};leads=[
 make('Centre de contacts','ia-automatisation','nouveau','facebook','Étudier un agent IA pour orienter les demandes et préparer la reprise par un conseiller.',0,'agents-relation-client'),
 make('Atelier en ligne','sites-applications','nouveau','recommandation','Présenter nos réalisations et recevoir des demandes de devis sur un site clair.',1,'site-vitrine'),
 make('Catalogue commerce','externalisation-bpo','contacte','whatsapp','Déléguer la saisie du catalogue avec une mission pilote et une vérification des fiches.',4,'catalogues'),
 make('Équipe services','ia-automatisation','qualifie','facebook','Réduire la ressaisie entre le formulaire de demande et notre tableau de suivi.',2,'workflow-pilote'),
 make('Maison artisanale','design-marketing','rdv','recommandation','Préparer une identité cohérente et des supports pour présenter nos produits.',1,'communication'),
 make('Réseau boutiques','sites-applications','proposition','email','Concevoir un outil simple pour centraliser les réservations de nos boutiques.',6),
 make('Équipe administrative','externalisation-bpo','gagne','direct','Organiser une mission pilote de traitement administratif avec contrôle qualité.',8),
 make('Projet reporté','design-marketing','perdu','facebook','Le projet de communication est reporté à une prochaine période.',9)];histories=new Map(leads.map(l=>[l.id,[{created_at:l.created_at,status:l.status,note:'Scénario fictif chargé pour la démonstration.'}]]));}
 function snapshot(url){const q=new URL(url,'https://demo.example.test').searchParams,days=Number(q.get('days'))||30,service=q.get('service');const rows=leads.filter(l=>(!service||l.service===service)&&l.created_at>=ago(days));return {rules:{...rules},leads:structuredClone(rows),report:report([],rows),days};}
 reset();
 return {reset,simulate(){const l=make('Nouvelle demande simulée','ia-automatisation','nouveau','facebook','Qualifier les demandes entrantes et transférer les cas qui nécessitent un conseiller.',0,'agents-relation-client');leads.unshift(l);histories.set(l.id,[{created_at:l.created_at,status:l.status,note:'Formulaire simulé reçu. Responsable attribué et première relance planifiée.'}]);return structuredClone(l);},
 async request(url,options={}){const method=options.method||'GET',b=options.body?JSON.parse(options.body):{};
 if(url.startsWith('/api/admin/data'))return snapshot(url);
 if(url.startsWith('/api/admin/history'))return {history:structuredClone(histories.get(new URL(url,'https://demo.example.test').searchParams.get('id'))||[])};
 if(url==='/api/admin/settings'&&method==='PATCH'){rules={...b};return {ok:true,rules:{...rules}};}
 const id=url.split('/').pop(),l=leads.find(x=>x.id===id);if(!l)throw Error('Demande de démonstration introuvable.');
 if(method==='DELETE'){leads=leads.filter(x=>x.id!==id);histories.delete(id);return {ok:true};}
 if(method==='PATCH'){const next=['gagne','perdu'].includes(b.status)?'':b.autoFollowup&&b.status!==l.status?nextFollowup(b.status,rules,now):b.nextFollowup;Object.assign(l,{status:b.status,owner:b.owner,next_followup:next,notes:b.notes,amount:Number(b.amount)||0,updated_at:new Date().toISOString()});histories.get(id).unshift({created_at:l.updated_at,status:l.status,note:'Suivi modifié dans la démonstration.'});return {ok:true,updatedAt:l.updated_at,nextFollowup:next};}
 throw Error('Action indisponible dans la démonstration.');}
 };
}
