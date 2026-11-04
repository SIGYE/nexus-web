import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Play } from 'lucide-react'
import { getYouTubeId } from '../lib/youtube'
import { asset } from '../lib/assets'
import Picture from './ui/Picture'

const isVideoFile = (src) => /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src || '')

/**
 * Video player.
 * - YouTube link or ID -> thumbnail facade, then a youtube-nocookie.com iframe on click.
 * - Video file ('videos/clip.mp4' in /public, or a full .mp4 URL) -> native <video>, loaded on demand.
 * - Empty -> "Video coming soon" placeholder.
 * - `autoplayMuted` (YouTube only): starts playing muted once scrolled into view; viewers unmute with YouTube's controls.
 */
export default function VideoEmbed({ video, title = 'Video', poster, dark = false, mono = false, autoplayMuted = false, className = '' }) {
  const id = getYouTubeId(video)
  const [playing, setPlaying] = useState(false)
  // Only load the YouTube player when it's about to be seen, so several videos on one page don't all load at once.
  const boxRef = useRef(null)
  const near = useInView(boxRef, { once: true, margin: '200px 0px' })

  if (!id && isVideoFile(video)) {
    return (
      <div className={`relative aspect-video overflow-hidden rounded-2xl ${mono ? 'border-2 border-black bg-black' : 'bg-navy-deep shadow-lift'} ${className}`}>
        <video
          controls
          preload="none"
          playsInline
          poster={poster ? asset(poster) : undefined}
          className="absolute inset-0 size-full object-cover"
          aria-label={title}
        >
          <source src={asset(video)} />
        </video>
      </div>
    )
  }

  if (!id) {
    return (
      <Picture
        kind="video"
        placeholder="Video coming soon"
        dark={dark}
        mono={mono}
        className={`aspect-video rounded-2xl ${mono ? '' : `ring-1 ${dark ? 'ring-white/10' : 'ring-navy/10'}`} ${className}`}
      />
    )
  }

  if (autoplayMuted) {
    const params = new URLSearchParams({ autoplay: '1', mute: '1', playsinline: '1', rel: '0', modestbranding: '1', loop: '1', playlist: id })
    return (
      <div ref={boxRef} className={`relative aspect-video overflow-hidden rounded-2xl ${mono ? 'border-2 border-black bg-black' : 'bg-navy-deep shadow-lift'} ${className}`}>
        {near ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 size-full"
          />
        ) : (
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="size-full object-cover" />
        )}
      </div>
    )
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-2xl ${mono ? 'border-2 border-black bg-black' : 'bg-navy-deep shadow-lift'} ${className}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 size-full" aria-label={`Play video: ${title}`}>
          <img
            src={poster ? asset(poster) : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition duration-700 group-hover:scale-105"
          />
          <span className={`absolute inset-0 bg-gradient-to-t ${mono ? 'from-black/80 via-black/10' : 'from-navy-deep/80 via-navy-deep/10'} to-transparent`} />
          <span className={`absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition duration-300 group-hover:scale-110 sm:size-20 ${mono ? 'border-2 border-black bg-white text-black' : 'bg-leaf text-navy-deep shadow-glow'}`}>
            <Play className="ml-1 size-7 fill-current sm:size-8" aria-hidden="true" />
          </span>
          <span className="absolute bottom-4 left-4 right-4 text-left font-display text-sm font-semibold text-white sm:text-base">{title}</span>
        </button>
      )}
    </div>
  )
}
