import { spawn } from 'node:child_process';
import { once } from 'node:events';
import assert from 'node:assert/strict';
import { setTimeout as wait } from 'node:timers/promises';
const port=3185,base='http://127.0.0.1:'+port;
const server=spawn(process.execPath,['.next/standalone/server.js'],{env:{...process.env,PORT:String(port),HOSTNAME:'127.0.0.1',NODE_USE_ENV_PROXY:'1',NO_PROXY:'localhost,127.0.0.1'},stdio:['ignore','pipe','pipe']});
let output='';server.stdout.on('data',v=>output+=v);server.stderr.on('data',v=>output+=v);
async function get(path,options={}){return fetch(base+path,{redirect:'manual',signal:AbortSignal.timeout(25000),...options});}
try{
 for(let i=0;i<100;i++){if(output.includes('Ready in'))break;if(server.exitCode!==null)throw Error(output);await wait(100);}
 assert(output.includes('Ready in'),output);
 let response=await get('/');assert.equal(response.status,200);let html=await response.text();
 assert(html.includes('data-site-release="premium-20261019"'));assert.equal((html.match(/class="solution-card turntable-card"/g)||[]).length,8);assert(html.includes('href="https://ilocap.com/"'));assert(!html.includes('googletagmanager'));
 for(const path of ['/sites-applications.html','/ia-automatisation.html','/design-marketing.html','/externalisation-bpo.html','/accompagnement.html','/solution-sheet.css','/release.js','/assets/solution-pharm-express.webp','/sitemap.xml'])assert.equal((await get(path)).status,200,path);
 response=await get('/robots.txt');assert((await response.text()).includes('Disallow: /suivi'));
 response=await get('/services');assert.equal(response.status,308);assert(response.headers.get('location').endsWith('/#expertises'));
 response=await get('/solutions/arozo');assert.equal(response.status,308);assert(response.headers.get('location').endsWith('/#solution-lawmate'));
 response=await get('/politique-de-confidentialite');assert.equal(response.status,307);
 response=await get('/suivi?reference=ILO-TEST');assert.equal(response.status,302);assert.equal(response.headers.get('location'),'https://ilocap-digital-sens.lunarfrog7.chatgpt.site/suivi?reference=ILO-TEST');
 response=await get('/demo-crm');assert.equal(response.status,200);assert((await response.text()).includes('data-mode="demo"'));assert.equal(response.headers.get('x-robots-tag'),'noindex, nofollow');
 response=await get('/api/release');assert.equal((await response.json()).release,'premium-20261019');
 response=await get('/api/admin/data',{headers:{'oai-authenticated-user-id':'forged','oai-authenticated-user-email':'candriatiana@gmail.com'}});assert.equal(response.status,403);
 response=await get('/api/context');assert.equal(response.status,200,await response.clone().text());assert.equal((await response.json()).isTest,false);
 response=await get('/api/leads',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://other.example'},body:'{}'});assert.equal(response.status,403);
 response=await get('/api/leads',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://ilocap.com'},body:'{}'});assert.equal(response.status,400,await response.clone().text());assert((await response.json()).error);
 response=await get('/sw.js');assert(response.headers.get('cache-control').includes('no-store'));assert((await response.text()).includes('registration.unregister'));
 console.log('PASS: standalone production server, eight-product HTML, all landing pages and assets, legacy redirects, private CRM redirect, fictional demo, live public API connection and validation, forbidden admin access and retired PWA cache.');
}finally{server.kill('SIGTERM');await once(server,'exit');}
