import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { Reveal, Stagger, StaggerItem, m } from './motion.jsx'
import { photos, messages } from '../data/site.js'
import { videosByCategory, videosPageUrl } from '../data/videos.js'

const destaques = [
  { icon: 'note', text: 'Brincar com sons e ritmos' },
  { icon: 'drum', text: 'Tocar instrumentos de verdade' },
  { icon: 'hand', text: 'Cantar, dançar e se movimentar' },
  { icon: 'users', text: 'Brincar em grupo e esperar a vez' },
  { icon: 'sparkle', text: 'Momentos de carinho entre pais e filhos' },
]

export default function Musicalizacao() {
  const hasVideos = videosByCategory('musicalizacao').length > 0
  return (
    <section id="musicalizacao" className="section musicalizacao" aria-labelledby="musicalizacao-title">
      <div className="container musicalizacao__grid">
        <div className="musicalizacao__copy">
          <Reveal>
            <SectionHeader
              id="musicalizacao-title"
              eyebrow="Musicalização infantil · bebês e crianças"
              title="A primeira aula de música do seu filho, com você do lado."
            >
              <p>
                Pais e filhos fazem a aula juntos: cantam, tocam, dançam e brincam com sons. A criança descobre a
                música no colo de quem ama, e você acompanha cada descoberta de pertinho.
              </p>
            </SectionHeader>
          </Reveal>

          <Stagger className="checklist">
            {destaques.map((d) => (
              <StaggerItem key={d.text}>
                <Icon name={d.icon} size={20} />
                {d.text}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal as="p" className="musicalizacao__room">
            As salas são coloridas e cheias de brinquedos. Uma delas parece o quarto do Andy, de <em>Toy Story</em>,
            com papel de parede de nuvens e tudo.
          </Reveal>

          <Reveal className="section-actions">
            <WhatsAppButton message={messages.musicalizacao}>Quero saber das turmas</WhatsAppButton>
            {hasVideos && (
              <a className="btn btn--secondary" href={videosPageUrl('musicalizacao')}>
                <Icon name="video" size={18} />
                Ver vídeos das aulas
              </a>
            )}
          </Reveal>
        </div>

        <div className="musicalizacao__media">
          <m.figure
            className="musicalizacao__photo musicalizacao__photo--a"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Picture photo={photos.familias} sizes="(min-width: 960px) 26vw, 60vw" />
          </m.figure>
          <m.figure
            className="musicalizacao__photo musicalizacao__photo--b"
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <Picture photo={photos.tecidoAzul} sizes="(min-width: 960px) 22vw, 45vw" />
          </m.figure>
        </div>
      </div>
    </section>
  )
}
