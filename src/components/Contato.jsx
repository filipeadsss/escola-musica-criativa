import { useState } from 'react'
import Icon from './Icon.jsx'
import { Picture, SectionHeader, WhatsAppButton } from './ui.jsx'
import { school, fullAddress, mapsUrl, mapsEmbedUrl, messages, photos } from '../data/site.js'

function MapEmbed() {
  // O mapa só é carregado após o clique, para não enviar dados ao Google sem ação do visitante.
  const [loaded, setLoaded] = useState(false)
  if (loaded) {
    return (
      <iframe
        className="contato__map"
        title={`Mapa com a localização da ${school.name}`}
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }
  return (
    <div className="contato__map contato__map--placeholder">
      <Picture photo={photos.fachada} sizes="(min-width: 960px) 45vw, 100vw" />
      <div className="contato__map-overlay">
        <button type="button" className="btn btn--light" onClick={() => setLoaded(true)}>
          <Icon name="pin" size={18} />
          Carregar mapa interativo
        </button>
        <p>O mapa é fornecido pelo Google Maps.</p>
      </div>
    </div>
  )
}

export default function Contato() {
  return (
    <section id="contato" className="section contato" aria-labelledby="contato-title">
      <div className="container contato__grid">
        <div className="contato__info">
          <SectionHeader id="contato-title" eyebrow="Localização e contato" title="Venha conhecer a escola.">
            <p>
              Estamos no bairro Nossa Senhora de Fátima, em Contagem. Fale com a equipe para tirar dúvidas e
              combinar uma visita.
            </p>
          </SectionHeader>

          <ul className="contact-list">
            <li>
              <span className="contact-list__icon">
                <Icon name="pin" />
              </span>
              <div>
                <h3>Endereço</h3>
                <address>{fullAddress}</address>
                <p className="contact-list__note">{school.address.reference}</p>
              </div>
            </li>
            <li>
              <span className="contact-list__icon">
                <Icon name="whatsapp" />
              </span>
              <div>
                <h3>Telefone e WhatsApp</h3>
                <a href={`tel:+${school.phoneE164}`}>{school.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact-list__icon">
                <Icon name="instagram" />
              </span>
              <div>
                <h3>Instagram</h3>
                <a href={school.instagram.url} target="_blank" rel="noopener noreferrer">
                  {school.instagram.handle}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </li>
            <li>
              <span className="contact-list__icon">
                <Icon name="globe" />
              </span>
              <div>
                <h3>Site</h3>
                <a href={school.website.url} target="_blank" rel="noopener noreferrer">
                  {school.website.label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </div>
            </li>
          </ul>

          <p className="contato__hours">Horários de atendimento e das turmas: consulte a equipe pelo WhatsApp.</p>

          <div className="contato__actions">
            <WhatsAppButton message={messages.geral}>Chamar no WhatsApp</WhatsAppButton>
            <a className="btn btn--secondary" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="external" size={18} />
              Abrir no Google Maps
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>

        <div className="contato__media">
          <MapEmbed />
        </div>
      </div>
    </section>
  )
}
