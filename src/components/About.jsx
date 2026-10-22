import Icon from './Icon.jsx'
import { Picture, SectionHeader } from './ui.jsx'
import { photos, school } from '../data/site.js'

const pilares = [
  { icon: 'users', title: 'Família por perto', text: 'Na musicalização infantil, os responsáveis participam das aulas junto com as crianças.' },
  { icon: 'note', title: 'Música na prática', text: 'Aulas de instrumento e canto com professores que acompanham cada aluno de perto.' },
  { icon: 'sparkle', title: 'Palco para todos', text: 'Todo ano, o festival reúne alunos de diferentes idades para tocar e cantar ao vivo.' },
]

export default function About() {
  return (
    <section id="escola" className="section about" aria-labelledby="escola-title">
      <div className="container about__grid">
        <figure className="about__media">
          <Picture photo={photos.comunidade} sizes="(min-width: 960px) 45vw, 100vw" />
          <figcaption className="about__quote">
            <span className="about__quote-mark" aria-hidden="true">“</span>
            {school.tagline}
          </figcaption>
        </figure>

        <div className="about__copy">
          <SectionHeader id="escola-title" eyebrow="A escola" title="Um lugar para aprender, criar e conviver por meio da música.">
            <p>
              A Escola Música Criativa, no bairro Nossa Senhora de Fátima, em Contagem, recebe bebês, crianças,
              jovens e adultos. As salas são coloridas e interativas, e os professores participam de perto da
              experiência de cada aluno, da primeira aula até o palco.
            </p>
          </SectionHeader>
          <ul className="pillars">
            {pilares.map((p) => (
              <li key={p.title} className="pillar">
                <span className="pillar__icon">
                  <Icon name={p.icon} size={22} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
