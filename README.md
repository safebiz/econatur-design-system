# EcoNatur — sistem de design

Tokeni și componente React pentru **EcoNatur** (Eco Natur Distribution SRL), magazinul online
econatur.ro: semințe, nuci, fructe uscate, făinuri, produse asiatice și biscuiți artizanali, în pungi de
150–500 g și în saci de vrac de 20–25 kg, plus o pagină de comandă rapidă pentru firme.

Sistemul e **extras din pagina principală aprobată la 2026-10-09**, nu scris înaintea ei.
Descrie ce a ieșit; nu dictează ce va ieși.

---

## Ideea: „eticheta de pe sac”

Titluri grotesce groase ca pe o etichetă de depozit, scris de mână cărămiziu doar pentru gramaj,
fundaluri gri-calde ca hârtia și cartonul. Căutarea stă sus, lipită de antet, cu termenii cei mai
căutați sub ea. Pozele de produs stau pe o „farfurie” cu margine largă.

---

## Punctul fix

Sigla și cele două culori măsurate în ea. **Nu se redesenează, nu se armonizează.**

| | |
|---|---|
| Siglă | `public/logo/econatur-logo.png` — PNG 400×129 (monograma EN + „EcoNatur” + „original taste”) |
| Verdele siglei | `#709268` |
| Negrul siglei | `#040707` |

🔴 **`#709268` nu e culoare de text** — contrast 3,5 pe alb. E suprafață (banda de sus, insigna
EcoNatur, butonul pentru firme) și **pe el se scrie cu negru `#040707` (5,78)**. Pentru butoane și
linkuri se folosește verdele text-sigur `#4A6844` (6,26).

🔴 **Lipsesc:** sigla vectorială (SVG/PDF), varianta pentru fundal închis și pictograma de browser.
Monograma e legată de cuvântul „EcoNatur” în PNG, deci nu se poate decupa curat — se așteaptă vectorul.

Fonturi: **Bricolage Grotesque** 700–800 (titluri, prețuri, etichete) · **Figtree** 400–700 (text,
butoane, câmpuri) · **Caveat** 600–700 (doar scris de mână). Toate redau corect `ș ț Ș Ț` cu virgulă.

---

## Paleta completă

| Rol | Cod | Contrast pe alb |
|---|---|---|
| Accent text-sigur (butoane, linkuri, etichete) | `#4A6844` | 6,26 |
| Verdele siglei — doar suprafață | `#709268` | 3,5 (text negru pe el: 5,78) |
| Complement „caisă uscată” (scris de mână, regim) | `#9A4E22` | 6,02 |
| Text 1 | `#040707` | 20,2 |
| Text 2 | `#2B302D` | 13,4 |
| Text 3 | `#474D49` | 8,7 |
| Text 4 | `#5E645F` | 6,1 |
| Fundal alb | `#FFFFFF` | |
| Fundal „hârtie” — baza paginii | `#F2F1EC` | |
| Fundal „carton” — Vracuri, linii | `#E6E4DD` | |
| Eroare · avertizare · info (derivate, pentru magazin) | `#B3261E` · `#8A5A00` · `#2F5D7A` | 6,54 · 5,93 · 7,08 |

---

## Cui se adresează

Oameni care gătesc sănătos acasă și caută **un ingredient anume** (matcha, chia, nuci braziliene) —
de aceea căutarea e piesa principală a antetului. Al doilea public: **firme și magazine** care cumpără
vrac sau reaprovizionează des — au drumul lor separat (Vracuri → comandă rapidă).

Adresare cu **„tu”**, ca site-ul vechi.

**Consecințe care nu se negociază:** câmp de căutare de 17px (minimum 16, altfel iOS mărește pagina) ·
ținta de atingere de 44px · pe telefon 2 produse pe rând · zero animații.

---

## Motivele, cu bugetul lor

Un motiv folosit peste tot încetează să fie semnătură.

| Motiv | Buget |
|---|---|
| **Eticheta de sac** — fișă albă rotită, margine perforată, umbră moale | **maximum una pe ecran**; niciodată pe cardurile de produs |
| **Scrisul de mână cărămiziu** (Caveat `#9A4E22`) | o dată pe secțiune, doar gramaj / „ambalat la Jebel” / valorile fișei; niciodată în titluri sau butoane |
| **Farfuria** — placă cu dungi fine, margine interioară 19% | toate pozele de produs, nicăieri altundeva |

**De rezervă:** insigna verde „EcoNatur” — doar pe marca proprie; mărcile importate primesc numele ca text.

---

## Ce NU se inventează

- certificări (bio, ISO, HACCP), „organic”, „ecologic” · „producător” — firma distribuie și ambalează
- recenzii, stele, testimoniale, nume de clienți · număr de clienți sau de comenzi
- reduceri, procente, coduri de cupon · prețuri sau reduceri pentru firme
- **„ambalat la Jebel” pe produse neconfirmate de clientă** — mărcile importate vin gata ambalate
- curieri, țări de livrare, termene în afara celor confirmate
- fondatori, echipă, povestea firmei, poze din depozit (neprimite)
- etichete de regim (Vegan, Fără zahăr…) pe produse care nu le au în catalog

Lista completă, cu sursele: `projects/econatur/content/doNotFabricate.md`.

---

## Structura

```
src/
├── styles/tokens.css      # sursa unică — culori, tipografie, spațiu, formă, motive
├── styles/app.css         # clase de componentă; culorile vin doar din tokeni
├── data/content.ts        # conținut REAL, verbatim din pagina aprobată și din catalog
├── data/voice.ts          # ton, public, piloni
├── data/phrases.ts        # fraze-semnătură, interzise, „nu se inventează”
└── components/            # 16 componente derivate din pagină + USAGE.md cu regulile lor
```

## Rulare

```bash
npm install
npm run build
npm run preview
```

## Punerea în WordPress

Paleta se scrie în cele 15 poziții ale temei Kadence **înainte de prima pagină construită** —
vezi `docs/kadence-palette-map.md`.

---

## Stare

| | |
|---|---|
| Pagina principală | aprobată 2026-10-09 (Claude Design v2, după o rundă de corecturi) |
| Manual de design | `projects/econatur/branding/MANUAL-DESIGN-SITE-2026-10-09.md` |
| 🔴 „ambalat la Jebel” | de confirmat de clientă pe ce produse e adevărat |
| 🔴 Transport gratuit peste 250 lei · 24–48 de ore | de pe site-ul vechi, de reconfirmat pentru magazinul nou |
| 🔴 Telefonul | 0730 013 929 (site vechi) vs 0730 013 920 (semnătura clientei) |
| 🔴 Fotografii | nu există încă; farfuriile și pozele mari rămân goale, cu nota a ce trebuie fotografiat |
| Pagini lipsă din design | categorie, produs, coș, comanda rapidă pentru firme — se fac din aceste piese, fără motive noi |
