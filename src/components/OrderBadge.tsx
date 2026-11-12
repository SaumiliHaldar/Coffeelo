// Wavy-edged circle: radius = 44 + 5·sin(12θ) → 12 soft bumps. Built once at load.
const blob =
  Array.from({ length: 180 }, (_, i) => {
    const t = (i / 180) * Math.PI * 2
    const r = 44 + 5 * Math.sin(12 * t)
    return `${(r * Math.cos(t)).toFixed(2)},${(r * Math.sin(t)).toFixed(2)}`
  }).join(' ')

export default function OrderBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href="#menu"
      className={`group relative grid size-[4.8em] shrink-0 place-items-center text-2xl md:text-3xl ${className}`}
    >
      <svg
        viewBox="-50 -50 100 100"
        aria-hidden="true"
        className="absolute inset-0 size-full drop-shadow-lg transition duration-500 group-hover:rotate-45"
      >
        <polygon points={blob} className="fill-orange" />
      </svg>
      <span className="relative -rotate-15 text-center font-display leading-[0.95] text-cream">
        Order
        <br />
        now
      </span>
    </a>
  )
}
