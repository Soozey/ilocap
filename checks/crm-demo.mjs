import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createDemoStore} from '../public/crm-demo.mjs';
import {nextFollowup} from '../public/crm-core.mjs';
// This store is the complete data adapter for the demo. It cannot read or write the live API.
let network=0;globalThis.fetch=()=>{network++;throw Error('Demo attempted a network request');};
const store=createDemoStore(new Date('2026-10-18T10:00:00Z'));
let d=await store.request('/api/admin/data?days=30');assert.equal(d.leads.length,8);assert.equal(d.report.reduce((n,r)=>n+r.leads,0),8);assert.equal(d.report.reduce((n,r)=>n+r.sessions,0),0,'No invented traffic measurements');
assert(d.leads.every(l=>l.contact.endsWith('@example.test')&&l.name.startsWith('Démo · ')&&l.reference.startsWith('DEMO-')));
assert.equal(d.leads.find(l=>l.status==='gagne').next_followup,'');
const l=store.simulate();assert.equal(l.owner,'ILOCAP');assert.equal(l.next_followup,'2026-10-19');
let h=await store.request('/api/admin/history?id='+l.id);assert(h.history[0].note.includes('simulé'));
await store.request('/api/admin/leads/'+l.id,{method:'PATCH',body:JSON.stringify({status:'gagne',owner:'ILOCAP',nextFollowup:'2026-10-20',autoFollowup:true,amount:150,notes:'Essai'})});
d=await store.request('/api/admin/data');assert.equal(d.leads.length,9);assert.equal(d.leads.find(x=>x.id===l.id).next_followup,'');assert.equal(d.report.reduce((n,r)=>n+r.revenue,0),1500150);
const rules={owner:'Équipe Démo',initialDays:3,followupDays:2,proposalDays:4};await store.request('/api/admin/settings',{method:'PATCH',body:JSON.stringify(rules)});
const next=store.simulate();assert.equal(next.owner,rules.owner);assert.equal(next.next_followup,nextFollowup('nouveau',rules,new Date('2026-10-18T10:00:00Z')));
await store.request('/api/admin/leads/'+next.id,{method:'DELETE'});store.reset();d=await store.request('/api/admin/data');assert.equal(d.leads.length,8);assert.equal(d.rules.owner,'ILOCAP');assert.equal(network,0);
// The UI delegates to the isolated adapter before any fetch and creates no persistence storage.
const ui=fs.readFileSync('public/suivi.js','utf8');assert.match(ui,/if\(demo\)return store.request\(url,options\);const r=await fetch/);assert(!/localStorage|sessionStorage|indexedDB/.test(ui));assert.match(ui,/const contact=demo\?'<p>'/);assert.match(ui,/a.download=\(demo\?'DEMO-'/);
assert.match(fs.readFileSync('site/demo-crm.html','utf8'),/data-mode="demo"/);
console.log('PASS: isolated fictional demo intake, scheduling, stage updates, revenue, settings, history, reset and zero live network access.');
