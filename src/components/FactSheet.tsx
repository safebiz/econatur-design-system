import { about } from '../data/content'
import { Slogan } from './Slogan'

/** Fișa-etichetă de la „Despre noi" — a doua etichetă de sac a paginii (rotire −1,5°).
 *  Rânduri: cheie MAJUSCULE gri · valoare scrisă de mână. Doar fapte confirmate. */
export function FactSheet() {
  return (
    <div className="fact-sheet">
      <div className="fact-sheet__head">
        <span className="fact-sheet__name">Eco Natur Distribution</span>
        <span className="fact-sheet__srl">SRL</span>
      </div>
      {about.sheet.map((r) => (
        <div key={r.key} className="fact-sheet__row">
          <span className="fact-sheet__key">{r.key}</span>
          <span className="fact-sheet__val">{r.value}</span>
        </div>
      ))}
      <Slogan small />
    </div>
  )
}
