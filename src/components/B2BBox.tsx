import { bulk } from '../data/content'
import { Button } from './Button'

/** Caseta neagră pentru firme: singura suprafață neagră din pagină, în secțiunea Vracuri.
 *  Butonul e verdele siglei cu text negru (5,78:1). Duce la pagina de comandă rapidă. */
export function B2BBox() {
  return (
    <div className="b2b">
      <div className="b2b__title">{bulk.b2b.title}</div>
      <p className="b2b__text">{bulk.b2b.text}</p>
      <Button variant="brand" href="#firme">{bulk.b2b.cta}</Button>
    </div>
  )
}
