import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { journeyFilm, videoCategories, videos } from '../data/videos'
import { gallery } from '../data/gallery'
import { members } from '../data/members'
import PageHero from '../components/ui/PageHero'
import Reveal, { RevealGroup, RevealItem } from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import VideoEmbed from '../components/VideoEmbed'
import Gallery from '../components/Gallery'
import ReflectionCard from '../components/ReflectionCard'

const ALL = 'all'

function VideoLibrary() {
  const [active, setActive] = useState(ALL)
  const tabs = [{ id: ALL, label: 'All' }, ...videoCategories]
  const visible = active === ALL ? videos : videos.filter((v) => v.category === active)
  const labelFor = (id) => videoCategories.find((c) => c.id === id)?.label

  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Video library" title="Every chapter, on camera" />

        <div
          role="group"
          aria-label="Filter videos by category"
          className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              aria-pressed={active === t.id}
              className={`relative shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition ${
                active === t.id ? 'text-white' : 'bg-white text-navy shadow-soft hover:bg-navy/5'
              }`}
            >
              {active === t.id && (
                <motion.span
                  layoutId="video-tab"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((v) => (
              <motion.li
                layout
                key={v.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-navy/5"
              >
                <VideoEmbed video={v.video} poster={v.poster} title={v.title} className="rounded-none" />
                <div className="p-6">
                  <p className="font-display text-xs font-semibold uppercase tracking-widest text-leaf-dark">{labelFor(v.category)}</p>
                  <h3 className="mt-1 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-base">{v.description}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {visible.length === 0 && <p className="mt-10 text-center text-slate-600">No videos in this category yet.</p>}
      </div>
    </section>
  )
}

export default function Media() {
  return (
    <>
      <PageHero
        eyebrow="Media & stories"
        title={
          <>
            Our story, <span className="text-gold">in our own words</span>
          </>
        }
        description="Films, photos and reflections from every step of the E-Lab journey."
        next="text-white"
      />

      <section className="bg-white pb-20 pt-4 sm:pb-28">
        <Reveal className="container-page">
          <div className="mx-auto max-w-5xl">
            <VideoEmbed video={journeyFilm.video} poster={journeyFilm.poster} title={journeyFilm.title} className="rounded-3xl" />
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">{journeyFilm.title}</h2>
              <p className="mt-2 text-lg">{journeyFilm.description}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <VideoLibrary />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Moments along the way" description="Tap any photo to open it. Use arrow keys or swipe to browse." />
          <div className="mt-12">
            <Gallery items={gallery} />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Reflections" title="What the journey taught us" />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <RevealItem key={m.id}>
                <ReflectionCard member={m} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  )
}
