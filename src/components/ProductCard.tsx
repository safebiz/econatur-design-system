import type { Product } from '../data/content'
import { Plate } from './Plate'

/** Cardul de produs: alb pe hârtie, colț 14px, FĂRĂ umbră.
 *  Insigna: EcoNatur (verdele siglei, text negru) DOAR pe marca proprie; mărcile importate = text simplu;
 *  etichetele de regim = cărămiziu, DOAR dacă produsul le are în catalog.
 *  Fără etichetă de sac și fără scris de mână pe card. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <Plate note={product.photoNote} />
        {product.badges.length > 0 && (
          <div className="product-card__badges">
            {product.badges.map((b) => (
              <span key={b.text} className={'badge badge--' + b.kind}>
                {b.text}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <span className="product-card__price">{product.price}</span>
        <button className="btn btn--accent btn--card" type="button">
          Adaugă
        </button>
      </div>
    </article>
  )
}
