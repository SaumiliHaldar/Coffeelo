import OrderBadge from './OrderBadge'

// flying beans: [left, top, width] in cqw, rotation°, blurred? (canvas positions; two big blurred ones for depth)
const beans: [number, number, number, number, boolean?][] = [
  [41, 8, 3.4, -30], [62, 7, 3, 40], [31, 26, 2.8, 70], [70, 22, 3, -20], [78, 29, 2.6, 55],
  [92, 23, 3.4, -50], [58, 43, 2.8, 15], [84, 48, 2.4, -75], [68, 37, 2.2, 25],
  [7, 20, 4.6, -35, true], [54, 12, 4, 20, true],
]

const big = 'text-[clamp(3rem,11vw,9rem)] lg:absolute lg:text-[calc(var(--u)*14.5)]'

// Desktop (lg+): the reference composition, canvas coordinates. --u = 1% of width but capped at the 1440px size:
// --u is also capped so the hero (72u tall) fits one screen; everything is placed from the centre in --u.
// The swoosh tails run off both screen edges, so the hero still reads full width.
// Below lg: simple stacked flow.
// cursor position in the hero as -0.5…0.5 → --mx/--my; beans drift toward it (depth varies per bean)
const followCursor = (e: React.PointerEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', String((e.clientX - r.left) / r.width - 0.5))
  e.currentTarget.style.setProperty('--my', String((e.clientY - r.top) / r.height - 0.5))
}

export default function Hero() {
  return (
    <section>
      <div
        onPointerMove={followCursor}
        onPointerLeave={(e) => {
          e.currentTarget.style.removeProperty('--mx')
          e.currentTarget.style.removeProperty('--my')
        }}
        className="@container wrap relative pt-4 pb-10 lg:h-[calc(var(--u)*72)] lg:p-0 lg:[--u:min(1cqw,14.4px,calc((100svh-6rem)/72))]">
        {/* dot grid, top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-[calc(50%+var(--u)*18)] hidden h-[calc(var(--u)*23)] w-[calc(var(--u)*30)] bg-[radial-gradient(var(--color-caramel)_1.3px,transparent_1.7px)] bg-size-[1.2cqw_1.2cqw] opacity-60 lg:block"
        />

        {/* caramel swoosh (canvas path; viewBox starts at y=7 because the navbar sits above) */}
        <svg
          viewBox="0 7 100 72"
          preserveAspectRatio="none"
          aria-hidden="true"
          overflow="visible"
          className="pointer-events-none absolute inset-y-0 left-[calc(50%-var(--u)*50)] hidden h-full w-[calc(var(--u)*100)] fill-none stroke-caramel lg:block"
        >
          <path d="M-150 22C-80 34-30 42 1 50C12 58 22 62 31 53 37 44 31 37 27 45 23 58 35 67 50 59 64 51 82 45 100 36C118 27 170 12 250 0" strokeWidth=".7" strokeLinecap="round" className="stroke-[#cf9466]" />
        </svg>

        <h1 className="reveal relative font-display leading-[0.95] text-roast lg:absolute lg:inset-0 lg:leading-none">
          <span className="flex flex-wrap items-end justify-center gap-x-[0.25em] lg:contents">
            <span className="mb-[0.35em] text-[clamp(1.25rem,3.5vw,2.75rem)] lg:absolute lg:top-[calc(var(--u)*8.5)] lg:left-[calc(50%-var(--u)*39)] lg:mb-0 lg:text-[calc(var(--u)*5.4)]">
              An Elevated
            </span>
            <span className={`${big} lg:top-[calc(var(--u)*3.5)] lg:right-[calc(50%-var(--u)*44)]`}>Coffee</span>
          </span>
          <span className={`${big} block text-center lg:top-[calc(var(--u)*15.5)] lg:left-[calc(50%-var(--u)*42)]`}>Experience</span>
        </h1>

        {beans.map(([x, y, w, r, blur], i) => (
          <svg
            key={i}
            viewBox="0 0 40 60"
            aria-hidden="true"
            className={`absolute hidden aspect-[2/3] transition-[translate] duration-500 ease-out [translate:calc(var(--mx,0)*var(--d))_calc(var(--my,0)*var(--d))] motion-reduce:[translate:none] lg:block ${blur ? 'blur-[2px]' : ''}`}
            style={{ '--d': `${16 + (i % 4) * 8}px`, left: `calc(50% + var(--u) * ${x - 50})`, top: `calc(var(--u) * ${y})`, width: `calc(var(--u) * ${w})`, rotate: `${r}deg` } as React.CSSProperties}
          >
            <ellipse cx="20" cy="30" rx="17" ry="26" fill="#3b1b0f" />
            <ellipse cx="14" cy="18" rx="5" ry="9" fill="#8a5636" opacity=".55" />
            <path d="M21 6C8 20 32 40 19 55" stroke="#8d5b3a" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        ))}

        <img
          src="/images/caramel-macchiato.webp"
          alt="Iced caramel coffee splashing out of a coffeelo cup"
          width={800}
          height={1200}
          fetchPriority="high"
          style={{ '--i': 1 } as React.CSSProperties}
          className="reveal relative z-10 mx-auto -mt-4 w-56 drop-shadow-2xl sm:w-72 lg:absolute lg:top-[calc(var(--u)*10)] lg:left-[calc(50%-var(--u)*13)] lg:m-0 lg:w-[calc(var(--u)*30)]"
        />

        <div className="mt-8 flex items-center justify-between gap-6 lg:contents">
          <div
            style={{ '--i': 2 } as React.CSSProperties}
            className="reveal max-w-52 lg:absolute lg:top-[calc(var(--u)*39)] lg:left-[calc(50%-var(--u)*45.4)] lg:w-[calc(var(--u)*22)] lg:max-w-none"
          >
            <p className="font-ui font-semibold lg:text-[max(15px,calc(var(--u)*1.9))]">Single-Origin</p>
            <p className="mt-2 text-sm text-espresso/75 lg:mt-[calc(var(--u)*1)] lg:text-[max(13px,calc(var(--u)*1.4))] lg:leading-normal">
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
