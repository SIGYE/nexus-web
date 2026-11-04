import { ImageIcon, UserRound, Video } from 'lucide-react'
import { asset } from '../../lib/assets'

const placeholderIcons = { image: ImageIcon, person: UserRound, video: Video }

/** Lazy-loaded image, or a clearly-labelled placeholder when `src` is empty. */
export default function Picture({ src, alt = '', className = '', imgClassName = '', placeholder = 'Add photo', kind = 'image', dark = false, mono = false }) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={asset(src)} alt={alt} loading="lazy" decoding="async" className={`size-full object-cover ${imgClassName}`} />
      </div>
    )
  }
  const Icon = placeholderIcons[kind] ?? ImageIcon
  return (
    <div
      role="img"
      aria-label={placeholder ? `Placeholder: ${placeholder}` : alt}
      className={`flex flex-col items-center justify-center gap-2 overflow-hidden ${mono ? 'border-2 border-black bg-neutral-50 text-neutral-500' : dark ? 'dot-grid bg-gradient-to-br from-navy to-navy-deep text-slate-300' : 'dot-grid-light bg-gradient-to-br from-mist to-white text-slate-600'} ${className}`}
    >
      <Icon className={`${placeholder ? 'size-8' : 'size-1/2'} max-w-8 opacity-70`} aria-hidden="true" />
      {placeholder && <span className="px-3 text-center text-xs font-medium uppercase tracking-widest">{placeholder}</span>}
    </div>
  )
}
