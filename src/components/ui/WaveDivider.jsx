/**
 * Curved separator. `className` sets the background (section above) and text colour (section below), e.g.
 * <WaveDivider className="bg-white text-navy-deep" />
 */
export default function WaveDivider({ className = '', flip = false }) {
  return (
    <div className={`relative -mb-px leading-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block h-12 w-full sm:h-20 ${flip ? '-scale-x-100' : ''}`}>
        <path fill="currentColor" d="M0 60c120-30 260-52 420-40s300 56 480 52 330-50 540-44v62H0z" />
      </svg>
    </div>
  )
}
