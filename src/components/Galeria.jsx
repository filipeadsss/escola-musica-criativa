import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { Stagger, m, fadeUp } from './motion.jsx'
import { gallery } from '../data/site.js'

const INITIAL = 8

// Padrão do mosaico: blocos de 8 fotos que fecham a grade sem buracos (2 e 4 colunas).
const layout = (i) => (i % 8 === 0 ? 'big' : i === 3 || i === 11 ? 'wide' : 'base')

function Lightbox({ index, onClose, onMove }) {
  const ref = useRef(null)
  const photo = gallery[index]

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onMove])

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Visualizar foto"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <figure className="lightbox__figure">
        <m.img
          key={index}
          src={photo.full}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        />
        <figcaption>
          <span className="tag">{photo.tag}</span>
          <span aria-live="polite">
            Foto {index + 1} de {gallery.length}
          </span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox__btn lightbox__close" onClick={() => ref.current.close()} autoFocus>
        <Icon name="close" size={22} />
        <span className="sr-only">Fechar</span>
      </button>
      <button type="button" className="lightbox__btn lightbox__prev" onClick={() => onMove(-1)}>
        <Icon name="arrowLeft" size={22} />
        <span className="sr-only">Foto anterior</span>
      </button>
      <button type="button" className="lightbox__btn lightbox__next" onClick={() => onMove(1)}>
        <Icon name="arrowRight" size={22} />
        <span className="sr-only">Próxima foto</span>
      </button>
    </dialog>
  )
}

export default function Galeria() {
  const [expanded, setExpanded] = useState(false)
  const [current, setCurrent] = useState(null)
  const lastTrigger = useRef(null)
  const items = expanded ? gallery : gallery.slice(0, INITIAL)

  const move = useCallback((step) => {
    setCurrent((i) => (i + step + gallery.length) % gallery.length)
  }, [])

  const close = () => {
    setCurrent(null)
    lastTrigger.current?.focus()
  }

  return (
    <section id="galeria" className="section galeria" aria-labelledby="galeria-title">
      <div className="container">
        <SectionHeader id="galeria-title" eyebrow="Galeria" title="Um pouco do nosso dia a dia." align="center" />
        <Stagger className="galeria__grid" gap={0.05}>
          {items.map((photo, i) => (
            <m.li key={photo.src} className={`galeria__item galeria__item--${layout(i)}`} variants={fadeUp}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget
                  setCurrent(i)
                }}
              >
                <Picture photo={photo} sizes="(min-width: 960px) 25vw, 50vw" />
                <span className="galeria__tag">{photo.tag}</span>
                <span className="sr-only">Ampliar foto</span>
              </button>
            </m.li>
          ))}
        </Stagger>
        {gallery.length > INITIAL && (
          <div className="galeria__more">
            <button type="button" className="btn btn--secondary" aria-expanded={expanded} onClick={() => setExpanded((v) => !v)}>
              {expanded ? 'Mostrar menos fotos' : `Ver todas as fotos (${gallery.length})`}
            </button>
          </div>
        )}
      </div>
      {current !== null && <Lightbox index={current} onClose={close} onMove={move} />}
    </section>
  )
}
