import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { Reveal, Stagger, StaggerItem, fadeIn } from './motion.jsx'
import { photos, messages } from '../data/site.js'
import { videosByCategory, videosPageUrl } from '../data/videos.js'
import Icon from './Icon.jsx'

const valores = [
  { title: 'Ver o quanto evoluiu', text: 'É o dia de mostrar tudo o que foi aprendido ao longo das aulas.' },
  { title: 'A emoção do palco', text: 'Luz, som, plateia e aplausos. Uma experiência que fica para sempre.' },
  { title: 'Todas as idades', text: 'Criança pequena, adolescente e adulto dividem o mesmo palco.' },
  { title: 'Família no palco', text: 'Muitas vezes pais e filhos sobem juntos para tocar lado a lado.' },
]

export default function Festival() {
  const hasVideos = videosByCategory('festival').length > 0
  return (
    <section id="festival" className="section festival" aria-labelledby="festival-title">
      <div className="container">
        <div className="festival__head">
          <Reveal>
            <SectionHeader id="festival-title" eyebrow="Festival Música Criativa" title="O dia em que seu filho sobe ao palco.">
              <p>
                Todo ano, a escola faz um festival para os alunos mostrarem o que aprenderam. A família assiste,
                torce e se emociona. É um dia para guardar na memória.
              </p>
            </SectionHeader>
          </Reveal>
          <Reveal as="p" className="festival__motto" delay={0.15}>
            Talentos que inspiram,
            <br />
            <span>música que transforma.</span>
          </Reveal>
        </div>

        <div className="festival__media">
          <Reveal as="figure" className="festival__photo festival__photo--wide" variants={fadeIn}>
            <Picture photo={photos.festivalCertificados} sizes="(min-width: 960px) 60vw, 100vw" />
            <figcaption>Entrega dos certificados no palco</figcaption>
          </Reveal>
          <Reveal as="figure" className="festival__photo" variants={fadeIn} delay={0.12}>
            <Picture photo={photos.festivalPalco} sizes="(min-width: 960px) 36vw, 100vw" />
            <figcaption>Apresentação ao vivo</figcaption>
          </Reveal>
        </div>

        <Stagger className="festival__values">
          {valores.map((v, i) => (
            <StaggerItem key={v.title}>
              <span className="festival__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="festival__cta">
          <p>Os pequenos da musicalização também têm o festival deles, feito sob medida para a idade.</p>
          <div className="section-actions">
            <WhatsAppButton message={messages.festival}>Quero saber do festival</WhatsAppButton>
            {hasVideos && (
              <a className="btn btn--light" href={videosPageUrl('festival')}>
                <Icon name="video" size={18} />
                Ver vídeos do festival
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
