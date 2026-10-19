import {services,offers,campaignKeys,campaign,serviceFrom,validPage,validOffer,attribution,clean} from './conversion-core.mjs';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const q=new URLSearchParams(location.search),variant=q.get('variante')==='b'?'b':'a';
let service=serviceFrom(location.pathname,location.search),offer=validOffer(q.get('offre'),service);
let localStore,tabStore;try{localStore=window.localStorage;tabStore=window.sessionStorage;}catch{}
const consentKey='ilocap-measure-v1',sessionKey='ilocap-journey-v1';
const read=(storage,key)=>{try{return JSON.parse(storage.getItem(key));}catch{return null;}};
const write=(storage,key,value)=>{try{storage.setItem(key,JSON.stringify(value));}catch{}};
const remove=(storage,key)=>{try{storage.removeItem(key);}catch{}};
let choice=read(localStore,consentKey);if(!choice||choice.expires<Date.now())choice=null;
let accepted=choice?.allowed===true;
let ref='';try{if(document.referrer&&new URL(document.referrer).origin!==location.origin)ref=document.referrer;}catch{}
const current=attribution(location.search,location.pathname,ref),stored=accepted?read(tabStore,sessionKey):null;
const alive=stored?.seenAt>Date.now()-1800000;
let firstTouch=alive?stored.firstTouch:current,lastTouch=Object.keys(current.campaign).length||ref?current:alive?{...stored.lastTouch,page:current.page}:current;
let sessionId=alive?stored.sessionId:crypto.randomUUID();
const persist=()=>{if(accepted)write(tabStore,sessionKey,{firstTouch,lastTouch,sessionId,seenAt:Date.now()});};persist();
let isTest=false;
fetch('/api/context',{credentials:'same-origin',cache:'no-store'}).then(r=>r.ok?r.json():null).then(c=>{isTest=c?.isTest===true;if(isTest){refreshContext();ownerLinks();}}).catch(()=>{});
const context=()=>({service,offer,variant,page:validPage(location.pathname),firstTouch,lastTouch});
function event(name){if(!accepted)return;persist();fetch('/api/events',{method:'POST',credentials:'same-origin',keepalive:true,headers:{'Content-Type':'application/json'},body:JSON.stringify({...context(),id:crypto.randomUUID(),sessionId,name,consent:true})}).catch(()=>{});}
function briefContext(){const c=lastTouch.campaign;return '\n\nORIGINE DE LA DEMANDE\nService : '+services[service]+(offer?'\nOffre : '+offers[offer].label:'')+'\nSource : '+lastTouch.source+(c.utm_campaign?'\nCampagne : '+c.utm_campaign:'')+(c.utm_content?'\nContenu : '+c.utm_content:'');}
window.IlocapJourney={event,briefContext,privacy:openPrivacy,chooseService(value){if(services[value]){service=value;offer=validOffer(offer,service);refreshContext();}}};
function decorateLinks(){
 $$('a[href]').forEach(a=>{try{const u=new URL(a.getAttribute('href'),location.href);if(u.origin!==location.origin||!/(\.html$|\/$)/.test(u.pathname)||a.getAttribute('href').startsWith('#'))return;
 for(const k of campaignKeys)if(lastTouch.campaign[k]&&!u.searchParams.has(k))u.searchParams.set(k,lastTouch.campaign[k]);
 const dest=serviceFrom(u.pathname,u.search);if(dest===service){if(offer)u.searchParams.set('offre',offer);if(variant==='b')u.searchParams.set('variante','b');}
 a.href=u.pathname+u.search+u.hash;}catch{}});
}
decorateLinks();
if(offer){const o=offers[offer],title=$('[data-campaign-title]'),lead=$('[data-campaign-lead]');if(title){title.replaceChildren(document.createTextNode(o.headline),document.createElement('br'));const em=document.createElement('em');em.textContent=o.emphasis;title.append(em);}if(lead)lead.textContent=o.lead;$$('[data-lead-form] textarea[name=message]').forEach(t=>t.placeholder=o.prompt);}
const activeOffer=offers[offer];
if(activeOffer?.cta){const label=variant==='b'?activeOffer.ctaAlt||activeOffer.cta:activeOffer.cta;$$('[data-cta-label]').forEach(a=>a.textContent=label);const heading=$('[data-campaign-form-title]');if(heading)heading.textContent=label+'.';}
else if(variant==='b'&&document.body.dataset.ctaAlt)$$('[data-cta-label]').forEach(a=>a.textContent=document.body.dataset.ctaAlt);
function refreshContext(){const note='Service : '+services[service]+(offer?' · '+offers[offer].label:'')+(lastTouch.campaign.utm_campaign?' · Campagne : '+lastTouch.campaign.utm_campaign:'')+'. Ces repères accompagnent votre demande.'+(isTest?' Vous testez le site en tant que propriétaire : cette demande sera classée en recette.':'');$$('[data-context-note]').forEach(n=>n.textContent=note);}
refreshContext();
function ownerLinks(){
 if(!isTest)return;
 const footer=$('.footer-bottom');if(footer&&!footer.querySelector('[data-crm-owner]')){const a=document.createElement('a');a.href='/suivi';a.className='inline-link';a.dataset.crmOwner='';a.textContent='Mon CRM ILOCAP';footer.append(a);}
 $$('[data-lead-form][data-receipt-reference]').forEach(form=>{if(form.querySelector('[data-crm-receipt]'))return;const a=document.createElement('a');a.className='button secondary';a.dataset.crmReceipt='';a.textContent='Retrouver cette demande dans le CRM';a.href='/suivi?recette=1&reference='+encodeURIComponent(form.dataset.receiptReference);form.querySelector('[data-form-result]').append(a);});
}
function whatsappMessage(message='',name='',reference=''){
 return ['Bonjour ILOCAP,',reference?'Référence : '+reference:'',name?'Je suis '+name+'.':'',service!=='general'?'Mon besoin : '+services[service]+(offer?' — '+offers[offer].label:''):'',message,briefContext()].filter(Boolean).join('\n\n');
}
$$('a[data-whatsapp]').forEach(a=>a.href='https://wa.me/261343807857?text='+encodeURIComponent(whatsappMessage()));
document.addEventListener('click',e=>{
 const link=e.target.closest('a');if(link){const href=link.href;if(href.includes('wa.me/'))event('whatsapp_open');else if(href.includes('calendly.com/'))event('booking_open');else if(link.matches('.button,[data-topic]'))event('cta_click');}
 const topic=e.target.closest('[data-topic]');if(topic){const t=$('[data-lead-form] textarea[name=message]');if(t&&!t.value.trim())t.value='Je souhaite échanger sur '+topic.dataset.topic+'.\n\nMon contexte : ';}
 if(e.target.closest('[data-privacy],#privacy-open')){e.preventDefault();openPrivacy();}
 if(e.target.closest('[data-measure]')){e.preventDefault();showChoice(true);}
});
$$('[data-lead-form]').forEach(form=>{
 let id=crypto.randomUUID(),started=false,received=false;
 form.addEventListener('focusin',()=>{if(!started){started=true;event('form_start');}});
 form.addEventListener('submit',async e=>{
 e.preventDefault();if(received||form.dataset.busy==='1')return;
 const error=form.querySelector('[data-form-error]'),button=form.querySelector('button[type=submit]'),receipt=form.querySelector('[data-receipt]'),result=form.querySelector('[data-form-result]');
 const fd=new FormData(form),payload={...context(),id,name:fd.get('name'),contact:fd.get('contact'),message:fd.get('message'),details:fd.get('details'),website:fd.get('website'),consent:fd.get('consent')==='on'};
 const phone=String(payload.contact||'').replace(/[\s()+.\-]/g,'');
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(payload.contact))&&!/^\+?\d{7,15}$/.test(phone)){error.textContent='Indiquez un email ou un numéro WhatsApp avec indicatif.';form.elements.contact.focus();return;}
 error.textContent='';button.disabled=true;button.textContent='Envoi en cours…';form.dataset.busy='1';result.hidden=true;
 const wa=form.querySelector('[data-whatsapp]');
 try{
  const response=await fetch('/api/leads',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}),data=await response.json();
  if(!response.ok||!data.ok)throw Error(data.error||'La demande n’a pas pu être enregistrée.');
  received=true;form.dataset.receiptReference=data.reference;ownerLinks();receipt.textContent='Merci, votre demande a bien été reçue. Référence : '+data.reference+'. Vous pouvez poursuivre sur WhatsApp en rappelant cette référence.';
  wa.href='https://wa.me/261343807857?text='+encodeURIComponent(whatsappMessage(payload.message,payload.name,data.reference));result.hidden=false;button.textContent='Demande reçue';
  form.querySelectorAll('input,textarea').forEach(input=>input.disabled=true);receipt.setAttribute('tabindex','-1');receipt.focus({preventScroll:true});
 }catch(err){
  error.textContent=err.message||'L’envoi n’a pas abouti. Votre saisie est conservée.';receipt.textContent='Vous pouvez réessayer ou transmettre directement ce message sur WhatsApp. Aucun enregistrement n’est confirmé ici.';
  wa.href='https://wa.me/261343807857?text='+encodeURIComponent(whatsappMessage(payload.message,payload.name));result.hidden=false;button.disabled=false;button.textContent='Réessayer l’envoi';
 }finally{form.dataset.busy='0';}
 });
});
const consentUI=document.createElement('section');consentUI.className='measure-choice';consentUI.setAttribute('aria-label','Choix de mesure d’audience');consentUI.hidden=true;
consentUI.innerHTML='<div><strong>Nous aider à améliorer ce parcours ?</strong><p>Avec votre accord, nous mesurons les visites et les clics sur ce site. Aucune saisie de formulaire ni aucun enregistrement d’écran n’est transmis à un outil publicitaire.</p><button type="button" class="inline-link" data-privacy>En savoir plus</button></div><div class="measure-actions"><button type="button" class="button secondary" data-choice="no">Refuser</button><button type="button" class="button secondary" data-choice="yes">Accepter</button></div>';
document.body.append(consentUI);
function showChoice(focus=false){consentUI.hidden=false;if(focus)consentUI.querySelector('button[data-choice]').focus();}
consentUI.addEventListener('click',e=>{const b=e.target.closest('[data-choice]');if(!b)return;accepted=b.dataset.choice==='yes';choice={allowed:accepted,expires:Date.now()+180*86400000};write(localStore,consentKey,choice);consentUI.hidden=true;if(accepted){persist();event('page_view');}else remove(tabStore,sessionKey);});
if(!choice)showChoice();else if(accepted)event('page_view');
const footer=$('.footer-bottom');if(footer){const b=document.createElement('button');b.type='button';b.className='inline-link';b.dataset.measure='';b.textContent='Mesure d’audience';footer.append(b);}
let privacy;
function openPrivacy(){
 if(!privacy){privacy=document.createElement('dialog');privacy.className='journey-privacy';privacy.setAttribute('aria-labelledby','journey-privacy-title');privacy.innerHTML='<button class="privacy-close" type="button" aria-label="Fermer la confidentialité">×</button><p class="eyebrow">CONFIDENTIALITÉ</p><h2 id="journey-privacy-title">Vos informations,<br>votre choix.</h2><p><a class="inline-link" href="/politique-de-confidentialite">Lire la politique de confidentialité complète</a></p><h3>Votre demande de contact</h3><p>Le formulaire transmet à ILOCAP votre nom, votre email ou numéro WhatsApp, votre besoin et les précisions choisies. Le service, la page et les repères de campagne associés accompagnent la demande pour préparer la réponse. Ces informations sont enregistrées dans notre espace de suivi privé. Elles ne sont ni publiées ni envoyées à un outil publicitaire.</p><h3>Votre diagnostic</h3><p>Vos réponses restent dans la page tant que vous ne choisissez pas de les inclure dans une demande. Le téléchargement du brief s’effectue dans votre navigateur.</p><h3>Mesure facultative</h3><p>Avec votre accord, nous comptons les visites et certaines actions : clic sur un bouton, début de formulaire, diagnostic terminé, ouverture de WhatsApp ou de Calendly. Un identifiant aléatoire reste dans votre onglet pendant la session. Nous n’enregistrons ni les saisies, ni votre écran, ni votre adresse IP dans cette mesure. Le tableau analyse les événements sur une fenêtre de 90 jours ; les événements plus anciens sont purgés lors de son utilisation. Votre choix de mesure est mémorisé pendant 180 jours ; vous pouvez le modifier à tout moment.</p><p>Refuser la mesure ne bloque pas le formulaire. Aucun outil externe d’analyse ou pixel publicitaire n’est actuellement activé.</p><h3>Les plateformes externes</h3><p>WhatsApp, Calendly et LinkedIn appliquent leurs propres règles lorsque vous décidez de les ouvrir. Une ouverture ne prouve ni l’envoi d’un message ni la confirmation d’un rendez-vous.</p><h3>Nous contacter</h3><p>ILOCAP SARLU · Antananarivo, Madagascar.<br>Pour une question ou une demande de suppression : <a class="inline-link" href="https://wa.me/261343807857" target="_blank" rel="noopener noreferrer">+261 34 38 078 57 sur WhatsApp</a>. Les demandes sont conservées pour traiter et suivre la relation ; leur suppression est possible dans l’espace privé.</p><button class="button secondary" type="button" data-measure>Modifier mon choix de mesure</button>';
 document.body.append(privacy);privacy.querySelector('.privacy-close').addEventListener('click',()=>privacy.close());privacy.addEventListener('click',e=>{if(e.target.closest('[data-measure]'))privacy.close();if(e.target===privacy){const r=privacy.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)privacy.close();}});}
 privacy.showModal();
}
if(q.get('confidentialite')==='1')openPrivacy();
if(q.get('mesure')==='1')showChoice(true);
const mobile=$('[data-mobile-cta]');if(mobile&&'IntersectionObserver'in window){let heroVisible=true,formVisible=false;const refresh=()=>mobile.hidden=heroVisible||formVisible;const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.target.matches('.landing-hero .actions'))heroVisible=e.isIntersecting;else formVisible=e.isIntersecting;}refresh();},{threshold:0});const hero=$('.landing-hero .actions'),form=$('#projet');if(hero)observer.observe(hero);if(form)observer.observe(form);}
