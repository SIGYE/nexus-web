import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Play, Plus } from 'lucide-react'
import Picture from './ui/Picture'
import VideoEmbed from './VideoEmbed'

/**
 * Team member card. Hover (or tap the + button) to reveal the fun fact.
 * `detailed` adds interests, contribution and the optional elevator pitch video.
 */
export default function MemberCard({ member, detailed = false }) {
  const [revealed, setRevealed] = useState(false)
  const [showPitch, setShowPitch] = useState(false)
  const { name, role, community, photo, interests = [], funFact, brings, pitchVideo } = member

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-navy/5 transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Picture src={photo} alt={`Portrait of ${name}`} kind="person" className="size-full" imgClassName="transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">{role}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {community}
          </p>
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-end gap-4 bg-navy-deep/95 p-6 text-white transition duration-500 ${
            revealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">Fun fact</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-100">{funFact}</p>
          </div>
          {!detailed && (
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">What I bring</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-100">{brings}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          aria-pressed={revealed}
          aria-label={revealed ? `Hide fun fact for ${name}` : `Show fun fact for ${name}`}
          className="absolute right-3 top-3 rounded-full glass p-2 text-white transition hover:bg-white/25"
        >
          <Plus className={`size-5 transition-transform duration-300 ${revealed ? 'rotate-45' : ''}`} aria-hidden="true" />
        </button>
      </div>

      {detailed && (
        <div className="flex flex-1 flex-col gap-5 p-6">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-leaf-dark">What I bring</p>
            <p className="mt-1 text-base leading-relaxed">{brings}</p>
          </div>
          {interests.length > 0 && (
            <ul className="flex flex-wrap gap-2" aria-label="Interests">
              {interests.map((interest, i) => (
                <li key={`${interest}-${i}`} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy">
                  {interest}
                </li>
              ))}
            </ul>
          )}
          {pitchVideo && (
            <div className="mt-auto">
              <button
                type="button"
                onClick={() => setShowPitch((v) => !v)}
                aria-expanded={showPitch}
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-navy transition hover:text-leaf-dark"
              >
                <Play className="size-4" aria-hidden="true" />
                {showPitch ? 'Hide elevator pitch' : 'Watch elevator pitch'}
              </button>
              <AnimatePresence initial={false}>
                {showPitch && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <VideoEmbed video={pitchVideo} title={`${name}: elevator pitch`} className="mt-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </motion.article>
  )
}
