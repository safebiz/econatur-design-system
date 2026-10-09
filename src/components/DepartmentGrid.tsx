import { departments } from '../data/content'

/** Grila de raioane: număr 01–10 + nume. 5 pe rând desktop, 2 pe telefon. Fără poze, fără pictograme. */
export function DepartmentGrid() {
  return (
    <div className="dept-grid">
      {departments.map((d, i) => (
        <a key={d} className="dept-card" href="#raioane">
          <span className="dept-card__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="dept-card__name">{d}</span>
        </a>
      ))}
    </div>
  )
}
