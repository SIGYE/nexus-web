import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import { RevealGroup, RevealItem } from './ui/Reveal'
import Picture from './ui/Picture'
import Lightbox from './Lightbox'

/** Responsive photo grid. Every 5th photo is shown larger for rhythm. */
export default function Gallery({ items }) {
  const [index, setIndex] = useState(null)
  const close = useCallback(() => setIndex(null), [])
  const navigate = useCallback((dir) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)), [items.length])

  return (
    <>
      <RevealGroup as="ul" stagger={0.05} className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <RevealItem as="li" key={`${item.src || 'placeholder'}-${i}`} className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block size-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy/5"
              aria-label={`Open photo: ${item.alt}`}
            >
              <Picture src={item.src} alt={item.alt} className="size-full" imgClassName="transition duration-700 ease-out group-hover:scale-110" />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy-deep/80 via-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="line-clamp-1 text-left text-sm font-medium text-white">{item.caption}</span>
                <ZoomIn className="size-5 shrink-0 text-gold" aria-hidden="true" />
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>
      <AnimatePresence>{index !== null && <Lightbox items={items} index={index} onClose={close} onNavigate={navigate} />}</AnimatePresence>
    </>
  )
}
