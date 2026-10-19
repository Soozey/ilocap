#!/usr/bin/env python3
"""Generate static service pages and consistent SEO metadata. No network access."""
from pathlib import Path
from html import escape as esc
from datetime import date
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'public'
CFG = json.loads((ROOT / 'seo.config.json').read_text())
SERVICES = json.loads((ROOT / 'content/services.json').read_text())
ORIGIN = CFG['origin'].rstrip('/')
import runpy
conversion = runpy.run_path(str(ROOT/'scripts/conversion-markup.py'))

def url(route=''):
    return ORIGIN + '/' + ('' if route == 'index.html' else route)

def orientation(s, need=None, target='orientation'):
    return 'index.html?besoin=' + (need or s['need']) + '&origine=' + s['slug'] + '#' + target

def organization():
    return {'@type':'Organization','@id':url()+'#organization','name':CFG['organization'],
            'legalName':CFG['legalName'],'url':url(),'slogan':'Le digital avec du sens.',
            'logo':{'@type':'ImageObject','url':url('assets/logo.png'),'width':339,'height':116},
            'telephone':CFG['phone'],'sameAs':[CFG['linkedin'],CFG['facebook']],
            'address':{'@type':'PostalAddress','addressLocality':'Antananarivo','addressCountry':'MG'}}

