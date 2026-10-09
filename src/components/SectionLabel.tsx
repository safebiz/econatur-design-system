import type { ReactNode } from 'react'

/** Eticheta de deasupra titlului: 13px, majuscule, verde text-sigur.
 *  Una per secțiune, și doar unde spune ceva (locul, publicul). Nu deasupra fiecărui H2. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label">{children}</div>
}
