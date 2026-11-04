import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { asset } from '../lib/assets'
import Picture from './ui/Picture'

/** Full-screen photo viewer: Esc closes, arrow keys navigate, swipe on touch. */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const item = items[index]

  // Lock page scroll, move focus in, restore focus on close.
  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onNavigate(1)
      else if (e.key === 'ArrowLeft') onNavigate(-1)
      else if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables?.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onNavigate])

  const onDragEnd = (_, { offset, velocity }) => {
    if (offset.x < -80 || velocity.x < -500) onNavigate(1)
    else if (offset.x > 80 || velocity.x > 500) onNavigate(-1)
  }

  const navButton = 'rounded-full glass p-3 text-white transition hover:bg-white/25'

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-navy-deep/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-between p-4 text-white sm:p-6">
        <p className="font-display text-sm font-semibold tracking-widest" aria-live="polite">
          {index + 1} / {items.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className={navButton} aria-label="Close photo viewer">
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="flex w-full max-w-5xl cursor-grab touch-pan-y flex-col items-center active:cursor-grabbing"
          >
            {item.src ? (
              <img
                src={asset(item.src)}
                alt={item.alt}
                draggable={false}
                className="max-h-[72vh] max-w-full select-none rounded-2xl object-contain shadow-lift"
              />
            ) : (
              <Picture alt={item.alt} placeholder="Add photo" dark className="aspect-[4/3] w-full max-w-3xl rounded-2xl ring-1 ring-white/10" />
            )}
            {item.caption && <figcaption className="mt-4 text-center text-sm text-slate-300 sm:text-base">{item.caption}</figcaption>}
          </motion.figure>
        </AnimatePresence>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => onNavigate(-1)}
              className={`${navButton} absolute left-2 top-1/2 -translate-y-1/2 sm:left-6`}
              aria-label="Previous photo"
            >
              <ChevronLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate(1)}
              className={`${navButton} absolute right-2 top-1/2 -translate-y-1/2 sm:right-6`}
              aria-label="Next photo"
            >
              <ChevronRight className="size-6" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </motion.div>
  )
}
