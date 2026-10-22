import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { photos, messages } from '../data/site.js'

const valores = [
  { title: 'Evolução', text: 'Um momento para mostrar o que foi construído ao longo das aulas.' },
  { title: 'Palco de verdade', text: 'A experiência de se apresentar ao vivo, com luz, som e plateia.' },
  { title: 'Todas as idades', text: 'Crianças pequenas, adolescentes e adultos dividem o mesmo palco.' },
  { title: 'Família junto', text: 'Pais e filhos também sobem ao palco para tocar lado a lado.' },
]

export default function Festival() {
  return (
    <section id="festival" className="section festival" aria-labelledby="festival-title">
      <div className="container">
        <div className="festival__head">
          <SectionHeader id="festival-title" eyebrow="Festival Música Criativa" title="O aprendizado ganha vida no palco.">
            <p>
              Todos os anos, o festival da Escola Música Criativa reúne alunos de diferentes idades em uma celebração
              da música. É uma oportunidade de compartilhar o que foi aprendido, viver a experiência de se apresentar
              e celebrar a trajetória musical junto com professores e familiares.
            </p>
          </SectionHeader>
          <p className="festival__motto">
            Talentos que inspiram,
            <br />
            <span>música que transforma.</span>
          </p>
        </div>

        <div className="festival__media">
          <figure className="festival__photo festival__photo--wide">
            <Picture photo={photos.festivalCertificados} sizes="(min-width: 960px) 60vw, 100vw" />
            <figcaption>Entrega dos certificados no palco do festival</figcaption>
          </figure>
          <figure className="festival__photo">
            <Picture photo={photos.festivalPalco} sizes="(min-width: 960px) 36vw, 100vw" />
            <figcaption>Apresentação ao vivo</figcaption>
          </figure>
        </div>

        <ul className="festival__values">
          {valores.map((v, i) => (
            <li key={v.title}>
              <span className="festival__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </li>
          ))}
        </ul>

        <div className="festival__cta">
          <p>A musicalização infantil também ganha uma edição própria do festival, pensada para os pequenos.</p>
          <WhatsAppButton message={messages.festival}>Saber mais sobre o festival</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
