export const statuses={nouveau:'Nouvelle demande',contacte:'Contact engagé',qualifie:'Besoin qualifié',rdv:'Rendez-vous confirmé',proposition:'Proposition envoyée',gagne:'Contrat signé',perdu:'Sans suite'};
export const stages=[{label:'Nouveaux',statuses:['nouveau']},{label:'En échange',statuses:['contacte','qualifie']},{label:'Opportunités',statuses:['rdv','proposition']},{label:'Clôturés',statuses:['gagne','perdu']}];
export const defaultRules={owner:'ILOCAP',initialDays:1,followupDays:2,proposalDays:3};
export const localDay=(now=new Date())=>new Date(new Date(now).getTime()+3*3600000).toISOString().slice(0,10);
export function businessDate(now,days){const d=new Date(localDay(now)+'T00:00:00Z');for(let n=0;n<days;){d.setUTCDate(d.getUTCDate()+1);if(d.getUTCDay()!==0&&d.getUTCDay()!==6)n++;}return d.toISOString().slice(0,10);}
export function validRules(r){return r&&typeof r.owner==='string'&&r.owner.trim().length>=2&&r.owner.length<=100&&!/[\x00-\x1f\x7f]/.test(r.owner)&&['initialDays','followupDays','proposalDays'].every(k=>Number.isInteger(r[k])&&r[k]>=1&&r[k]<=30);}
export function nextFollowup(status,rules=defaultRules,now=new Date()){return ['gagne','perdu'].includes(status)?'':businessDate(now,status==='nouveau'?rules.initialDays:status==='proposition'?rules.proposalDays:rules.followupDays);}
export const isDue=(l,now=new Date())=>!['gagne','perdu'].includes(l.status)&&Boolean(l.next_followup)&&l.next_followup<=localDay(now);
export function report(events,leads){
 const rows=new Map();const row=x=>{const key=JSON.stringify([x.source,x.medium,x.campaign,x.service,x.offer,x.variant]);if(!rows.has(key))rows.set(key,{source:x.source,medium:x.medium,campaign:x.campaign,service:x.service,offer:x.offer,variant:x.variant,sessions:new Set(),page_view:0,cta_click:0,form_start:0,whatsapp_open:0,booking_open:0,leads:0,qualified:0,meetings:0,proposals:0,won:0,revenue:0});return rows.get(key);};
 for(const e of events){const r=row(e);if(e.name==='page_view')r.sessions.add(e.session_id);if(e.name in r&&typeof r[e.name]==='number')r[e.name]++;}
 for(const l of leads){const r=row(l);r.leads++;if(['qualifie','rdv','proposition','gagne'].includes(l.status))r.qualified++;if(['rdv','proposition','gagne'].includes(l.status))r.meetings++;if(['proposition','gagne'].includes(l.status))r.proposals++;if(l.status==='gagne'){r.won++;r.revenue+=Number(l.amount)||0;}}
 return [...rows.values()].map(r=>({...r,sessions:r.sessions.size})).sort((a,b)=>b.leads-a.leads||b.sessions-a.sessions);
}
