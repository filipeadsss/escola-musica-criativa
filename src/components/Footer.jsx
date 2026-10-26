import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { WhatsAppButton } from './ui.jsx'
import { Reveal } from './motion.jsx'
import { nav, school, fullAddress, messages } from '../data/site.js'

export function CtaFinal() {
  return (
    <section className="section cta-final" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta-final__box">
          <h2 id="cta-title">Que tal ver seu filho fazendo música?</h2>
          <p>
            Mande uma mensagem. A gente explica tudo com calma e ajuda a escolher a turma certa para a idade e o
            jeito do seu filho.
          </p>
          <WhatsAppButton message={messages.geral}>Falar com a escola no WhatsApp</WhatsAppButton>
        </Reveal>
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
                <a href={item.href ?? `${base}#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__title">Fale com a escola</h2>
          <p>Dúvidas sobre aulas, musicalização ou festas? É só chamar.</p>
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
