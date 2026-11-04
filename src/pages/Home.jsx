import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { approach, challenge, hero, missionHome } from '../data/site'
import { asset } from '../lib/assets'
import { ease, reveal } from '../lib/motion'
import { renderIcon } from '../lib/icons'
import Bubble from '../components/ui/Bubble'
import CountUp from '../components/ui/CountUp'
import PointingHand from '../components/ui/PointingHand'

// Lighter video file on small screens (picked once, on first render).
const heroVideoSrc = () =>
  asset(typeof window !== 'undefined' && window.innerWidth < 768 && hero.backgroundVideoMobile ? hero.backgroundVideoMobile : hero.backgroundVideo)

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-black px-4 py-32">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        src={heroVideoSrc()}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Faint black cover on top of the video */}
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden="true" />

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          className="font-display text-[clamp(2.25rem,1rem+4.5vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white [text-shadow:0_4px_30px_rgb(0_0_0/0.35)]"
        >
          {hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl font-display text-lg font-medium text-white/90 [text-shadow:0_2px_16px_rgb(0_0_0/0.4)] sm:text-2xl"
        >
          {hero.subtitle}
        </motion.p>
      </div>
    </section>
  )
}

// Small black "bubbles" floating in the white sections.
// pos = Tailwind position classes; delay offsets the idle float so they don't move in sync; hover = nudge on mouse-over.
const challengeBubbles = [
  { pos: 'right-6 top-10 size-6 sm:right-[38%] sm:top-20 sm:size-8 lg:size-10', delay: '-2s', hover: { x: 8, y: -10 } },
  { pos: 'right-[18%] top-36 hidden size-14 sm:block', delay: '-5s', hover: { x: -10, y: 10 } },
  { pos: 'right-[7%] top-[46%] hidden size-7 sm:block', delay: '-1s', hover: { x: -8, y: 8 } },
  { pos: 'bottom-16 right-[26%] hidden size-10 sm:block', delay: '-4s', hover: { x: -10, y: -10 } },
]

