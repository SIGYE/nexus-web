import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { site } from '../../data/site'
import Logo from './Logo'
import SocialIcon from '../ui/SocialIcon'
import { navLinks } from '../../lib/nav'

const iconBox = 'flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300'

export default function Footer() {
  const handle = `@${site.socialHandle}`
  // Order: Instagram, location, YouTube.
  const items = [
    site.socials.instagram && { key: 'instagram', label: handle, href: site.socials.instagram, srLabel: 'Instagram', icon: <SocialIcon name="instagram" /> },
    site.contact.location && { key: 'location', label: site.contact.location, icon: <MapPin className="size-5" aria-hidden="true" /> },
    site.socials.youtube && { key: 'youtube', label: handle, href: site.socials.youtube, srLabel: 'YouTube', icon: <SocialIcon name="youtube" /> },
  ].filter(Boolean)

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container-page grid gap-12 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-base text-white/75">{site.tagline}.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-base">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-white/75 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white">Connect</h2>
          <ul className="mt-4 space-y-4 text-base">
            {items.map(({ key, label, href, srLabel, icon }) => (
              <li key={key}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-white/75 transition hover:text-white">
                    <span className={`${iconBox} group-hover:-translate-y-0.5 group-hover:bg-white group-hover:text-black`}>{icon}</span>
                    <span>
                      <span className="sr-only">{srLabel}: </span>
                      {label}
                    </span>
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-white/75">
                    <span className={iconBox}>{icon}</span>
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-sm text-white/50">
          © {new Date().getFullYear()} {site.wordmark ? `${site.wordmark.name} ${site.wordmark.suffix}` : site.name}.
        </p>
      </div>
    </footer>
  )
}
