import OrderBadge from './OrderBadge'

const big = 'text-[clamp(3rem,11vw,9rem)] lg:absolute lg:text-[calc(var(--u)*15.8)]'

// Desktop (lg+): the reference composition, canvas coordinates. --u = 1% of width but capped at the 1440px size:
// --u is also capped so the hero (72u tall) fits one screen; everything is placed from the centre in --u.
// Below lg: simple stacked flow.
export default function Hero() {
  return (
    <section>
      <div className="@container wrap relative pt-4 pb-10 lg:h-[calc(var(--u)*72)] lg:p-0 lg:[--u:min(1cqw,14.4px,calc((100svh-4.75rem)/72))]">
        {/* dot grid, top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-[calc(50%+var(--u)*18)] hidden h-[calc(var(--u)*23)] w-[calc(var(--u)*30)] bg-[radial-gradient(var(--color-caramel)_1.3px,transparent_1.7px)] bg-size-[1.2cqw_1.2cqw] opacity-60 lg:block"
        />

        <h1 className="reveal relative font-display leading-[0.95] text-roast lg:absolute lg:inset-0 lg:leading-none">
          <span className="flex flex-wrap items-end justify-center gap-x-[0.25em] lg:contents">
            <span className="mb-[0.35em] text-[clamp(1.25rem,3.5vw,2.75rem)] lg:absolute lg:top-[calc(var(--u)*7.9)] lg:left-[calc(50%-var(--u)*45.2)] lg:mb-0 lg:text-[calc(var(--u)*6.1)]">
              An Elevated
            </span>
            <span className={`${big} lg:top-[calc(var(--u)*2.6)] lg:right-[calc(50%-var(--u)*46.5)]`}>Coffee</span>
          </span>
          <span className={`${big} block text-center lg:top-[calc(var(--u)*16)] lg:left-[calc(50%-var(--u)*45.5)]`}>Experience</span>
        </h1>


        <img
          src="/images/hero-cup.webp"
          alt="Iced coffee splashing out of a coffeelo cup"
          width={903}
          height={1200}
          fetchPriority="high"
          style={{ '--i': 1 } as React.CSSProperties}
          className="reveal relative z-10 mx-auto -mt-4 w-56 drop-shadow-2xl sm:w-72 lg:absolute lg:top-[calc(var(--u)*11.9)] lg:left-[calc(50%-var(--u)*13.2)] lg:m-0 lg:w-[calc(var(--u)*38)]"
        />

        <div className="mt-8 flex items-center justify-between gap-6 lg:contents">
          <div
            style={{ '--i': 2 } as React.CSSProperties}
            className="reveal max-w-52 lg:absolute lg:top-[calc(var(--u)*39)] lg:left-[calc(50%-var(--u)*45.4)] lg:w-[calc(var(--u)*22)] lg:max-w-none"
          >
            <p className="font-ui font-semibold lg:text-[max(17px,calc(var(--u)*2.3))]">Single-Origin</p>
            <p className="mt-2 text-sm text-espresso/75 lg:mt-[calc(var(--u)*1)] lg:text-[max(15px,calc(var(--u)*1.75))] lg:leading-normal">
              Notes of cacao, caramel, and stone fruit, slow roasted in small batches.
            </p>
          </div>
          <OrderBadge
            style={{ '--i': 3 } as React.CSSProperties}
            className="reveal z-20 lg:absolute lg:top-[calc(var(--u)*49)] lg:left-[calc(50%-var(--u)*19.5)] lg:text-[calc(var(--u)*2.3)]"
          />
        </div>
      </div>
    </section>
  )
}
