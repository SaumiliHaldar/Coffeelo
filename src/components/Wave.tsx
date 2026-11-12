// Curvy section edge. Colour comes from text-* on the parent; className adds e.g. rotate-180 for a bottom edge.
// deep = the taller footer curve (low left, peak left-of-centre, falls away to the right).
export default function Wave({ className = '', deep = false }: { className?: string; deep?: boolean }) {
  return (
    <svg
      viewBox={deep ? '0 0 1440 160' : '0 0 1440 80'}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${deep ? 'h-16 md:h-28 lg:h-40' : 'h-10 md:h-20'} ${className}`}
    >
      <path
        fill="currentColor"
        d={deep ? 'M0 160V95C180 30 380 0 580 2S1100 95 1440 140V160Z' : 'M0 80V45C240 0 480 0 720 40S1200 85 1440 25V80Z'}
      />
    </svg>
  )
}
