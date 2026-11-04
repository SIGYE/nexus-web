import { CheckCircle2, CircleDashed, Clock, Target, FlaskConical } from 'lucide-react'

const statuses = {
  completed: { label: 'Completed', icon: CheckCircle2, className: 'bg-leaf/15 text-leaf-dark ring-leaf/30', dark: 'bg-leaf/20 text-emerald-200 ring-leaf/40' },
  achieved: { label: 'Achieved', icon: CheckCircle2, className: 'bg-leaf/15 text-leaf-dark ring-leaf/30', dark: 'bg-leaf/20 text-emerald-200 ring-leaf/40' },
  'in-progress': { label: 'In progress', icon: Clock, className: 'bg-gold/20 text-amber-800 ring-gold/40', dark: 'bg-gold/15 text-gold ring-gold/40' },
  'coming-next': {
    label: 'Coming next',
    icon: CircleDashed,
    className: 'bg-slate-200 text-slate-700 ring-slate-300',
    dark: 'bg-white/10 text-slate-200 ring-white/20',
  },
  target: { label: 'Target', icon: Target, className: 'bg-navy/10 text-navy ring-navy/20', dark: 'bg-white/10 text-slate-100 ring-white/20' },
  proposed: { label: 'Proposed', icon: FlaskConical, className: 'bg-gold/20 text-amber-800 ring-gold/40', dark: 'bg-gold/15 text-gold ring-gold/40' },
}

/** `mono` = black & white style (white pill, black border). */
export default function StatusBadge({ status, label, dark = false, mono = false, className = '' }) {
  const s = statuses[status] ?? statuses['coming-next']
  const Icon = s.icon
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${mono ? 'border-2 border-black bg-white text-black' : `ring-1 ${dark ? s.dark : s.className}`} ${className}`}>
      <Icon className="size-3.5" aria-hidden="true" />
      {label ?? s.label}
    </span>
  )
}
