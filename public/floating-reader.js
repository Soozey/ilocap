(()=>{'use strict';
const main=document.querySelector('main#contenu');if(!main)return;
const sections=[...main.children].filter(n=>n.tagName==='SECTION');if(sections.length<2)return;
const motion=matchMedia('(prefers-reduced-motion: reduce)'),labels={accueil:'Accueil',expertises:'Expertises',bpo:'Externalisation',solutions:'Solutions métier',orientation:'Votre orientation',references:'Références',methode:'Notre méthode',ressources:'Ressources',questions:'Vos questions',contact:'Votre projet'};
const names=sections.map((section,i)=>section.dataset.readerLabel||labels[section.id]||['Accueil','Expertises','Externalisation','Solutions métier','Votre orientation','Références','Notre méthode','Ressources','Vos questions','Votre projet'][i]||'Page '+(i+1));
const ids=['accueil','expertises','bpo','solutions','orientation','references','methode','ressources','questions','contact'];
const pages=sections.map((section,i)=>{if(!section.id)section.id=ids[i];const page=document.createElement('div');page.className='floating-page'+(section.hasAttribute('data-expertise-screen')?' expertise-frame':'');page.dataset.readerPage=section.id;page.dataset.expertiseFrame=String(section.hasAttribute('data-expertise-screen'));page.setAttribute('role','region');page.setAttribute('aria-label',names[i]||section.id);main.insertBefore(page,section);page.append(section);return page;});
const contact=sections.find(s=>s.id==='contact'),footer=document.querySelector('body>.footer');if(contact&&footer)contact.append(footer);
const controls=document.createElement('nav');controls.className='reader-controls';controls.setAttribute('aria-label','Parcourir le site');controls.innerHTML='<button type="button" class="reader-previous">Précédente</button><div class="reader-position"><span class="reader-counter" aria-hidden="true"></span><span class="reader-current"></span></div><button type="button" class="reader-next">Suivante</button>';main.after(controls);
const previous=controls.querySelector('.reader-previous'),next=controls.querySelector('.reader-next'),counter=controls.querySelector('.reader-counter'),current=controls.querySelector('.reader-current');
let index=0,busy=false,pending=null,animations=[],wheelTotal=0,wheelAt=0,wheelLocked=false,lastTurn=-1000,touch=null,intro=null;
function targetFor(value){if(typeof value==='number')return {index:value};const raw=String(value||'').replace(/^#/,'');if(raw==='contenu')return {index};const direct=pages.findIndex(p=>p.dataset.readerPage===raw);if(direct>=0)return {index:direct};const target=document.getElementById(raw),page=target?.closest('[data-reader-page]');return page?{index:pages.indexOf(page),...(page.dataset.expertiseFrame==='true'&&target.tagName==='ARTICLE'?{}:{anchor:target})}:null;}
function sync(){pages.forEach((p,i)=>{p.hidden=i!==index;p.inert=i!==index;p.setAttribute('aria-hidden',String(i!==index));});previous.disabled=index===0;next.disabled=index===pages.length-1;previous.setAttribute('aria-label',index?'Page précédente : '+names[index-1]:'Première page');next.setAttribute('aria-label',index<pages.length-1?'Page suivante : '+names[index+1]:'Dernière page');counter.textContent=String(index+1).padStart(2,'0')+' / '+String(pages.length).padStart(2,'0');current.textContent=names[index];controls.style.setProperty('--reader-progress',((index+1)/pages.length*100)+'%');}
function notify(){document.dispatchEvent(new CustomEvent('ilocap:pagechange',{detail:{id:pages[index].dataset.readerPage,index}}));}
function focusPage(anchor){const el=anchor||(pages[index].dataset.expertiseFrame==='true'?pages[index].querySelector('h3'):null)||pages[index].querySelector('h1,h2,h3');if(el){el.setAttribute('tabindex','-1');el.focus({preventScroll:true});}}
async function go(value,{historyMode='push',focus=true,animate=true}={}){
 const target=targetFor(value);if(!target||target.index<0||target.index>=pages.length)return false;
 if(busy){pending={value,options:{historyMode,focus,animate}};return false;}
 const to=target.index,old=pages[index],incoming=pages[to],changed=to!==index,direction=to>index?1:-1;
 if(historyMode!=='none'){const hash=typeof value==='string'?'#'+value.replace(/^#/,''):'#'+pages[to].dataset.readerPage;if(location.hash!==hash)history[historyMode==='replace'?'replaceState':'pushState'](null,'',hash);}
 if(!changed){if(target.anchor)target.anchor.scrollIntoView({block:'start',behavior:'instant'});if(focus)focusPage(target.anchor);return true;}
 index=to;busy=true;lastTurn=performance.now();sync();notify();if(incoming.dataset.expertiseFrame==='true')incoming.scrollTop=0;if(target.anchor)target.anchor.scrollIntoView({block:'start',behavior:'instant'});if(focus)focusPage(target.anchor);
 if(animate&&!motion.matches&&typeof incoming.animate==='function'){
  old.hidden=false;old.inert=true;old.setAttribute('aria-hidden','true');old.style.zIndex='1';incoming.style.zIndex='2';old.style.transformOrigin=direction>0?'0% 50%':'100% 50%';incoming.style.transformOrigin=direction>0?'100% 50%':'0% 50%';main.classList.add('reader-transition');
  const easing='cubic-bezier(.22,.7,.2,1)';animations=[old.animate([{opacity:1,transform:'translate3d(0,0,0) rotateY(0deg)',filter:'brightness(1)'},{opacity:0,transform:'translate3d('+(-direction*8)+'%,0,0) rotateY('+(-direction*32)+'deg)',filter:'brightness(.94)'}],{duration:480,easing,fill:'both'}),incoming.animate([{opacity:0,transform:'translate3d('+(direction*12)+'%,0,0) rotateY('+(direction*24)+'deg)',filter:'brightness(.96)'},{opacity:1,transform:'translate3d(0,0,0) rotateY(0deg)',filter:'brightness(1)'}],{duration:880,delay:40,easing,fill:'both'})];await Promise.allSettled(animations.map(a=>a.finished));
 }
 animations.forEach(a=>a.cancel());animations=[];pages.forEach(p=>{p.style.zIndex='';p.style.transformOrigin='';});main.classList.remove('reader-transition');busy=false;sync();if(pending){const p=pending;pending=null;go(p.value,p.options);}return true;
}
const initial=targetFor(location.hash);if(initial)index=initial.index;
window.IlocapReader={go,get currentId(){return pages[index].dataset.readerPage;}};
previous.addEventListener('click',e=>go(index-1,{focus:e.detail===0}));next.addEventListener('click',e=>go(index+1,{focus:e.detail===0}));
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank'||a.hasAttribute('download'))return;let u;try{u=new URL(a.href,location.href);}catch{return;}if(u.origin!==location.origin||u.pathname!==location.pathname||!u.hash||!targetFor(u.hash))return;e.preventDefault();go(u.hash,{focus:e.detail===0});});
const canScroll=(node,delta)=>node.scrollHeight>node.clientHeight+3&&(delta>0?node.scrollTop+node.clientHeight<node.scrollHeight-3:node.scrollTop>3);
function innerScroll(target,delta){for(let n=target;n&&n!==main;n=n.parentElement)if(canScroll(n,delta))return true;return false;}
main.addEventListener('wheel',e=>{if(e.defaultPrevented||e.ctrlKey||e.metaKey||Math.abs(e.deltaY)<=Math.abs(e.deltaX)||e.target.closest('input,textarea,select,[contenteditable]'))return;const delta=e.deltaY*(e.deltaMode===1?18:e.deltaMode===2?main.clientHeight:1);if(!delta||innerScroll(e.target,delta))return;const direction=Math.sign(delta);if(index+direction<0||index+direction>=pages.length)return;e.preventDefault();const now=performance.now(),pause=now-wheelAt;wheelAt=now;if(pause>260)wheelLocked=false;if(busy||wheelLocked||now-lastTurn<1000)return;if(pause>260||Math.sign(wheelTotal)!==direction)wheelTotal=0;wheelTotal+=delta;if(Math.abs(wheelTotal)>=70){wheelTotal=0;wheelLocked=true;go(index+direction,{historyMode:'replace',focus:false});}},{passive:false});
main.addEventListener('touchstart',e=>{if(e.touches.length!==1||e.target.closest('a,button,input,textarea,select,summary')){touch=null;return;}const p=e.touches[0];touch={x:p.clientX,y:p.clientY,time:performance.now(),up:!innerScroll(e.target,-1),down:!innerScroll(e.target,1),index};},{passive:true});
main.addEventListener('touchend',e=>{if(!touch)return;const t=touch;touch=null;if(t.index!==index||e.defaultPrevented)return;const p=e.changedTouches[0],dx=p.clientX-t.x,dy=p.clientY-t.y;if(performance.now()-t.time>=900)return;const horizontal=(index===0||pages[index].dataset.expertiseFrame==='true')&&Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5;const vertical=Math.abs(dy)>75&&Math.abs(dy)>Math.abs(dx)*1.8&&((dy<0&&t.down)||(dy>0&&t.up));if(horizontal||vertical){const to=index+(horizontal?(dx<0?1:-1):(dy<0?1:-1));if(to>=0&&to<pages.length)go(to,{focus:false});}},{passive:true});main.addEventListener('touchcancel',()=>touch=null,{passive:true});
// Listen at document level so keyboard navigation works before the first click.
document.addEventListener('keydown',e=>{
 if(e.defaultPrevented||e.isComposing||e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.querySelector('dialog[open]')||e.target.closest('input,textarea,select,[contenteditable]'))return;
 const bookArrow=(index===0||pages[index].dataset.expertiseFrame==='true')&&(e.key==='ArrowRight'||e.key==='ArrowLeft');
 const verticalArrow=e.key==='ArrowDown'||e.key==='ArrowUp',pageKey=e.key==='PageDown'||e.key==='PageUp';if(!bookArrow&&!verticalArrow&&!pageKey)return;
 const direction=(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key==='PageDown')?1:-1;
 const inside=main.contains(e.target),scrollTarget=inside?e.target:pages[index];
 if(!bookArrow&&!(verticalArrow&&index===0)&&innerScroll(scrollTarget,direction)){
  // With focus in the header or body, scroll the active page rather than the locked body.
  if(!inside){e.preventDefault();const page=pages[index],step=pageKey?Math.max(80,page.clientHeight*.85):64;page.scrollTop=Math.max(0,Math.min(page.scrollHeight-page.clientHeight,page.scrollTop+direction*step));}
  return;
 }
 if(index+direction<0||index+direction>=pages.length)return;e.preventDefault();
 if(e.repeat||busy)return;go(index+direction);
});
const fromLocation=()=>{if(location.hash)go(location.hash,{historyMode:'none'});};window.addEventListener('hashchange',fromLocation);window.addEventListener('popstate',fromLocation);
const stop=()=>{animations.forEach(a=>a.cancel());intro?.cancel();};motion.addEventListener('change',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
document.documentElement.classList.add('has-floating-reader');main.classList.add('floating-reader');main.tabIndex=-1;sync();notify();
if(initial?.anchor)requestAnimationFrame(()=>initial.anchor.scrollIntoView({block:'start',behavior:'instant'}));
if(!motion.matches&&typeof pages[index].animate==='function'){intro=pages[index].animate([{opacity:0,transform:'translate3d(0,26px,0) scale(.99)'},{opacity:1,transform:'translate3d(0,0,0) scale(1)'}],{duration:1100,easing:'cubic-bezier(.22,.7,.2,1)'});intro.finished.catch(()=>{});}
})();
