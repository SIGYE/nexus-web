import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { renderIcon } from '../lib/icons'
import StatusBadge from './ui/StatusBadge'

export default function ChallengeCard({ challenge }) {
  const { number, title, short, icon, status } = challenge
  return (
    <Link
      to={`/journey?chapter=${number}`}
      className="group relative flex h-full flex-col rounded-3xl glass p-6 text-white transition duration-300 hover:-translate-y-1.5 hover:bg-white/15 hover:shadow-[0_0_40px_-10px_rgb(243_182_75/0.55)]"
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-6xl font-extrabold leading-none text-outline-gold transition-colors duration-300 group-hover:text-gold">
          {String(number).padStart(2, '0')}
        </span>
        <span className="rounded-2xl bg-white/10 p-2.5 text-gold">{renderIcon(icon, { className: 'size-5' })}</span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{short}</p>
      <div className="mt-6 flex items-center justify-between">
        <StatusBadge status={status} dark />
        <ArrowUpRight
          className="size-5 text-slate-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
