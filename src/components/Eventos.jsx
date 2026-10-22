import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { Reveal, Stagger, StaggerItem, m } from './motion.jsx'
import { photos, messages } from '../data/site.js'

const atividades = [
  'As crianças conhecem e tocam instrumentos',
  'Brincadeiras com ritmo, música e movimento',
  'Pais e convidados entram na brincadeira também',
]

export default function Eventos() {
  return (
    <section id="eventos" className="section eventos" aria-labelledby="eventos-title">
      <div className="container eventos__grid">
        <div className="eventos__media">
          <m.figure
            className="eventos__photo eventos__photo--a"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Picture photo={photos.eventoTambor} sizes="(min-width: 960px) 20vw, 45vw" />
          </m.figure>
          <m.figure
            className="eventos__photo eventos__photo--b"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <Picture photo={photos.eventoBolhas} sizes="(min-width: 960px) 20vw, 45vw" />
          </m.figure>
        </div>

        <div className="eventos__copy">
          <Reveal>
            <SectionHeader
              id="eventos-title"
              eyebrow="Festas de aniversário"
              title="Um aniversário em que as crianças fazem a música."
            >
              <p>
                A equipe da escola leva instrumentos e brincadeiras musicais para a sua festa. As crianças tocam,
                cantam e participam de tudo, junto com os adultos.
              </p>
            </SectionHeader>
          </Reveal>

          <Reveal className="eventos__diff" delay={0.1}>
            <p className="eventos__diff-title">Não é só animação</p>
            <p>
              Ninguém fica só olhando: as crianças pegam nos instrumentos e fazem a música acontecer, com a ajuda de
              quem ensina música todos os dias.
            </p>
          </Reveal>

          <Stagger className="checklist">
            {atividades.map((a) => (
              <StaggerItem key={a}>
                <Icon name="note" size={20} />
                {a}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <WhatsAppButton message={messages.eventos}>Consultar para a minha festa</WhatsAppButton>
            <p className="fine-print">A equipe informa formato, datas livres e valores pelo WhatsApp.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
