import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks, proposalLink } from '../../lib/nav'

// White bar with a soft black edge on every side (top, bottom, left, right) that fades inward into white.
const edgeFade = 'inset 0 0 18px 4px rgb(0 0 0 / 0.6), inset 0 0 4px 1px rgb(0 0 0 / 0.4), 0 10px 30px -12px rgb(0 0 0 / 0.5)'

const beigeButton =
  'items-center justify-center whitespace-nowrap rounded-full border border-black/10 bg-[#ece2cf] px-5 py-2 font-display text-sm font-semibold text-neutral-900 transition duration-300 hover:-translate-y-px hover:bg-[#e3d5bb]'

/** White pill whose edges fade from black into white all the way around. */
function FadedPill({ className = '', innerClassName = '', children }) {
  return (
    <div className={`rounded-full bg-white ${className}`} style={{ boxShadow: edgeFade }}>
      <div className={innerClassName}>{children}</div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  // Once the hero is scrolled past, the logo gets a dark backing so it stays readable on light sections.
  const [scrolledPastHero, setPastHero] = useState(false)
  // Only Home has the dark video hero; on every other page the logo always gets its dark backing.
  const onHome = useLocation().pathname === '/'
  const pastHero = scrolledPastHero || !onHome

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between gap-4 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      {/* Logo: floats on its own in the top-left corner */}
      <Link
        to="/"
        onClick={close}
        aria-label="NEXUS Enterprise home"
        className={`pointer-events-auto shrink-0 rounded-full transition duration-300 ${
          pastHero ? 'bg-black/60 py-1.5 pl-2 pr-5 backdrop-blur-md' : 'py-1.5 pl-0 pr-0'
        }`}
      >
        <Logo />
      </Link>

      {/* Navbar: pages + proposal button, floating in the top-right corner */}
      <div className="pointer-events-auto relative">
        <FadedPill innerClassName="flex items-center gap-1 py-2 pl-2 pr-2 lg:pl-4">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `relative block whitespace-nowrap rounded-full px-3.5 py-2 font-display text-sm font-medium transition xl:px-4 ${
                        isActive ? 'text-black' : 'text-neutral-700 hover:text-black'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-full bg-neutral-100 ring-1 ring-black/5"
                            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative">{label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link to={proposalLink.to} onClick={close} className={`${beigeButton} ml-1 hidden sm:inline-flex`}>
            {proposalLink.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-full p-2 text-neutral-900 transition hover:bg-black/5 lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </FadedPill>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 rounded-3xl border border-black/10 bg-white p-2 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.55)] lg:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map(({ to, label, end }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex items-center rounded-2xl px-4 py-3 font-display text-base font-medium transition ${
                          isActive ? 'bg-neutral-100 text-black' : 'text-neutral-700 hover:bg-neutral-50 hover:text-black'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link to={proposalLink.to} onClick={close} className={`${beigeButton} mt-2 flex w-full py-3 sm:hidden`}>
                {proposalLink.label}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
