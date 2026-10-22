import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { WhatsAppButton } from './ui.jsx'
import { nav, school, fullAddress, messages } from '../data/site.js'

export function CtaFinal() {
  return (
    <section className="section cta-final" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-final__box">
          <h2 id="cta-title">Vamos descobrir novas possibilidades por meio da música?</h2>
          <p>
            Entre em contato com a Escola Música Criativa e conheça as experiências musicais disponíveis para você e
            sua família.
          </p>
          <WhatsAppButton message={messages.geral}>Fale com a nossa equipe</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}

export default function Footer({ base = '' }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo inverted />
          <p>{fullAddress}</p>
          <p>
            <a href={`tel:+${school.phoneE164}`}>{school.phoneDisplay}</a>
          </p>
          <p className="site-footer__social">
            <a href={school.instagram.url} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={18} />
              {school.instagram.handle}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="site-footer__title">Navegação</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`${base}#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href={`${base}#galeria`}>Galeria</a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Fale com a escola</h2>
          <p>Tire dúvidas sobre aulas, musicalização infantil e eventos.</p>
          <WhatsAppButton message={messages.geral} variant="light">
            WhatsApp
          </WhatsAppButton>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>
          © {year} {school.name}. Todos os direitos reservados.
        </p>
        <a href="/privacidade.html">Política de privacidade</a>
      </div>
    </footer>
  )
}
