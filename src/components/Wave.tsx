// Curvy section edge. Colour comes from text-* on the parent; className adds e.g. rotate-180 for a bottom edge.
// deep = the footer curve from the reference: rises to a peak at ~1/3, falls away to the right; height scales with width.
export default function Wave({ className = '', deep = false }: { className?: string; deep?: boolean }) {
  return (
    <svg
      viewBox={deep ? '0 0 1440 160' : '0 0 1440 80'}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`-my-px block w-full ${deep ? 'h-[12vw]' : 'h-10 md:h-20'} ${className}`}
    >
      <path
        fill="currentColor"
        d={deep ? 'M0 160V46C160 10 300 0 475 0S1100 110 1440 150V160Z' : 'M0 80V45C240 0 480 0 720 40S1200 85 1440 25V80Z'}
      />
    </svg>
  )
}
