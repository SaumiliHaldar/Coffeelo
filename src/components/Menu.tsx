// Layout ported from coffeelo.html. Each card is its own @container: every size inside is cqw of the card
// (the reference's 28.4-unit card grid × 3.52), so a card looks identical from phone to desktop.
const products = [
  {
    name: 'Caramel Macchiato',
    price: '₹299',
    img: '/images/caramel-macchiato.webp',
    bg: '/images/caramel-texture.webp',
    cup: 'left-[6cqw] top-[30cqw] w-[50cqw] rotate-6',
  },
  {
    name: 'Mocha Bliss',
    price: '₹449',
    img: '/images/mocha-bliss.webp',
    bg: '/images/mocha-texture.webp',
    cup: '-left-[3cqw] -top-[24cqw] w-[74cqw] rotate-3',
  },
  {
    name: 'Vanilla Cream',
    price: '₹199',
    img: '/images/vanilla-cream.webp',
    bg: '/images/vanilla-texture.webp',
    cup: 'left-[3cqw] top-[22cqw] w-[60cqw] rotate-3',
  },
]

// Desktop (lg+): measured from the approved reference screenshot (% of page width), 100:60 stage, max 1440px wide.
// Below lg: stacked. Don't change this section as a side effect of other work.
export default function Menu() {
  return (
    <section id="menu" className="@container relative wrap py-12 lg:mx-auto lg:aspect-[100/56] lg:max-w-[1440px] lg:p-0">
      <div className="flex flex-col-reverse gap-4 lg:contents">
        <p className="reveal max-w-80 type-body text-espresso/70 lg:absolute lg:top-[7cqw] lg:left-[6.5cqw] lg:w-[26cqw] lg:max-w-none lg:leading-[1.45]">
          A rich, chilled coffee made with carefully selected ingredients for bold flavor in every sip.
        </p>
        <h2 className="reveal type-heading text-right font-display leading-[1.2] text-roast lg:absolute lg:top-[5cqw] lg:right-[6.5cqw] lg:leading-[1.4]">
          Curated for
          <br />
          Refined Palates
        </h2>
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:absolute lg:top-[23cqw] lg:right-[6.5cqw] lg:left-[6.5cqw] lg:m-0 lg:grid-cols-[repeat(3,24cqw)] lg:justify-between lg:gap-0">
        {products.map((p, i) => {
          const [first, ...rest] = p.name.split(' ')
          const mid = i === 1
          return (
            <li
              key={p.name}
              style={{ '--i': i } as React.CSSProperties}
              className={`reveal group @container relative mx-auto aspect-[148/172] w-full max-w-80 rounded-[8.4%/7.8%] bg-white shadow-[0_1.2rem_3rem_rgba(90,45,25,.13)] sm:last:col-span-2 lg:max-w-none lg:last:col-span-1 ${
                mid ? 'lg:-mt-[1.9cqw]' : ''
              }`}
            >
              <div className="absolute inset-x-[2.7cqw] top-[2.7cqw] h-[76cqw] rounded-[6cqw] bg-cover bg-center" style={{ backgroundImage: `url(${p.bg})` }} />

              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className={`absolute h-auto drop-shadow-xl transition duration-300 group-hover:-translate-y-[2.8cqw] group-hover:scale-[1.03] ${p.cup}`}
              />

              <span
                className={`absolute bg-orange font-display leading-[1.2] text-cream ${
                  mid
                    ? 'right-[12.8cqw] bottom-[10.8cqw] rounded-[4.2cqw] px-[4.2cqw] py-[2.5cqw] text-[5.5cqw]'
                    : '-top-[3.4cqw] -left-[5.4cqw] rounded-[3.5cqw] px-[3.5cqw] py-[1.9cqw] text-[5cqw]'
                }`}
              >
                {p.price}
              </span>

              <button
                type="button"
                aria-label={`Add ${p.name} to order`}
                className={`absolute top-[10cqw] grid min-h-8 min-w-8 place-items-center ${mid ? 'right-[7.4cqw] size-[15cqw]' : 'right-[9.5cqw] size-[9.5cqw]'} rounded-full bg-[#5C2515] text-cream transition hover:scale-110 hover:bg-orange`}
              >
                <svg viewBox="0 0 20 20" className="size-[55%]" aria-hidden="true">
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </button>

              <h3
                className={`absolute font-display text-[7.5cqw] leading-[1.15] ${
                  mid ? 'bottom-[9.5cqw] left-[8.8cqw] text-roast' : 'bottom-[12.8cqw] left-[51cqw] text-espresso'
                }`}
              >
                {first}
                <br />
                {rest.join(' ')}
              </h3>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
