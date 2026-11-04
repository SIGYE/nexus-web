/** Soft animated gradient blobs + dot grid used behind dark hero sections. */
export default function Blobs({ dense = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-leaf/70" />
      <div className="absolute -left-32 -top-32 size-[28rem] animate-blob rounded-full bg-leaf/40 blur-3xl" />
      <div className="absolute -right-24 top-1/4 size-[24rem] animate-blob rounded-full bg-navy blur-3xl [animation-delay:-6s]" />
      {dense && <div className="absolute bottom-0 left-1/3 size-[22rem] animate-blob rounded-full bg-gold/25 blur-3xl [animation-delay:-12s]" />}
      <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
    </div>
  )
}
