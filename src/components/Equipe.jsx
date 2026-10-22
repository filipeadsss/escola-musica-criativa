import { Picture, SectionHeader } from './ui.jsx'
import { photos } from '../data/site.js'

export default function Equipe() {
  return (
    <section id="equipe" className="section equipe" aria-labelledby="equipe-title">
      <div className="container">
        <SectionHeader
          id="equipe-title"
          eyebrow="Equipe e comunidade"
          title="Uma comunidade que aprende e vive a música junto."
          align="center"
        >
          <p>
            Professores que acompanham cada aluno de perto e famílias que fazem parte da rotina da escola. É essa
            convivência que transforma a aula em encontro.
          </p>
        </SectionHeader>
        <figure className="equipe__photo">
          <Picture photo={photos.equipe} sizes="(min-width: 1200px) 1100px, 100vw" />
          <figcaption>Parte da equipe de professores da Escola Música Criativa</figcaption>
        </figure>
      </div>
    </section>
  )
}