def metadata(route, title, description, image, name, service=None):
    canonical = url(route)
    graph = [organization(), {'@type':'WebSite','@id':url()+'#website','url':url(),'name':'ILOCAP',
              'inLanguage':'fr','publisher':{'@id':url()+'#organization'}},
             {'@type':'WebPage','@id':canonical+'#webpage','url':canonical,'name':title,
              'description':description,'inLanguage':'fr','isPartOf':{'@id':url()+'#website'},
              'about':{'@id':url()+'#organization'}}]
    if route != 'index.html':
        crumbs=[{'@type':'ListItem','position':1,'name':'Accueil','item':url()}]
        if service:
            crumbs.append({'@type':'ListItem','position':2,'name':'Expertises','item':url()+'#expertises'})
        crumbs.append({'@type':'ListItem','position':len(crumbs)+1,'name':name,'item':canonical})
        graph.append({'@type':'BreadcrumbList','@id':canonical+'#breadcrumb','itemListElement':crumbs})
        graph[2]['breadcrumb']={'@id':canonical+'#breadcrumb'}
    if service:
        graph[2]['mainEntity']={'@id':canonical+'#service'}
        graph.extend([{'@type':'Service','@id':canonical+'#service','name':service['name'],
                       'serviceType':service['name'],'description':service['lead'],'url':canonical,
                       'provider':{'@id':url()+'#organization'}},
                      {'@type':'FAQPage','@id':canonical+'#faq','isPartOf':{'@id':canonical+'#webpage'},
                       'mainEntity':[{'@type':'Question','name':q,'acceptedAnswer':{'@type':'Answer','text':a}}
                                     for q,a in service['faq']]}])
    elif route == 'index.html':
        graph.append({'@type':'ItemList','name':'Expertises ILOCAP','itemListElement':[
            {'@type':'ListItem','position':i+1,'name':s['name'],'url':url(s['route'])} for i,s in enumerate(SERVICES)]})
    structured=json.dumps({'@context':'https://schema.org','@graph':graph},ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    robots='index,follow,max-image-preview:large' if CFG['indexing'] else 'noindex,nofollow'
    return f'''<!-- SEO:START -->
  <title>{esc(title)}</title>
  <meta name="description" content="{esc(description,quote=True)}">
  <meta name="robots" content="{robots}">
  <meta name="author" content="ILOCAP">
  <link rel="canonical" href="{canonical}">
  <link rel="sitemap" type="application/xml" href="sitemap.xml">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="ILOCAP">
  <meta property="og:locale" content="{CFG['locale']}">
  <meta property="og:title" content="{esc(title,quote=True)}">
  <meta property="og:description" content="{esc(description,quote=True)}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:image" content="{url('assets/'+image)}">
  <meta property="og:image:alt" content="{esc(name,quote=True)} — ILOCAP">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{esc(title,quote=True)}">
  <meta name="twitter:description" content="{esc(description,quote=True)}">
  <meta name="twitter:image" content="{url('assets/'+image)}">
  <script type="application/ld+json">{structured}</script>
<!-- SEO:END -->'''

def navigation(contact='index.html#contact'):
    return f'''<header class="header"><div class="container nav-wrap">
<a class="brand" href="index.html" aria-label="ILOCAP — Accueil"><img src="assets/logo.png" alt="ILOCAP" width="330" height="110"></a>
<button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
<nav id="main-nav" aria-label="Navigation principale"><a href="index.html#expertises">Expertises</a><a href="index.html#solutions">Solutions</a><a href="index.html#references">Références</a><a href="index.html#ressources">Ressources</a><a class="button small" href="{esc(contact,quote=True)}">Parlons de votre projet</a></nav>
</div></header>'''

def footer():
    links=''.join(f'<a href="{s["route"]}">{esc(s["name"])}</a>' for s in SERVICES)
    return f'''<footer class="container footer"><nav class="footer-services" aria-label="Pages de services">{links}</nav><div class="footer-main"><a class="brand" href="index.html" aria-label="ILOCAP — Accueil"><img src="assets/logo.png" alt="ILOCAP" width="330" height="110" loading="lazy"></a><p>Le digital avec du sens.</p><a href="accompagnement.html">Accompagnement</a><a href="/politique-de-confidentialite">Confidentialité</a><a href="{CFG['facebook']}" target="_blank" rel="noopener noreferrer">Facebook</a><a href="{CFG['linkedin']}" target="_blank" rel="noopener noreferrer">LinkedIn</a></div><div class="footer-bottom"><span>© 2026 ILOCAP SARLU</span><span>Antananarivo, Madagascar · Collaboration à distance</span></div></footer>'''

def page(s):
    features=''.join(f'''<article class="landing-feature" id="{f['id']}"><span class="eyebrow">0{i+1}</span><h3>{esc(f['title'])}</h3><p>{esc(f['text'])}</p><ul>{''.join('<li>'+esc(v)+'</li>' for v in f['items'])}</ul><a class="text-link" href="#projet" data-topic="{esc(f['title'],quote=True)}">Parler de ce besoin</a></article>''' for i,f in enumerate(s['features']))
    process=''.join(f'<article><span>0{i+1}</span><h3>{esc(t)}</h3><p>{esc(d)}</p></article>' for i,(t,d) in enumerate(s['steps']))
    faq=''.join(f'<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>' for q,a in s['faq'])
    related=''.join(f'<a class="related-service" href="{o["route"]}"><h3>{esc(o["name"])}</h3><p>{esc(o["outcome"])}</p></a>' for o in SERVICES if o['slug']!=s['slug'])
    hero = f'''<div class="landing-hero-grid"><div><p class="eyebrow">ILOCAP / {esc(s['name'].upper())}</p><h1 id="landing-title" data-campaign-title>{esc(s['headline'])}<br><em>{esc(s['emphasis'])}</em></h1><p class="landing-lead" data-campaign-lead>{esc(s['lead'])}</p><div class="actions"><a class="button" href="#projet" data-cta-label>{esc(s['cta'])}</a><a class="text-link" href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer">Planifier un échange</a></div></div><figure class="landing-visual"><img src="assets/{s['image']}" alt="{esc(s['alt'],quote=True)}" width="1440" height="960" fetchpriority="high" decoding="async"><figcaption>Visuel d’illustration</figcaption></figure></div>'''
    if s['slug']=='externalisation-bpo':
        workspace=(ROOT/'content/bpo-workspace.html').read_text().strip()
        hero=f'''<div class="bpo-section bpo-landing-intro" id="bpo"><div class="bpo-copy"><p class="eyebrow">EXTERNALISATION &amp; ASSISTANCE VIRTUELLE</p><h1 id="landing-title" data-campaign-title>{esc(s['headline'])}<br><em>{esc(s['emphasis'])}</em></h1><p class="landing-lead" data-campaign-lead>{esc(s['lead'])}</p><div class="actions"><a class="button light" href="#projet" data-cta-label>{esc(s['cta'])}</a><a class="text-link" href="https://calendly.com/candriatiana/30min" target="_blank" rel="noopener noreferrer">Planifier un échange</a></div></div>{workspace}</div>'''
    hero_assets = '<link rel="stylesheet" href="services-showcase.css">' if s['slug']=='externalisation-bpo' else f'<link rel="preload" as="image" href="assets/{s["image"]}">'
    return f'''<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#123e3e"><link rel="icon" href="/ilocap-icon.png?v=20261019" type="image/png" sizes="64x64"><link rel="apple-touch-icon" href="/apple-touch-icon.png?v=20261019" sizes="180x180"><link rel="stylesheet" href="styles.css">{hero_assets}<script src="/release.js" defer></script><script src="navigation.js" defer></script><script src="conversion.js" type="module"></script>
{metadata(s['route'],s['title'],s['description'],s['image'],s['name'],s)}
</head><body data-service="{s['slug']}" data-cta-alt="{esc(s['cta_alt'],quote=True)}"><a class="skip" href="#contenu">Aller au contenu</a>{navigation('#projet')}
<main id="contenu" class="landing-page">
<section class="landing-hero container" aria-labelledby="landing-title"><nav class="breadcrumb" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span aria-hidden="true">/</span><a href="index.html#expertises">Expertises</a><span aria-hidden="true">/</span><span aria-current="page">{esc(s['name'])}</span></nav>
{hero}
<p class="landing-outcome"><strong>Ce que nous cadrons ensemble</strong><span>{esc(s['outcome'])}</span></p></section>
<section class="container landing-section" aria-labelledby="scope-title"><p class="eyebrow">CE QUE NOUS POUVONS PRENDRE EN CHARGE</p><h2 id="scope-title">Les bons moyens pour avancer.</h2><div class="landing-features">{features}</div></section>
<section class="landing-audience"><div class="container"><div><p class="eyebrow">EST-CE ADAPTÉ À MON BESOIN ?</p><h2>Partons de votre quotidien.</h2><p>{esc(s['audience'])}</p><details class="team-context"><summary>Vous avez déjà une équipe ou un prestataire ?</summary><p>{esc(s['team_context'])}</p></details></div><ul>{''.join('<li>'+esc(v)+'</li>' for v in s['usecases'])}</ul></div></section>
{conversion['agent_focus']() if s['slug']=='ia-automatisation' else ''}
{conversion['example'](s['slug'])}
<section class="container landing-section" aria-labelledby="method-title"><p class="eyebrow">COMMENT NOUS AVANÇONS</p><h2 id="method-title">Une mise en œuvre lisible.</h2><div class="approach-grid">{process}</div></section>
<section class="container landing-prepare"><div><p class="eyebrow">AVANT NOTRE ÉCHANGE</p><h2>Quelques repères suffisent.</h2><p>Vous pouvez commencer avec ce que vous avez déjà. Nous précisons ensemble les informations manquantes.</p><a class="text-link" href="{esc(orientation(s),quote=True)}">Préparer mon brief avec le diagnostic</a></div><ul>{''.join('<li><span aria-hidden="true">✓</span>'+esc(v)+'</li>' for v in s['prepare'])}</ul></section>
<section class="container faq-section landing-faq" id="faq" aria-labelledby="faq-title"><div><p class="eyebrow">QUESTIONS FRÉQUENTES</p><h2 id="faq-title">Pour décider<br><em>en connaissance de cause.</em></h2></div><div class="faqs">{faq}</div></section>
<section class="container project-section" id="projet" aria-labelledby="project-title"><div><p class="eyebrow">UN PREMIER ÉCHANGE UTILE</p><h2 id="project-title" data-campaign-form-title>{esc(s['cta'])}.</h2><p>Décrivez votre priorité et indiquez comment vous joindre. Nous pourrons préparer un premier échange autour de votre situation.</p><ol><li>Nous clarifions votre besoin et vos contraintes.</li><li>Nous définissons un premier périmètre et ses validations.</li><li>Vous recevez une proposition précisant les livrables, le budget et le calendrier.</li></ol><p class="caption">Vous pouvez aussi <a class="inline-link" href="https://wa.me/261343807857" data-whatsapp target="_blank" rel="noopener noreferrer">nous écrire sur WhatsApp</a>.</p></div>{conversion['form'](s['slug'])}</section>
<section class="container landing-related"><p class="eyebrow">LES EXPERTISES SE COMPLÈTENT</p><h2>Et pour la suite ?</h2><div>{related}</div></section>
<section class="journey-cta"><div class="container"><div><p class="eyebrow">VOTRE PROCHAIN PAS</p><h2>Parlons de votre besoin.</h2></div><div><p>Un contexte, une priorité et un premier périmètre à définir ensemble.</p><a class="button light" href="#projet" data-cta-label>{esc(s['cta'])}</a></div></div></section>
</main>{footer()}<a class="mobile-service-cta button" href="#projet" data-mobile-cta data-cta-label hidden>{esc(s['cta'])}</a></body></html>'''

def replace_metadata(path, block):
    text=path.read_text()
    text=re.sub(r'<!-- SEO:START -->.*?<!-- SEO:END -->\s*','',text,flags=re.S)
    text=re.sub(r'<title>.*?</title>\s*','',text,flags=re.S)
    text=re.sub(r'<meta name="(?:description|robots)"[^>]*>\s*','',text)
    text=text.replace('</head>',block+'\n</head>')
    path.write_text(text)

for service in SERVICES:
    (DIST/service['route']).write_text(page(service))

replace_metadata(DIST/'index.html',metadata('index.html','ILOCAP | Sites web, IA & externalisation à Madagascar',
    'ILOCAP conçoit vos plateformes, vos projets d’agents IA et vos automatisations, et accompagne vos opérations BPO. Des solutions adaptées à votre organisation.','hero-fashion-bust.webp','ILOCAP — Le digital avec du sens'))
replace_metadata(DIST/'accompagnement.html',metadata('accompagnement.html','Créer, automatiser, déléguer : votre accompagnement | ILOCAP',
    'Choisissez votre point de départ avec ILOCAP : concevoir une plateforme, simplifier vos opérations ou déléguer des tâches. Un accompagnement adapté.','hero-fashion-bust.webp','Votre accompagnement'))

routes=['index.html','accompagnement.html']+[s['route'] for s in SERVICES]
ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')
ns='{http://www.sitemaps.org/schemas/sitemap/0.9}'
tree=ET.Element(ns+'urlset')
for route in routes:
    node=ET.SubElement(tree,ns+'url')
    ET.SubElement(node,ns+'loc').text=url(route)
    ET.SubElement(node,ns+'lastmod').text=date.today().isoformat()
ET.ElementTree(tree).write(DIST/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(DIST/'robots.txt').write_text('User-agent: *\n'+('Allow: /\nDisallow: /suivi\nDisallow: /api/\nDisallow: /demo-crm\n' if CFG['indexing'] else 'Disallow: /\n')+'\nSitemap: '+url('sitemap.xml')+'\n')
(DIST/'services.json').write_text(json.dumps({'organization':'ILOCAP','services':[
    {'name':s['name'],'url':url(s['route']),'description':s['lead'],
     'topics':[{'name':f['title'],'url':url(s['route'])+'#'+f['id']} for f in s['features']]}
    for s in SERVICES]},ensure_ascii=False,indent=2)+'\n')
runpy.run_path(str(ROOT/'scripts/build-solutions.py'))
print('Generated 4 service landing pages, metadata for 6 pages, JSON-LD, sitemap and service catalog. Indexing:',CFG['indexing'])
