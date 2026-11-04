// Shared framer-motion settings. Reduced motion is handled globally by <MotionConfig reducedMotion="user">.
export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } }),
}

export const staggerParent = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export const inView = { once: true, margin: '0px 0px -60px 0px' }

/** Spread onto a motion element to fade + slide it up once when scrolled into view. */
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: inView,
  transition: { duration: 0.7, ease, delay },
})
