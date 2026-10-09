import { promises } from '../data/content'

/** Banda de promisiuni: alb, linii sus/jos, 4 coloane (2 pe telefon). Titlu Bricolage 24 + explicație 16. */
export function PromiseBand() {
  return (
    <section className="promises">
      <div className="promises__inner wrap">
        {promises.map((p) => (
          <div key={p.title} className="promise">
            <span className="promise__title">{p.title}</span>
            <span className="promise__text">{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