const approachBubbles = [
  { pos: 'right-6 top-8 size-6 sm:right-[36%] sm:top-16 sm:size-9', delay: '-1.5s', hover: { x: 8, y: -8 } },
  { pos: 'right-[12%] top-24 hidden size-12 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'right-[5%] top-[52%] hidden size-7 sm:block', delay: '-2s', hover: { x: -8, y: 8 } },
  { pos: 'bottom-24 right-[22%] hidden size-10 sm:block', delay: '-5s', hover: { x: -10, y: -10 } },
]

const missionBubbles = [
  { pos: 'right-6 top-12 size-6 sm:right-[40%] sm:top-24 sm:size-9', delay: '-3s', hover: { x: 8, y: -8 } },
  { pos: 'right-[14%] top-20 hidden size-12 sm:block', delay: '-1s', hover: { x: -10, y: 10 } },
  { pos: 'right-[6%] top-[38%] hidden size-6 sm:block', delay: '-5s', hover: { x: -8, y: -8 } },
  { pos: 'bottom-12 left-[52%] hidden size-10 sm:block', delay: '-2.5s', hover: { x: 10, y: -10 } },
]

function Challenge() {
  return (
    <section aria-labelledby="challenge-title" className="relative isolate overflow-hidden bg-white py-24 text-black sm:py-32">
      {challengeBubbles.map((b) => (
        <Bubble key={b.pos} {...b} />
      ))}

      <div className="container-page relative">
        {/* Title, left */}
        <motion.div {...reveal()} className="max-w-xl">
          <h2 id="challenge-title" className="font-display text-[clamp(2rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-none tracking-tight text-black">
            {challenge.title}
          </h2>
          <p className="mt-3 font-display text-base font-medium text-neutral-700 sm:text-lg">{challenge.subtitle}</p>
        </motion.div>

        {/* Text, a bit towards the middle */}
        <motion.div {...reveal(0.1)} className="mx-auto mt-12 max-w-3xl space-y-5 text-[0.95rem] leading-relaxed text-neutral-800 sm:text-base lg:mt-16">
          {challenge.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </motion.div>

        {/* Bordered stats box, centered */}
        <motion.figure {...reveal(0.15)} className="relative mx-auto mt-20 max-w-4xl rounded-[2rem] border-2 border-black px-6 pb-8 pt-12 sm:px-12 sm:pb-10 sm:pt-14">
          <figcaption className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-black sm:-top-[0.95rem] sm:text-sm">
            {challenge.statsTitle}
          </figcaption>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
            {challenge.stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col ${i % 2 ? 'sm:items-end sm:text-right' : ''}`}>
                <dt className="order-2 mt-2 text-sm font-medium text-neutral-700 sm:text-base">{s.label}</dt>
                <dd className="order-1 font-display text-[clamp(2.5rem,1.8rem+3vw,4rem)] font-extrabold leading-none tracking-tight text-black">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 border-t border-black/10 pt-6 text-center text-xs leading-relaxed text-neutral-400 sm:text-sm">{challenge.source}</p>
        </motion.figure>
      </div>
    </section>
  )
}

function Mission() {
  const ambitionRef = useRef(null)
  const reduce = useReducedMotion()
  // 0 = ambition block entering at the bottom of the screen, 1 = it has left at the top.
  const { scrollYProgress } = useScroll({ target: ambitionRef, offset: ['start end', 'end start'] })
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 })

  // Hand: glides in from the right, holds while pointing at the ambition, then slides out to the left.
  // Timed so the exit finishes before the bottom of the page (≈ block top 120px from the top of the screen).
  const handX = useTransform(p, [0.05, 0.31, 0.46, 0.63], ['65vw', '0vw', '0vw', '-115vw'])
  const handRotate = useTransform(p, [0.05, 0.31, 0.46, 0.63], [-10, 0, 0, 8])
  const handOpacity = useTransform(p, [0.05, 0.22, 0.5, 0.62], [0, 1, 1, 0])
  // Text drifts up (and softens) as the section is scrolled past.
  const textY = useTransform(p, [0.45, 0.7], [0, -90])
  const textOpacity = useTransform(p, [0.5, 0.7], [1, 0.35])

  const { ambition } = missionHome
  return (
    <section aria-labelledby="mission-title" className="relative isolate overflow-hidden bg-white pb-28 pt-8 text-black sm:pb-36 sm:pt-12">
      {missionBubbles.map((b) => (
        <Bubble key={b.pos} {...b} />
      ))}

      <motion.div className="container-page relative" style={reduce ? undefined : { y: textY, opacity: textOpacity }}>
        {/* Title, left */}
        <motion.h2
          {...reveal()}
          id="mission-title"
          className="font-display text-[clamp(2rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-none tracking-tight text-black"
        >
          {missionHome.title}
        </motion.h2>

        {/* Text, extending towards the centre */}
        <motion.div {...reveal(0.1)} className="mt-10 max-w-3xl space-y-5 text-base font-medium leading-relaxed text-black sm:ml-[8%] sm:text-[1.05rem] lg:ml-[14%] lg:mt-12">
          {missionHome.paragraphs.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </motion.div>

        {/* Long-term ambition + pointing hand */}
        <div
          ref={ambitionRef}
          className="mt-16 grid max-w-3xl grid-cols-[minmax(0,1fr)_6rem] items-center gap-4 border-t border-black/10 pt-12 sm:ml-[8%] sm:grid-cols-[minmax(0,1fr)_15rem] sm:gap-8 lg:ml-[14%] lg:mt-20 lg:grid-cols-[minmax(0,1fr)_21rem]"
        >
          <motion.div {...reveal(0.1)}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 sm:text-sm">{ambition.eyebrow}</p>
            <p className="mt-4 font-display text-[clamp(2.75rem,1.9rem+3.6vw,4.5rem)] font-extrabold leading-none tracking-tight text-black">
              {ambition.figure}
            </p>
            <p className="mt-2 font-display text-base font-semibold text-black sm:text-lg">{ambition.label}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-700 sm:text-base">{ambition.text}</p>
          </motion.div>

          <motion.div
            className="pointer-events-none relative z-30 will-change-transform"
            style={reduce ? undefined : { x: handX, rotate: handRotate, opacity: handOpacity }}
          >
            <PointingHand className="w-full overflow-visible" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function Approach() {
  const { invite } = approach
  return (
    <section aria-labelledby="approach-title" className="relative isolate overflow-hidden bg-white pb-28 pt-8 text-black sm:pb-36 sm:pt-12">
      {approachBubbles.map((b) => (
        <Bubble key={b.pos} {...b} />
      ))}

      <div className="container-page relative">
        {/* Title, left */}
        <motion.h2
          {...reveal()}
          id="approach-title"
          className="font-display text-[clamp(2rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-none tracking-tight text-black"
        >
          {approach.title}
        </motion.h2>

        {/* Bordered 2x2 grid, centred */}
        <motion.ul
          {...reveal(0.1)}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 rounded-[2rem] border-2 border-black px-5 py-8 sm:gap-x-10 sm:gap-y-12 sm:px-12 sm:py-14 lg:mt-16"
        >
          {approach.pillars.map((pl, i) => (
            <li key={pl.title} className={`group flex flex-col ${i % 2 ? 'items-end text-right' : ''}`}>
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-black text-white shadow-[0_14px_30px_-12px_rgb(0_0_0/0.5)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] sm:size-[4.5rem]">
                {renderIcon(pl.icon, { className: 'size-7 sm:size-9', strokeWidth: 1.75, 'aria-hidden': true })}
              </span>
              <h3 className="mt-4 font-display text-base font-bold leading-snug text-black sm:mt-5 sm:text-2xl">{pl.title}</h3>
            </li>
          ))}
        </motion.ul>

        {/* Invitation, centred */}
        <motion.div {...reveal(0.1)} className="mx-auto mt-24 max-w-2xl text-center sm:mt-28">
          <h2 className="font-display text-[clamp(2rem,1.3rem+2.8vw,3.25rem)] font-extrabold leading-tight tracking-tight text-black">{invite.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-800 sm:text-[1.05rem]">{invite.text}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Challenge />
      <Mission />
      <Approach />
    </>
  )
}
