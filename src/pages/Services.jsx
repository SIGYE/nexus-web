import { motion } from 'framer-motion'
import { servicesPage } from '../data/site'
import { ease, inView, reveal } from '../lib/motion'
import { Bubbles } from '../components/ui/Bubble'

const pad = (n) => String(n).padStart(2, '0')

const headerBubbles = [
  { pos: 'right-6 top-28 size-6 sm:right-[30%] sm:top-36 sm:size-9', delay: '-2s', hover: { x: 8, y: -8 } },
  { pos: 'right-[10%] top-52 hidden size-12 sm:block', delay: '-4s', hover: { x: -10, y: 10 } },
  { pos: 'bottom-10 right-[20%] hidden size-7 sm:block', delay: '-1s', hover: { x: -8, y: -8 } },
]

// bubbles sit on the side opposite the text
const leftTextBubbles = [
  { pos: 'right-6 top-10 size-6 sm:right-[14%] sm:top-16 sm:size-10', delay: '-1.5s', hover: { x: -8, y: 8 } },
  { pos: 'bottom-12 right-[30%] hidden size-7 sm:block', delay: '-3.5s', hover: { x: 8, y: -8 } },
]
const rightTextBubbles = [
  { pos: 'left-6 top-10 size-6 sm:left-[14%] sm:top-16 sm:size-10', delay: '-2.5s', hover: { x: 8, y: 8 } },
  { pos: 'bottom-12 left-[30%] hidden size-7 sm:block', delay: '-4.5s', hover: { x: -8, y: -8 } },
]

function Header() {
  return (
    <section aria-labelledby="services-title" className="relative isolate overflow-hidden bg-white pb-20 pt-36 text-black sm:pb-28 sm:pt-44">
      <Bubbles items={headerBubbles} />
      <div className="container-page relative">
        <motion.div {...reveal()}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600 sm:text-sm">{servicesPage.eyebrow}</p>
          <h1 id="services-title" className="mt-3 font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.75rem)] font-extrabold leading-tight tracking-tight text-black">
            {servicesPage.title}
          </h1>
        </motion.div>

        {/* intro, towards the centre */}
        <motion.div {...reveal(0.1)} className="mt-8 max-w-3xl space-y-5 text-[0.95rem] font-medium leading-relaxed text-neutral-900 sm:ml-[8%] sm:text-base lg:ml-[14%] lg:mt-10">
          {servicesPage.intro.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/** One service. 1st, 3rd, 5th… = black, text from the centre towards the right. 2nd, 4th, 6th… = white, text from the left towards the centre. */
function Service({ service, index }) {
  const dark = index % 2 === 0
  const text = Array.isArray(service.text) ? service.text : [service.text].filter(Boolean)

  return (
    <section
      aria-labelledby={`service-${index + 1}`}
      className={`relative isolate overflow-hidden py-24 sm:py-32 ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <Bubbles items={dark ? rightTextBubbles : leftTextBubbles} light={dark} />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, x: dark ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ duration: 0.9, ease }}
          className={`max-w-2xl ${dark ? 'lg:ml-auto lg:mr-[2%]' : 'lg:ml-[2%]'}`}
        >
          <span className={`block font-display text-6xl font-extrabold leading-none sm:text-7xl ${dark ? 'text-outline-white' : 'text-outline-black'} opacity-60`} aria-hidden="true">
            {pad(index + 1)}
          </span>
          <h2 id={`service-${index + 1}`} className={`mt-5 font-display text-[clamp(1.35rem,1rem+1.3vw,2rem)] font-extrabold leading-tight tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
            <span className="sr-only">{pad(index + 1)}. </span>
            {service.title}
          </h2>
          {text.length > 0 && (
            <div className={`mt-5 space-y-4 text-[0.95rem] leading-relaxed sm:text-base ${dark ? 'text-white/80' : 'text-neutral-800'}`}>
              {text.map((t) => (
                <p key={t.slice(0, 24)}>{t}</p>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <Header />
      {servicesPage.services.map((s, i) => (
        <Service key={s.title} service={s} index={i} />
      ))}
    </>
  )
}
