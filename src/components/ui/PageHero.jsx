import { motion } from 'framer-motion'
import { ease } from '../../lib/motion'
import Blobs from './Blobs'
import WaveDivider from './WaveDivider'

/** Dark gradient header used at the top of inner pages. */
export default function PageHero({ eyebrow, title, description, next = 'text-white', children }) {
  return (
    <>
      <section className="grain relative isolate overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
        <Blobs />
        <div className="container-page">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="max-w-3xl">
            {eyebrow && <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
            <h1 className="text-display font-extrabold text-white sm:text-6xl">{title}</h1>
            {description && <p className="mt-6 text-lg text-slate-200 sm:text-xl">{description}</p>}
            {children}
          </motion.div>
        </div>
      </section>
      <WaveDivider className={`bg-navy-deep ${next}`} />
    </>
  )
}
