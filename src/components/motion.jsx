import { LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'

// Animações discretas com a biblioteca Motion.
// - LazyMotion + `m` carrega só o pacote de animações de DOM (menor que o `motion` completo).
// - reducedMotion="user" desliga deslocamentos para quem ativou "reduzir movimento" no sistema.

const ease = [0.22, 0.7, 0.2, 1]

export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1 },
}

const viewport = { once: true, amount: 0.2 }

// Revela o bloco quando entra na tela.
export function Reveal({ as = 'div', variants = fadeUp, delay = 0, className, children, ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Lista cujos filhos (StaggerItem) aparecem em sequência.
export function Stagger({ as = 'ul', className, children, gap = 0.08, ...rest }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ as = 'li', className, children, ...rest }) {
  const Tag = m[as]
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  )
}

export { m }
