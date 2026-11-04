import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { story, values } from '../data/site'
import { members } from '../data/members'
import { renderIcon } from '../lib/icons'
import { asset } from '../lib/assets'
import { reveal } from '../lib/motion'
import { Bubbles } from '../components/ui/Bubble'
import TeamCard from '../components/TeamCard'

// Small black bubbles floating on the right/centre (same style as the Home page).
const storyBubbles = [
  { pos: 'right-6 top-28 size-6 sm:left-[32%] sm:right-auto sm:top-24 sm:size-9', delay: '-2s', hover: { x: 8, y: -8 } },
  { pos: 'right-[14%] top-44 hidden size-12 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'right-[5%] top-[58%] hidden size-7 sm:block', delay: '-1s', hover: { x: -8, y: 8 } },
  { pos: 'bottom-16 right-[26%] hidden size-10 sm:block', delay: '-5s', hover: { x: -10, y: -10 } },
]

/** Wraps the guiding question in the story text so it stands out. */
function StoryText({ text, question }) {
  const i = question ? text.indexOf(question) : -1
  if (i === -1) return text
  return (
    <>
      {text.slice(0, i)}
      <em className="font-display font-semibold not-italic text-black">&ldquo;{question}&rdquo;</em>
      {text.slice(i + question.length)}
    </>
  )
}

const pad = (n) => String(n).padStart(2, '0')

/** One value card: white with a black border. */
function ValueCard({ value, index, total }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[1.75rem] border-2 border-black bg-white p-7 text-black sm:p-10">
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-full border-2 border-black text-black sm:size-14">
          {renderIcon(value.icon, { className: 'size-5 sm:size-6', strokeWidth: 1.75 })}
        </span>
        <span className="font-display text-xs font-semibold tracking-widest text-black/40">
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>
      <div>
        <h3 className="font-display text-xl font-extrabold tracking-tight text-black sm:text-3xl">{value.title}</h3>
        <p className="mt-2.5 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base">{value.text}</p>
      </div>
    </article>
  )
}

/**
 * A card in the stack. `progress` runs 0 → 1 over the pinned scroll; each card owns one slice of it.
 * During its slice the card swipes off to the left; cards underneath step forward as the ones above leave.
 */
function StackedCard({ progress, index, total, value }) {
  const steps = total - 1
  const start = index / steps
  const end = (index + 1) / steps
  // swipe out (all but the last card)
  const x = useTransform(progress, [start, end], ['0vw', index < steps ? '-115vw' : '0vw'])
  const rotate = useTransform(progress, [start, end], [0, index < steps ? -10 : 0])
  // depth in the stack = how many cards are still above this one
  const depth = useTransform(progress, (p) => Math.max(0, index - p * steps))
  const y = useTransform(depth, (d) => Math.min(d, 3) * 16)
  const scale = useTransform(depth, (d) => 1 - Math.min(d, 3) * 0.05)

  return (
    <motion.div className="absolute inset-0 will-change-transform" style={{ x, rotate, y, scale, zIndex: total - index }}>
      <ValueCard value={value} index={index} total={total} />
    </motion.div>
  )
}

const valuesBubbles = [
  { pos: 'right-6 top-24 size-6 sm:right-[10%] sm:top-28 sm:size-8', delay: '-3s', hover: { x: -8, y: 8 } },
  { pos: 'right-[4%] top-[55%] hidden size-12 sm:block', delay: '-1.5s', hover: { x: -10, y: -8 } },
  { pos: 'bottom-14 left-[12%] hidden size-7 sm:block', delay: '-4.5s', hover: { x: 8, y: -10 } },
]

function Values() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const total = values.length
  // 0 when the section's top reaches the top of the screen, 1 when its bottom reaches the bottom.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  // finish swiping a little before the end so the last card rests on screen for a moment
  const progress = useTransform(scrollYProgress, [0.04, 0.9], [0, 1], { clamp: true })

  const heading = (
    <h2 id="values-title" className="font-display text-[clamp(1.45rem,1.05rem+1.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-black">
      Our Values
    </h2>
  )

  // Reduced motion: a simple list of cards, no pinning or swiping.
  if (reduce) {
    return (
      <section aria-labelledby="values-title" className="bg-white pb-28 text-black">
        <div className="container-page">
          {heading}
          <ul className="mx-auto mt-10 grid max-w-xl gap-5">
            {values.map((v, i) => (
              <li key={v.title} className="h-72">
                <ValueCard value={v} index={i} total={total} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    // Tall section: its extra height is the scroll distance used to swipe through the cards.
    <section ref={ref} aria-labelledby="values-title" className="relative bg-white text-black" style={{ height: `calc(100svh + ${(total - 1) * 60}svh)` }}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden pb-10 pt-28 sm:pt-32">
        <Bubbles items={valuesBubbles} />
        <div className="container-page relative">{heading}</div>

        <div className="relative flex flex-1 items-center justify-center px-4">
          <div className="relative h-[min(21rem,55svh)] w-full max-w-xl sm:h-[min(22rem,55svh)]">
            {values.map((v, i) => (
              <StackedCard key={v.title} progress={progress} index={i} total={total} value={v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section aria-labelledby="story-title" className="relative isolate overflow-hidden bg-white pb-24 pt-36 text-black sm:pb-32 sm:pt-44">
      <Bubbles items={storyBubbles} />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Group photo, left */}
        <motion.div {...reveal()} className="relative">
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-black">
            <img src={asset(story.image)} alt={story.imageAlt} className="aspect-[16/10] w-full object-cover" />
          </div>
        </motion.div>

        {/* Title + story, right */}
        <motion.div {...reveal(0.1)}>
          <h1 id="story-title" className="font-display text-[clamp(1.45rem,1.05rem+1.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-black">
            {story.title}
          </h1>
          <p className="mt-2 font-display text-sm font-medium text-neutral-700">{story.subtitle}</p>
          <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-900 sm:text-[0.95rem]">
            <StoryText text={story.text} question={story.question} />
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const teamBubbles = [
  { pos: 'right-6 top-10 size-6 sm:right-[30%] sm:top-16 sm:size-8', delay: '-2.5s', hover: { x: 8, y: -8 } },
  { pos: 'right-[8%] top-28 hidden size-11 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'bottom-24 left-[6%] hidden size-7 sm:block', delay: '-1s', hover: { x: 8, y: -8 } },
]

function Team() {
  return (
    <section aria-labelledby="team-title" className="relative isolate overflow-hidden bg-white pb-28 pt-10 text-black sm:pb-36 sm:pt-16">
      <Bubbles items={teamBubbles} />

      <div className="container-page relative">
        <motion.h2
          {...reveal()}
          id="team-title"
          className="font-display text-[clamp(1.45rem,1.05rem+1.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-black"
        >
          The Minds Behind NEXUS
        </motion.h2>

        {/* 3 on top, the rest centred underneath */}
        <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-12 lg:mt-16">
          {members.map((m, i) => (
            <motion.li key={m.id} {...reveal(0.06 * (i % 3))} className="w-full max-w-[18rem] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]">
              <TeamCard member={m} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Story />
      <Values />
      <Team />
    </>
  )
}
