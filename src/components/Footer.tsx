import OrderBadge from './OrderBadge'
import Wave from './Wave'

export function CallToAction() {
  return (
    <section className="relative wrap pt-10 lg:flex lg:min-h-[min(36vw,80svh)] lg:items-center lg:py-10">
      {/* thin caramel arcs behind the cup */}
      <svg
        viewBox="0 0 1152 718"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full fill-none stroke-caramel lg:block"
      >
        <path d="M-20 90C200-10 520-20 760 230" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <path d="M1090 140C1060 158 1040 180 1022 210" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative z-20 flex flex-wrap items-end gap-4">
        <h2 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[1.08] text-roast">
          Find Your <br /> Signature <br /> Cup Now
        </h2>
        <OrderBadge className="lg:mb-[-1.2em] lg:-ml-[0.3em] lg:text-[clamp(1.75rem,2.4vw,2.4rem)]" />
      </div>

      {/* phones/tablets: below the title; desktop: pinned right, bleeding off the edge and over the footer wave */}
      <img
        src="/images/signature-cup.webp"
        alt="Hand holding an iced chocolate coffeelo cup"
        loading="lazy"
        width={1210}
        height={1300}
        className="relative z-10 -mr-[clamp(1rem,5vw,5rem)] -mb-16 ml-auto w-72 drop-shadow-2xl md:w-96 lg:absolute lg:right-0 lg:-bottom-16 lg:m-0 lg:w-[34vw] lg:max-w-136 lg:translate-x-[6%]"
      />
    </section>
  )
}

// desktop: spot + tilt of each oval inside the cluster box (from the reference). Below lg they sit in a row.
const socials = [
  { name: 'GitHub', pos: 'lg:top-[6%] lg:left-[6%] lg:-rotate-12', href: 'https://github.com/SaumiliHaldar' },
  { name: 'LinkedIn', pos: 'lg:top-0 lg:left-[50%] lg:rotate-12', href: 'https://www.linkedin.com/in/saumili-haldar-0804s2003' },
  { name: 'Email', pos: 'lg:top-[50%] lg:left-[28%] lg:-rotate-6', href: 'mailto:haldar.saumili843@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="footer" className="text-espresso">
      <Wave deep />
      <div className="bg-espresso text-cream">
        <div className="wrap pb-10">
          <p
            aria-hidden="true"
            className="font-ui lg:text-center text-[clamp(4rem,18vw,15rem)] leading-none font-semibold text-orange/80 select-none"
          >
            coffeelo
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-cream/15 pt-8 lg:grid-cols-3 lg:text-sm">
            <ul className="space-y-3 text-cream/85 lg:space-y-1">
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#menu">Collection</a></li>
              <li><a href="#reviews">Guests</a></li>
              <li><a href="#footer">Visit</a></li>
            </ul>
            <ul className="space-y-1 text-cream/80">
              <li><a href="#footer">Reservations</a></li>
              <li><a href="#footer">Private Events</a></li>
            </ul>
            <p className="col-span-2 text-sm text-cream/60 lg:col-span-1 lg:text-right">© coffeelo. All rights reserved.</p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3 lg:relative lg:mx-auto lg:block lg:h-36 lg:w-88">
            {socials.map((s, i) => (
              <li key={s.name} className={`lg:absolute ${i % 2 ? 'rotate-3' : '-rotate-2'} ${s.pos}`}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-block rounded-[50%] border-2 border-caramel/50 bg-espresso px-7 py-3 font-ui text-sm transition hover:bg-cream/15"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
