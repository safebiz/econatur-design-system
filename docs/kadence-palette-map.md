# EcoNatur → paleta globală Kadence

Paleta se scrie în temă **înainte de prima pagină construită**.

| Poziția | Rol impus de temă | Culoare | De ce acolo |
|---|---|---|---|
| 1 | accent | `#4A6844` | verdele text-sigur — butoane, linkuri (6,26 pe alb) |
| 2 | accent alternativ | `#040707` | hover: linkurile și butoanele verzi devin negre |
| 3 | text: cel mai puternic | `#040707` | titluri, prețuri |
| 4 | text: puternic | `#2B302D` | paragrafe |
| 5 | text: mediu | `#474D49` | descrieri, etichete |
| 6 | text: subtil | `#5E645F` | numere, subsol |
| 7 | fundal subtil | `#E6E4DD` | „carton” — Vracuri **și culoarea liniilor** (Kadence nu are slot separat) |
| 8 | fundal deschis | `#F2F1EC` | „hârtie” — **fundalul de bază al paginii** |
| 9 | alb | `#FFFFFF` | antet, carduri, banda de promisiuni |
| 10 | accent complementar | `#709268` | verdele siglei — **doar suprafață, text negru pe el** |
| 11 | succes | `#4A6844` | = accentul |
| 12 | info | `#2F5D7A` | |
| 13 | avertizare | `#8A5A00` | stoc scăzut |
| 14 | eroare | `#B3261E` | |
| 15 | complement | `#9A4E22` | „caisă uscată” — scris de mână, etichete de regim |

> 🔴 **Sloturile au roluri FIXE, nu sunt 15 culori libere** — tema le aplică singură după index.
>
> 🔴 **Fundalul site-ului = palette8 (`#F2F1EC`), nu alb.** Cardurile și antetul sunt albe pe hârtie;
> dacă fundalul rămâne alb, cardurile dispar în pagină.
>
> 🔴 **Linia se desenează în `palette7` pe fundal alb.** O linie `palette7` pe `palette8` se vede slab
> (aproape aceeași culoare) — verifică fundalul înainte să declari că lipsește.

Fonturile se încarcă **local** din tema copil (Bricolage Grotesque, Figtree, Caveat — licență liberă),
nu din Google Fonts (GDPR). Tot CSS-ul propriu stă în `kadence-child/style.css`.

Verificare după instalare:

```bash
node wat/tools/kadence-palette-audit.js --site https://econatur.1wp.site
```
