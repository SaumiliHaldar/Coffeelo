import OrderBadge from './OrderBadge'

const big = 'text-[clamp(3rem,11vw,9rem)] lg:absolute lg:text-[14.5cqw]'

// Desktop (lg+): the reference composition, exact canvas coordinates in cqw (% of the box width).
// The box fits the screen height (never below 65% of the width), so it keeps the exact look without being huge.
// Below lg: simple stacked flow.
export default function Hero() {
  return (
    <section>
      <div className="@container wrap relative pt-4 pb-10 lg:mx-auto lg:aspect-[100/72] lg:w-[min(100%,max(65%,calc((100svh-8vw)*100/72)))] lg:p-0">
        {/* dot grid, top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-[68cqw] hidden h-[23cqw] w-[30cqw] bg-[radial-gradient(var(--color-caramel)_1.3px,transparent_1.7px)] bg-size-[1.2cqw_1.2cqw] opacity-60 lg:block"
        />

        {/* caramel swoosh (canvas path; viewBox starts at y=7 because the navbar sits above) */}
        <svg
          viewBox="0 7 100 72"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden size-full fill-none stroke-caramel lg:block"
        >
          <path d="M1 50C12 58 22 62 31 53 37 44 31 37 27 45 23 58 35 67 50 59 64 51 82 45 100 36" strokeWidth=".35" />
        </svg>

        <h1 className="reveal relative font-display leading-[0.95] text-roast lg:absolute lg:inset-0 lg:leading-none">
          <span className="flex flex-wrap items-end justify-center gap-x-[0.25em] lg:contents">
            <span className="mb-[0.35em] text-[clamp(1.25rem,3.5vw,2.75rem)] lg:absolute lg:top-[8.5cqw] lg:left-[11cqw] lg:mb-0 lg:text-[5.4cqw]">
              An Elevated
            </span>
            <span className={`${big} lg:top-[3.5cqw] lg:right-[6cqw]`}>Coffee</span>
          </span>
          <span className={`${big} block text-center lg:top-[15.5cqw] lg:left-[8cqw]`}>Experience</span>
        </h1>

        <img
          src="/images/caramel-macchiato.webp"
          alt="Iced caramel coffee splashing out of a coffeelo cup"
          width={800}
          height={1200}
          fetchPriority="high"
          style={{ '--i': 1 } as React.CSSProperties}
          className="reveal relative z-10 mx-auto -mt-4 w-56 drop-shadow-2xl sm:w-72 lg:absolute lg:top-[10cqw] lg:left-[37cqw] lg:m-0 lg:w-[30cqw]"
        />

        <div className="mt-8 flex items-center justify-between gap-6 lg:contents">
          <div
            style={{ '--i': 2 } as React.CSSProperties}
            className="reveal max-w-52 lg:absolute lg:top-[39cqw] lg:left-[4.6cqw] lg:w-[22cqw] lg:max-w-none"
          >
            <p className="font-ui font-semibold lg:text-[max(15px,1.9cqw)]">Single-Origin</p>
            <p className="mt-2 text-sm text-espresso/75 lg:mt-[1cqw] lg:text-[max(13px,1.4cqw)] lg:leading-normal">
              Notes of cacao, caramel, and stone fruit, slow roasted in small batches.
            </p>
          </div>
          <OrderBadge
            style={{ '--i': 3 } as React.CSSProperties}
            className="reveal z-20 lg:absolute lg:top-[49cqw] lg:left-[30.5cqw] lg:text-[2.3cqw]"
          />
        </div>
      </div>
    </section>
  )
}
