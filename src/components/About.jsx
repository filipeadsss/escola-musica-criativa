import Icon from './Icon.jsx'
import VideoPlayer from './VideoPlayer.jsx'
import { SectionHeader } from './ui.jsx'
import { Reveal, Stagger, StaggerItem, fadeIn } from './motion.jsx'
import { featuredVideo, videosPageUrl } from '../data/videos.js'

const pilares = [
  { icon: 'hand', title: 'Acolhimento de verdade', text: 'Cada criança é recebida com carinho e no tempo dela, como quem chega na casa de alguém querido.' },
  { icon: 'note', title: 'Divertido e na prática', text: 'Os alunos põem a mão nos instrumentos desde cedo. Aprender é tocar, cantar e brincar.' },
  { icon: 'users', title: 'Os pais fazem parte', text: 'Você participa da aula com o seu filho e acompanha cada descoberta de perto.' },
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
                Aqui a criança encontra colo, calma e um ambiente que abraça. Ela aprende música de um jeito
                divertido e prático, e os pais entram na sala junto para viver esse aprendizado com ela.
              </p>
            </SectionHeader>
          </Reveal>

          <Reveal className="salas-tematicas" delay={0.1}>
            <h3 className="salas-tematicas__title">Nossas salas de aula são temáticas</h3>
            <p>
              Inspiradas em histórias e personagens do cinema, elas mudam de tempos em tempos. Assim a criança entra
              num ambiente que parece feito para ela, se sente à vontade para explorar e aprende ainda mais.
            </p>
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
              Ver fotos e vídeos da escola
              <Icon name="arrowRight" size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
