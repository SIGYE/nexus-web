import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react'
import { asset } from '../lib/assets'

const pad = (n) => String(n).padStart(2, '0')

/**
 * Slide deck viewer: one slide at a time, arrows / keyboard / swipe, counter, thumbnails, full screen, PDF download.
 * slides = [{ src, thumb, alt }]
 */
export default function SlideViewer({ slides, pdf, title = 'Presentation' }) {
  const [[index, dir], setState] = useState([0, 0])
  const [full, setFull] = useState(false)
  const frameRef = useRef(null)
  const thumbsRef = useRef(null)
  const total = slides.length

  const go = useCallback(
    (to) => {
      setState(([i]) => {
        const next = Math.max(0, Math.min(total - 1, to))
        return next === i ? [i, 0] : [next, next > i ? 1 : -1]
      })
    },
    [total],
  )
  const next = useCallback(() => setState(([i]) => (i < total - 1 ? [i + 1, 1] : [i, 0])), [total])
  const prev = useCallback(() => setState(([i]) => (i > 0 ? [i - 1, -1] : [i, 0])), [])

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea, select, [contenteditable]')) return
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  // keep the active thumbnail in view
  useEffect(() => {
    const el = thumbsRef.current?.querySelector(`[data-i="${index}"]`)
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [index])

  // preload neighbours so moving feels instant
  useEffect(() => {
    ;[index - 1, index + 1].forEach((i) => {
      if (slides[i]) new Image().src = asset(slides[i].src)
    })
  }, [index, slides])

  // full screen
  useEffect(() => {
    const onChange = () => setFull(document.fullscreenElement === frameRef.current)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])
  const toggleFull = () => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else frameRef.current?.requestFullscreen?.()
  }
  const canFull = typeof document !== 'undefined' && !!document.documentElement.requestFullscreen

  const arrow =
    'flex size-11 items-center justify-center rounded-full border-2 border-black bg-white text-black shadow-[0_10px_24px_-12px_rgb(0_0_0/0.6)] transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-30 sm:size-12'

  return (
    <div role="region" aria-roledescription="carousel" aria-label={title}>
      {/* Slide frame */}
      <div ref={frameRef} className={`group relative overflow-hidden bg-black ${full ? 'flex items-center justify-center' : 'rounded-[1.5rem] border-2 border-black'}`}>
        <div className="relative aspect-video w-full">
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.img
              key={index}
              src={asset(slides[index].src)}
              alt={slides[index].alt}
              custom={dir}
              variants={{
                enter: (d) => ({ x: d >= 0 ? '12%' : '-12%', opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d) => ({ x: d >= 0 ? '-12%' : '12%', opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -400) next()
                else if (info.offset.x > 60 || info.velocity.x > 400) prev()
              }}
              draggable={false}
              className="absolute inset-0 size-full cursor-grab select-none object-contain active:cursor-grabbing"
            />
          </AnimatePresence>
        </div>

        {/* arrows over the slide (wider screens) */}
        <div className="pointer-events-none absolute inset-y-0 left-3 hidden items-center sm:flex">
          <button type="button" onClick={prev} disabled={index === 0} aria-label="Previous slide" className={`pointer-events-auto ${arrow}`}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-3 hidden items-center sm:flex">
          <button type="button" onClick={next} disabled={index === total - 1} aria-label="Next slide" className={`pointer-events-auto ${arrow}`}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        {canFull && (
          <button
            type="button"
            onClick={toggleFull}
            aria-label={full ? 'Exit full screen' : 'Full screen'}
            className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border-2 border-black bg-white text-black transition hover:-translate-y-0.5"
          >
            {full ? <Minimize2 className="size-4" aria-hidden="true" /> : <Maximize2 className="size-4" aria-hidden="true" />}
          </button>
        )}
      </div>

      {/* Controls row */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:hidden">
          <button type="button" onClick={prev} disabled={index === 0} aria-label="Previous slide" className={arrow}>
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={next} disabled={index === total - 1} aria-label="Next slide" className={arrow}>
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
        <p className="font-display text-sm font-semibold tracking-widest text-black" aria-live="polite">
          <span className="sr-only">Slide </span>
          {pad(index + 1)} <span className="text-black/40">/ {pad(total)}</span>
        </p>
        {pdf && (
          <a
            href={encodeURI(asset(pdf))}
            download
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            <Download className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>
        )}
      </div>

      {/* Thumbnails */}
      <div ref={thumbsRef} className="no-scrollbar -mx-1 mt-5 flex gap-3 overflow-x-auto px-1 pb-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            data-i={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className={`relative w-28 shrink-0 overflow-hidden rounded-xl border-2 transition sm:w-36 ${
              i === index ? 'border-black' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={asset(s.thumb)} alt="" loading="lazy" className="aspect-video w-full object-cover" />
            <span className="absolute bottom-1 left-1 rounded-md bg-white px-1.5 font-display text-[0.65rem] font-bold text-black">{i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
