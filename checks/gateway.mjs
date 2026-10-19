import assert from 'node:assert/strict';
import { gateway, CRM_ORIGIN } from '../src/lib/ilocap-gateway.mjs';
const request=(path,method='GET',body,headers={})=>new Request('https://ilocap.com'+path,{method,headers:{Origin:'https://ilocap.com','Content-Type':'application/json',...headers},...(body===undefined?{}:{body})});
let calls=[];
const send=async(url,options)=>{calls.push({url:String(url),options});return Response.json({ok:true,reference:'ILO-TEST0000'},{status:201,headers:{'Set-Cookie':'never-forward=this','oai-authenticated-user-id':'never-forward'}});};
const payload=JSON.stringify({id:'request-id',name:'Vérification',consent:true,message:'Un besoin avec des accents.'});
let result=await gateway(request('/api/leads','POST',payload,{Cookie:'private=secret',Authorization:'Bearer private','oai-authenticated-user-id':'forged','oai-authenticated-user-email':'owner@example.test'}),send);
assert.equal(result.status,201);assert.equal((await result.json()).reference,'ILO-TEST0000');assert.equal(calls[0].url,CRM_ORIGIN+'/api/leads');assert.equal(new TextDecoder().decode(calls[0].options.body),payload);
for(const key of ['cookie','authorization','oai-authenticated-user-id','oai-authenticated-user-email'])assert.equal(calls[0].options.headers.get(key),null);
assert.equal(calls[0].options.headers.get('Origin'),'https://ilocap.com');assert.equal(calls[0].options.redirect,'error');assert.equal(result.headers.get('set-cookie'),null);assert.equal(result.headers.get('oai-authenticated-user-id'),null);assert.equal(result.headers.get('cache-control'),'no-store');
for(const [path,method,body,headers,status] of [
 ['/api/admin/data','GET',undefined,{},403],['/api/admin/leads','POST',payload,{},403],
 ['/api/unknown','POST',payload,{},404],['/api/leads','GET',undefined,{},405],
 ['/api/leads','POST',payload,{Origin:'https://other.example'},403],
 ['/api/leads','POST',payload,{'sec-fetch-site':'cross-site'},403],
 ['/api/leads','POST',payload,{'Content-Type':'text/plain'},415],
 ['/api/leads','POST','é'.repeat(9000),{},413],
]){const before=calls.length;assert.equal((await gateway(request(path,method,body,headers),send)).status,status);assert.equal(calls.length,before);}
result=await gateway(request('/api/context'),async(url,options)=>{assert.equal(String(url),CRM_ORIGIN+'/api/context');assert.equal(options.body,undefined);return Response.json({isTest:false});});assert.equal((await result.json()).isTest,false);
result=await gateway(request('/api/events','POST',payload),async()=>new Response(null,{status:204}));assert.equal(result.status,204);assert.equal(await result.text(),'');
result=await gateway(request('/api/leads','POST',payload),async()=>Response.json({error:'Consentement requis.'},{status:400}));assert.equal(result.status,400);assert.equal((await result.json()).error,'Consentement requis.');
result=await gateway(request('/api/leads','POST',payload),async()=>{throw new Error('sensitive transport detail');});assert.equal(result.status,503);assert(!(await result.text()).includes('sensitive transport'));
console.log('PASS: fixed public endpoints, anonymous forwarding, preserved payload and receipt, denied private operations, origin and byte limits, consent errors, empty analytics responses and recoverable outages.');
