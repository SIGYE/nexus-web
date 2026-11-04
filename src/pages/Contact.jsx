import { motion } from 'framer-motion'
import { contactPage } from '../data/site'
import { reveal } from '../lib/motion'
import { Bubbles } from '../components/ui/Bubble'
import ContactForm from '../components/ContactForm'

const contactBubbles = [
  { pos: 'right-6 top-28 size-6 sm:right-auto sm:left-[40%] sm:top-32 sm:size-9', delay: '-2s', hover: { x: -8, y: 8 } },
  { pos: 'left-[30%] top-[58%] hidden size-12 lg:block', delay: '-4s', hover: { x: 10, y: -10 } },
  { pos: 'bottom-16 right-[10%] hidden size-7 sm:block', delay: '-1s', hover: { x: -8, y: -8 } },
]

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-white pb-28 pt-36 text-black sm:pb-36 sm:pt-44">
      <Bubbles items={contactBubbles} />

      <div className="container-page relative grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Heading + intro (left on desktop, first on phones) */}
        <motion.div {...reveal()} className="lg:pt-6">
          <h1 id="contact-title" className="font-display text-[clamp(1.45rem,1.05rem+1.4vw,2.1rem)] font-extrabold leading-none tracking-tight text-black">
            {contactPage.title}
          </h1>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-neutral-800 sm:text-base">{contactPage.text}</p>
        </motion.div>

        {/* Form (right on desktop) */}
        <motion.div {...reveal(0.1)}>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
