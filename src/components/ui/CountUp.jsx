import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Number that counts up from 0 to `value` the first time it scrolls into view. */
export default function CountUp({ value, decimals = 0, suffix = '', duration = 1.6, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })
  const reduce = useReducedMotion()
  const format = (n) => `${n.toFixed(decimals)}${suffix}`

  useEffect(() => {
    if (!inView || !ref.current) return
    if (reduce) {
      ref.current.textContent = format(value)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (n) => {
        if (ref.current) ref.current.textContent = format(n)
      },
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value, decimals, suffix, duration])

  return (
    <span className={className}>
      <span className="sr-only">{format(value)}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {format(0)}
      </span>
    </span>
  )
}
