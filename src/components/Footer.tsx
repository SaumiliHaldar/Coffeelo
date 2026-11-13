import OrderBadge from './OrderBadge'
import Wave from './Wave'

// Desktop (lg+): full screen width, every item placed in cqw (% of screen width), measured from the reference.
// Below lg: title + badge, then the hand in the bottom-right corner, its arm tucked under the footer wave.
export function CallToAction() {
  return (
    <section className="@container relative pt-10 lg:aspect-[100/45] lg:p-0">
      <svg
        viewBox="0 0 100 45"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full fill-none stroke-caramel lg:block"
      >
        <path d="M-1 7C18 1.6 42 .8 69.5 13" strokeWidth=".3" />
        <path d="M88.6 18.4C91 16 93 14.7 95.2 13.9" strokeWidth=".3" />
      </svg>

      <div className="wrap flex flex-wrap items-end gap-4 lg:contents">
        <h2 className="reveal font-display text-[clamp(3rem,9vw,5rem)] leading-[1.1] text-roast lg:absolute lg:top-[8.8cqw] lg:left-[4.6cqw] lg:text-[7.8cqw] lg:leading-[1.15]">
          Find Your <br /> Signature <br /> Cup Now
        </h2>
        <OrderBadge style={{ '--i': 1 } as React.CSSProperties} className="reveal z-20 lg:absolute lg:top-[26.7cqw] lg:left-[40cqw] lg:text-[2.54cqw]" />
      </div>

      <img
        src="/images/signature-cup.webp"
        alt="Hand holding an iced chocolate coffeelo cup"
        loading="lazy"
        width={1117}
        height={1200}
        style={{ '--i': 2 } as React.CSSProperties}
        className="reveal relative -mt-6 -mb-[14vw] ml-auto w-64 drop-shadow-2xl md:w-80 lg:absolute lg:top-[7.2cqw] lg:left-[64.3cqw] lg:m-0 lg:w-[34.7cqw]"
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
    <footer id="footer" className="relative z-10 text-espresso">
      <Wave deep />
      <div className="bg-espresso text-cream">
        <div className="wrap pb-10">
          <p
            aria-hidden="true"
            className="reveal font-ui lg:text-center text-[clamp(4rem,18vw,15rem)] leading-none font-semibold text-orange/80 select-none"
          >
            coffeelo
          </p>

          <div style={{ '--i': 1 } as React.CSSProperties} className="reveal mt-10 grid grid-cols-2 gap-8 border-t border-cream/15 pt-8 lg:grid-cols-3 lg:text-sm">
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
            <p className="col-span-2 text-sm text-cream/60 lg:col-span-1 lg:text-right">© Coffeelo. All rights reserved.</p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3 lg:relative lg:mx-auto lg:block lg:h-36 lg:w-88">
            {socials.map((s, i) => (
              <li key={s.name} style={{ '--i': i + 2 } as React.CSSProperties} className={`reveal lg:absolute ${i % 2 ? 'rotate-3' : '-rotate-2'} ${s.pos}`}>
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
