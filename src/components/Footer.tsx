import OrderBadge from './OrderBadge'
import Wave from './Wave'

// Desktop (lg+): full screen width, every item placed in cqw (% of screen width), measured from the reference.
// Below lg: title + badge, then the hand in the bottom-right corner, its arm tucked under the footer wave.
export function CallToAction() {
  return (
    <section className="@container relative pt-10 lg:h-[calc(var(--u)*45)] lg:p-0 lg:[--u:min(1cqw,14.4px)]">
      <svg
        viewBox="0 0 100 45"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full fill-none stroke-caramel lg:block"
      >
        <path d="M-1 7C18 1.6 42 .8 69.5 13" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        <path d="M88.6 18.4C91 16 93 14.7 95.2 13.9" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="wrap flex flex-col items-start gap-4 lg:contents">
        <h2 className="reveal font-display text-[clamp(3rem,9vw,5rem)] leading-[1.1] text-roast lg:absolute lg:top-[calc(var(--u)*8.8)] lg:left-[4.6cqw] lg:text-[calc(var(--u)*7.8)] lg:leading-[1.15]">
          Find Your <br /> Signature <br /> Cup Now
        </h2>
        <OrderBadge style={{ '--i': 1 } as React.CSSProperties} className="reveal z-20 lg:absolute lg:top-[calc(var(--u)*26.7)] lg:left-[40cqw] lg:text-[calc(var(--u)*2.54)]" />
      </div>

      <img
        src="/images/signature-cup.webp"
        alt="Hand holding an iced chocolate coffeelo cup"
        loading="lazy"
        width={1117}
        height={1200}
        style={{ '--i': 2 } as React.CSSProperties}
        className="reveal relative -mt-6 -mb-[10vw] ml-auto w-64 drop-shadow-2xl md:w-80 lg:absolute lg:top-[calc(var(--u)*7.2)] lg:right-[1cqw] lg:m-0 lg:w-[calc(var(--u)*34.7)]"
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
        <div className="wrap pb-8">
          <p
            aria-hidden="true"
            className="reveal text-center font-ui text-[clamp(3.5rem,14vw,11rem)] leading-none font-semibold text-orange/80 select-none"
          >
            coffeelo
          </p>

          <div style={{ '--i': 1 } as React.CSSProperties} className="reveal mt-6 grid grid-cols-2 gap-6 border-t border-cream/15 pt-6 text-center lg:grid-cols-3 lg:text-left lg:text-sm">
            <ul className="justify-self-center space-y-3 text-left text-cream/85 lg:justify-self-start lg:space-y-1">
              <li><a href="#philosophy">Philosophy</a></li>
              <li><a href="#menu">Collection</a></li>
              <li><a href="#reviews">Guests</a></li>
              <li><a href="#footer">Visit</a></li>
            </ul>
            <ul className="justify-self-center space-y-3 text-left text-cream/85 lg:justify-self-start lg:space-y-1">
              <li><a href="#footer">Reservations</a></li>
              <li><a href="#footer">Private Events</a></li>
            </ul>
            <p className="col-span-2 text-sm text-cream/60 lg:col-span-1 lg:text-right">© Coffeelo. All rights reserved.</p>
          </div>

          <ul className="mt-6 flex flex-nowrap justify-center gap-2 sm:gap-3 lg:relative lg:mx-auto lg:block lg:h-28 lg:w-88">
            {socials.map((s, i) => (
              <li key={s.name} style={{ '--i': i + 2 } as React.CSSProperties} className={`reveal lg:absolute ${i % 2 ? 'rotate-3' : '-rotate-2'} ${s.pos}`}>
                <a
                  href={s.href}
                  {...(s.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="inline-block rounded-[50%] border-2 border-caramel/50 bg-espresso px-4 py-2 font-ui text-xs whitespace-nowrap transition sm:px-7 sm:py-3 sm:text-sm hover:bg-cream/15"
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
