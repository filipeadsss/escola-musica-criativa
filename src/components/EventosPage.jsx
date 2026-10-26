import Icon from './Icon.jsx'
import PageShell from './PageShell.jsx'
import { Reveal, Stagger, StaggerItem } from './motion.jsx'
import { Picture, WhatsAppButton, ContactActions } from './ui.jsx'
import { photos, messages } from '../data/site.js'
import { videosPageUrl } from '../data/videos.js'
import { band } from '../data/eventos.js'

function EventoSection({ id, eyebrow, title, photo, flip, tone = 'light', children }) {
  return (
    <section id={id} className={`section evento evento--${tone} ${flip ? 'evento--flip' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="container evento__grid">
        {photo && (
          <Reveal as="figure" className="evento__photo">
            <Picture photo={photo} sizes="(min-width: 960px) 40vw, 100vw" />
          </Reveal>
        )}
        <Reveal className="evento__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export default function EventosPage() {
  return (
    <PageShell current="eventos" cta={false}>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Eventos</p>
            <h1>Música criativa também fora da sala de aula.</h1>
            <p className="section-lead">
              Encontros na escola, a banda, o festival de fim de ano e sonorização para o seu evento. Escolha um
              deles e fale com a equipe.
            </p>
            <nav className="page-hero__links" aria-label="Ir para um tipo de evento">
              <a href="#eventos-escola">Eventos na escola</a>
              <a href="#banda">A banda</a>
              <a href="#festival">Festival</a>
              <a href="#sonorizacao">Sonorização</a>
            </nav>
          </Reveal>
        </div>
      </section>

      <EventoSection id="eventos-escola" eyebrow="Na escola" title="Eventos na escola" photo={photos.comunidade}>
        <p>
          De tempos em tempos a escola abre as portas para encontros com as famílias. Um exemplo é o luau, à noite,
          em clima de piquenique, com os alunos fazendo as apresentações.
        </p>
        <WhatsAppButton message={messages.eventosEscola}>Saber dos próximos eventos</WhatsAppButton>
      </EventoSection>

      <EventoSection id="banda" eyebrow="Música ao vivo" title={band.title} photo={photos.aniversario} flip tone="sky">
        <p>
          A banda da escola é uma banda de música infantil. Ela toca em aniversários e também se apresenta em outros
          lugares, como parques de Contagem e shoppings da região, como o Monte Carmo, em Betim.
        </p>
        <Stagger className="checklist">
          {['Aniversários e festas infantis', 'Parques e espaços públicos', 'Shoppings e eventos'].map((t) => (
            <StaggerItem key={t}>
              <Icon name="note" size={20} />
              {t}
            </StaggerItem>
          ))}
        </Stagger>
        <h3 className="evento__cta-title">Quer contratar a banda?</h3>
        <ContactActions
          message={messages.banda}
          subject="Contratar a banda da Música Criativa"
          whatsappLabel="Contratar pelo WhatsApp"
        />
      </EventoSection>

      <EventoSection id="festival" eyebrow="Festival Música Criativa" title="O dia em que os alunos sobem ao palco" photo={photos.festivalCertificados} tone="navy">
        <p>
          Todo ano, no fim do ano, a escola faz o festival para os alunos mostrarem o que aprenderam. A família
          assiste, torce e se emociona. São dois festivais, cada um no seu formato:
        </p>
        <ul className="festival-tipos">
          <li>
            <h3>Festival da musicalização infantil</h3>
            <p>Feito sob medida para os pequenos, com os pais por perto.</p>
          </li>
          <li>
            <h3>Festival dos adolescentes e adultos</h3>
            <p>Os alunos de instrumento e canto sobem ao palco para uma apresentação completa.</p>
          </li>
        </ul>
        <div className="section-actions">
          <WhatsAppButton message={messages.festival}>Quero saber do festival</WhatsAppButton>
          <a className="btn btn--light" href={videosPageUrl('festival')}>
            <Icon name="video" size={18} />
            Ver fotos e vídeos do festival
          </a>
        </div>
      </EventoSection>

      <EventoSection id="sonorizacao" eyebrow="Para o seu evento" title="Locação de sonorização">
        <p>
          Além de música ao vivo, a escola aluga equipamento de sonorização. Fale com a equipe para saber o que está
          disponível, as datas livres e os valores.
        </p>
        <ContactActions
          message={messages.sonorizacao}
          subject="Locação de sonorização"
          whatsappLabel="Pedir orçamento pelo WhatsApp"
        />
      </EventoSection>
    </PageShell>
  )
}
