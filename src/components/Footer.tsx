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

// spot + tilt of each oval inside the cluster box (from the reference)
const socials = [
  { name: 'TikTok', pos: 'top-[4%] left-[24%] -rotate-60' },
  { name: 'LinkedIn', pos: 'top-0 left-[46%] rotate-12', href: 'https://www.linkedin.com/in/saumili-haldar-0804s2003' },
  { name: 'Instagram', pos: 'top-[52%] left-0 -rotate-12' },
  { name: 'Facebook', pos: 'top-[56%] left-[35%]' },
  { name: 'Youtube', pos: 'top-[46%] left-[68%] rotate-30' },
]

export default function Footer() {
  return (
    <footer id="footer" className="text-espresso">
      <Wave deep />
      <div className="bg-espresso text-cream">
        <div className="wrap pb-10">
          <p
            aria-hidden="true"
            className="text-center font-ui text-[clamp(4rem,18vw,15rem)] leading-none font-semibold text-orange/80 select-none"
          >
            coffeelo
          </p>

          <div className="mt-10 grid gap-8 border-t border-cream/15 pt-8 text-sm sm:grid-cols-3">
            <ul className="space-y-1 text-cream/80">
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#menu">Collection</a></li>
              <li><a href="#reviews">Guests</a></li>
              <li><a href="#footer">Visit</a></li>
            </ul>
            <ul className="space-y-1 text-cream/80">
              <li><a href="#footer">Reservations</a></li>
              <li><a href="#footer">Private Events</a></li>
            </ul>
            <p className="text-cream/60 sm:text-right">© coffeelo. All rights reserved.</p>
          </div>

          <ul className="relative mx-auto mt-8 h-36 w-[min(100%,22rem)]">
            {socials.map((s) => (
              <li key={s.name} className={`absolute ${s.pos}`}>
                <a
                  href={s.href ?? '#'}
                  {...(s.href && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-block rounded-[50%] border-2 border-caramel/70 bg-espresso px-6 py-3 font-ui text-sm transition hover:bg-caramel hover:text-espresso"
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
