import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', dark = false, className = '' }) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] ${dark ? 'text-gold' : 'text-leaf-dark'}`}
        >
          <span className={`h-px w-8 ${dark ? 'bg-gold' : 'bg-leaf-dark'}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`text-display font-bold ${dark ? 'text-white' : 'text-navy-deep'}`}>{title}</h2>
      {description && <p className={`mt-4 text-lg ${dark ? 'text-slate-300' : 'text-slate-700'}`}>{description}</p>}
    </Reveal>
  )
}
