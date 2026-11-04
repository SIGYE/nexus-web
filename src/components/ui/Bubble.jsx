import { motion } from 'framer-motion'

/**
 * Small glossy black "bubble" that floats idly and nudges away on hover.
 * pos   = Tailwind position + size classes (e.g. 'right-[12%] top-24 size-12')
 * delay = negative CSS delay so bubbles don't float in sync
 * hover = { x, y } nudge on mouse-over
 * light = white bubble (for black sections)
 */
export default function Bubble({ pos, delay = '0s', hover = { x: 8, y: -8 }, light = false }) {
  return (
    <div className={`absolute z-0 animate-float sm:z-20 ${pos}`} style={{ animationDelay: delay }} aria-hidden="true">
      <motion.div
        whileHover={{ ...hover, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 220, damping: 14 }}
        className={`size-full rounded-full ${
          light
            ? 'bg-[radial-gradient(circle_at_32%_28%,#fff_0%,#e9e9e9_45%,#bdbdbd_80%)] shadow-[0_18px_40px_-14px_rgb(255_255_255/0.25)]'
            : 'bg-[radial-gradient(circle_at_32%_28%,#4a4a4a_0%,#141414_45%,#000_75%)] shadow-[0_18px_40px_-14px_rgb(0_0_0/0.55)]'
        }`}
      />
    </div>
  )
}

/** Renders a list of bubbles: [{ pos, delay, hover }] */
export function Bubbles({ items, light = false }) {
  return items.map((b) => <Bubble key={b.pos} light={light} {...b} />)
}
