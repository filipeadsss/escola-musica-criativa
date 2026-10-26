import Icon from './Icon.jsx'
import { whatsappLink } from '../lib/whatsapp.js'
import { school } from '../data/site.js'

export function Picture({ photo, sizes = '(min-width: 960px) 50vw, 100vw', className = '', loading = 'lazy', priority }) {
  return (
    <img
      className={className}
      src={photo.src}
      srcSet={photo.srcSet}
      sizes={photo.srcSet ? sizes : undefined}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={loading}
      decoding="async"
      fetchPriority={priority ? 'high' : undefined}
    />
  )
}

export function WhatsAppButton({ message, children, variant = 'primary', className = '' }) {
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="whatsapp" size={20} />
      <span>{children}</span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  )
}

export function SectionHeader({ eyebrow, title, id, children, align = 'left' }) {
  return (
    <header className={`section-header section-header--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children && <div className="section-lead">{children}</div>}
    </header>
  )
}

// Três jeitos de falar com a escola: WhatsApp, e-mail (só aparece se o e-mail estiver preenchido
// em data/site.js) e ligação.
export function ContactActions({ message, subject, whatsappLabel = 'Chamar no WhatsApp', variant = 'primary' }) {
  const mailto = school.email
    ? `mailto:${school.email}?subject=${encodeURIComponent(subject ?? 'Contato pelo site')}&body=${encodeURIComponent(message)}`
    : null
  return (
    <div className="contact-actions">
      <WhatsAppButton message={message} variant={variant}>
        {whatsappLabel}
      </WhatsAppButton>
      {mailto && (
        <a className="btn btn--secondary" href={mailto}>
          <Icon name="mail" size={18} />
          Enviar e-mail
        </a>
      )}
      <a className="btn btn--secondary" href={`tel:+${school.phoneE164}`}>
        <Icon name="phone" size={18} />
        Ligar {school.phoneDisplay}
      </a>
    </div>
  )
}
