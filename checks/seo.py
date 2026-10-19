from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
DIST=ROOT/'public'
CFG=json.loads((ROOT/'seo.config.json').read_text())
SERVICES=json.loads((ROOT/'content/services.json').read_text())
ORIGIN=CFG['origin'].rstrip('/')

class Page(HTMLParser):
    def __init__(self,path):
        super().__init__();self.meta={};self.ids=[];self.hrefs=[];self.assets=[];self.h1=0
        self.title='';self.in_title=False;self.in_json=False;self.json_buffer='';self.schemas=[];self.text=[];self.canonical=None
        self.feed(path.read_text())
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'):self.ids.append(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.in_title=True
        if tag=='meta':self.meta[a.get('name') or a.get('property')]=a.get('content')
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a['href']
        if tag=='a':self.hrefs.append(a.get('href',''))
        if tag=='script' and a.get('type')=='application/ld+json':self.in_json=True;self.json_buffer=''
        if tag in ('img','script') and a.get('src'):self.assets.append(a['src'])
        if tag=='img':assert a.get('alt') is not None
    def handle_endtag(self,tag):
        if tag=='title':self.in_title=False
        if tag=='script' and self.in_json:
            self.schemas.append(json.loads(self.json_buffer));self.in_json=False
    def handle_data(self,data):
        if self.in_title:self.title+=data
        if self.in_json:self.json_buffer+=data
        else:self.text.append(data)

pages={p.name:Page(p) for p in DIST.glob('*.html')}
# The independently authored privacy document uses a dedicated legal-page template.
privacy=pages['politique-de-confidentialite.html']
assert privacy.h1==1 and privacy.title and privacy.meta['description']
assert len(privacy.ids)==len(set(privacy.ids))
marketing={name:page for name,page in pages.items() if name!='politique-de-confidentialite.html'}
assert len(marketing)==6 and len(pages)==7
assert len({p.title for p in marketing.values()})==6
assert len({p.meta['description'] for p in marketing.values()})==6
assert len({p.canonical for p in marketing.values()})==6
for name,page in marketing.items():
    assert page.h1==1,(name,page.h1)
    assert len(page.ids)==len(set(page.ids)),name
    expected=ORIGIN+('/' if name=='index.html' else '/'+name)
    assert page.canonical==expected,(name,page.canonical)
    assert page.meta['og:url']==expected
    assert page.meta['og:title']==page.title
    assert page.meta['twitter:card']=='summary_large_image'
    assert page.meta['robots']==('index,follow,max-image-preview:large' if CFG['indexing'] else 'noindex,nofollow')
    assert page.schemas and page.schemas[0]['@context']=='https://schema.org'
    assert (DIST/page.meta['og:image'].removeprefix(ORIGIN+'/')).exists()
    for asset in page.assets:assert (DIST/asset.lstrip('/')).exists(),(name,asset)
    for href in page.hrefs:
        parts=urlsplit(href)
        if parts.scheme or parts.netloc:continue
        target=('index.html' if parts.path=='/' else unquote(parts.path).lstrip('/')) or name
        if not (DIST/target).exists() and (DIST/(target+'.html')).exists():target+='.html'
        assert (DIST/target).exists(),(name,target)
        if parts.fragment:assert parts.fragment in pages[target].ids,(name,target,parts.fragment)
    visible=' '.join(page.text)
    assert not re.search(r'UNE MISSION BIEN CADRÉE\s*↗',visible)

for service in SERVICES:
    page=pages[service['route']]
    graph=page.schemas[0]['@graph']
    assert any(n['@type']=='Service' and n['name']==service['name'] for n in graph)
    assert any(n['@type']=='BreadcrumbList' for n in graph)
    faq=next(n for n in graph if n['@type']=='FAQPage')
    assert len(faq['mainEntity'])==len(service['faq'])
    visible=' '.join(page.text)
    for q,a in service['faq']:
        assert q in visible and a in visible,(service['slug'],q)
    assert any('origine='+service['slug'] in h for h in page.hrefs)
    assert not any(k in json.dumps(graph) for k in ['aggregateRating','priceCurrency'])

ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
locations=[n.text for n in ET.parse(DIST/'sitemap.xml').findall('s:url/s:loc',ns)]
assert set(locations)=={p.canonical for p in marketing.values()}
if not CFG['indexing']:assert 'Disallow: /' in (DIST/'robots.txt').read_text()
assert len(json.loads((DIST/'services.json').read_text())['services'])==4
app=(DIST/'app.js').read_text()
assert 'EXPERTISE CONSULTÉE' in app
assert all(s['slug'] in app for s in SERVICES)
assert 'hero-fashion-bust.webp' in (DIST/'index.html').read_text()
print('PASS: 6 marketing pages and the privacy document, 4 service routes, unique SEO metadata, JSON-LD, sitemap, internal routes and private indexing controls.')
