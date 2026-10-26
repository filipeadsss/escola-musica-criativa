import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'
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

          <Reveal className="destaques">
            <h3 className="destaques__title">
              <Icon name="sparkle" size={22} />
              Diferenciais da nossa musicalização
            </h3>
            <Stagger className="checklist checklist--destaques">
              {destaques.map((d) => (
                <StaggerItem key={d.text}>
                  <Icon name={d.icon} size={22} />
                  {d.text}
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>

          <Reveal className="section-actions">
            <WhatsAppButton message={messages.musicalizacao}>Quero saber das turmas</WhatsAppButton>
            {hasVideos && (
              <a className="btn btn--secondary" href={videosPageUrl('musicalizacao')}>
                <Icon name="video" size={18} />
                Ver fotos e vídeos das aulas
              </a>
            )}
          </Reveal>
        </div>

        {/* Fotos sem animação de entrada e sem carregamento tardio: no celular elas não apareciam. */}
        <div className="musicalizacao__media">
          <figure className="musicalizacao__photo musicalizacao__photo--a">
            <Picture photo={photos.familias} loading="eager" sizes="(min-width: 960px) 26vw, 60vw" />
          </figure>
          <figure className="musicalizacao__photo musicalizacao__photo--b">
            <Picture photo={photos.tecidoAzul} loading="eager" sizes="(min-width: 960px) 22vw, 45vw" />
          </figure>
        </div>
      </div>
    </section>
  )
}
