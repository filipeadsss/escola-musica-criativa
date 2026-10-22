import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { Reveal, Stagger, fadeUp, m } from './motion.jsx'
import { modalidades, messages, photos } from '../data/site.js'
import { videosByCategory, videosPageUrl } from '../data/videos.js'
import { whatsappLink } from '../lib/whatsapp.js'

function CardLink({ href, external, icon = 'arrowRight', children }) {
  return (
    <a
      className="aula-card__link"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon name={icon} size={18} />
      {external && <span className="sr-only"> (abre o WhatsApp em nova aba)</span>}
    </a>
  )
}

function Card({ className = '', children }) {
  return (
    <m.li className={`aula-card ${className}`} variants={fadeUp} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      {children}
    </m.li>
  )
}

export default function Aulas() {
  return (
    <section id="aulas" className="section aulas" aria-labelledby="aulas-title">
      <div className="container">
        <div className="aulas__top">
          <Reveal>
            <SectionHeader id="aulas-title" eyebrow="Aulas" title="Qual instrumento seu filho quer tocar?">
              <p>
                Escolha uma opção e chame a gente no WhatsApp. A equipe explica como funcionam as turmas e os
                horários. E tem aula para adultos também.
              </p>
            </SectionHeader>
          </Reveal>
          <Reveal as="figure" className="aulas__photo" delay={0.1}>
            <Picture photo={photos.alunoGuitarra} sizes="(min-width: 960px) 22vw, 90vw" />
          </Reveal>
        </div>

        <Stagger className="aulas__grid" gap={0.06}>
          {modalidades.map((mod) => {
            const hasVideos = videosByCategory(mod.id).length > 0
            return (
              <Card key={mod.nome} className={mod.destaque ? 'aula-card--featured' : ''}>
                <p className="aula-card__kicker">{mod.destaque ? 'O xodó da escola' : 'Aulas de'}</p>
                <h3 className="aula-card__title">{mod.nome}</h3>
                <p className="aula-card__text">{mod.detalhe}</p>
                <div className="aula-card__links">
                  {mod.anchor ? (
                    <CardLink href={mod.anchor}>Como é a aula</CardLink>
                  ) : (
                    <CardLink href={whatsappLink(messages.aula(mod.nome.toLowerCase()))} external>
                      Perguntar no WhatsApp
                    </CardLink>
                  )}
                  {hasVideos && (
                    <CardLink href={videosPageUrl(mod.id)} icon="video">
                      Ver vídeos
                    </CardLink>
                  )}
                </div>
              </Card>
            )
          })}
          <Card className="aula-card--other">
            <p className="aula-card__kicker">Não achou?</p>
            <h3 className="aula-card__title">Outro instrumento</h3>
            <p className="aula-card__text">Pergunte para a equipe quais instrumentos e turmas estão abertos agora.</p>
            <CardLink href={whatsappLink(messages.outroInstrumento)} external>
              Perguntar no WhatsApp
            </CardLink>
          </Card>
        </Stagger>
      </div>
    </section>
  )
}
