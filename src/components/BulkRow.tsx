/** Rând de vrac: nume Bricolage majuscule · „25 kg, vrac" scris de mână · preț · Adaugă.
 *  Scrisul de mână de aici e singurul din secțiunea Vracuri. */
export function BulkRow({ name, hand, price }: { name: string; hand: string; price: string }) {
  return (
    <div className="bulk-row">
      <div>
        <div className="bulk-row__name">{name}</div>
        <div className="bulk-row__hand">{hand}</div>
      </div>
      <span className="bulk-row__price">{price}</span>
      <button className="btn btn--accent btn--card" type="button">Adaugă</button>
    </div>
  )
}
