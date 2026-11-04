import { site } from '../../data/site'
import { asset } from '../../lib/assets'

/** Logo mark + "NEXUS Enterprise" wordmark. `tone="dark"` = black text (white navbar), `"light"` = white text (dark footer). */
export default function Logo({ tone = 'light', className = '' }) {
  const { name, suffix } = site.wordmark ?? { name: site.name }
  const text = tone === 'dark' ? 'text-neutral-900' : 'text-white [text-shadow:0_1px_12px_rgb(0_0_0/0.45)]'
  const sub = tone === 'dark' ? 'text-neutral-500' : 'text-white/80 [text-shadow:0_1px_10px_rgb(0_0_0/0.45)]'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {site.logo ? (
        <img src={asset(site.logo)} alt="" className="h-11 w-auto shrink-0 drop-shadow-[0_2px_8px_rgb(0_0_0/0.35)] sm:h-14" />
      ) : (
        <span className="flex size-9 items-center justify-center rounded-xl bg-neutral-900 font-display text-lg font-extrabold text-white">N</span>
      )}
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${text}`}>{name}</span>
        {suffix && <span className={`mt-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.28em] ${sub}`}>{suffix}</span>}
      </span>
    </span>
  )
}
