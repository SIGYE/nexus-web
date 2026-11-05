import { lazy } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Home loads immediately; other pages load on demand to keep the first download small.
const About = lazy(() => import('./pages/About'))
const Journey = lazy(() => import('./pages/Journey'))
const Media = lazy(() => import('./pages/Media'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

// HashRouter (URLs like /#/about) works on any static host without server rewrites.
export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/media" element={<Media />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Layout>
    </HashRouter>
  )
}
