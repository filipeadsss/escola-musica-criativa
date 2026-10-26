import { useEffect, useRef } from 'react'
import Icon from './Icon.jsx'
import { m } from './motion.jsx'

// Janela de visualização de fotos e vídeos. `items` pode misturar os dois tipos.
export default function Lightbox({ items, index, onClose, onMove }) {
  const ref = useRef(null)
  const item = items[index]
  const isVideo = item.type === 'video'

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onMove])

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={isVideo ? 'Assistir vídeo' : 'Visualizar foto'}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <figure className="lightbox__figure">
        {isVideo ? (
          <video
            key={item.key}
            className="lightbox__video"
            poster={item.poster}
            width={item.width}
            height={item.height}
            controls
            playsInline
            preload="metadata"
            aria-label={item.alt}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <m.img
            key={item.key}
            src={item.full}
            alt={item.alt}
            width={item.width}
            height={item.height}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
          />
        )}
        <figcaption>
          <span aria-live="polite">
            {isVideo ? 'Vídeo' : 'Foto'} {index + 1} de {items.length}
          </span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox__btn lightbox__close" onClick={() => ref.current.close()} autoFocus>
        <Icon name="close" size={22} />
        <span className="sr-only">Fechar</span>
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className="lightbox__btn lightbox__prev" onClick={() => onMove(-1)}>
            <Icon name="arrowLeft" size={22} />
            <span className="sr-only">Anterior</span>
          </button>
          <button type="button" className="lightbox__btn lightbox__next" onClick={() => onMove(1)}>
            <Icon name="arrowRight" size={22} />
            <span className="sr-only">Próximo</span>
          </button>
        </>
      )}
    </dialog>
  )
}
