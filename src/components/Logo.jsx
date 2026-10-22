// Logotipo oficial (fundo preto removido). A versão "claro" troca o azul-escuro por branco
// para funcionar sobre fundos escuros.
export default function Logo({ inverted = false, className = '' }) {
  const name = inverted ? 'logo-claro' : 'logo'
  return (
    <img
      className={`logo ${className}`}
      src={`/brand/${name}-sm.webp`}
      srcSet={`/brand/${name}-sm.webp 512w, /brand/${name}.png 1025w`}
      sizes="180px"
      width="1025"
      height="480"
      alt="Escola Música Criativa"
    />
  )
}
