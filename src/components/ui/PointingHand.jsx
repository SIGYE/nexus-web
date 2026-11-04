/**
 * Glossy black "3D" hand pointing LEFT (index finger extended), drawn in SVG so it stays sharp at any size.
 * Shading uses gradients + soft highlights to match the black bubbles.
 */
export default function PointingHand({ className = '' }) {
  return (
    <svg viewBox="0 0 470 250" overflow="visible" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ph-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a5a5a" />
          <stop offset="0.35" stopColor="#262626" />
          <stop offset="1" stopColor="#030303" />
        </linearGradient>
        <linearGradient id="ph-finger" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4d4d4d" />
          <stop offset="0.45" stopColor="#1b1b1b" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id="ph-cuff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a3a" />
          <stop offset="0.5" stopColor="#141414" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <radialGradient id="ph-glow" cx="0.3" cy="0.25" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="ph-shadow" x="-30%" y="-50%" width="160%" height="220%" filterUnits="objectBoundingBox">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#ph-shadow)">
        {/* curled fingers (ring, little) — roots hidden under the back of the hand */}
        <rect x="168" y="150" width="160" height="40" rx="20" fill="url(#ph-finger)" stroke="#000" strokeWidth="1" />
        <rect x="180" y="182" width="148" height="36" rx="18" fill="url(#ph-finger)" stroke="#000" strokeWidth="1" />
        <ellipse cx="200" cy="160" rx="18" ry="4" fill="#fff" opacity="0.14" />
        <ellipse cx="210" cy="191" rx="15" ry="3.5" fill="#fff" opacity="0.12" />

        {/* index finger, pointing left */}
        <rect x="16" y="64" width="262" height="50" rx="25" fill="url(#ph-finger)" stroke="#000" strokeWidth="1" />
        <path d="M104 70 q-5 19 0 38" fill="none" stroke="#000" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
        <path d="M107 72 q-4 17 0 34" fill="none" stroke="#fff" strokeOpacity="0.08" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M178 68 q-6 21 0 42" fill="none" stroke="#000" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
        <rect x="24" y="70" width="44" height="26" rx="13" fill="#2b2b2b" stroke="#000" strokeOpacity="0.6" />
        <ellipse cx="42" cy="76" rx="14" ry="3" fill="#fff" opacity="0.3" />
        <ellipse cx="140" cy="73" rx="108" ry="4.5" fill="#fff" opacity="0.18" />

        {/* back of the hand, covering the finger roots */}
        <path d="M262 52 h44 c34 0 54 22 54 56 v58 c0 34 -20 56 -54 56 h-30 c-30 0 -50 -16 -56 -40 l-8 -40 c-4 -22 0 -40 14 -56 c10 -22 22 -34 36 -34 z" fill="url(#ph-skin)" />
        <path d="M262 52 h44 c34 0 54 22 54 56 v58 c0 34 -20 56 -54 56 h-30 c-30 0 -50 -16 -56 -40 l-8 -40 c-4 -22 0 -40 14 -56 c10 -22 22 -34 36 -34 z" fill="url(#ph-glow)" />

        {/* thumb, tucked across the curled fingers */}
        <rect x="150" y="112" width="170" height="42" rx="21" fill="url(#ph-finger)" stroke="#000" strokeWidth="1" />
        <rect x="158" y="118" width="34" height="22" rx="11" fill="#2b2b2b" stroke="#000" strokeOpacity="0.5" />
        <ellipse cx="226" cy="121" rx="58" ry="4" fill="#fff" opacity="0.16" />

        {/* sleeve cuff, overlapping the wrist */}
        <rect x="342" y="48" width="124" height="180" rx="22" fill="url(#ph-cuff)" stroke="#000" strokeWidth="1" />
        <rect x="350" y="56" width="6" height="164" rx="3" fill="#fff" opacity="0.08" />
      </g>
    </svg>
  )
}
