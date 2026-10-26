import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { instrumentos, musicalizacao, messages, photos } from '../data/site.js'
import { whatsappLink } from '../lib/whatsapp.js'

// "Guitarra, violino e ukulele"
const listar = (itens) => {
  const nomes = itens.map((i, n) => (n === 0 ? i.nome : i.nome.toLowerCase()))
  return nomes.length > 1 ? `${nomes.slice(0, -1).join(', ')} e ${nomes.at(-1)}` : nomes[0]
}

// Resumo na página inicial: a musicalização em destaque e os instrumentos em volta.
// A lista completa fica em /instrumentos.html.
export default function Aulas() {
  return (
    <section id="aulas" className="section aulas" aria-labelledby="aulas-title">
      <div className="container">
        <div className="aulas__top">
          <Reveal>
            <SectionHeader id="aulas-title" eyebrow="Aulas" title="Qual instrumento seu filho quer tocar?">
              <p>Além da musicalização infantil, a escola ensina instrumentos e canto. E tem aula para adultos também.</p>
            </SectionHeader>
          </Reveal>
          <Reveal as="figure" className="aulas__photo" delay={0.1}>
            <Picture photo={photos.alunoGuitarra} sizes="(min-width: 960px) 22vw, 90vw" />
          </Reveal>
        </div>

        <Stagger className="aulas__mosaico" gap={0.06}>
          <StaggerItem className="aula-card aula-card--featured">
            <p className="aula-card__kicker">O xodó da escola</p>
            <h3 className="aula-card__title">{musicalizacao.nome}</h3>
            <p className="aula-card__text">{musicalizacao.detalhe}</p>
            <div className="aula-card__links">
              <a className="aula-card__link" href="#musicalizacao">
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
          </StaggerItem>

          {instrumentos.map((g) => (
            <StaggerItem key={g.id} className="aula-card aula-card--compact">
              <p className="aula-card__kicker">Aulas de</p>
              <h3 className="aula-card__title">{g.titulo}</h3>
              <p className="aula-card__text">{listar(g.itens)}</p>
              <a className="aula-card__link" href={`/instrumentos.html#${g.id}`}>
                Ver aulas
                <Icon name="arrowRight" size={18} />
                <span className="sr-only"> de {g.titulo.toLowerCase()}</span>
              </a>
            </StaggerItem>
          ))}

          <StaggerItem className="aula-card aula-card--other">
            <p className="aula-card__kicker">Não achou?</p>
            <h3 className="aula-card__title">Outro instrumento</h3>
            <p className="aula-card__text">Pergunte para a equipe quais instrumentos e turmas estão abertos agora.</p>
            <a className="aula-card__link" href={whatsappLink(messages.outroInstrumento)} target="_blank" rel="noopener noreferrer">
              Perguntar no WhatsApp
              <Icon name="arrowRight" size={18} />
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          </StaggerItem>
        </Stagger>

        <Reveal className="section-actions aulas__actions">
          <a className="btn btn--primary" href="/instrumentos.html">
            Ver todos os instrumentos
            <Icon name="arrowRight" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
