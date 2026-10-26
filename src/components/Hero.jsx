import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { Picture, WhatsAppButton } from './ui.jsx'
import { m } from './motion.jsx'
import { photos, messages, school } from '../data/site.js'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }
const photo = (delay) => ({
  hidden: { opacity: 0, scale: 0.94, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { delay, duration: 0.7 } },
})

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <m.div className="container hero__grid" initial="hidden" animate="show" variants={container}>
        <div className="hero__copy">
          <m.div className="hero__brand" variants={item}>
            <Logo className="hero__logo" />
          </m.div>
          <m.p className="eyebrow eyebrow--pill" variants={item}>
            <Icon name="pin" size={16} />
            Escola de música no Centro de {school.address.city}
          </m.p>
          <m.h1 id="hero-title" variants={item}>
            Seu filho aprende música de forma <span className="hl">lúdica e prazerosa.</span> E você vive isso junto.
          </m.h1>
          <m.p className="hero__lead" variants={item}>
            Do primeiro chocalho ao primeiro palco, com professores que acompanham cada aluno de perto.
          </m.p>
          <m.div className="hero__actions" variants={item}>
            <WhatsAppButton message={messages.geral}>Quero conhecer a escola</WhatsAppButton>
            <a className="btn btn--secondary" href="#aulas">
              Ver as aulas
              <Icon name="arrowRight" size={18} />
            </a>
          </m.div>
          <m.ul className="hero__facts" aria-label="Destaques" variants={item}>
            <li>Aulas para bebês, crianças, jovens e adultos</li>
            <li>Na musicalização, os pais participam da aula</li>
            <li>Festival todo ano, com todos os alunos no palco</li>
          </m.ul>
        </div>

        <div className="hero__media">
          <m.figure className="hero__photo hero__photo--main" variants={photo(0.15)}>
            <Picture photo={photos.criancaSala} loading="eager" priority sizes="(min-width: 960px) 30vw, 60vw" />
          </m.figure>
          <m.figure className="hero__photo hero__photo--top" variants={photo(0.3)}>
            <Picture photo={photos.alunaGuitarra} loading="eager" sizes="(min-width: 960px) 20vw, 40vw" />
          </m.figure>
          <m.figure className="hero__photo hero__photo--bottom" variants={photo(0.42)}>
            <Picture photo={photos.festivalCertificados} sizes="(min-width: 960px) 24vw, 45vw" />
          </m.figure>
          <m.span
            className="hero__sticker"
            aria-hidden="true"
            variants={{ hidden: { opacity: 0, scale: 0, rotate: -40 }, show: { opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.65, type: 'spring', stiffness: 260, damping: 14 } } }}
          >
            <Icon name="note" size={26} />
          </m.span>
        </div>
      </m.div>
    </section>
  )
}
