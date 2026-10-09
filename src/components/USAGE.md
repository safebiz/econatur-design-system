# Reguli de folosire a componentelor — EcoNatur

Derivate din pagina principală aprobată la 2026-10-09. Manualul complet:
`projects/econatur/branding/MANUAL-DESIGN-SITE-2026-10-09.md`.

> Regula peste toate: **componenta care nu apare în pagina aprobată și n-are date reale**
> **în spate nu se creează.** O cutie goală invită la inventat (recenzii, reduceri, „bio”).

## Motivele, cu bugetul lor

| Motiv | Unde are voie | Unde NU |
|---|---|---|
| **Eticheta de sac** (`SackLabel`, `FactSheet`) | max. una pe ecran: deschiderea, „Despre noi”, pagina de produs (gramajul) | pe carduri, în liste, ca decor repetat |
| **Scrisul de mână** (Caveat cărămiziu) | o dată pe secțiune: gramaj, „25 kg, vrac”, valorile fișei | titluri, butoane, prețuri, text de citit |
| **Farfuria** (`Plate`) | orice poză de produs | poze de echipă, bannere, articole |

## Per componentă

- **TopBar** — pe fiecare pagină, o singură dată. Singurul text alb pe verdele siglei (scurt, 14px/500).
- **Header** — lipit sus. Căutarea e piesa principală: câmp de 17px, 52px înălțime. Toate cele 10 raioane
  pe un rând peste 1100px; sub 1100px intră butonul „Raioane” (rândul are ~1030px și nu mai încape).
  Termenii „Căutate des” derulează lateral pe telefon — intenționat, ca în pagina aprobată.
- **Hero** — etichetă de secțiune · H1 · paragraf · slogan · 2 butoane (`ink` + `outline`) · poza mare cu
  eticheta de sac. Eticheta consumă bugetul ecranului.
- **SectionLabel** — majuscule 13px, verde text-sigur. Una per secțiune, doar unde spune ceva.
- **Button** — colț 12px, **nu pastilă**. `ink` = acțiunea principală · `accent` = Caută/Adaugă ·
  `outline` = a doua acțiune · `brand` (verdele siglei, text negru) = **doar drumul firmelor**.
- **Pill** — **doar** „Căutate des” și filtrele de regim. Colț 24px.
- **ProductCard** — alb, colț 14px, **fără umbră**. Insigna: `brand` = EcoNatur (doar marca proprie),
  `maker` = marca importată ca text, `diet` = regim cărămiziu (doar dacă produsul îl are în catalog).
  Fără etichetă de sac, fără scris de mână. Nume 15px, preț 22px Bricolage.
- **Plate** — fără poză: nota a ce trebuie fotografiat. **Nu se pune poză de stoc.**
- **DepartmentGrid** — număr + nume. Fără poze, fără pictograme. 5 pe rând desktop, 2 pe telefon.
- **BulkRow** — rând de vrac; „25 kg, vrac” e scrisul de mână al secțiunii.
- **B2BBox** — singura suprafață neagră a paginii, în Vracuri. Duce la comanda rapidă pentru firme.
- **FactSheet** — a doua etichetă a paginii (−1,5°). Doar fapte confirmate.
- **Slogan** — „Brand Românesc · Rețete Originale · Gust Tradițional”, cu punctele în verdele siglei.
- **PromiseBand** — alb, linii sus/jos. Doar promisiuni confirmate (transport și termen: de reconfirmat).
- **Footer** — pe hârtie; telefon mare, depozite cu rolul lor, rețele sociale.

## Pagini care lipsesc din design — din aceleași piese

- **Categorie** = `Header` + titlu `.h2` + filtrele de regim (`Pill white`) + grila de `ProductCard`.
- **Produs** = `Plate` mare + **o** `SackLabel` cu gramajul + preț Bricolage + `Button accent` „Adaugă în coș”.
- **Coș / finalizare** = WooCommerce; doar culori, tipografie, butoane de aici.
- **Comandă rapidă pentru firme** = tabel: nume (15px/600) · preț-client (Bricolage) · câmp cantitate (≥16px,
  44px) · `Button ink` „Trimite comanda”. Fără etichete de sac, fără scris de mână — e o unealtă de lucru.

## Praguri

Banda **900–1100px** e cea mai ratată. Se testează la 320 / 375 / 768 / 900 / 1024 / 1440, și cu
„Raioane” deschis. Termenii „Căutate des” ies vizual din ecran la telefon pentru că derulează lateral —
pagina însăși nu derulează pe orizontală (verificat: `scrollWidth` = lățimea ecranului la toate pragurile).
