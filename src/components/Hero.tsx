import { brand, hero } from '../data/content'
import { SectionLabel } from './SectionLabel'
import { Button } from './Button'
import { SackLabel } from './SackLabel'
import { Slogan } from './Slogan'

/** Deschiderea: etichetă · H1 76px · paragraf · slogan · 2 butoane · poza mare cu eticheta de sac peste ea.
 *  Eticheta de sac de aici consumă bugetul ecranului — nu mai apare alta până la „Despre noi". */
export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero__text">
        <SectionLabel>{hero.label}</SectionLabel>
        <h1 className="hero__title">{brand.positioning}</h1>
        <p className="hero__lead">{hero.lead}</p>
        <Slogan />
        <div className="hero__actions">
          <Button variant="ink" href="#produse">{hero.primary}</Button>
          <Button variant="outline" href="#vrac">{hero.secondary}</Button>
        </div>
      </div>
      <div className="hero__photo">
        <span className="photo-note">{hero.photoNote}</span>
        <SackLabel name={hero.tag.name} weight={hero.tag.weight} hand={hero.tag.hand} />
      </div>
    </section>
  )
}
