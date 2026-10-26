import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import Lightbox from './Lightbox.jsx'
import PageShell from './PageShell.jsx'
import { Reveal } from './motion.jsx'
import { Picture } from './ui.jsx'
import { media, mediaCategories } from '../data/media.js'

const ALL = 'todos'
const tipos = [
  { id: ALL, label: 'Tudo' },
  { id: 'foto', label: 'Fotos' },
  { id: 'video', label: 'Vídeos' },
]
const validIds = new Set([ALL, ...mediaCategories.map((c) => c.id)])

function readHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  return validIds.has(id) ? id : ALL
}

export default function MediaPage() {
  const [categoria, setCategoria] = useState(readHash)
  const [tipo, setTipo] = useState(ALL)
  const [current, setCurrent] = useState(null)
  const lastTrigger = useRef(null)

  useEffect(() => {
    const onHash = () => setCategoria(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const selectCategoria = (id) => {
    setCategoria(id)
    history.replaceState(null, '', id === ALL ? window.location.pathname : `#${id}`)
  }

  const items = media.filter((i) => (categoria === ALL || i.category === categoria) && (tipo === ALL || i.type === tipo))

  const move = useCallback((step) => setCurrent((i) => (i + step + items.length) % items.length), [items.length])
  const close = () => {
    setCurrent(null)
    lastTrigger.current?.focus()
  }

  return (
    <PageShell current="midia">
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Fotos e vídeos</p>
            <h1>Veja o que os nossos alunos aprendem todos os dias.</h1>
            <p className="section-lead">
              Fotos e vídeos reais das aulas, dos festivais e dos eventos. Use os filtros para ver só o que você
              procura.
            </p>
          </Reveal>

          <div className="media-filtros">
            <div className="videos-tabs" role="group" aria-label="Filtrar por tipo">
              {tipos.map((t) => (
                <button key={t.id} type="button" className="videos-tab" aria-pressed={tipo === t.id} onClick={() => setTipo(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <div className="videos-tabs" role="group" aria-label="Filtrar por instrumento ou tema">
              {[{ id: ALL, label: 'Todos os temas' }, ...mediaCategories].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className="videos-tab"
                  aria-pressed={categoria === c.id}
                  onClick={() => selectCategoria(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section media-lista" aria-live="polite">
        <div className="container">
          {items.length === 0 ? (
            <p className="media-vazio">Ainda não há itens com esses filtros. Experimente trocar o tipo ou o tema.</p>
          ) : (
            <ul className="media-grid">
              {items.map((item, i) => (
                <li key={item.key} className="media-item">
                  <button
                    type="button"
                    onClick={(e) => {
                      lastTrigger.current = e.currentTarget
                      setCurrent(i)
                    }}
                  >
                    {item.type === 'video' ? (
                      <img src={item.poster} alt="" width={item.width} height={item.height} loading="lazy" decoding="async" />
                    ) : (
                      <Picture photo={item} sizes="(min-width: 960px) 25vw, 50vw" />
                    )}
                    {item.type === 'video' && (
                      <span className="media-item__play">
                        <Icon name="play" size={26} />
                      </span>
                    )}
                    <span className="sr-only">{item.type === 'video' ? `Assistir vídeo: ${item.alt}` : 'Ampliar foto'}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {current !== null && items[current] && <Lightbox items={items} index={current} onClose={close} onMove={move} />}
    </PageShell>
  )
}
