import { useState } from 'react'
import { asset } from '../lib/assets'

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

/** Portrait with a floating white, black-bordered pill (name + country) over its bottom edge. */
export default function TeamCard({ member }) {
  // Remember which photo failed (not just "failed"), so a new photo is always tried.
  const [failedSrc, setFailedSrc] = useState(null)
  const broken = !member.photo || failedSrc === member.photo

  return (
    <figure className="group relative pb-12">
      <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border-2 border-black bg-neutral-100">
        {broken ? (
          <div className="flex size-full items-center justify-center font-display text-5xl font-extrabold text-black/25" aria-hidden="true">
            {initials(member.name)}
          </div>
        ) : (
          <img
            src={asset(member.photo)}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            onError={() => setFailedSrc(member.photo)}
            className="size-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
          />
        )}
      </div>

      {/* floating name tag */}
      <figcaption className="absolute inset-x-3 bottom-0 animate-float rounded-[1.4rem] border-2 border-black bg-white px-4 py-2.5 text-center shadow-[0_14px_30px_-14px_rgb(0_0_0/0.45)] transition-transform duration-300 group-hover:-translate-y-1.5 sm:inset-x-4">
        <span className="block text-balance font-display text-sm font-bold leading-snug text-black">{member.name}</span>
        <span className="mt-0.5 block text-xs leading-tight text-neutral-600">{member.community}</span>
      </figcaption>
    </figure>
  )
}
