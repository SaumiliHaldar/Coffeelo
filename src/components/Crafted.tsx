import Wave from './Wave'

export default function Crafted() {
  return (
    <section id="philosophy" className="text-orange">
      <Wave className="-scale-x-100" />
      <div className="bg-orange text-cream">
        <div className="wrap relative grid items-center gap-8 pb-10 md:grid-cols-2">
          {/* dots under the cup */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-[12%] hidden h-16 w-40 bg-[radial-gradient(var(--color-caramel)_2px,transparent_2px)] bg-size-[22px_22px] opacity-60 md:block"
          />
          {/* ponytail: reusing a cup shot, swap for the hand-holding-cup photo when you have it */}
          <img
            src="/images/vanilla-cream.webp"
            alt=""
            loading="lazy"
            width={1102}
            height={1427}
            className="relative z-10 mx-auto -mt-16 w-52 -rotate-6 drop-shadow-2xl md:mx-0 md:-mt-36 md:-ml-[clamp(1rem,4vw,3rem)] md:w-[min(34vw,26rem)]"
          />
          <div>
            <h2 className="font-display text-4xl md:text-5xl">
              Crafted Beyond <br /> the Ordinary
            </h2>
            <p className="mt-6 max-w-sm text-sm text-cream/85 md:ml-auto">
              Every bean is thoughtfully sourced, expertly roasted, and meticulously brewed to celebrate the art
              of exceptional coffee. Designed for those who appreciate quiet luxury in every sip.
            </p>
          </div>
        </div>
      </div>
      <Wave className="rotate-180" />
    </section>
  )
}
