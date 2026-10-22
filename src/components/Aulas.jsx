import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { modalidades, messages, photos } from '../data/site.js'
import { whatsappLink } from '../lib/whatsapp.js'

function CardLink({ href, external, children }) {
  return (
    <a
      className="aula-card__link"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      <Icon name="arrowRight" size={18} />
      {external && <span className="sr-only"> (abre o WhatsApp em nova aba)</span>}
    </a>
  )
}

export default function Aulas() {
  return (
    <section id="aulas" className="section aulas" aria-labelledby="aulas-title">
      <div className="container">
        <div className="aulas__top">
          <SectionHeader id="aulas-title" eyebrow="Aulas e experiências" title="Encontre a sua forma de fazer música.">
            <p>
              Escolha a modalidade e fale com a equipe para consultar turmas, horários e disponibilidade.
            </p>
          </SectionHeader>
          <figure className="aulas__photo">
            <Picture photo={photos.alunoGuitarra} sizes="(min-width: 960px) 22vw, 90vw" />
          </figure>
        </div>

        <ul className="aulas__grid">
          {modalidades.map((m) => (
            <li key={m.nome} className={`aula-card ${m.destaque ? 'aula-card--featured' : ''}`}>
              <p className="aula-card__kicker">{m.destaque ? 'Destaque da escola' : 'Aulas de'}</p>
              <h3 className="aula-card__title">{m.nome}</h3>
              <p className="aula-card__text">{m.detalhe}</p>
              {m.anchor ? (
                <CardLink href={m.anchor}>Conhecer a proposta</CardLink>
              ) : (
                <CardLink href={whatsappLink(messages.aula(m.nome.toLowerCase()))} external>
                  Consultar disponibilidade
                </CardLink>
              )}
            </li>
          ))}
          <li className="aula-card aula-card--other">
            <p className="aula-card__kicker">Não encontrou?</p>
            <h3 className="aula-card__title">Outro instrumento</h3>
            <p className="aula-card__text">Pergunte à equipe quais instrumentos e turmas estão disponíveis agora.</p>
            <CardLink href={whatsappLink(messages.outroInstrumento)} external>
              Perguntar no WhatsApp
            </CardLink>
          </li>
        </ul>
      </div>
    </section>
  )
}
