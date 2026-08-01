# Charm of Flowers — návrh webu

Jednostránkový web pro květinářství **Charm of Flowers**, Pražská 38/43, Plzeň.
Statické HTML, CSS a JavaScript — žádný build, žádné závislosti. Stačí otevřít `index.html`.

**Náhled naživo:** <https://vorthys.github.io/charmofflowers/>

---

## Spuštění

```bash
python -m http.server 5173
```

Pak otevřete <http://localhost:5173>.

> Otevření `index.html` přímo z disku funguje taky, ale přes server se
> správně načítají fotky s `loading="lazy"`.

---

## Struktura

```
.
├── index.html                  # celá stránka
├── assets/
│   ├── css/style.css           # design systém + layout
│   ├── js/i18n.js              # ★ všechny texty (čeština + ukrajinština)
│   ├── js/main.js              # menu, lightbox, odhalování při scrollu
│   └── img/
│       ├── favicon.svg
│       ├── logo-charm-of-flowers.jpg
│       └── gallery/            # 12 fotek z Instagramu
└── README.md
```

Sekce na stránce: hero → služby → rozpočet → galerie → příběh → kontakt.

---

## Jazyky — čeština a ukrajinština

Přepínač **CZ / UA** je v hlavičce. Velká část zákaznic mluví ukrajinsky
(na Instagramu je profil vedený i v ukrajinštině), tak ať si nemusí překládat.

### Jak se mění texty

**Všechny texty jsou v jednom souboru — `assets/js/i18n.js`.** V HTML jsou
jen klíče, samotná slova nikde jinde nejsou. Změna textu = jeden řádek ve slovníku,
ne hledání po celé šabloně.

```js
heroLede: 'Každá kytice má svůj příběh.',   // cs
heroLede: 'Кожен букет має свою історію.',  // uk
```

V HTML se klíč napojí atributem:

| Atribut | Co přepíše |
|---|---|
| `data-i18n` | text prvku |
| `data-i18n-html` | text včetně značek (např. `<strong>`) |
| `data-i18n-alt` | `alt` u fotky |
| `data-i18n-aria` | `aria-label` |
| `data-i18n-title` | `title` |

Přepínají se i `<title>`, popisek pro vyhledávače, `og:` značky a `<html lang>`.

### Jak se vybírá jazyk

1. `?lang=uk` v adrese (má přednost — takový odkaz jde poslat)
2. co si návštěvník vybral minule (`localStorage`)
3. jazyk prohlížeče — `uk`, `ru` i `be` dostanou ukrajinštinu
4. jinak čeština

Bez JavaScriptu se stránka zobrazí česky — texty jsou napsané přímo v HTML.

### Přidat angličtinu

Do `DICT` v `i18n.js` přibude blok `en: { … }` se stejnými klíči a do hlavičky
`index.html` třetí tlačítko `data-lang="en"`. Nic dalšího.

> **K vyhledávačům:** přepínání běží v prohlížeči, takže Google indexuje
> českou verzi. Dokud je web ve schvalování, je to v pořádku — jedny texty se
> udržují snáz. Až bude obsah hotový, vygenerujeme ukrajinskou verzi
> jako samostatnou stránku `/ua/`, aby se dala najít i ve vyhledávání.

---

## Odkud vychází design

Vše je odvozené z reálných materiálů obchodu, ne z obecné šablony:

| Prvek | Zdroj |
|---|---|
| Tmavě hnědá `#241b15` + zlatá `#e4cfa1` | světelná cedule nad pultem v prodejně |
| Olivová `#c2c878` | skript „of" v logu |
| Petrolejová `#2c4a4e` | nábytek v prodejně |
| Krémová `#f4f0e8` | kraftový balicí papír |

**Hero** je záměrně rekonstrukce té světelné cedule — při načtení stránky
se logo „rozsvítí". To je jediný výrazný efekt na webu, zbytek je klidný.

### Typografie

| Role | Písmo |
|---|---|
| Logo + nadpisy | **Bodoni Moda** — nejblíž antikvě v originálním logu |
| Skript „of" | **Pinyon Script** |
| Text a UI | **Jost** |

Všechna písma mají českou diakritiku a načítají se z Google Fonts.

### Barvy a rozměry

Všechno je v CSS proměnných na začátku `style.css` (sekce *Tokeny*).
Změna značky = změna několika hodnot na jednom místě.

---

## Obsah — odkud jsou data

Texty a údaje pocházejí z veřejných zdrojů firmy:

- **Instagram** [@charmofflowers.cz](https://www.instagram.com/charmofflowers.cz/) — služby, otevírací doba, telefon, fotky
- **Linktree** [charmofflowers.cz](https://linktr.ee/charmofflowers.cz) — logo, adresa
- **Živéfirmy.cz** — IČO, adresa, obor
- **PR Deník** — příběh Nataliie Ivasiuk

Cenové úrovně v sekci *Rozpočet* odpovídají tomu, jak je firma sama člení
v „Highlights" na Instagramu (do 1 000 / 1 000–2 000 / od 2 000 Kč).

---

## Co je potřeba doplnit od klientky

Tohle je návrh — než půjde web živě, chce to od klientky:

- [ ] **Originál loga** ve vektoru (SVG/AI/PDF). Teď je logo poskládané
      z webových fontů, aby bylo ostré v každé velikosti. Nabízela, že logo pošle —
      až dorazí, nahradit blok `.mark` v `style.css` skutečným SVG.
- [ ] **Fotky ve vyšším rozlišení.** Ty současné jsou stažené z Instagramu
      (max 640 px na výšku) — na web stačí, na retina displeje a tisk ne.
- [ ] **Potvrdit ceny a otevírací dobu.** Převzato z Instagramu,
      ať sedí i ve skutečnosti.
- [ ] **Rozhodnout o e-shopu / objednávkovém formuláři.** Zatím se objednává
      telefonem a přes Instagram, jak to firma dělá dnes.
- [ ] **Doplnit reference.** Na Instagramu má vlastní „Highlight" s recenzemi,
      dala by se z nich udělat sekce. Zatím na webu nejsou — vymýšlet si
      cizí recenze nedává smysl.
- [ ] **Projít ukrajinské texty.** Přeložené jsou všechny, ale rodilá mluvčí
      je nejlepší korektor — vše je v `assets/js/i18n.js`.

---

## Nasazení

Web je statický, hostovat se dá kdekoliv.

**GitHub Pages je už zapnuté** — každý push do `main` se sám nasadí na
<https://vorthys.github.io/charmofflowers/>.

Pro vlastní doménu `charmofflowers.cz` přidat do rootu soubor `CNAME`
s doménou a nasměrovat DNS na GitHub Pages.

---

## Přístupnost a kvalita

- Kontrast textu splňuje **WCAG 2.1 AA** (ověřeno na všech kombinacích barev)
- Ovládání klávesnicí včetně lightboxu (Esc, šipky) a viditelný focus
- Respektuje `prefers-reduced-motion` — animace se vypnou
- Responzivní od 320 px výš, bez vodorovného scrollu
- Sémantické HTML, jeden `<h1>`, strukturovaná data Schema.org `Florist`
- Funguje i bez JavaScriptu (jen bez lightboxu, mobilního menu a přepínače jazyka)
- Na mobilu se po heru vysune tlačítko s telefonem — objednává se hlavně voláním

---

**Kontakt na obchod:** +420 723 477 375 · charmofflowers.cz@gmail.com
**Otevřeno:** Po–So 9:00–18:00, Ne 10:00–15:00 · Rozvoz denně 9:00–20:00

Design & kód — Vorthys
