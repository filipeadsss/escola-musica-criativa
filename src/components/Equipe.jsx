import { Picture, SectionHeader } from './ui.jsx'
import { Reveal, fadeIn } from './motion.jsx'
import { photos } from '../data/site.js'

export default function Equipe() {
  return (
    <section id="equipe" className="section equipe" aria-labelledby="equipe-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            id="equipe-title"
            eyebrow="Quem cuida das aulas"
            title="Professores apaixonados por música e por ensinar."
            align="center"
          >
            <p>
              Uma equipe experiente, que gosta de gente e acompanha cada aluno de perto. É essa alegria que seu filho
              encontra quando chega para a aula.
            </p>
          </SectionHeader>
        </Reveal>
        <Reveal as="figure" className="equipe__photo" variants={fadeIn}>
          <Picture photo={photos.equipe} sizes="(min-width: 1200px) 1100px, 100vw" />
          <figcaption>Parte da equipe de professores da Música Criativa</figcaption>
        </Reveal>
      </div>
    </section>
  )
}
