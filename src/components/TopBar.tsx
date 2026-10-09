import { topbar } from '../data/content'

/** Banda verde de sus. Verdele siglei e SUPRAFAȚĂ aici; textul alb e 14px/500.
 *  Singurul loc din sistem cu text alb pe #709268 — e scurt și repetat pe fiecare pagină. */
export function TopBar() {
  return (
    <div className="topbar">
      {topbar.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  )
}
