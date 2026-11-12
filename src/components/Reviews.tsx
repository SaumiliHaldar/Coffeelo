// pos = where each card floats on desktop, in % of the panel (measured from the reference)
const reviews = [
  {
    name: 'Isabella M.',
    text: 'Every detail feels intentional, from the atmosphere to the final sip. Truly exceptional.',
    pos: 'lg:top-[35%] lg:left-[10.5%] lg:w-[27.6%]',
  },
  {
    name: 'Amelia Rhodes',
    text: 'Every detail feels intentional, from the atmosphere to the final sip. Truly exceptional.',
    pos: 'lg:top-[36.7%] lg:left-[62.3%] lg:w-[31.6%]',
  },
  {
    name: 'Sophia Hayes',
    text: 'A destination for people who truly appreciate specialty coffee. Every detail is thoughtfully considered.',
    pos: 'lg:top-[63.3%] lg:left-[5.1%] lg:w-[34.9%]',
  },
  {
    name: 'Daniel Foster',
    text: 'Quiet luxury in its purest form. Sophisticated flavors without unnecessary complexity.',
    pos: 'lg:top-[71.7%] lg:left-[60.4%] lg:w-[25.4%]',
  },
]

// Desktop (lg+): panel keeps the reference's proportions, cup centred, cards float over it in %.
// Below lg: title, cup, then cards in a grid.
export default function Reviews() {
  return (
    <section id="reviews" className="wrap py-10">
      <div className="@container relative mx-auto rounded-[2rem] bg-blush px-4 py-12 sm:px-8 lg:aspect-[91.5/60] lg:rounded-[5cqw] lg:p-0">
        <h2 className="text-center font-display text-3xl leading-tight text-roast sm:text-4xl lg:absolute lg:inset-x-0 lg:top-[10%] lg:text-[4.9cqw]">
          Moments Worth <br /> Returning For
        </h2>

        <img
          src="/images/caramel-macchiato.webp"
          alt=""
          loading="lazy"
          width={800}
          height={1200}
          className="mx-auto mt-8 w-48 drop-shadow-2xl sm:w-56 lg:absolute lg:top-[35%] lg:left-[50.7%] lg:m-0 lg:w-[26%] lg:-translate-x-1/2"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:contents">
          {reviews.map((r) => (
            <li
              key={r.name}
              className={`z-10 rounded-xl bg-cream/60 p-4 text-sm backdrop-blur-sm lg:absolute lg:rounded-[1.3cqw] lg:p-[1.6%] lg:text-[1.45cqw] ${r.pos}`}
            >
              <figure>
                <figcaption className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-caramel font-ui text-xs font-semibold lg:size-[3.8cqw] lg:text-[1.3cqw]"
                  >
                    {r.name[0]}
                  </span>
                  <span className="flex flex-col items-start gap-0.5">
                    <span className="rounded-full bg-espresso px-2 py-0.5 font-ui text-[11px] text-cream lg:text-[1.05cqw]">
                      {r.name}
                    </span>
                    <span role="img" aria-label="5 stars" className="text-[10px] text-orange lg:text-[1cqw]">
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
