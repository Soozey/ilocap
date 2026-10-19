"""Build four independent editorial expertise screens for the page reader."""
from pathlib import Path
from html import escape as esc
import json,re
ROOT=Path(__file__).resolve().parents[1]
p=ROOT/'public/index.html';s=p.read_text();services=json.loads((ROOT/'content/services.json').read_text())
matches=list(re.finditer(r'<section class="expertise-section[^\"]*" id="(?:expertises|expertise-ia-automatisation|expertise-design-marketing|expertise-externalisation-assistance)".*?</section>',s,re.S))
assert matches,'Existing expertise section missing'
ids=['sites-applications','ia-automatisation','design-marketing','externalisation-assistance']
nav_short=['Sites & apps','IA & auto.','Design','Assistance']
subtitles=['Votre activité, bien outillée.','Vos processus et vos équipes, mieux coordonnés.','Votre marque, claire et reconnue.','Une équipe en appui, au quotidien.']
short=[['Présentez votre offre et facilitez les contacts.','Vendez et gérez vos commandes.','Des outils pour votre quotidien.'],['Relances, documents et validations.','Accompagnez vos clients et vos équipes.','Connectez vos outils et vos indicateurs.'],['Donnez une présence à votre marque.','Faites vivre votre offre sur les bons canaux.','Transformez l’intérêt en prises de contact.'],['Allégez votre quotidien administratif.','Fiabilisez vos fichiers et vos catalogues.','Assurez la continuité du suivi.']]
icons=[['<rect x="3" y="3" width="24" height="17"/><path d="M15 20v7m-6 0h12"/>','<path d="M2 3h4l5 18h14l4-13H8M12 27h.01M24 27h.01"/>','<rect x="3" y="3" width="10" height="10"/><rect x="19" y="3" width="10" height="10"/><rect x="3" y="19" width="10" height="10"/><rect x="19" y="19" width="10" height="10"/>'],['<path d="M12 3h8l1 5 4 3 4 1v8l-5 1-3 4-1 4h-8l-1-5-4-3-4-1v-8l5-1 3-4Z"/><circle cx="16" cy="16" r="5"/>','<path d="M6 5h20v15H16l-7 6v-6H6Z"/><path d="M11 11h10m-10 4h6"/>','<ellipse cx="16" cy="6" rx="12" ry="4"/><path d="M4 6v19c0 5 24 5 24 0V6M4 15c0 5 24 5 24 0"/>'],['<path d="m5 22 14-14 5 5-14 14-7 2Z M19 8l3-3 5 5-3 3M5 22l5 5"/>','<rect x="4" y="4" width="24" height="19" rx="3"/><path d="m9 28 5-5m-4-12h12m-12 5h8"/>','<path d="M4 20V10l20-5v20L4 20Zm0-2h6l3 11H7L4 18m24-9 2-2m-2 14 2 2"/>'],['<rect x="5" y="4" width="22" height="25" rx="2"/><path d="M11 2v5m10-5v5M10 13h12m-12 6h12m-12 5h7"/>','<path d="M3 9h10l3 4h13v15H3ZM3 9V5h10l3 4h13v4"/>','<circle cx="16" cy="12" r="5"/><path d="M5 28v-3a11 11 0 0 1 22 0v3M4 12v8m24-8v8M4 12a12 12 0 0 1 24 0"/>']]
screens=[]
for i,(item,id,subtitle) in enumerate(zip(services,ids,subtitles)):
 nav=''.join(f'<a href="#{target}" aria-label="{esc(service["name"],quote=True)}"'+(' aria-current="page"' if target==id else '')+f'><span class="expertise-nav-full">{esc(service["name"])}</span><span class="expertise-nav-short" aria-hidden="true">{esc(label)}</span></a>' for target,service,label in zip(ids,services,nav_short))
 features=''.join(f'<li><svg viewBox="0 0 32 32" aria-hidden="true">{icons[i][j]}</svg><div><h4><a href="{item["route"]}#{f["id"]}">{esc(f["title"])}</a></h4><p>{esc(short[i][j])}</p></div></li>' for j,f in enumerate(item['features']))
 row=f'<article class="expertise-row" id="{id}" aria-labelledby="title-{id}"><div class="expertise-copy"><p class="expertise-number">0{i+1}<span aria-hidden="true"></span></p><h3 id="title-{id}">{esc(item["name"])}</h3><p class="expertise-subtitle">{esc(subtitle)}</p><ul class="expertise-features">{features}</ul><a class="button" href="{item["route"]}">Découvrir cette expertise</a></div><figure class="expertise-visual"><img src="assets/{item["image"]}" alt="{esc(item["alt"],quote=True)}" width="{1536 if i==3 else 1400}" height="{1024 if i==3 else 700}" loading="eager" decoding="async"></figure></article>'
 section_id='expertises' if i==0 else 'expertise-'+id
 heading_id='expertise-title' if i==0 else 'expertise-heading-'+id
 screens.append(f'<section class="expertise-section expertise-modules expertise-screen" id="{section_id}" data-expertise-screen data-reader-label="{esc(item["name"],quote=True)}" aria-labelledby="title-{id}"><div class="container"><nav class="expertise-nav" aria-label="Parcourir les expertises">{nav}</nav><div class="expertise-heading"><h2 id="{heading_id}">Nos expertises.</h2><p class="expertise-count">0{i+1}<span> / 04</span></p></div>{row}</div></section>')
s=s[:matches[0].start()]+'\n'.join(screens)+s[matches[-1].end():]
s=s.replace('  <script src="card-carousel.js" defer></script>\n','').replace('  <script src="expertise-book.js" defer></script>\n','')
s=s.replace('<section class="approach-section">','<section class="approach-section" id="methode">').replace('<section class="container faq-section" aria-labelledby="faq-title">','<section class="container faq-section" id="questions" aria-labelledby="faq-title">')
s=s.replace('href="sites-applications.html" aria-label="Créer', 'href="#sites-applications" aria-label="Créer').replace('href="ia-automatisation.html" aria-label="Automatiser','href="#ia-automatisation" aria-label="Automatiser').replace('href="externalisation-bpo.html" aria-label="Déléguer','href="#externalisation-assistance" aria-label="Déléguer')
p.write_text(s)
print('Generated four independent horizontal expertise screens and direct hero entry points.')
