/* =========================================================================
   EcoNatur — conținut REAL
   Verbatim din pagina principală aprobată la 2026-10-09, cu prețurile și
   numele de produs din catalogul magazinului (export OpenCart + SAGA, 06.10).
   Nimic de aici nu se inventează și nu se „îmbunătățește".
   ========================================================================= */

export const brand = {
  name: 'EcoNatur',
  legal: 'Eco Natur Distribution SRL',
  domain: 'econatur.ro',
  positioning: 'Alimente și ingrediente sănătoase, direct din natură.',
  slogan: ['Brand Românesc', 'Rețete Originale', 'Gust Tradițional'],
  logo: '/logo/econatur-logo.png',
}

/** Banda de sus. 🔴 Ambele promisiuni sunt de pe site-ul vechi — de reconfirmat pentru magazinul nou. */
export const topbar = ['Transport gratuit la comenzi de peste 250 lei', 'Livrare în 24–48 de ore']

/** Termenii cei mai căutați, sub câmpul de căutare. */
export const popularSearches = [
  'matcha', 'nuci braziliene', 'chia', 'semințe', 'smochine', 'caju', 'curmale', 'susan', 'migdale',
]

/** Cele 10 raioane — categoriile reale ale magazinului nou (importul din 06.10). */
export const departments = [
  'Ingrediente', 'Alimente', 'Produse asiatice', 'Fructe uscate', 'Semințe',
  'Cereale și fulgi', 'Alune și nuci', 'Produse românești', 'Vracuri', 'Ambalaje',
]

/** 🔴 Doar etichetele care EXISTĂ pe produse. Nu se adaugă „bio", „keto" etc. */
export const dietFilters = ['Vegan', 'Fără zahăr', 'Fără gluten', 'Artizanal', 'Tradițional']

export const hero = {
  /** „din 2019" = fapt (ONRC 17.09.2019), păstrat cu acordul taki 09.10. */
  label: 'Ambalat la Jebel, Timiș · din 2019',
  title: 'Alimente și ingrediente sănătoase, direct din natură.',
  /** 🔴 „ambalate în depozitul nostru de la Jebel" — de confirmat de clientă pe ce produse e adevărat. */
  lead:
    'Semințe, nuci, fructe uscate, făinuri și condimente, ambalate în depozitul nostru de la Jebel. Pungi de 150–500 g pentru acasă, saci de 20–25 kg pentru cine cumpără mult.',
  primary: 'Vezi produsele',
  secondary: 'Vrac și firme →',
  photoNote: 'foto: sac de vrac 25 kg, gura răsfrântă, linguriță de lemn înfiptă în semințele de chia',
  tag: { name: 'Semințe chia', weight: '25 kg', hand: 'ambalat la Jebel' },
}

export type Badge = { kind: 'brand' | 'maker' | 'diet'; text: string }

export type Product = {
  name: string
  price: string
  photoNote: string
  badges: Badge[]
}

export const featured: Product[] = [
  { name: 'Semințe chia 250 g EcoNatur', price: '11,50 lei', photoNote: 'pungă stand-up chia', badges: [{ kind: 'brand', text: 'EcoNatur' }] },
  { name: 'Nuci braziliene 250 g EcoNatur', price: '39,49 lei', photoNote: 'nuci braziliene', badges: [{ kind: 'brand', text: 'EcoNatur' }] },
  { name: 'Curmale Deglet Nour fără sâmburi 250 g', price: '12,86 lei', photoNote: 'curmale', badges: [] },
  { name: 'Biscuiți artizanali cu fructe uscate, fără zahăr, 150 g', price: '15,06 lei', photoNote: 'biscuiți, margini neregulate', badges: [{ kind: 'diet', text: 'Artizanal' }, { kind: 'diet', text: 'Fără zahăr' }] },
  { name: 'Turtă dulce artizanală cu miere și ghimbir 150 g', price: '16,41 lei', photoNote: 'turtă dulce', badges: [{ kind: 'diet', text: 'Artizanal' }] },
  { name: 'Amestec fibre tărâțe, psyllium și in zdrobit 250 g EcoNatur', price: '15,78 lei', photoNote: 'amestec fibre', badges: [{ kind: 'brand', text: 'EcoNatur' }] },
  { name: 'Băutură instant Matcha Latte 10×25 g Gold Kili', price: '42,94 lei', photoNote: 'cutie matcha latte', badges: [{ kind: 'maker', text: 'Gold Kili' }] },
  { name: 'Amestec fulgi ovăz, secară și grâu 500 g EcoNatur', price: '6,12 lei', photoNote: 'fulgi de cereale', badges: [{ kind: 'brand', text: 'EcoNatur' }] },
]

export const bulk = {
  label: 'Vracuri · pentru cine cumpără mult',
  title: 'Vindem și la sac de 25 kg.',
  text:
    'Aceleași semințe și leguminoase din pungile de pe raft, în saci de 20–25 kg. Și pungi stand-up goale, cu fermoar, pentru cine ambalează singur.',
  items: [
    { name: 'Semințe chia', hand: '25 kg, vrac', price: '610,50 lei' },
    { name: 'Năut', hand: '25 kg, vrac', price: '289,16 lei' },
  ],
  more: 'Toate vracurile și ambalajele →',
  photoNote: 'foto: saci de 25 kg în depozit, cu eticheta scrisă de mână (gramaj, data ambalării)',
  b2b: {
    title: 'Ai firmă sau magazin?',
    text: 'Pentru firme și magazine avem o pagină separată de comandă rapidă, cu prețuri proprii.',
    cta: 'Comandă rapidă pentru firme →',
  },
}

export const about = {
  label: 'Despre noi',
  title: 'O firmă mică, cu depozitul ei la Jebel.',
  text:
    'Eco Natur Distribution e o firmă din Timiș, înființată în 2019. La Jebel avem depozitul în care ne și ambalăm produsele; mai avem un depozit în București. Nu suntem un lanț și nici un supermarket.',
  sheet: [
    { key: 'Din', value: '2019' },
    { key: 'Depozit și ambalare', value: 'Jebel, Timiș' },
    { key: 'Depozit', value: 'București' },
    { key: 'Pungi', value: '150–500 g' },
    { key: 'Saci de vrac', value: '20–25 kg' },
  ],
}

/** 🔴 Transport + 24–48 h = de reconfirmat pentru magazinul nou. Card/ramburs și retur 14 zile = confirmate. */
export const promises = [
  { title: 'Transport gratuit', text: 'la comenzi de peste 250 lei' },
  { title: '24–48 de ore', text: 'livrare' },
  { title: 'Card sau ramburs', text: 'cum vrei să plătești' },
  { title: 'Retur în 14 zile', text: 'dacă te-ai răzgândit' },
]

export const contact = {
  /** 🔴 0730 013 929 = numărul Jebel de pe site-ul vechi; semnătura clientei are …920 — de confirmat. */
  phone: '0730 013 929',
  email: 'office@econatur.ro',
  hours: 'luni–vineri, 08:00–17:00',
  /** Adresa București: Str. Preciziei nr. 13F, sector 6 (semnătura clientei, 08.10) — pagina aprobată n-o afișează. */
  depots: [
    { city: 'Jebel, Timiș', role: 'depozit și ambalare', address: 'Str. Principală nr. 621' },
    { city: 'București', role: 'depozit', address: '' },
  ],
  social: [
    { label: 'Facebook · econaturdistribution', href: 'https://www.facebook.com/econaturdistribution' },
    { label: 'Instagram · @econatur.taste', href: 'https://www.instagram.com/econatur.taste/' },
  ],
}
