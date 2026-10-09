import { featured, dietFilters, bulk, about } from './data/content'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pill } from './components/Pill'
import { ProductCard } from './components/ProductCard'
import { DepartmentGrid } from './components/DepartmentGrid'
import { SectionLabel } from './components/SectionLabel'
import { BulkRow } from './components/BulkRow'
import { B2BBox } from './components/B2BBox'
import { FactSheet } from './components/FactSheet'
import { PromiseBand } from './components/PromiseBand'
import { Footer } from './components/Footer'

/** Pagina principală aprobată la 2026-10-09, recompusă din componente.
 *  Ordinea: caută → ce e pe raft → raioanele → vrac și firme → cine suntem → promisiuni.
 *  Fundalul de bază e „hârtia" #F2F1EC; ies din el doar Vracuri (carton) și banda de promisiuni (alb). */
export default function App() {
  return (
    <div id="top" className="page">
      <TopBar />
      <Header />
      <main>
        <Hero />

        <section className="wrap diet">
          <h2 className="h2-sm">Cauți după regim?</h2>
          <div className="diet__list">
            {dietFilters.map((d) => (
              <Pill key={d} tone="white">{d}</Pill>
            ))}
          </div>
        </section>

        <section className="wrap section-tight" id="produse">
          <div className="section-head">
            <h2 className="h2">Din raft, gata de pus în coș</h2>
            <a className="link-more" href="#produse">Toate produsele →</a>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        <section className="wrap section-tight" id="raioane">
          <h2 className="h2">Raioane</h2>
          <DepartmentGrid />
        </section>

        <section className="bulk" id="vrac">
          <div className="wrap bulk__inner">
            <div className="bulk__text">
              <SectionLabel>{bulk.label}</SectionLabel>
              <h2 className="h2-xl">{bulk.title}</h2>
              <p className="lead">{bulk.text}</p>
              <div className="bulk__rows">
                {bulk.items.map((b) => (
                  <BulkRow key={b.name} {...b} />
                ))}
              </div>
              <a className="link-more" href="#vrac">{bulk.more}</a>
            </div>
            <div className="bulk__side">
              <div className="bulk__photo">
                <span className="photo-note">{bulk.photoNote}</span>
              </div>
              <B2BBox />
            </div>
          </div>
        </section>

        <section className="wrap about">
          <div className="about__text">
            <SectionLabel>{about.label}</SectionLabel>
            <h2 className="h2-xl">{about.title}</h2>
            <p className="lead">{about.text}</p>
          </div>
          <FactSheet />
        </section>

        <PromiseBand />
      </main>
      <Footer />
    </div>
  )
}
