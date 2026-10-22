import Icon from './Icon.jsx'
import { whatsappLink } from '../lib/whatsapp.js'

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
