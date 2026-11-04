import { motion } from 'framer-motion'
import { fadeUp, inView, staggerParent } from '../../lib/motion'

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
}

/** Fades content up when it scrolls into view. */
export default function Reveal({ as = 'div', delay = 0, className, children, ...rest }) {
  const Tag = tags[as] ?? tags.div
  return (
    <Tag className={className} variants={fadeUp} custom={delay} initial="hidden" whileInView="show" viewport={inView} {...rest}>
      {children}
    </Tag>
  )
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({ as = 'div', stagger = 0.08, delay = 0, className, children, ...rest }) {
  const Tag = tags[as] ?? tags.div
  return (
    <Tag className={className} variants={staggerParent(stagger, delay)} initial="hidden" whileInView="show" viewport={inView} {...rest}>
      {children}
    </Tag>
  )
}

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Tag = tags[as] ?? tags.div
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  )
}
