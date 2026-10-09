/** MOTIVUL 1 — eticheta de sac.
 *  Fișă albă, ușor rotită, cu marginea de sus perforată; numele în Bricolage majuscule,
 *  valoarea scrisă de mână. Buget: MAXIMUM UNA PE ECRAN. Niciodată pe cardurile de produs. */
export function SackLabel({ name, weight, hand }: { name: string; weight: string; hand?: string }) {
  return (
    <div className="sack-label">
      <div className="sack-label__name">{name}</div>
      <div className="sack-label__weight">{weight}</div>
      {hand && <div className="sack-label__hand">{hand}</div>}
    </div>
  )
}
