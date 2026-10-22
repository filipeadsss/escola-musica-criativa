import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { photos, messages } from '../data/site.js'

const atividades = [
  'Explorar sons e conhecer instrumentos de perto',
  'Participar de atividades rítmicas e brincadeiras musicais',
  'Tocar e cantar junto com pais e convidados',
]

export default function Eventos() {
  return (
    <section id="eventos" className="section eventos" aria-labelledby="eventos-title">
      <div className="container eventos__grid">
        <div className="eventos__media">
          <figure className="eventos__photo eventos__photo--a">
            <Picture photo={photos.eventoTambor} sizes="(min-width: 960px) 20vw, 45vw" />
          </figure>
          <figure className="eventos__photo eventos__photo--b">
            <Picture photo={photos.eventoBolhas} sizes="(min-width: 960px) 20vw, 45vw" />
          </figure>
        </div>

        <div className="eventos__copy">
          <SectionHeader
            id="eventos-title"
            eyebrow="Aniversários e eventos"
            title="Um aniversário em que as crianças fazem parte da música."
          >
            <p>
              Leve uma experiência musical para a sua comemoração. As crianças podem explorar sons, conhecer
              instrumentos, participar de atividades rítmicas e compartilhar momentos divertidos com os adultos, em
              uma proposta conduzida pela equipe da Escola Música Criativa.
            </p>
          </SectionHeader>

          <div className="eventos__diff">
            <p className="eventos__diff-title">Mais do que animação</p>
            <p>
              Aqui as crianças não ficam só assistindo: elas pegam os instrumentos, fazem ritmo e participam da
              música, com a condução de quem ensina música todos os dias.
            </p>
          </div>

          <ul className="checklist">
            {atividades.map((a) => (
              <li key={a}>
                <Icon name="note" size={20} />
                {a}
              </li>
            ))}
          </ul>

          <WhatsAppButton message={messages.eventos}>Consultar eventos pelo WhatsApp</WhatsAppButton>
          <p className="fine-print">Formato, disponibilidade de datas e valores são informados pela equipe.</p>
        </div>
      </div>
    </section>
  )
}
