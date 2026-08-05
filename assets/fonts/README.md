# Firemní fonty — jak je nasadit

Brand guide používá **TT Drugs** (TypeType) a **Abigail** — obojí komerční
řezy. V PDF guide jsou vložené jen výřezy (TT Drugs: 7 znaků, Abigail: 6),
takže se z něj nasadit nedají. Potřeba jsou soubory od klientky nebo
autorky identity (Priakha Svitlana) **s webovou licencí**.

## Postup nasazení

1. Soubory (ideálně `.woff2`, jde i `.otf`/`.ttf`) nakopírovat sem:
   - `TTDrugs-Regular.woff2` (případně `TTDrugs-Medium.woff2`)
   - `Abigail-Regular.woff2`
2. V `assets/css/style.css` odkomentovat blok `@font-face` (hledat
   „FIREMNÍ FONTY").
3. Zvýšit `?v=` u style.css v `index.html` a `katalog.html`.

Víc nic — zásobníky písem už mají firemní názvy na prvním místě,
takže se fonty po nahrání samy propíší do celého webu.

## Pozor

- TT Drugs má kyrilici (TypeType je ruská písmolijna) — ukrajinská
  verze bude fungovat. **Abigail kyrilici nemá** — zůstane jen pro
  latinkové akcenty, ukrajinské kurzivy dál ponese Playfair Display.
- Převod OTF/TTF → WOFF2: `pip install fonttools brotli` a pak
  `pyftsubset font.otf --output-file=font.woff2 --flavor=woff2 --unicodes="*"`.
- Webovou licenci (web embedding) je nutné mít — desktop licence
  z balíčku brand identity na web nestačí.
