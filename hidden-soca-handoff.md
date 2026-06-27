# Hidden Soča — Project Handoff

> Niche tourism guide za zahodno Slovenijo / dolino Soče. Map-first statična stran + SEO blog + Facebook skupina.
> Ta dokument je povzetek vsega, kar je dogovorjeno in zgrajeno. Namenjen za nadaljevanje dela v Coworku.

---

## 1. Koncept & strateška odločitev

- **Ime projekta:** Hidden Soča
- **Niša:** skriti / off-the-beaten-path kraji v dolini Soče in širše zahodni Sloveniji
- **Lokalna prednost:** živim v Posočju → vsebino lahko ground-truthim na terenu
- **Model:** ❌ NE freemium / paywall. ✅ Polno odprt SEO + promet pristop.
  - Odločitev: nič zaklenjenega. Odprt zemljevid se indeksira in rankira; paywall samo blokira promet, ki ga gradimo.
  - Monetizacija pride kasneje preko prometa/publike (isti playbook kot meetcost.co — najprej zmagaj na programmatic SEO).
- **Referenčni modeli:** Atlas Obscura (SEO scale), On the Grid (najbližji strukturni match — solo-built, design-forward, map-first), Spotted by Locals.

---

## 2. Spletna stran (status: zgrajeno, deploy na GitHub Pages)

### Tech & struktura
- Statična stran, **map-first single page** + blog
- **Zemljevid:** Leaflet + OpenStreetMap, **OpenTopoMap** tiles (prikaže dejanski alpski teren)
- Pini grupirani **po tipu** (waterfalls, gorges, wild swimming, WWI, viewpoints) — to hkrati služi kot SEO cluster struktura, filtrabilno
- **Schema:** Article + FAQPage JSON-LD na vsaki blog strani
- `sitemap.xml`, `robots.txt`, `.nojekyll`, `blog/index.html` hub
- Generator: reusable `blogkit.py` modul → nova objava potrebuje samo content dictionary

### Design (potrjeno — temni scheme zavržen)
- Ozadje: **limestone-paper** (svetlo, zračno)
- Tipografija: **deep forest-green**
- Hero barva: **Soča turquoise**
- Accent: **warm amber**
- Fonti: Hanken Grotesk + JetBrains Mono
- Mark: `HIDDEN **SOČA**`, CTA "Open the map"

### Deploy
- Target: **GitHub Pages**
- Repo vsebuje `index.html`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `blog/index.html` + posamezne post datoteke
- (Domena placeholder v kodi: `hiddensoca.com` — preveri/posodobi pred go-live)

---

## 3. Blog — 13 objav (vse cross-linkane, schema, related-posts blok)

**Planning queries**
1. The Perfect 3-Day Itinerary (Soča Valley)
2. Best Time to Visit — month-by-month
3. How to Get to the Soča Valley
4. Where to Stay — Bovec vs Kobarid vs Tolmin

**Differentiator vsebina**
5. 6 Hidden Waterfalls in the Soča Valley
6. Wild Swimming in the Soča Valley
7. WWI Sites Tourists Miss
8. Gorges & Emerald Pools

**Activity guides**
9. Rafting the Soča River

**Single-spot deep dives**
10. Tolmin Gorge guide
11. Kozjak Waterfall guide
12. Boka Waterfall deep dive
13. (+ dodatni single-spot / planning post — dopolni naslov ob reviewu)

Vsaka objava: ~600–900 besed, Article + FAQ schema, cross-links, related posts blok, CTA box ("See all spots on the map").

---

## 4. ⚠️ Faktografski popravki (KNOWN CORRECTION POINT — drži se teh)

Te napake so bile že enkrat ujete in popravljene. Ne uvajaj jih nazaj:

| Tema | ✅ Pravilno | ❌ Napačno |
|---|---|---|
| Dolžina Soče | **138 km** | 130 km |
| Barva Soče | **apnenčasta kamnena moka** (limestone rock flour) | ledeniška voda / glacier melt |
| Kozjak hoja | **25–30 min** | 15 min |
| Tolminski topli izvir | **20 °C, NI za kopanje** | "thermal spring you can stand in" |
| Rafting Soča | **2026 obvezno rečno dovoljenje €18–21** | (manjkalo) |
| Boka | **144 m, najvišji slap v Sloveniji** | — |

**Faktografska točnost vsebine je znana šibka točka projekta — vse trditve preveri pred objavo.**

---

## 5. Facebook strategija

- Objavljam v **javno Facebook skupino kot admin** (ne page)
- **Scheduling v skupini:** Create Post → ikona ure (clock) → Schedule
- Pripravljen **verificiran one-week batch objav**, z neenakomernimi termini (optimizirano za mednarodno publiko)
- Starejši asset: ~20 ready-to-post objav (15 lokacijskih + 5 engagement-farming: AMA, where-to-base debata, vignette PSA, swim vprašanje, best-season debata)
- Vse objave uporabljajo brezplačne stock vire (Pexels, Unsplash, Pixabay) — brez potrebe po lastni fotografiji
- Group algoritem: izogibaj se stvarem, ki ubijejo reach (zunanji linki takoj, itd.)

---

## 6. Odprte naloge / next steps

- [ ] Potrdi/posodobi domeno (`hiddensoca.com` placeholder v meta/sitemap)
- [ ] Final review faktografije na vseh 13 objavah
- [ ] Verificiraj GPS koordinate pinov na terenu (bile so placeholder-approximate)
- [ ] Lastna fotografija spotov (edina komponenta, ki je AI ne more nadomestiti — "camera and a weekend")
- [ ] Razširi blog cluster po potrebi (generator je že modularen)
- [ ] Facebook: zaženi tedenski batch + spremljaj reach

---

## 7. Stil dela (za Cowork)

- Avtonomno izvajanje — ne sprašuj nepotrebnih vprašanj, naredi delo in pokaži rezultat
- Faktografske napake popravi takoj in naravnost
- Brez paddinga, brez korporativnega jezika, kratki konkretni odgovori
- Komunikacija slovensko/angleško mix
