import { brand, contact } from '../data/content'

/** Subsol pe hârtie: siglă + poziționare · Contact · Depozite · Ne găsești și aici · rând copyright + slogan. */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner wrap">
        <div className="footer__brand">
          <img src={brand.logo} alt={brand.name} className="footer__logo" />
          <p>{brand.positioning}</p>
        </div>
        <div className="footer__col">
          <span className="footer__title">Contact</span>
          <a className="footer__phone" href={'tel:' + contact.phone.split(' ').join('')}>{contact.phone}</a>
          <a href={'mailto:' + contact.email}>{contact.email}</a>
          <span>{contact.hours}</span>
        </div>
        <div className="footer__col">
          <span className="footer__title">Depozite</span>
          {contact.depots.map((d) => (
            <span key={d.city} className="footer__depot">
              <strong>{d.city}</strong> — {d.role}
              {d.address && (
                <>
                  <br />
                  {d.address}
                </>
              )}
            </span>
          ))}
        </div>
        <div className="footer__col">
          <span className="footer__title">Ne găsești și aici</span>
          {contact.social.map((s) => (
            <a key={s.href} href={s.href}>{s.label}</a>
          ))}
        </div>
      </div>
      <div className="footer__bottom wrap">
        <span>© {brand.legal}</span>
        <span>{brand.slogan.join(' · ')}</span>
      </div>
    </footer>
  )
}
