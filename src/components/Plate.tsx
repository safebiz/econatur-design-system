/** MOTIVUL 3 — farfuria.
 *  Poza de produs stă pe o placă cu dungi fine și o margine interioară de 19%:
 *  o poză de 600px nu e mărită peste ~300px, deci rămâne clară (33 de poze din catalog sunt sub 600px).
 *  Fără poză: placa rămâne goală, cu nota a ce trebuie fotografiat. Nu se pune poză de stoc. */
export function Plate({ src, alt, note }: { src?: string; alt?: string; note?: string }) {
  return (
    <div className="plate">
      {src ? <img className="plate__img" src={src} alt={alt || ''} /> : <span className="plate__note">{note}</span>}
    </div>
  )
}
