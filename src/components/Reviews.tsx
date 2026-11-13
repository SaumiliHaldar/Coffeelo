// pos = where each card floats on desktop, in % of the panel (measured from the reference)
const reviews = [
  {
    name: 'Isabella M.',
    text: 'Every detail feels intentional, from the atmosphere to the final sip. Truly exceptional.',
    pos: 'lg:top-[35%] lg:left-[10.5%] lg:w-[calc(var(--v)*27.6)]',
  },
  {
    name: 'Amelia Rhodes',
    text: 'Every detail feels intentional, from the atmosphere to the final sip. Truly exceptional.',
    pos: 'lg:top-[36.7%] lg:left-[62.3%] lg:w-[calc(var(--v)*31.6)]',
  },
  {
    name: 'Sophia Hayes',
    text: 'A destination for people who truly appreciate specialty coffee. Every detail is thoughtfully considered.',
    pos: 'lg:top-[63.3%] lg:left-[5.1%] lg:w-[calc(var(--v)*34.9)]',
  },
  {
    name: 'Daniel Foster',
    text: 'Quiet luxury in its purest form. Sophisticated flavors without unnecessary complexity.',
    pos: 'lg:top-[71.7%] lg:left-[60.4%] lg:w-[calc(var(--v)*25.4)]',
  },
]

// Desktop (lg+): panel keeps the reference's proportions, cup centred, cards float over it in %.
// Below lg: title, cup, then cards in a grid.
export default function Reviews() {
  return (
    <section id="reviews" className="wrap py-10">
      <div className="@container relative mx-auto rounded-[2rem] bg-blush px-4 py-12 sm:px-8 lg:h-[min(59.7vw,860px)] lg:[--v:min(1cqw,13.1px)] lg:rounded-[calc(var(--v)*5)] lg:p-0">
        <h2 className="reveal type-heading text-center font-display leading-tight text-roast lg:absolute lg:inset-x-0 lg:top-[10%]">
          Moments Worth <br /> Returning For
        </h2>

        <img
          src="/images/coffee-cup.webp"
          alt=""
          loading="lazy"
          width={833}
          height={1178}
          style={{ '--i': 1 } as React.CSSProperties}
          className="reveal mx-auto mt-8 w-48 drop-shadow-2xl sm:w-56 lg:absolute lg:top-[34%] lg:left-[50.7%] lg:m-0 lg:w-[calc(var(--v)*28)] lg:-translate-x-1/2"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:contents">
          {reviews.map((r, i) => (
            <li
              key={r.name}
              style={{ '--i': i + 2 } as React.CSSProperties}
              className={`reveal z-10 rounded-xl bg-cream/60 p-4 text-sm backdrop-blur-sm lg:absolute lg:rounded-[calc(var(--v)*1.3)] lg:p-[calc(var(--v)*1.6)] lg:text-[calc(var(--v)*1.45)] ${r.pos}`}
            >
              <figure>
                <figcaption className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-caramel font-ui text-xs font-semibold lg:size-[calc(var(--v)*3.8)] lg:text-[calc(var(--v)*1.3)]"
                  >
                    {r.name[0]}
                  </span>
                  <span className="flex flex-col items-start gap-0.5">
                    <span className="rounded-full bg-espresso px-2 py-0.5 font-ui text-[11px] text-cream lg:text-[calc(var(--v)*1.05)]">
                      {r.name}
                    </span>
                    <span role="img" aria-label="5 stars" className="text-[10px] text-orange lg:text-[calc(var(--v)*1)]">
                      ★★★★★
                    </span>
                  </span>
                </figcaption>
                <blockquote className="mt-2 leading-snug">{r.text}</blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
