import { brand } from '../data/content'

/** Sloganul clientului, cu majuscule și puncte în verdele siglei (ornament, nu text). */
export function Slogan({ small = false }: { small?: boolean }) {
  return (
    <p className={small ? 'slogan slogan--sm' : 'slogan'}>
      {brand.slogan.map((s, i) => (
        <span key={s}>
          {i > 0 && <span className="slogan__dot" aria-hidden="true"> · </span>}
          {s}
        </span>
      ))}
    </p>
  )
}
