/* Progressive, accessible solution turntable. Original cards and filters are retained. */
(()=>{'use strict';
const root=document.querySelector('[data-solution-deck]');if(!root)return;
const track=root.querySelector('#solution-grid'),cards=[...root.querySelectorAll('.solution-card')];
if(!track||!cards.length)return;
const previous=root.querySelector('#solution-previous'),next=root.querySelector('#solution-next'),play=root.querySelector('#solution-autoplay'),folio=root.querySelector('#solution-folio'),status=root.querySelector('#solution-page-status'),guide=root.querySelector('#solution-swipe-guide'),controls=root.querySelector('[data-gallery-controls]'),peekPrevious=root.querySelector('[data-peek="previous"]'),peekNext=root.querySelector('[data-peek="next"]');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let selected=cards.slice(),index=0,paused=motion.matches,visible=false,windowActive=true,hovered=false,busy=false,drag=null;
let autoTimer=0,settleTimer=0,resumeTimer=0,quietUntil=0,suppressUntil=0,lastWheel=-1000,wheelLocked=false,wheelTotal=0,pending=0;
const name=card=>card.querySelector('h3').textContent.trim();
const wrap=value=>(value%selected.length+selected.length)%selected.length;
function reading(){const active=document.activeElement,selection=window.getSelection?.();return !!document.querySelector('dialog[open]')||!!(active&&root.contains(active)&&active!==play&&active.matches(':focus-visible'))||!!(selection&&!selection.isCollapsed&&root.contains(selection.anchorNode));}
function canAuto(){return visible&&windowActive&&!document.hidden&&(!window.IlocapReader||window.IlocapReader.currentId==='solutions')&&selected.length>1&&!paused&&!motion.matches&&!hovered&&!drag&&!busy&&!reading();}
function sync(){
 const count=selected.length,canMove=count>1;
 folio.textContent=String(index+1).padStart(2,'0')+' / '+String(count).padStart(2,'0');
 previous.disabled=next.disabled=!canMove;play.disabled=!canMove||motion.matches;
 previous.setAttribute('aria-label','Afficher la solution précédente');next.setAttribute('aria-label','Afficher la solution suivante');
 play.textContent=motion.matches?'Manuel':!canMove?'1 solution':paused?'Lecture':'Pause';play.setAttribute('aria-pressed',String(paused));play.setAttribute('aria-label',paused?'Reprendre la rotation automatique':'Mettre la rotation automatique en pause');
 guide.textContent=!canMove?'Une solution dans cette sélection':motion.matches?'Faites glisser pour changer de solution':paused?'Rotation en pause · faites glisser pour explorer':'Rotation lente · faites glisser pour explorer';
 root.classList.toggle('is-single',!canMove);
 for(const [button,at] of [[peekPrevious,wrap(index-1)],[peekNext,wrap(index+1)]]){button.hidden=!canMove;button.querySelector('strong').textContent=name(selected[at]);button.setAttribute('aria-label','Afficher '+name(selected[at]));}
}
function render(announce=false){
 const active=selected[index],count=selected.length;
 cards.forEach(card=>{
  const at=selected.indexOf(card),included=at!==-1,isActive=card===active;
  card.hidden=!included;card.inert=!isActive;card.setAttribute('aria-hidden',String(!isActive));
  if(!included)return;
  const distance=wrap(at-index);let position='after';
  if(distance===0)position='active';else if(distance===1)position='next';else if(distance===count-1)position='previous';else if(distance>count/2)position='before';
  card.dataset.position=position;card.setAttribute('role','group');card.setAttribute('aria-roledescription','solution');card.setAttribute('aria-label',(at+1)+' sur '+count+' : '+name(card));
  if(['active','next','previous'].includes(position)){const img=card.querySelector('img');if(img){img.loading='eager';img.decoding='async';}}
 });
 sync();if(announce)status.textContent=name(active)+'. Solution '+(index+1)+' sur '+count+'.';
}
function refresh(){
 clearTimeout(autoTimer);clearTimeout(resumeTimer);autoTimer=resumeTimer=0;sync();if(!canAuto())return;
 const remaining=quietUntil-performance.now();if(remaining>0){resumeTimer=setTimeout(refresh,remaining);return;}
 autoTimer=setTimeout(()=>{autoTimer=0;if(canAuto())move(1,true);else refresh();},8000);
}
function resetMovement(){clearTimeout(settleTimer);settleTimer=0;busy=false;pending=0;drag=null;root.style.setProperty('--drag-offset','0px');root.classList.remove('is-turning','is-dragging');}
function move(direction,automatic=false){
 if(selected.length<2)return false;if(busy){if(!automatic)pending=direction;return false;}
 clearTimeout(autoTimer);if(!automatic)quietUntil=performance.now()+6000;
 const old=selected[index],active=document.activeElement;
 if(old.contains(active))track.focus({preventScroll:true});
 index=wrap(index+(direction<0?-1:1));busy=!motion.matches;root.style.setProperty('--turn-duration',automatic?'1100ms':'700ms');root.classList.toggle('is-turning',busy);render(!automatic);
 if(busy)settleTimer=setTimeout(()=>{busy=false;root.classList.remove('is-turning');settleTimer=0;if(pending){const direction=pending;pending=0;move(direction);}else refresh();},automatic?1100:700);else refresh();
 return true;
}
function go(indexValue){if(!Number.isInteger(indexValue)||!selected[indexValue])return false;if(selected[index].contains(document.activeElement))track.focus({preventScroll:true});resetMovement();index=indexValue;quietUntil=performance.now()+6000;render(true);refresh();return true;}
function filter(category){
 const items=cards.filter(card=>category==='all'||card.dataset.category===category);if(!items.length)return false;
 if(cards.some(card=>card.contains(document.activeElement)))track.focus({preventScroll:true});
 resetMovement();selected=items;index=0;quietUntil=performance.now()+6000;render(true);refresh();
 const filterStatus=document.querySelector('#filter-status');if(filterStatus)filterStatus.textContent=items.length+' solution'+(items.length>1?'s':'')+' dans cette sélection.';return true;
}
previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));peekPrevious.addEventListener('click',()=>move(-1));peekNext.addEventListener('click',()=>move(1));
play.addEventListener('click',()=>{paused=!paused;quietUntil=0;refresh();});
track.addEventListener('keydown',event=>{
 if(event.altKey||event.ctrlKey||event.metaKey||event.target.closest('input,textarea,select,[contenteditable]'))return;
 if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1);}else if(event.key==='Home'||event.key==='End'){event.preventDefault();go(event.key==='Home'?0:selected.length-1);}
});
track.addEventListener('wheel',event=>{
 if(event.ctrlKey||event.metaKey||selected.length<2)return;
 for(let node=event.target;node&&node!==track;node=node.parentElement)if(node.scrollHeight>node.clientHeight+3)return;
 const delta=Math.abs(event.deltaX)>Math.abs(event.deltaY)?event.deltaX:event.deltaY;if(!delta)return;
 event.preventDefault();const now=performance.now();if(now-lastWheel>240){wheelLocked=false;wheelTotal=0;}lastWheel=now;
 if(busy||wheelLocked)return;if(Math.sign(wheelTotal)!==Math.sign(delta))wheelTotal=0;wheelTotal+=delta;if(Math.abs(wheelTotal)<24)return;wheelLocked=true;move(delta>0?1:-1);
},{passive:false});
track.addEventListener('pointerdown',event=>{
 if(event.button>0||event.ctrlKey||event.metaKey||busy||selected.length<2||event.target.closest('a,button,input,textarea,select,summary'))return;
 drag={id:event.pointerId,x:event.clientX,y:event.clientY,dx:0,moved:false};refresh();
});
track.addEventListener('pointermove',event=>{
 if(!drag||drag.id!==event.pointerId)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
 if(!drag.moved){if(Math.abs(dy)>Math.abs(dx)*1.3&&Math.abs(dy)>8){drag=null;refresh();return;}if(Math.abs(dx)<8)return;drag.moved=true;root.classList.add('is-dragging');track.setPointerCapture?.(event.pointerId);}
 drag.dx=dx;root.style.setProperty('--drag-offset',Math.max(-28,Math.min(28,dx*.15))+'px');event.preventDefault();
},{passive:false});
function release(event){
 if(!drag||drag.id!==event.pointerId)return;const {moved,dx}=drag;drag=null;root.classList.remove('is-dragging');root.style.setProperty('--drag-offset','0px');if(track.hasPointerCapture?.(event.pointerId))track.releasePointerCapture(event.pointerId);
 if(moved){suppressUntil=performance.now()+650;quietUntil=performance.now()+8000;if(event.type!=='pointercancel'&&Math.abs(dx)>45)move(dx<0?1:-1);else refresh();}else refresh();
}
document.addEventListener('pointerup',release);document.addEventListener('pointercancel',release);
track.addEventListener('click',event=>{if(performance.now()<suppressUntil){event.preventDefault();event.stopPropagation();}},true);
track.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'){hovered=true;refresh();}});track.addEventListener('pointerleave',()=>{hovered=false;refresh();});
root.addEventListener('focusin',refresh);root.addEventListener('focusout',()=>setTimeout(refresh,0));
document.addEventListener('selectionchange',refresh);document.addEventListener('focusin',refresh);document.addEventListener('close',()=>{quietUntil=performance.now()+6000;refresh();},true);
document.addEventListener('visibilitychange',()=>{if(document.hidden){resetMovement();hovered=false;}refresh();});
document.addEventListener('ilocap:pagechange',()=>{if(window.IlocapReader?.currentId!=='solutions'){resetMovement();hovered=false;}refresh();});
window.addEventListener('blur',()=>{windowActive=false;resetMovement();hovered=false;refresh();});window.addEventListener('focus',()=>{windowActive=true;refresh();});
motion.addEventListener('change',()=>{resetMovement();if(motion.matches)paused=true;refresh();});
const initial=cards.findIndex(card=>card.id===location.hash.slice(1));if(initial>=0)index=initial;
root.classList.add('is-turntable');controls.hidden=false;render();
if(typeof IntersectionObserver==='function')new IntersectionObserver(entries=>{const e=entries[0];visible=e.isIntersecting&&e.intersectionRect.height>=Math.min(80,window.innerHeight*.15);refresh();},{threshold:[0,.1,.25,.5,.75,1]}).observe(track);else{visible=true;refresh();}
window.IlocapSolutionDeck={filter,go,get currentId(){return selected[index].id;},get count(){return selected.length;}};
})();
