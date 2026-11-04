import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Vertical alternating timeline with a black line that draws as you scroll.
 * renderItem(item, index) -> main card; renderAside(item, index) -> content for the opposite column (desktop only).
 */
export default function Timeline({ items, getKey, renderItem, renderAside }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  return (
    <ol ref={ref} className="relative">
      <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-black/10 lg:left-1/2" aria-hidden="true" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-5 top-0 h-full w-0.5 origin-top -translate-x-1/2 bg-black lg:left-1/2"
        aria-hidden="true"
      />
      {items.map((item, i) => {
        const left = i % 2 === 0
        return (
          <li key={getKey(item)} className="relative pb-16 pl-14 last:pb-0 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0">
            <span className="absolute left-5 top-3 z-10 size-4 -translate-x-1/2 rounded-full bg-white ring-4 ring-black lg:left-1/2" aria-hidden="true" />
            <div className={left ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-2 lg:row-start-1'}>{renderItem(item, i)}</div>
            {renderAside && (
              <div className={`hidden lg:row-start-1 lg:flex ${left ? 'lg:col-start-2 lg:justify-start' : 'lg:col-start-1 lg:justify-end'}`} aria-hidden="true">
                <div className="sticky top-32 h-fit">{renderAside(item, i)}</div>
              </div>
            )}
          </li>
        )
      })}
    </ol>
  )
}
