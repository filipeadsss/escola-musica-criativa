import Header from './Header.jsx'
import Footer, { CtaFinal } from './Footer.jsx'
import FloatingWhatsApp from './FloatingWhatsApp.jsx'
import { MotionProvider } from './motion.jsx'

// Estrutura comum das páginas internas (instrumentos, eventos, fotos e vídeos).
export default function PageShell({ current, cta = true, children }) {
  return (
    <MotionProvider>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header base="/" current={current} />
      <main id="conteudo">
        {children}
        {cta && <CtaFinal />}
      </main>
      <Footer base="/" />
      <FloatingWhatsApp />
    </MotionProvider>
  )
}
