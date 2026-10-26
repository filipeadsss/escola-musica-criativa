import { useCallback, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import Lightbox from './Lightbox.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { Reveal, Stagger, m, fadeUp } from './motion.jsx'
import { homePhotos } from '../data/media.js'

// Prévia na página inicial. Todas as fotos e vídeos ficam em /fotos-e-videos.html.
export default function Galeria() {
  const [current, setCurrent] = useState(null)
  const lastTrigger = useRef(null)

  const move = useCallback((step) => {
    setCurrent((i) => (i + step + homePhotos.length) % homePhotos.length)
  }, [])

  const close = () => {
    setCurrent(null)
    lastTrigger.current?.focus()
  }

  return (
    <section id="galeria" className="section galeria" aria-labelledby="galeria-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            id="galeria-title"
            eyebrow="Fotos e vídeos"
            title="Veja os nossos alunos colocando em prática o que aprendem."
            align="center"
          >
            <p>Fotos e vídeos reais das aulas, dos festivais e dos eventos da escola.</p>
          </SectionHeader>
        </Reveal>

        <Stagger className="galeria__grid galeria__grid--resumo" gap={0.05}>
          {homePhotos.map((photo, i) => (
            <m.li key={photo.src} className="galeria__item" variants={fadeUp}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget
                  setCurrent(i)
                }}
              >
                <Picture photo={photo} sizes="(min-width: 960px) 25vw, 50vw" />
                <span className="sr-only">Ampliar foto</span>
              </button>
            </m.li>
          ))}
        </Stagger>

        <div className="galeria__more">
          <a className="btn btn--primary" href="/fotos-e-videos.html">
            <Icon name="video" size={18} />
            Ver todas as fotos e vídeos
          </a>
        </div>
      </div>
      {current !== null && <Lightbox items={homePhotos} index={current} onClose={close} onMove={move} />}
    </section>
  )
}
