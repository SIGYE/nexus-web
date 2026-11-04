import { ArrowLeft, Compass } from 'lucide-react'
import Blobs from '../components/ui/Blobs'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-svh items-center overflow-hidden py-32">
      <Blobs />
      <div className="container-page text-center">
        <Compass className="mx-auto size-14 text-gold" aria-hidden="true" />
        <p className="mt-6 font-display text-8xl font-extrabold leading-none text-outline-gold sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">This path isn&rsquo;t built yet</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-200">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/" icon={ArrowLeft}>
            Back to home
          </Button>
        </div>
      </div>
    </section>
  )
}
