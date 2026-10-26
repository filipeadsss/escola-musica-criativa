import Icon from './Icon.jsx'
import { SectionHeader } from './ui.jsx'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'

// Resumo na página inicial. O conteúdo completo fica em /eventos.html.
const cards = [
  {
    id: 'eventos-escola',
    icon: 'users',
    title: 'Eventos na escola',
    text: 'Noites de luau e piquenique musical, com os alunos se apresentando para as famílias.',
  },
  {
    id: 'banda',
    icon: 'note',
    title: 'A banda da escola',
    text: 'Música infantil ao vivo em aniversários, parques e outros eventos.',
  },
  {
    id: 'festival',
    icon: 'sparkle',
    title: 'Festival Música Criativa',
    text: 'Todo ano, no fim do ano, os alunos sobem ao palco para mostrar o que aprenderam.',
  },
  {
    id: 'sonorizacao',
    icon: 'drum',
    title: 'Sonorização para eventos',
    text: 'A escola também aluga equipamento de som para o seu evento.',
  },
]

export default function Eventos() {
  return (
    <section id="eventos" className="section eventos-resumo" aria-labelledby="eventos-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            id="eventos-title"
            eyebrow="Eventos"
            title="Música criativa também fora da sala de aula."
            align="center"
          >
            <p>Festival, banda, encontros na escola e som para o seu evento. Toque em um deles para saber mais.</p>
          </SectionHeader>
        </Reveal>

        <Stagger className="eventos-resumo__grid" gap={0.07}>
          {cards.map((c) => (
            <StaggerItem key={c.id} className="evento-card">
              <span className="evento-card__icon">
                <Icon name={c.icon} size={24} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a className="aula-card__link" href={`/eventos.html#${c.id}`}>
                Saiba mais
                <Icon name="arrowRight" size={18} />
                <span className="sr-only"> sobre {c.title}</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
