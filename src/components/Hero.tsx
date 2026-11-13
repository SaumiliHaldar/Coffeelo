import OrderBadge from './OrderBadge'

// Desktop (lg+): full page width, every item placed in cqw (% of the hero's width), coordinates from the design canvas.
// Below lg: simple stacked flow.
export default function Hero() {
  return (
    <section className="relative">
      {/* full screen width: the swoosh runs edge to edge; content below stays in the 1440px page box */}
      {/* caramel swoosh (canvas path; viewBox starts at y=7 because the navbar sits above) */}
      <svg
        viewBox="0 7 100 72"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden size-full fill-none stroke-caramel lg:block"
      >
        <path d="M1 50C12 58 22 62 31 53 37 44 31 37 27 45 23 58 35 67 50 59 64 51 82 45 100 36" strokeWidth=".35" />
      </svg>
      <div className="@container wrap relative pt-4 pb-10 lg:aspect-[100/50] lg:p-0">
        {/* dot grid, top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-[68cqw] hidden h-[17cqw] w-[30cqw] bg-[radial-gradient(var(--color-caramel)_1.3px,transparent_1.7px)] bg-size-[1.2cqw_1.2cqw] opacity-60 lg:block"
        />

        <h1 className="reveal relative font-display leading-[0.95] text-roast lg:absolute lg:top-[2.5cqw] lg:left-1/2 lg:w-max lg:-translate-x-1/2 lg:leading-[0.85]">
          <span className="flex flex-wrap items-end justify-center gap-x-[0.25em] lg:justify-end">
            <span className="mb-[0.35em] text-[clamp(1.25rem,3.5vw,2.75rem)] lg:text-[3.8cqw]">
              An Elevated
            </span>
            <span className="text-[clamp(3rem,11vw,9rem)] lg:text-[10cqw]">Coffee</span>
          </span>
          <span className="block text-center text-[clamp(3rem,11vw,9rem)] lg:text-left lg:text-[10cqw]">
            Experience
          </span>
        </h1>

        <img
          src="/images/caramel-macchiato.webp"
          alt="Iced caramel coffee splashing out of a coffeelo cup"
          width={800}
          height={1200}
          fetchPriority="high"
          style={{ '--i': 1 } as React.CSSProperties}
          className="reveal relative z-10 mx-auto -mt-4 w-56 drop-shadow-2xl sm:w-72 lg:absolute lg:top-[8cqw] lg:left-[41cqw] lg:m-0 lg:w-[22cqw]"
        />

        <div className="mt-8 flex items-center justify-between gap-6 lg:contents">
          <div style={{ '--i': 2 } as React.CSSProperties} className="reveal max-w-52 lg:absolute lg:top-[27cqw] lg:left-[4.6cqw] lg:w-[20cqw] lg:max-w-none">
            <p className="font-ui font-semibold lg:text-[1.5cqw]">Single-Origin</p>
            <p className="mt-2 text-sm text-espresso/75 lg:mt-[0.8cqw] lg:text-[1.15cqw] lg:leading-normal">
              Notes of cacao, caramel, and stone fruit, slow roasted in small batches.
            </p>
          </div>
          <OrderBadge style={{ '--i': 3 } as React.CSSProperties} className="reveal z-20 lg:absolute lg:top-[32cqw] lg:left-[34cqw] lg:text-[1.7cqw]" />
        </div>
      </div>
    </section>
  )
}
