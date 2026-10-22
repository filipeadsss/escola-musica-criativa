import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/nunito'
import './styles/global.css'
import Logo from './components/Logo.jsx'
import Footer from './components/Footer.jsx'
import { school, fullAddress } from './data/site.js'

// Modelo inicial, coerente com o que o site faz hoje. Revisar com a escola (e, se possível,
// com assessoria jurídica) antes da publicação.
function Privacy() {
  return (
    <>
      <header className="site-header is-scrolled">
        <div className="container site-header__bar">
          <a className="site-header__logo" href="/" aria-label="Voltar para a página inicial">
            <Logo />
          </a>
          <a className="btn btn--secondary" href="/">
            Voltar ao site
          </a>
        </div>
      </header>
      <main id="conteudo" className="section legal">
        <div className="container legal__body">
          <p className="eyebrow">Transparência</p>
          <h1>Política de privacidade</h1>
          <p className="fine-print">Versão preliminar do protótipo. Última atualização: outubro de 2026.</p>

          <h2>Quem somos</h2>
          <p>
            Este site apresenta a {school.name}, localizada na {fullAddress}. Para falar sobre privacidade, entre em
            contato pelo telefone {school.phoneDisplay}.
          </p>

          <h2>Quais dados este site coleta</h2>
          <p>
            Este site não possui formulários, cadastro, área de login ou ferramentas de análise de audiência. Não
            utilizamos cookies próprios nem ferramentas de rastreamento.
          </p>

          <h2>Serviços de terceiros</h2>
          <ul>
            <li>
              <strong>WhatsApp:</strong> ao clicar em um botão de contato, você é direcionado ao WhatsApp com uma
              mensagem inicial que pode ser editada antes do envio. A conversa segue as regras de privacidade do
              WhatsApp.
            </li>
            <li>
              <strong>Google Maps:</strong> o mapa interativo só é carregado se você clicar em “Carregar mapa
              interativo”. A partir desse clique, o Google pode coletar dados conforme a política dele.
            </li>
            <li>
              <strong>Instagram:</strong> os links para o perfil da escola abrem o Instagram, sujeito às regras da
              plataforma.
            </li>
          </ul>
          <p>As fontes tipográficas e os vídeos são servidos pelo próprio site, sem chamadas a serviços externos.</p>

          <h2>Fotografias</h2>
          <p>
            As fotografias de alunos, famílias e professores são registros reais de atividades da escola, usados
            com autorização. Nenhuma criança é identificada pelo nome. Se você aparece em alguma foto e deseja a
            remoção, fale com a escola pelos canais acima.
          </p>

          <h2>Seus direitos</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar informações sobre
            o tratamento de seus dados, correção ou exclusão, entrando em contato com a escola.
          </p>
        </div>
      </main>
      <Footer base="/" />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
)
