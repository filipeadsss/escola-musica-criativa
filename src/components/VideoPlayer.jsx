import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'

// Garante que só um vídeo toque por vez na página.
let current = null

export default function VideoPlayer({ video, className = '' }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

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

  return (
    <div className={`video-player ${started ? 'is-started' : ''} ${className}`} style={{ aspectRatio: `${video.width} / ${video.height}` }}>
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        width={video.width}
        height={video.height}
        controls={started}
        playsInline
        preload="none"
        aria-label={video.title}
      />
      {!started && (
        <button type="button" className="video-player__play" onClick={() => ref.current.play()}>
          <span className="video-player__icon">
            <Icon name="play" size={30} />
          </span>
          <span className="video-player__label">
            Assistir<span className="sr-only">: {video.title}</span>
            {video.duration && <span className="video-player__time"> · {video.duration}</span>}
          </span>
        </button>
      )}
    </div>
  )
}
