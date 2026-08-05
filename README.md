# Charm of Flowers — web

Jednostránkový web pro květinářství **Charm of Flowers**, Pražská 38/43, Plzeň.
Statické HTML, CSS a JavaScript — žádný build, žádné závislosti.

**Náhled naživo:** <https://vorthys.github.io/charmofflowers/>
Ukrajinsky: <https://vorthys.github.io/charmofflowers/?lang=uk>

---

## Spuštění

```bash
python -m http.server 5173
```

Pak otevřete <http://localhost:5173>.

---

## Struktura

```
.
├── index.html                  # hlavní stránka
├── katalog.html                # katalog kytic (skládá se z katalog.json)
├── admin.html                  # ★ správa katalogu (viz níže)
├── robots.txt / sitemap.xml    # SEO (balíček Standard)
├── assets/
│   ├── css/style.css           # design systém + layout
│   ├── js/i18n.js              # ★ texty stránek (čeština + ukrajinština)
│   ├── js/main.js              # menu, lightbox, FAQ, formulář, katalog, chat
│   ├── data/katalog.json       # ★ položky a filtry katalogu
│   └── img/
│       ├── favicon.svg         # tulipán z brand guide
│       └── gallery/            # fotky .jpg + .webp
└── README.md
```

Sekce: hero → služby → **ceník** → galerie → **recenze** → příběh → **FAQ** → kontakt + **formulář**.

> Po změně `style.css`, `i18n.js` nebo `main.js` zvyšte `?v=` u odkazů
> v `index.html` — jinak prohlížeče návštěvníků drží starou verzi.

---

## Design — podle oficiálního brand guide

Zdrojem pravdy je **Brand Guide od Svitlany Priakhy** (soubor od klientky,
`Brand Guide Natalia.pdf`). Z něj pochází:

