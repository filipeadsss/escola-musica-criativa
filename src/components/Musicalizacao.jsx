import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { photos, messages } from '../data/site.js'

const destaques = [
  { icon: 'note', text: 'Exploração de sons e ritmos' },
  { icon: 'drum', text: 'Contato com instrumentos musicais' },
  { icon: 'hand', text: 'Atividades que convidam a participar' },
  { icon: 'users', text: 'Interação entre crianças e adultos' },
  { icon: 'sparkle', text: 'Experiências musicais compartilhadas' },
]

export default function Musicalizacao() {
  return (
    <section id="musicalizacao" className="section musicalizacao" aria-labelledby="musicalizacao-title">
      <div className="container musicalizacao__grid">
        <div className="musicalizacao__copy">
          <SectionHeader
            id="musicalizacao-title"
            eyebrow="Musicalização infantil · bebês e crianças"
            title="A primeira experiência musical pode ser vivida em família."
          >
            <p>
              Na musicalização infantil, crianças e responsáveis compartilham descobertas por meio da música. Com
              atividades lúdicas, ritmos, sons e instrumentos, cada encontro se transforma em uma oportunidade de
              participação, expressão e conexão.
            </p>
          </SectionHeader>

          <ul className="checklist">
            {destaques.map((d) => (
              <li key={d.text}>
                <Icon name={d.icon} size={20} />
                {d.text}
              </li>
            ))}
          </ul>

          <p className="musicalizacao__room">
            As aulas acontecem em salas coloridas e cheias de estímulos. Uma delas tem decoração inspirada no
            universo de <em>Toy Story</em>, com papel de parede de nuvens, brinquedos e prateleiras temáticas.
          </p>

          <WhatsAppButton message={messages.musicalizacao}>Quero saber sobre as turmas</WhatsAppButton>
        </div>

        <div className="musicalizacao__media">
          <figure className="musicalizacao__photo musicalizacao__photo--a">
            <Picture photo={photos.familias} sizes="(min-width: 960px) 26vw, 60vw" />
          </figure>
          <figure className="musicalizacao__photo musicalizacao__photo--b">
            <Picture photo={photos.tecidoAzul} sizes="(min-width: 960px) 22vw, 45vw" />
          </figure>
        </div>
      </div>
    </section>
  )
}
