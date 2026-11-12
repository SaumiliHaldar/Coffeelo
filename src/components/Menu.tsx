const products = [
  { name: 'Caramel Macchiato', price: '$3.56', img: '/images/caramel-macchiato.webp', bg: 'from-caramel/60 to-cream' },
  { name: 'Mocha Bliss', price: '$5.46', img: '/images/mocha-bliss.webp', bg: 'from-espresso/30 to-cream' },
  { name: 'Vanilla Cream', price: '$2.46', img: '/images/vanilla-cream.webp', bg: 'from-blush to-cream' },
]

export default function Menu() {
  return (
    <section id="menu" className="relative wrap py-10 md:py-14">
      {/* dot grid decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(var(--color-caramel)_1.5px,transparent_1.5px)] bg-size-[18px_18px] opacity-40"
      />

      <div className="relative flex flex-col-reverse gap-4 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xs text-sm text-espresso/70">
          A rich, chilled coffee made with carefully selected ingredients for bold flavor in every sip.
        </p>
        <h2 className="font-display text-4xl text-roast md:text-right md:text-5xl">
          Curated for <br className="hidden md:block" />
          Refined Palates
        </h2>
      </div>

      <ul className="relative mt-16 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:mt-20 lg:grid-cols-[repeat(3,minmax(0,20rem))] lg:justify-center lg:gap-x-10">
        {products.map((p, i) => (
          <li
            key={p.name}
            className={`relative mx-auto w-full max-w-sm rounded-3xl sm:last:col-span-2 lg:last:col-span-1 bg-white p-3 shadow-lg shadow-espresso/10 ${
              i === 1 ? 'lg:-translate-y-10' : ''
            }`}
          >
            <div className={`relative h-52 rounded-2xl bg-linear-to-b ${p.bg}`}>
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[125%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-xl"
              />
            </div>

            <span className="absolute -top-3 -left-3 rounded-full bg-orange px-3 py-1 font-ui text-sm font-semibold text-cream">
              {p.price}
            </span>

            <div className="flex items-center justify-between gap-4 px-2 pt-4 pb-2">
              <h3 className="font-display text-xl text-roast">{p.name}</h3>
              <button
                type="button"
                aria-label={`Add ${p.name} to order`}
                className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso text-2xl leading-none text-cream transition hover:bg-orange"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
