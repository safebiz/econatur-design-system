/* =========================================================================
   EcoNatur — fraze de brand și interdicții
   ========================================================================= */

/** Fraze-semnătură. Se reiau ca atare, nu se reformulează. */
export const signature_phrases = [
  'Brand Românesc · Rețete Originale · Gust Tradițional',
  'Alimente și ingrediente sănătoase, direct din natură.',
  'Din raft, gata de pus în coș',
  'Vindem și la sac de 25 kg.',
  'O firmă mică, cu depozitul ei la Jebel.',
  'Cauți după regim?',
  'Ai firmă sau magazin?',
]

/** „original taste" — DOAR în siglă, nu ca text pe pagină. */
export const logo_only = ['original taste']

/** Interzise. Firma e distribuitor (CAEN 46), fără certificări. */
export const forbidden_phrases = [
  'bio',
  'organic',
  'ecologic',
  'certificat',
  'producător',
  '100% românesc',
  'linie de ambalare',
  'mii de clienți',
  'lider',
  'cel mai bun',
  'garantat',
  'vindecă',
  'doar azi',
  'ultimele bucăți',
  'comandă acum',
]

/**
 * Ce NU se inventează. Lista completă, cu sursele, e în
 * projects/econatur/content/doNotFabricate.md și se atașează la orice brief.
 */
export const do_not_fabricate = [
  'certificări (bio, ISO, HACCP) și „organic"/„ecologic"',
  '„producător" — firma distribuie și ambalează',
  'recenzii, stele, testimoniale, nume de clienți',
  'număr de clienți sau de comenzi',
  'reduceri, procente, coduri de cupon',
  'prețuri sau reduceri pentru firme',
  '„ambalat la Jebel" pe produse neconfirmate de clientă (mărcile importate vin gata ambalate)',
  'curieri, țări de livrare, termene în afara celor confirmate',
  'fondatori, echipă, povestea firmei, poze din depozit (neprimite)',
  'etichete de regim pe produse care nu le au în catalog',
]
