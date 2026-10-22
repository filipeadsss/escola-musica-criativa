import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'
import { WhatsAppButton } from './ui.jsx'
import { nav, messages } from '../data/site.js'

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const navIds = nav.filter((item) => !item.href).map((item) => item.id)

export default function Header({ base = '', current }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionActive = useActiveSection(navIds)
  const active = current ?? sectionActive

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1080 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.classList.add('menu-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container site-header__bar">
        <a className="site-header__logo" href={`${base}#inicio`} aria-label="Escola Música Criativa, voltar ao início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav id="menu-principal" className="site-nav" aria-label="Navegação principal">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href ?? `${base}#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton message={messages.geral} className="site-nav__cta">
            Fale no WhatsApp
          </WhatsAppButton>
        </nav>

        <WhatsAppButton message={messages.geral} className="site-header__cta">
          WhatsApp
        </WhatsAppButton>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
        </button>
      </div>
    </header>
  )
}
