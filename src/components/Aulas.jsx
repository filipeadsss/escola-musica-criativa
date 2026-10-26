import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { instrumentos, messages, photos } from '../data/site.js'
import { whatsappLink } from '../lib/whatsapp.js'

// Versão resumida na página inicial. A lista completa fica em /instrumentos.html.
export default function Aulas() {
  return (
    <section id="aulas" className="section aulas" aria-labelledby="aulas-title">
      <div className="container">
        <div className="aulas__top">
          <Reveal>
            <SectionHeader id="aulas-title" eyebrow="Aulas" title="Qual instrumento seu filho quer tocar?">
              <p>
                Além da musicalização infantil, a escola ensina instrumentos e canto. E tem aula para adultos também.
              </p>
            </SectionHeader>
          </Reveal>
          <Reveal as="figure" className="aulas__photo" delay={0.1}>
            <Picture photo={photos.alunoGuitarra} sizes="(min-width: 960px) 22vw, 90vw" />
          </Reveal>
        </div>

        <Stagger className="aulas__groups" gap={0.06}>
          {instrumentos.map((g) => (
            <StaggerItem key={g.id} className="aulas__group">
              <h3>{g.titulo}</h3>
              <p>{g.itens.map((i) => i.nome).join(', ')}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="section-actions aulas__actions">
          <a className="btn btn--primary" href="/instrumentos.html">
            Ver todos os instrumentos
            <Icon name="arrowRight" size={18} />
          </a>
          <a className="btn btn--secondary" href={whatsappLink(messages.outroInstrumento)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} />
            Perguntar no WhatsApp
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
