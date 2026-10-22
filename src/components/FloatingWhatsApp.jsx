import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { whatsappLink } from '../lib/whatsapp.js'
import { messages } from '../data/site.js'

// Atalho fixo para o WhatsApp, exibido depois que o visitante passa da primeira dobra.
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      className={`floating-wa ${visible ? 'is-visible' : ''}`}
      href={whatsappLink(messages.geral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="whatsapp" size={28} />
      <span className="sr-only">Falar com a escola pelo WhatsApp (abre em nova aba)</span>
    </a>
  )
}
