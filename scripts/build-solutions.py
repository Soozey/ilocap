"""Build light solution plates with progressive turntable enhancement."""
from pathlib import Path
from html import escape as esc
import json,re
ROOT=Path(__file__).resolve().parents[1]
products=json.loads((ROOT/'content/solutions.json').read_text())
def art(p):
 return '<img class="solution-illustration" src="assets/'+p['visual']+'" alt="'+esc(p['visualAlt'],quote=True)+'" width="1536" height="1024" loading="lazy" draggable="false">'
for p in products:p['art']=art(p)
(ROOT/'public/solutions-data.js').write_text('/* Generated from content/solutions.json. */\nwindow.IlocapSolutions='+json.dumps(products,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')+';\n')
cards=[]
for i,p in enumerate(products):
 cards.append('<article class="solution-card turntable-card" data-category="'+p['category']+'" id="solution-'+p['id']+'"><div class="plate-copy"><p class="plate-category">'+esc(p['label'])+'</p><h3>'+esc(p['name'])+'</h3><p class="plate-subtitle">'+esc(p['subtitle'])+'</p><button type="button" class="solution-trigger plate-cta" data-product="'+p['id']+'" aria-haspopup="dialog" aria-controls="detail-dialog" aria-label="Découvrir '+esc(p['name'],quote=True)+'">Découvrir la solution</button></div><figure class="plate-visual">'+p['art']+'</figure></article>')
p=ROOT/'public/index.html';text=p.read_text()
block='''<!-- SOLUTIONS:START -->
<div class="solution-deck" data-solution-deck role="region" aria-roledescription="carrousel" aria-label="Les solutions métier">
<div class="solution-toolbar"><p class="solution-guide" id="solution-swipe-guide">Choisissez la solution à découvrir</p><div class="solution-controls" data-gallery-controls hidden><span class="solution-folio" id="solution-folio">01 / '''+str(len(products)).zfill(2)+'''</span><div class="solution-buttons"><button type="button" id="solution-previous" class="solution-control" aria-controls="solution-grid">Précédente</button><button type="button" class="solution-control solution-play" id="solution-autoplay" aria-controls="solution-grid" aria-pressed="false">Pause</button><button type="button" id="solution-next" class="solution-control" aria-controls="solution-grid">Suivante</button></div></div></div>
<div class="turntable-stage"><div id="solution-grid" class="turntable-grid" tabindex="0" aria-describedby="solution-swipe-guide">'''+''.join(cards)+'''</div><button class="turntable-peek peek-previous" data-peek="previous" type="button" aria-controls="solution-grid" hidden><span>Précédente</span><strong></strong></button><button class="turntable-peek peek-next" data-peek="next" type="button" aria-controls="solution-grid" hidden><span>Suivante</span><strong></strong></button></div>
<p class="sr-only" id="solution-page-status" role="status" aria-live="polite" aria-atomic="true"></p>
</div>
<!-- SOLUTIONS:END -->'''
assert '<!-- SOLUTIONS:START -->' in text
text=re.sub(r'<!-- SOLUTIONS:START -->.*?<!-- SOLUTIONS:END -->',lambda _:block,text,flags=re.S)
p.write_text(text)
print(f'Generated {len(products)} concise solution plates; retained rich presentation data and dialog triggers.')
