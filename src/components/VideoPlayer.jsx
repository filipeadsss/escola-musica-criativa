import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

// Garante que só um vídeo toque por vez na página.
let current = null

export default function VideoPlayer({ video, className = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const el = ref.current
    const onPlay = () => {
      if (current && current !== el) current.pause()
      current = el
      setStarted(true)
    }
    el.addEventListener('play', onPlay)
    return () => el.removeEventListener('play', onPlay)
  }, [])

  // O play() devolve uma promessa que falha quando o navegador do celular recusa o vídeo.
  // Nesse caso mostramos um link para abrir o arquivo direto, em vez de não acontecer nada.
  const play = async () => {
    try {
      setFailed(false)
      await ref.current.play()
    } catch {
      setFailed(true)
    }
  }

  return (
    <div className={`video-player ${started ? 'is-started' : ''} ${className}`} style={{ aspectRatio: `${video.width} / ${video.height}` }}>
      <video
        ref={ref}
        poster={video.poster}
        width={video.width}
        height={video.height}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={video.title}
        onError={() => setFailed(true)}
      >
        <source src={video.src} type="video/mp4" onError={() => setFailed(true)} />
      </video>
      {!started && (
        <button type="button" className="video-player__play" onClick={play}>
          <span className="video-player__icon">
            <Icon name="play" size={30} />
          </span>
          <span className="video-player__label">
            Assistir<span className="sr-only">: {video.title}</span>
            {video.duration && <span className="video-player__time"> · {video.duration}</span>}
          </span>
        </button>
      )}
      {failed && (
        <p className="video-player__fallback" role="status">
          O vídeo não abriu aqui.{' '}
          <a href={video.src} target="_blank" rel="noopener noreferrer">
            Abrir o vídeo em outra aba
          </a>
        </p>
      )}
    </div>
  )
}
