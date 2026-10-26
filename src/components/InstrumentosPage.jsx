import Icon from './Icon.jsx'
import PageShell from './PageShell.jsx'
import { Reveal, Stagger, m, fadeUp } from './motion.jsx'
import { WhatsAppButton } from './ui.jsx'
import { instrumentos, musicalizacao, messages } from '../data/site.js'
import { mediaCategories } from '../data/media.js'
import { videosPageUrl } from '../data/videos.js'
import { whatsappLink } from '../lib/whatsapp.js'

function Card({ id, nome, detalhe, message }) {
  const hasMedia = mediaCategories.some((c) => c.id === id)
  return (
    <m.li className="aula-card" variants={fadeUp}>
      <p className="aula-card__kicker">Aulas de</p>
      <h3 className="aula-card__title">{nome}</h3>
      <p className="aula-card__text">{detalhe}</p>
      <div className="aula-card__links">
        <a className="aula-card__link" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
          Perguntar no WhatsApp
          <Icon name="arrowRight" size={18} />
          <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
        </a>
        {hasMedia && (
          <a className="aula-card__link" href={videosPageUrl(id)}>
            Ver fotos e vídeos
            <Icon name="video" size={18} />
          </a>
        )}
      </div>
    </m.li>
  )
}

export default function InstrumentosPage() {
  return (
    <PageShell current="instrumentos">
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Instrumentos e aulas</p>
            <h1>Qual instrumento seu filho quer tocar?</h1>
            <p className="section-lead">
              Escolha um instrumento e chame a equipe no WhatsApp. Ela explica como funcionam as turmas e os
              horários. E tem aula para adultos também.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section instrumentos-lista">
        <div className="container">
          <Reveal className="aula-card aula-card--featured instrumentos__musicalizacao">
            <p className="aula-card__kicker">O xodó da escola</p>
            <h2 className="aula-card__title">{musicalizacao.nome}</h2>
            <p className="aula-card__text">{musicalizacao.detalhe}</p>
            <div className="aula-card__links">
              <a className="aula-card__link" href="/#musicalizacao">
                Como é a aula
                <Icon name="arrowRight" size={18} />
              </a>
              <a
                className="aula-card__link"
                href={whatsappLink(messages.musicalizacao)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Perguntar no WhatsApp
                <Icon name="arrowRight" size={18} />
                <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
              </a>
            </div>
          </Reveal>

          {instrumentos.map((g) => (
            <div key={g.id} id={g.id} className="instrumentos__grupo">
              <Reveal as="h2" className="instrumentos__titulo">
                {g.titulo}
              </Reveal>
              <Stagger className="aulas__grid" gap={0.06}>
                {g.itens.map((i) => (
                  <Card key={i.id} {...i} message={messages.aula(i.nome.toLowerCase())} />
                ))}
              </Stagger>
            </div>
          ))}

          <Reveal className="aula-card aula-card--other instrumentos__outro">
            <p className="aula-card__kicker">Não achou?</p>
            <h2 className="aula-card__title">Outro instrumento</h2>
            <p className="aula-card__text">Pergunte para a equipe quais instrumentos e turmas estão abertos agora.</p>
            <WhatsAppButton message={messages.outroInstrumento}>Perguntar no WhatsApp</WhatsAppButton>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
