import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Musicalizacao from './components/Musicalizacao.jsx'
import Aulas from './components/Aulas.jsx'
import Festival from './components/Festival.jsx'
import Eventos from './components/Eventos.jsx'
import Equipe from './components/Equipe.jsx'
import Galeria from './components/Galeria.jsx'
import Contato from './components/Contato.jsx'
import Footer, { CtaFinal } from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Musicalizacao />
        <Aulas />
        <Festival />
        <Eventos />
        <Equipe />
        <Galeria />
        <Contato />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
