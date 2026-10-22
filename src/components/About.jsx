import Icon from './Icon.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import { SectionHeader } from './ui.jsx'
import { Reveal, Stagger, StaggerItem, fadeIn } from './motion.jsx'
import { school } from '../data/site.js'
import { featuredVideo, videosPageUrl } from '../data/videos.js'

const pilares = [
  { icon: 'users', title: 'Pais junto na aula', text: 'Na musicalização, você faz a aula com o seu filho. É um tempo só de vocês.' },
  { icon: 'note', title: 'Aprender brincando', text: 'Ritmo, movimento, sons e instrumentos. A aula é leve e a criança quer voltar.' },
  { icon: 'sparkle', title: 'Um palco para mostrar', text: 'Todo ano tem festival. Seu filho sobe ao palco e mostra o que aprendeu para a família.' },
]

export default function About() {
  return (
    <section id="escola" className="section about" aria-labelledby="escola-title">
      <div className="container about__grid">
        <Reveal className="about__media" variants={fadeIn}>
          <div className="about__video">
            <VideoPlayer video={featuredVideo} />
          </div>
          <p className="about__video-caption">
            <Icon name="video" size={18} />
            {featuredVideo.title}
          </p>
          <details className="transcript">
            <summary>Ler o que é dito no vídeo</summary>
            <p>{featuredVideo.transcript}</p>
          </details>
        </Reveal>

        <div className="about__copy">
          <Reveal>
            <SectionHeader id="escola-title" eyebrow="Conheça a escola" title="Uma escola de música com cara de casa.">
              <p>
                Salas coloridas, brinquedos por todo lado e instrumentos ao alcance das mãos. A Música Criativa fica
                no bairro Nossa Senhora de Fátima, em Contagem, e recebe bebês, crianças, jovens e adultos.
              </p>
            </SectionHeader>
          </Reveal>

          <Reveal as="blockquote" className="mission" delay={0.1}>
            <p>“{school.mission}”</p>
            <footer>Equipe Música Criativa</footer>
          </Reveal>

          <Stagger className="pillars">
            {pilares.map((p) => (
              <StaggerItem key={p.title} className="pillar">
                <span className="pillar__icon">
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="about__more" delay={0.1}>
            <a className="text-link" href={videosPageUrl()}>
              Ver todos os vídeos da escola
              <Icon name="arrowRight" size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
