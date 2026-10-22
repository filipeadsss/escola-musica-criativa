import { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Header from './Header.jsx'
import Footer, { CtaFinal } from './Footer.jsx'
import FloatingWhatsApp from './FloatingWhatsApp.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import Icon from './Icon.jsx'
import { WhatsAppButton } from './ui.jsx'
import { MotionProvider, Reveal, m } from './motion.jsx'
import { videos, videoCategories, videosByCategory } from '../data/videos.js'
import { messages, school } from '../data/site.js'

const ALL = 'todos'
const validIds = new Set([ALL, ...videoCategories.map((c) => c.id)])

function readHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  return validIds.has(id) ? id : ALL
}

function EmptyState({ category }) {
  return (
    <m.div className="videos-empty" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
      <span className="videos-empty__icon">
        <Icon name="video" size={28} />
      </span>
      <h2>Os vídeos de {category.label.toLowerCase()} estão chegando.</h2>
      <p>Enquanto isso, veja o dia a dia das aulas no Instagram ou tire suas dúvidas com a equipe.</p>
      <div className="section-actions">
        <a className="btn btn--secondary" href={school.instagram.url} target="_blank" rel="noopener noreferrer">
          <Icon name="instagram" size={18} />
          Ver no Instagram
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        <WhatsAppButton message={messages.aula(category.label.toLowerCase())}>Perguntar no WhatsApp</WhatsAppButton>
      </div>
    </m.div>
  )
}

export default function VideosPage() {
  const [active, setActive] = useState(readHash)

  useEffect(() => {
    const onHash = () => setActive(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const select = (id) => {
    setActive(id)
    history.replaceState(null, '', id === ALL ? window.location.pathname : `#${id}`)
  }

  const list = active === ALL ? videos : videosByCategory(active)
  const category = videoCategories.find((c) => c.id === active)

  return (
    <MotionProvider>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header base="/" current="videos" />
      <main id="conteudo">
        <section className="videos-hero">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Vídeos</p>
              <h1>Veja como são as aulas na Música Criativa.</h1>
              <p className="section-lead">
                Escolha o tipo de aula e assista aos vídeos dos alunos, das turmas e dos festivais.
              </p>
            </Reveal>

            <div className="videos-tabs" role="group" aria-label="Filtrar vídeos por tipo de aula">
              {[{ id: ALL, label: 'Todos' }, ...videoCategories].map((c) => {
                const count = c.id === ALL ? videos.length : videosByCategory(c.id).length
                return (
                  <button
                    key={c.id}
                    type="button"
                    className="videos-tab"
                    aria-pressed={active === c.id}
                    onClick={() => select(c.id)}
                  >
                    {c.label}
                    <span className="videos-tab__count">{count}</span>
                    {active === c.id && <m.span layoutId="tab-bg" className="videos-tab__bg" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section videos-list" aria-live="polite">
          <div className="container">
            <AnimatePresence mode="wait">
              {list.length === 0 ? (
                <EmptyState key={active} category={category} />
              ) : (
                <m.ul
                  key={active}
                  className="videos-grid"
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                >
                  {list.map((v) => (
                    <m.li
                      key={v.id}
                      className="video-card"
                      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                    >
                      <VideoPlayer video={v} />
                      <div className="video-card__body">
                        <p className="video-card__tag">{videoCategories.find((c) => c.id === v.category)?.label}</p>
                        <h2>{v.title}</h2>
                        {v.description && <p>{v.description}</p>}
                        {v.transcript && (
                          <details className="transcript">
                            <summary>Ler o que é dito no vídeo</summary>
                            <p>{v.transcript}</p>
                          </details>
                        )}
                      </div>
                    </m.li>
                  ))}
                </m.ul>
              )}
            </AnimatePresence>
          </div>
        </section>

        <CtaFinal />
      </main>
      <Footer base="/" />
      <FloatingWhatsApp />
    </MotionProvider>
  )
}
