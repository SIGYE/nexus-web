import { Sparkle } from 'lucide-react'

export default function Marquee({ items, className = '' }) {
  const row = [...items, ...items, ...items]
  return (
    <div className={`relative overflow-hidden border-y border-white/10 bg-navy-deep py-5 ${className}`}>
      <p className="sr-only">{items.join(', ')}</p>
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <li
                key={`${copy}-${i}`}
                className="flex items-center gap-6 px-6 font-display text-2xl font-bold uppercase tracking-wide text-white/90 sm:text-3xl"
              >
                {item}
                <Sparkle className="size-5 text-gold" />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-deep" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-deep" aria-hidden="true" />
    </div>
  )
}