| Prvek | Hodnota |
|---|---|
| Tmavá zeleň (text, tmavé sekce) | `#102713` |
| Chartreuse (akcent na tmavé, „of" v logu) | `#DBD986` |
| Greige (linky, rámečky) | `#DBD5D1` |
| Hlavní pozadí | `#EFEFEF` |
| Mech (akcent na světlém — ztmavený chartreuse kvůli kontrastu) | `#565A20` |
| Dekorativní znak | tulipán (SVG symbol `#orn-tulip`) |

Nálada z moodboardu: světlé pozadí, světlo dopadající na květiny, stíny
rostlin (animovaný stín v hero), textura, jednoduchost.

### Typografie

Brand guide předepisuje **Abigail** (displayová antikva) a **Drugs**
(geometrický grotesk) — obojí komerční řezy bez webových licencí a bez
plné české/ukrajinské sazby. Webové náhrady:

| Role | Guide | Web |
|---|---|---|
| Logotyp (jen latinka) | Abigail | **Bodoni Moda** + **Pinyon Script** („of") |
| Nadpisy (čeština + ukrajinština) | Abigail | **Playfair Display** |
| Text a UI | Drugs (viz samolepky) | **Didact Gothic** — geometrický grotesk nejblíž samolepkám, umí ČJ i UA |

Pokud klientka dodá webové licence originálních řezů, stačí je nasadit
přes `@font-face` a přepsat `--ff-disp` / `--ff-body` v tokenech.

---

## Jazyky — čeština a ukrajinština

Přepínač **CZ / UA** v hlavičce. Všechny texty jsou v `assets/js/i18n.js`
(v HTML jen klíče `data-i18n*`). Výběr jazyka: `?lang=uk` → localStorage →
jazyk prohlížeče (uk/ru/be → ukrajinština) → čeština. Bez JS se stránka
zobrazí česky.

---

## Balíček Standard — co je hotové

- [x] Vše na jedné stránce
- [x] **Ceník v přehledné tabulce** (sekce Ceník)
- [x] **Druhý jazyk s parametrem v adrese** (`?lang=uk`)
- [x] **Poptávkový formulář na e-mail** — FormSubmit.co, honeypot proti spamu
- [x] **Sekce recenzí** — 2 reálné recenze ze Živéfirmy.cz (viz níže)
- [x] **Sekce častých dotazů** + FAQPage strukturovaná data
- [x] **Rozšířené SEO** — sitemap.xml, robots.txt, hreflang, struktura nadpisů
- [x] **Business data pro Google** — Schema.org Florist (adresa, hodiny, kontakty)
- [ ] **Google Search Console** — ruční krok, viz níže
- [x] **WebP obrázky** — `<picture>` s .webp + .jpg fallback
- 2 kola korektur = běžný proces s klientkou

### Formulář — nutná aktivace!

Formulář posílá na `charmofflowers.cz@gmail.com` přes FormSubmit.co.
**Po prvním odeslání přijde klientce aktivační e-mail — musí kliknout
na potvrzení**, jinak se poptávky nedoručují. Otestovat až po aktivaci.
Hidden pole `_next` vrací návštěvníka na `?sent=1#kontakt`, kde se ukáže
potvrzovací lišta.

### Google Search Console — postup

1. <https://search.google.com/search-console> → Přidat službu → „Prefix adresy URL"
2. Zadat `https://vorthys.github.io/charmofflowers/` (později doménu)
3. Ověření: HTML tag → vložit meta tag do `<head>` (místo je označené komentářem)
4. Po ověření odeslat `sitemap.xml`

### Po připojení domény charmofflowers.cz

Vyměnit `https://vorthys.github.io/charmofflowers/` za doménu v:
`index.html` (canonical, hreflang, og:url, og:image, JSON-LD, `_next`
formuláře), `sitemap.xml`, `robots.txt`. Přidat soubor `CNAME`.

---

## Obsah — zdroje

- **Instagram** @charmofflowers.cz — služby, hodiny, telefon, fotky
- **Linktree** — logo, adresa
- **Živéfirmy.cz** — IČO, adresa, recenze
- **PR Deník** — příběh Nataliie Ivasiuk
- **Brand Guide** (Priakha Svitlana) — barvy, typografie, logo, znak

## Katalog (katalog.html)

Karty i filtry se skládají z **`assets/data/katalog.json`** — dvě osy
filtrů (cena + příležitost), obě definované v datech. Cenová pásma jsou
ta, která klientka sama používá v Instagram highlights. Karta „Nechám
to na floristce" (vzor ověřený u konkurence), „Chci tuhle" předvyplní
formulář (`?kytice=Název`). Fakt „rozvoz od 30 do 60 minut" pochází
z popisku jejich postu na Instagramu.

## Správa webu (admin.html)

`admin.html` je plný editor pro klientku — čtyři záložky:

- **Katalog** — kytice (přidání/úprava/skrytí/pořadí) a příležitosti
  filtru; data v `assets/data/katalog.json`
- **Texty webu** — všechny texty obou stránek ve dvou jazycích,
  seskupené po sekcích; ukládá se do `assets/data/texty.json`,
  který **přepisuje** výchozí slovník v `i18n.js` (prázdné pole =
  původní text; smazáním souboru se web vrátí k výchozím textům)
- **Fotky** — nahrání s automatickým zmenšením a převodem na
  JPG + WebP přímo v prohlížeči, mazání, výběr fotky u kytice
- **Nápověda** — návod pro klientku (CZ + RU)

Ukládá **přímo do repozitáře přes GitHub API** — web se přegeneruje
do 1–2 minut.

**Token:** GitHub → Settings → Developer settings → Fine-grained tokens
→ Generate new token → Repository access: *Only select repositories* →
`vorthys/charmofflowers` → Permissions → Contents: **Read and write**.
Token vložit v admin.html; volitelně se pamatuje v prohlížeči.
Bez tokenu funguje admin jen pro čtení + export/import JSON.

Stránka je v `robots.txt` a má `noindex` — není v navigaci, jen na
přímé adrese `/admin.html`.

**Nové fotky:** zmenšit na ~800 px šířky, uložit `.jpg` + `.webp` se
stejným názvem do `assets/img/gallery/`, do admin panelu zapsat cestu
bez přípony. (WebP: `python -c "from PIL import Image; im=Image.open('f.jpg'); im.save('f.webp','WEBP',quality=82)"`)

## Chat

Plovoucí bublina vpravo dole — **žádný cizí widget**, jen skutečné
kanály obchodu: Instagram DM (`ig.me/m/…`, jejich hlavní objednávkový
kanál dle bia), Messenger (`m.me/…`), telefon, formulář. Zero skriptů
třetích stran = žádná cookie lišta. Analýza konkurence: 4 z 5 webů
živý chat nemají; Meta svůj vestavěný widget ukončila v 2024.
Kdyby časem bylo potřeba víc, kandidát je český **Smartsupp**
(vyžaduje registraci a závazek klientky odpovídat).

---

## Co potvrdit s klientkou

- [ ] **Recenze** — dvě převzaté ze Živéfirmy.cz; ať je potvrdí, nebo dodá vlastní
- [ ] **Ceník** — řádky „individuálně / na dotaz / podle vzdálenosti" doplnit
      skutečnými cenami, až je klientka dodá
- [ ] **Ukrajinské texty** — dát vyčíst rodilé mluvčí (vše v `i18n.js`)
- [ ] **Aktivace formuláře** (viz výše)
- [ ] **Webové licence fontů** Abigail a Drugs, případně zůstat u náhrad
- [ ] Fotky ve vyšším rozlišení (současné jsou 640 px z Instagramu)

---

## Přístupnost a kvalita

- Kontrast WCAG 2.1 AA ověřen na všech kombinacích (29 párů)
- Ovládání klávesnicí včetně lightboxu, viditelný focus
- `prefers-reduced-motion` vypne animace (i stín v hero)
- Responzivní od 320 px, bez vodorovného scrollu
- Jeden `<h1>`, Schema.org Florist + FAQPage
- Funguje i bez JavaScriptu (česky, bez lightboxu a formulářové lišty)

---

**Kontakt na obchod:** +420 723 477 375 · charmofflowers.cz@gmail.com
Design & kód — Vorthys · Brand identity — Priakha Svitlana
