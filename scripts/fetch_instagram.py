# Stažení posledních příspěvků z Instagramu pro blok na hlavní stránce.
# Běží v GitHub Action (viz .github/workflows/instagram.yml).
#
# Potřebuje: IG_TOKEN — dlouhodobý token "Instagram API with Instagram Login"
#            (business účet klientky; návod v assets/fonts/../..README).
# Chová se neškodně: bez tokenu nebo při chybě API skončí s kódem 0
# a nechá na webu poslední funkční verzi.

import io, json, os, sys, urllib.request, urllib.parse, datetime

# Windows konzole umí cp1251 — ať diagnostika nikdy neshodí běh
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

TOKEN = os.environ.get("IG_TOKEN", "").strip()
OUT_JSON = "assets/data/instagram.json"
OUT_DIR = "assets/img/ig"
COUNT = 6
API = "https://graph.instagram.com"

def api(path, **params):
    params["access_token"] = TOKEN
    url = f"{API}{path}?{urllib.parse.urlencode(params)}"
    with urllib.request.urlopen(url, timeout=30) as r:
        return json.load(r)

def main():
    if not TOKEN:
        print("IG_TOKEN není nastaven — přeskočeno (web běží na statické galerii).")
        return 0

    # 1) prodloužit platnost tokenu (60 dní od každého běhu)
    try:
        ref = api("/refresh_access_token", grant_type="ig_refresh_token")
        days = ref.get("expires_in", 0) // 86400
        print(f"Token obnoven, platí ~{days} dní.")
    except Exception as e:
        print(f"Obnova tokenu selhala ({e}) — pokračuji se stávajícím.")

    # 2) poslední příspěvky
    try:
        media = api("/me/media",
                    fields="id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
                    limit=18)["data"]
    except Exception as e:
        print(f"Čtení médií selhalo: {e} — nechávám poslední verzi.")
        return 0

    picked = []
    for m in media:
        url = m.get("media_url") if m.get("media_type") in ("IMAGE", "CAROUSEL_ALBUM") \
              else m.get("thumbnail_url")
        if not url:
            continue
        picked.append((m, url))
        if len(picked) >= COUNT:
            break

    if not picked:
        print("Žádné použitelné příspěvky — nechávám poslední verzi.")
        return 0

    from PIL import Image
    os.makedirs(OUT_DIR, exist_ok=True)
    posts = []
    for i, (m, url) in enumerate(picked, 1):
        try:
            with urllib.request.urlopen(url, timeout=60) as r:
                raw = r.read()
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            if max(im.size) > 800:
                k = 800 / max(im.size)
                im = im.resize((round(im.size[0] * k), round(im.size[1] * k)),
                               Image.LANCZOS)
            base = f"{OUT_DIR}/ig-{i}"
            im.save(base + ".jpg", "JPEG", quality=84, optimize=True)
            im.save(base + ".webp", "WEBP", quality=80, method=6)
        except Exception as e:
            print(f"Příspěvek {i}: stažení selhalo ({e}), přeskočen.")
            continue
        cap = (m.get("caption") or "").strip().split("\n")[0][:110]
        posts.append({
            "img": base,
            "permalink": m.get("permalink", "https://www.instagram.com/charmofflowers.cz/"),
            "alt": cap or "Příspěvek Charm of Flowers na Instagramu",
        })

    if not posts:
        return 0

    data = {
        "updated": datetime.datetime.now(datetime.timezone.utc)
                   .strftime("%Y-%m-%dT%H:%M:%SZ"),
        "posts": posts,
    }
    os.makedirs(os.path.dirname(OUT_JSON), exist_ok=True)
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
    print(f"Uloženo {len(posts)} příspěvků do {OUT_JSON}.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
