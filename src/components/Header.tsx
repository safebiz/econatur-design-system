import { useState } from 'react'
import { brand, popularSearches, departments } from '../data/content'
import { Pill } from './Pill'

/** Antet lipit sus: siglă · Coș · CĂUTAREA (cea mai importantă piesă — oamenii caută după ingredient) ·
 *  „Căutate des" · rândul de raioane.
 *  Desktop: toate cele 10 raioane vizibile pe un rând (corectura v1 → v2).
 *  Sub 1100px: butonul „Raioane" deschide lista; termenii căutați derulează lateral. */
export function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__top">
          <button
            className="header__toggle"
            aria-expanded={open}
            aria-controls="raioane"
            onClick={() => setOpen(!open)}
          >
            Raioane
          </button>
          <a className="header__brand" href="#top">
            <img src={brand.logo} alt={brand.name} className="header__logo" />
          </a>
          <a className="btn btn--ink header__cart" href="#cos">
            Coș <span className="header__count">{cartCount}</span>
          </a>
        </div>

        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="q">Caută produse</label>
          <input id="q" className="search__input" type="search" placeholder="Caută: matcha, chia, caju…" />
          <button className="btn btn--accent search__btn" type="submit">Caută</button>
        </form>

        <div className="popular">
          <span className="popular__label">Căutate des:</span>
          <div className="popular__list">
            {popularSearches.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>

        <nav id="raioane" className={open ? 'departments is-open' : 'departments'} aria-label="Raioane">
          {departments.map((d) => (
            <a key={d} className="departments__link" href="#raioane">
              {d}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
