import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Target } from 'lucide-react'
import { challenges } from '../data/challenges'
import { renderIcon } from '../lib/icons'
import { reveal } from '../lib/motion'
import { Bubbles } from '../components/ui/Bubble'
import Reveal from '../components/ui/Reveal'
import StatusBadge from '../components/ui/StatusBadge'
import Timeline from '../components/Timeline'
import VideoEmbed from '../components/VideoEmbed'

const pad = (n) => String(n).padStart(2, '0')

const headerBubbles = [
  { pos: 'right-6 top-28 size-6 sm:right-[30%] sm:top-36 sm:size-9', delay: '-2s', hover: { x: 8, y: -8 } },
  { pos: 'right-[12%] top-48 hidden size-12 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'bottom-6 right-[6%] hidden size-7 sm:block', delay: '-1s', hover: { x: -8, y: -8 } },
]

function Block({ icon: Icon, title, children }) {
  return (
    <div>
      <h4 className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-widest text-black">
        <Icon className="size-4" aria-hidden="true" />
        {title}
      </h4>
      <div className="mt-2">{children}</div>
    </div>
  )
}

function WhatWeDid({ intro, points = [], ordered = false }) {
  const List = ordered ? 'ol' : 'ul'
  return (
    <>
      {intro && <p className="mb-3 text-[0.95rem] leading-relaxed text-neutral-800">{intro}</p>}
      <List className="space-y-2 text-[0.95rem] text-neutral-800">
        {points.map((item, i) => (
          <li key={i} className="flex gap-3">
            {ordered ? (
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black font-display text-xs font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
            ) : (
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-black" aria-hidden="true" />
            )}
            <span className={ordered ? 'pt-px' : ''}>{item}</span>
          </li>
        ))}
      </List>
    </>
  )
}

function Chapter({ challenge }) {
  const { number, slug, title, icon, status, objective, whatWeDid, video } = challenge

  return (
    <Reveal
      as="article"
      id={`chapter-${number}`}
      aria-labelledby={`${slug}-title`}
      className="scroll-mt-28 rounded-[1.75rem] border-2 border-black bg-white p-6 text-black sm:p-8"
    >
      <header>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-widest text-black">
            <span className="rounded-xl bg-black p-2 text-white">{renderIcon(icon, { className: 'size-4' })}</span>
            Challenge {pad(number)}
          </p>
          {status === 'completed' && <StatusBadge status="completed" mono />}
        </div>
        <h3 id={`${slug}-title`} className="mt-4 font-display text-xl font-bold text-black sm:text-2xl">
          {title}
        </h3>
      </header>

      <div className="mt-6 space-y-7">
        <Block icon={Target} title="Objective">
          <p className="text-[0.95rem] leading-relaxed text-neutral-800">{objective}</p>
        </Block>

        <Block icon={CheckCircle2} title="What we did">
          <WhatWeDid {...whatWeDid} />
        </Block>

        {video !== null && <VideoEmbed video={video} title={`Challenge ${number}: ${title}`} mono autoplayMuted />}
      </div>
    </Reveal>
  )
}

export default function Journey() {
  const [params] = useSearchParams()
  const target = params.get('chapter')

  // Deep links from the Home page: /journey?chapter=3
  useEffect(() => {
    if (!target) return
    const t = setTimeout(() => document.getElementById(`chapter-${target}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350)
    return () => clearTimeout(t)
  }, [target])

  return (
    <>
      {/* Header */}
      <section aria-labelledby="journey-title" className="relative isolate overflow-hidden bg-white pb-16 pt-36 text-black sm:pb-20 sm:pt-44">
        <Bubbles items={headerBubbles} />
        <motion.div {...reveal()} className="container-page relative">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 sm:text-sm">Our journey</p>
          <h1 id="journey-title" className="mt-3 max-w-3xl font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-extrabold leading-tight tracking-tight text-black">
            Six challenges. One story.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-neutral-700 sm:text-base">
            How a group of students went from introducing ourselves to proposing a solution for youth unemployment in Rwanda.
          </p>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="relative bg-white pb-28 sm:pb-36">
        <div className="container-page">
          <Timeline
            items={challenges}
            getKey={(c) => c.slug}
            renderItem={(c) => <Chapter challenge={c} />}
            renderAside={(c) => (
              <div className="pt-2">
                <span className="block font-display text-[8rem] font-extrabold leading-none text-outline-black opacity-25">{pad(c.number)}</span>
                <p className="mt-2 max-w-xs font-display text-base font-semibold text-black">{c.short}</p>
              </div>
            )}
          />
        </div>
      </section>
    </>
  )
}
