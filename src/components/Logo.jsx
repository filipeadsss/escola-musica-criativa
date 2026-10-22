// Marca tipográfica provisória. O arquivo original do logotipo não estava entre os materiais;
// substituir por /public/logo.svg quando a escola enviar o arquivo oficial.
export default function Logo({ inverted = false }) {
  return (
    <span className={`wordmark ${inverted ? 'wordmark--inverted' : ''}`}>
      <span className="wordmark__small">Escola</span>
      <span className="wordmark__main">
        Música <span className="wordmark__accent">Criativa</span>
      </span>
    </span>
  )
}
