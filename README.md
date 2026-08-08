# Charm of Flowers — web

Dvoustránkový web (úvod + katalog) pro květinářství **Charm of Flowers**, Pražská 38/43, Plzeň.
Statické HTML, CSS a JavaScript — žádný build, žádné závislosti.

**Náhled naživo:** <https://charmofflowers.cz/>
Ukrajinsky: <https://charmofflowers.cz/?lang=uk>

---

## Spuštění

```bash
python -m http.server 5173
```

Pak otevřete <http://localhost:5173>.

> **Pozor při lokálním náhledu:** web odkazuje na katalog adresou bez
> přípony (`/katalog`). GitHub Pages ji sám přeloží na `katalog.html`,
> ale `python -m http.server` ne — lokálně na ten odkaz dostanete 404.
> Otevřete si `katalog.html` přímo. Na ostrém webu je vše v pořádku.
> (`.htaccess` sem nepatří — to je soubor Apache, GitHub Pages ho
> ignoruje.)

---

## Struktura

```
.
├── index.html                  # hlavní stránka
├── katalog.html                # katalog kytic (adresa /katalog, skládá se z katalog.json)
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

- [x] Vše podstatné na jedné stránce + samostatný katalog
- [x] **Ceník v přehledné tabulce** (sekce Ceník)
- [x] **Druhý jazyk s parametrem v adrese** (`?lang=uk`)
- [x] **Poptávkový formulář na e-mail** — FormSubmit.co, honeypot proti spamu
- [x] **Sekce recenzí** — Google badge 4,9/137 + tři přeložené recenze z Google profilu
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
2. Zadat `https://charmofflowers.cz/` (později doménu)
3. Ověření: HTML tag → vložit meta tag do `<head>` (místo je označené komentářem)
4. Po ověření odeslat `sitemap.xml`

### Doména charmofflowers.cz — hotovo

Web běží na vlastní doméně (registrace WEDOS 8. 8. 2026, držitel
Nataliia Ivasiuk). V DNS jsou 4× A a 4× AAAA na GitHub Pages a CNAME
`www` → `vorthys.github.io`. V repozitáři je soubor `CNAME`.
Všechny absolutní adresy (canonical, hreflang, og:url, JSON-LD,
`_next` formuláře, sitemap, robots) míří na doménu.
Stará adresa `vorthys.github.io/charmofflowers/` se na ni přesměruje.

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

Stránka má `noindex` — není v navigaci, jen na
přímé adrese `/admin.html`.

**Nové fotky:** zmenšit na ~800 px šířky, uložit `.jpg` + `.webp` se
stejným názvem do `assets/img/gallery/`, do admin panelu zapsat cestu
bez přípony. (WebP: `python -c "from PIL import Image; im=Image.open('f.jpg'); im.save('f.webp','WEBP',quality=82)"`)

## Živý Instagram feed (galerie na hlavní stránce)

Instagram blok (@charmofflowers.cz) se umí sám plnit posledními příspěvky
z Instagramu: GitHub Action (`.github/workflows/instagram.yml`) denně
v 6:17 UTC stáhne přes oficiální Instagram API posledních 6 fotek,
zmenší je, uloží do repozitáře (`assets/img/ig/` + 
`assets/data/instagram.json`) a web se přegeneruje. Dlaždice pak
vedou na konkrétní posty. Dokud feed není zapnutý, běží statická
galerie s lightboxem — nic se nerozbije.

**Zapnutí (jednorázově, potřebuje účet klientky):**

1. Instagram klientky musí být **profesionální profil** (business —
   už je, má propojenou FB stránku).
2. Na <https://developers.facebook.com> vytvořit aplikaci →
   přidat produkt **Instagram** → „API setup with Instagram login" →
   přihlásit její IG účet → **Generate token** → zkopírovat
   dlouhodobý token.
3. GitHub: repo → *Settings → Secrets and variables → Actions* →
   New repository secret → jméno `IG_TOKEN`, hodnota = token.
4. Záložka *Actions* → workflow „Instagram feed" → *Run workflow* —
   a zkontrolovat web.

Token platí 60 dní a **každý běh si ho sám prodlužuje** — dokud
Action běží aspoň jednou za 2 měsíce, nikdy nevyprší. Kdyby feed
přestal jet, stačí vygenerovat nový token a přepsat secret.

## Chat

Plovoucí bublina vpravo dole — jediná na stránce. V panelu jsou
skutečné kanály obchodu: **živý chat**, Instagram DM (`ig.me/m/…`,
hlavní objednávkový kanál dle bia), Messenger (`m.me/…`), telefon,
formulář.

### Živý chat (Smartsupp) — bez cookie lišty

Skript Smartsuppu se **nestahuje při načtení stránky, ale až když
návštěvník klikne na „Živý chat"** (`main.js`, blok *živý chat*).
Do té doby web neukládá žádné cookie třetí strany, takže nepotřebuje
lištu souhlasu — návštěvník si chat vyžádá sám. Zároveň 
nezatěžuje načítání webu těm, kdo chat nepoužijí.

Nastavení v kódu: `hideWidget` (vlastní bublina Smartsuppu se
nezobrazuje), `color` = firemní zeleň, `privacyNoticeEnabled`,
jazyk podle `<html lang>` (cs/uk). Po zavření chatu se přes událost
`messenger_close` skryje i bublina Smartsuppu — jinak by sedla přesně
na naši a ostatní kanály by byly nedostupné.

Účet: app.smartsupp.com, tarif Free = **25 konverzací měsíčně**,
historie 14 dní, 1 operátor. Klientka odpovídá z mobilní aplikace;
dokud je v ní přihlášená, chat na webu svítí „online" — mimo
pracovní dobu je potřeba se odhlásit nebo přepnout stav.

---

## Co potvrdit s klientkou

- [ ] **Recenze** — tři přeložené z Google profilu; ať je potvrdí, nebo vybere jiné
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
