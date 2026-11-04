import { Link } from 'react-router-dom'
import { asset, isExternal } from '../../lib/assets'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-wide transition duration-300 sm:text-base'

const variants = {
  primary: 'bg-leaf text-navy-deep hover:-translate-y-0.5 hover:shadow-glow hover:brightness-110',
  secondary: {
    light: 'border border-navy/20 bg-white text-navy-deep shadow-soft hover:-translate-y-0.5 hover:border-navy/40',
    dark: 'glass text-white hover:-translate-y-0.5 hover:bg-white/20',
  },
  ghost: {
    light: 'text-navy hover:bg-navy/5',
    dark: 'text-white hover:bg-white/10',
  },
}

/**
 * Pill button.
 * - `to`   internal route -> <Link>
 * - `href` file or external URL -> <a>. An empty string renders a disabled "coming soon" pill.
 * - neither -> <button>
 */
export default function Button({ to, href, variant = 'primary', onDark = false, icon: Icon, className = '', children, ...rest }) {
  const style = typeof variants[variant] === 'string' ? variants[variant] : variants[variant][onDark ? 'dark' : 'light']
  const classes = `${base} ${style} ${className}`
  const content = (
    <>
      {children}
      {Icon && <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  )

  if (to)
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )

  if (href !== undefined) {
    if (!href) {
      return (
        <span
          className={`${base} cursor-not-allowed border border-dashed ${onDark ? 'border-white/30 text-white/70' : 'border-navy/30 text-slate-600'} ${className}`}
          aria-disabled="true"
        >
          {children} <span className="text-xs font-medium opacity-80">(coming soon)</span>
        </span>
      )
    }
    const external = isExternal(href)
    return (
      <a href={external ? href : asset(href)} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}
