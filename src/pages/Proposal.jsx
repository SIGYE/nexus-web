import { motion } from 'framer-motion'
import { proposalPage } from '../data/site'
import { reveal } from '../lib/motion'
import { Bubbles } from '../components/ui/Bubble'
import SlideViewer from '../components/SlideViewer'

const bubbles = [
  { pos: 'right-6 top-28 size-6 sm:right-[30%] sm:top-36 sm:size-9', delay: '-2s', hover: { x: 8, y: -8 } },
  { pos: 'right-[8%] top-44 hidden size-12 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'bottom-16 left-[4%] hidden size-7 lg:block', delay: '-1s', hover: { x: 8, y: -8 } },
]

const slides = Array.from({ length: proposalPage.slideCount }, (_, i) => ({
  src: proposalPage.slide(i + 1),
  thumb: proposalPage.thumb(i + 1),
  alt: `Pitch presentation, slide ${i + 1} of ${proposalPage.slideCount}`,
}))

export default function Proposal() {
  return (
    <section aria-labelledby="proposal-title" className="relative isolate overflow-hidden bg-white pb-28 pt-36 text-black sm:pb-36 sm:pt-44">
      <Bubbles items={bubbles} />
      <div className="container-page relative">
        <motion.div {...reveal()} className="max-w-2xl">
          <h1 id="proposal-title" className="font-display text-[clamp(1.45rem,1.05rem+1.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-black">
            {proposalPage.title}
          </h1>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-neutral-800 sm:text-base">{proposalPage.text}</p>
        </motion.div>

        <motion.div {...reveal(0.1)} className="mx-auto mt-10 max-w-5xl lg:mt-14">
          <SlideViewer slides={slides} pdf={proposalPage.pdf} title="NEXUS pitch presentation" />
        </motion.div>
      </div>
    </section>
  )
}
