import Icon from './Icon.jsx'
import { Picture, WhatsAppButton } from './ui.jsx'
import { photos, messages, school } from '../data/site.js'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--pill">
            <Icon name="pin" size={16} />
            Escola de música em {school.address.city} – {school.address.state}
          </p>
          <h1 id="hero-title">
            A música transforma momentos em <span className="hl">memórias.</span>
          </h1>
          <p className="hero__lead">
            Aprender música pode ser uma experiência de descoberta, expressão e conexão para crianças, jovens, adultos
            e famílias.
          </p>
          <div className="hero__actions">
            <a className="btn btn--secondary" href="#aulas">
              Conheça nossas aulas
              <Icon name="arrowRight" size={18} />
            </a>
            <WhatsAppButton message={messages.geral}>Fale com a escola</WhatsAppButton>
          </div>
          <ul className="hero__facts" aria-label="Destaques">
            <li>Musicalização para bebês e crianças, com os pais junto</li>
            <li>Aulas de instrumento e canto</li>
            <li>Festival anual com alunos de todas as idades</li>
          </ul>
        </div>

        <div className="hero__media">
          <figure className="hero__photo hero__photo--main">
            <Picture photo={photos.criancaSala} loading="eager" priority sizes="(min-width: 960px) 30vw, 60vw" />
          </figure>
          <figure className="hero__photo hero__photo--top">
            <Picture photo={photos.alunaGuitarra} loading="eager" sizes="(min-width: 960px) 20vw, 40vw" />
          </figure>
          <figure className="hero__photo hero__photo--bottom">
            <Picture photo={photos.festivalCertificados} sizes="(min-width: 960px) 24vw, 45vw" />
          </figure>
          <span className="hero__sticker" aria-hidden="true">
            <Icon name="note" size={26} />
          </span>
        </div>
      </div>
    </section>
  )
}
