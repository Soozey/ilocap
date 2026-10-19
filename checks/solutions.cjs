const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const products=JSON.parse(fs.readFileSync('content/solutions.json','utf8')),html=fs.readFileSync('public/index.html','utf8').replace(/&amp;/g,'&');
assert.equal(products.length,8);assert.equal(new Set(products.map(p=>p.id)).size,8);
for(const p of products){assert.ok(html.includes(p.subtitle),p.id);assert.ok(html.includes('<h3>'+p.name+'</h3>'),p.id);assert.ok(fs.existsSync('public/assets/'+p.visual));assert.ok(p.scope.length>35);assert.ok(html.includes('data-product="'+p.id+'" aria-haspopup="dialog" aria-controls="detail-dialog"'));}
assert.ok(html.includes('offre=agents-relation-client'));assert.ok(!html.includes('Pas besoin de parler technique'));
const coreSandbox={module:{exports:{}}};vm.runInNewContext(fs.readFileSync('public/core.js','utf8'),coreSandbox);
const elements=new Map(),clicks=[],chosen=[],window={IlocapJourney:{chooseService(s){chosen.push(s);}}};
vm.runInNewContext(fs.readFileSync('public/solutions-data.js','utf8'),{window});
assert.equal(window.IlocapSolutions.length,8);assert.ok(window.IlocapSolutions.every(p=>p.art.includes('<img')));
function el(selector){if(!elements.has(selector))elements.set(selector,{innerHTML:'',textContent:'',hidden:false,open:false,style:{},dataset:{},events:{},classes:new Set(),classList:{toggle(k,on){this[k]=on;}},addEventListener(t,f){this.events[t]=f;},focus(){},close(){this.open=false;this.events.close?.();},showModal(){this.open=true;}});return elements.get(selector);}
const filters=['all','operations','rh','commerce','droit','sante'].map(id=>{const e=el('.filter-'+id);e.dataset.filter=id;e.setAttribute=function(k,v){this[k]=v;};return e;});
const cards=products.map(p=>{const e=el('.card-'+p.id);e.dataset.category=p.category;return e;});
const sandbox={window,IlocapCore:coreSandbox.module.exports,URLSearchParams,location:{search:'',hash:''},document:{body:{style:{}},querySelector:el,querySelectorAll(s){return s==='.filter'?filters:s==='.solution-card'?cards:[];},addEventListener(type,handler){if(type==='click')clicks.push(handler);}},console};
vm.runInNewContext(fs.readFileSync('public/app.js','utf8'),sandbox);
function click(selector,node){for(const handler of clicks)handler({target:{closest(s){return s===selector?node:null;}}});}
// Every unchanged filter still restricts the new row modules to its category.
for(const f of filters){f.events.click();assert.equal(cards.filter(c=>!c.hidden).length,f.dataset.filter==='all'?8:products.filter(p=>p.category===f.dataset.filter).length);assert.equal(f['aria-pressed'],'true');}
// Once enhanced, the filter hands over to the deck instead of exposing multiple cards.
const delegated=[];window.IlocapSolutionDeck={filter:value=>delegated.push(value)};for(const f of filters)f.events.click();assert.deepEqual(delegated,filters.map(f=>f.dataset.filter));delete window.IlocapSolutionDeck;
// Every dossier keeps its full content, accessible native disclosures and contact context.
const decode=s=>s.replace(/&(amp|lt|gt|quot|#39);/g,(_,key)=>({amp:'&',lt:'<',gt:'>',quot:'"','#39':"'"}[key]));
for(const p of products){
 click('[data-product]',{dataset:{product:p.id}});assert.equal(el('#detail-dialog').open,true);
 const sheet=el('#dialog-body').innerHTML,text=decode(sheet);
 for(const value of [p.name,p.subtitle,p.audience,p.overview,p.example,p.scope,...p.tags,...p.details,...p.questions,...p.modules.flatMap(m=>[m.title,m.text])])assert.ok(text.includes(value),p.id+' retains '+value);
 assert.equal((sheet.match(/<details class="solution-detail-module"/g)||[]).length,p.modules.length);
 assert.ok(sheet.includes('<details class="solution-detail-module" open>'));
 assert.ok(sheet.includes('<details class="solution-scope">'));assert.ok(sheet.includes('class="solution-sheet-action"'));
 assert.ok(sheet.includes('href="assets/'+p.visual+'" target="_blank" rel="noopener"'));
 if(p.stage){assert.ok(text.includes(p.stage.label));assert.ok(text.includes(p.stage.text));}
 assert.equal(el('#dialog-body').scrollTop,0);assert.equal(el('#detail-dialog').classList['solution-dialog'],true);
 click('[data-solution-contact]',{dataset:{solutionContact:p.id}});assert.equal(el('#detail-dialog').open,false);assert.ok(el('#project-message').value.includes(p.name));assert.equal(chosen.at(-1),'sites-applications');
}
// Contact form metadata must never trigger the expertise modal.
const form={dataset:{service:'general'}},field={closest(selector){return selector==='[data-service]'?form:null;}};
for(const handler of clicks)assert.doesNotThrow(()=>handler({target:field}));assert.equal(el('#detail-dialog').open,false);
// The shared resource modal remains independent of the product sheet style.
click('[data-resource]',{dataset:{resource:'brief'}});assert.equal(el('#detail-dialog').open,true);assert.equal(el('#detail-dialog').classList['solution-dialog'],false);assert.ok(el('#dialog-body').innerHTML.includes('Bien préparer votre projet digital'));
console.log('PASS: eight solution plates, each modal and contact handoff, every category filter, resource modal compatibility and contact-field regression.');

const law=products.find(p=>p.id==='lawmate'),health=products.find(p=>p.id==='gestion-sante'),pharmacy=products.find(p=>p.id==='pharm-express');assert(law&&health&&pharmacy);assert(!products.some(p=>p.id==='arozo'));assert(!/CARPA|annuaire|téléconsultation/i.test(JSON.stringify(law)));assert(health.modules.some(m=>m.title.includes('Pharmacie intégrée')));assert(pharmacy.stage.text.includes('nécessitent une connexion'));assert(pharmacy.stage.text.includes('Android'));assert(pharmacy.modules.some(m=>m.title==='MAIKA / VONJEO'));assert.equal(products.filter(p=>p.category==='sante').length,2);
