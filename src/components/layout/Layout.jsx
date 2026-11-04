import { Suspense } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { ease } from '../../lib/motion'
import Navbar from './Navbar'
import Footer from './Footer'

// Scroll to top between pages: runs after the old page has faded out, before the new one fades in.
const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

const focusMain = () => document.getElementById('main')?.focus()

/** App shell: skip link, navbar, animated page transitions, footer. `children` are <Route>s. */
export default function Layout({ children }) {
  const location = useLocation()
  return (
    <MotionConfig reducedMotion="user">
      <button
        type="button"
        onClick={focusMain}
        className="sr-only z-[70] rounded-full bg-gold px-5 py-2 font-display font-semibold text-navy-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </button>
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <motion.main
          id="main"
          tabIndex={-1}
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease }}
          className="shadow-none outline-none"
        >
          <Suspense fallback={<div className="min-h-svh bg-navy-deep" />}>
            <Routes location={location}>{children}</Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  )
}
