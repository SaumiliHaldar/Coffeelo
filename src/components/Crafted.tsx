export default function Crafted() {
  return (
    <section id="philosophy" className="text-orange">
      {/* top + bottom edges traced from the reference (y in % of screen width), so the shape scales exactly */}
      <svg viewBox="0 0 100 8.5" preserveAspectRatio="none" aria-hidden="true" className="-my-px block h-[5vw] w-full">
        <path fill="currentColor" d="M0 8.5V6C10 7.2 20 8.6 30 7.8 40 6.5 45 0 55 0 66 0 78 8.4 90 8 95 7.8 98 7.3 100 7V8.5Z" />
      </svg>
      <div className="bg-orange text-cream">
        <div className="wrap relative grid items-center gap-8 pb-10 md:grid-cols-2">
          {/* dots under the cup */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-[12%] hidden h-16 w-40 bg-[radial-gradient(var(--color-caramel)_2px,transparent_2px)] bg-size-[22px_22px] opacity-60 md:block"
          />
          <img
            src="/images/crafted-cup.webp"
            alt="Hand holding an iced coffeelo latte"
            loading="lazy"
            width={798}
            height={1200}
            className="reveal relative z-10 mx-auto -mt-16 w-56 rotate-6 drop-shadow-2xl md:mx-0 md:-mt-36 md:-ml-[max(1rem,4.5vw)] md:w-[min(32vw,30rem)]"
          />
          <div style={{ '--i': 1 } as React.CSSProperties} className="reveal">
            <h2 className="type-heading font-display leading-[1.25]">
              Crafted Beyond <br /> the Ordinary
            </h2>
            <p className="type-body mt-6 max-w-sm text-cream/85 md:ml-auto lg:max-w-[26vw]">
              Every bean is thoughtfully sourced, expertly roasted, and meticulously brewed to celebrate the art
              of exceptional coffee. Designed for those who appreciate quiet luxury in every sip.
            </p>
          </div>
        </div>
      </div>
      <svg viewBox="0 0 100 11.5" preserveAspectRatio="none" aria-hidden="true" className="-my-px block h-[6.5vw] w-full">
        <path fill="currentColor" d="M0 0H100V7.3C96 7.6 93 7.9 90 7.8 80 7.4 66 .6 55 0 45-.4 33 11.5 25 11.5 15 11.5 6 7.5 0 5.6Z" />
      </svg>
    </section>
  )
}
