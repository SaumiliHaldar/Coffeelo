const links = [
  ['Philosophy', '#philosophy'],
  ['Collection', '#menu'],
  ['Guests', '#reviews'],
  ['Visit', '#footer'],
  ['Contact', '#footer'],
]

// Phones use a native popover as the slide-in drawer: open/close, Esc, outside click and focus are handled by the browser.
const closeDrawer = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.closest<HTMLElement>('[popover]')?.hidePopover()

export default function Navbar() {
  return (
    <header className="wrap flex items-center justify-between gap-4 py-5 lg:pt-[min(2.2vw,32px)] lg:pr-[5vw] lg:pb-[min(1vw,14px)] lg:pl-[4.2vw]">
      <a href="#" className="font-ui text-2xl font-semibold text-orange lg:text-[min(3.1vw,45px)]">
        coffeelo
      </a>

      {/* tablet + desktop */}
      <nav className="hidden items-center gap-6 font-ui text-sm sm:flex lg:gap-[min(2.6vw,37px)] lg:text-[clamp(13px,1.15vw,16.5px)]">
        <ul className="flex gap-6 lg:gap-[min(2.6vw,37px)]">
          {links.slice(0, -1).map(([label, href]) => (
            <li key={label}>
              <a href={href} className="hover:text-orange">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#footer" className="rounded-full bg-orange px-5 py-2 font-semibold lg:px-[min(2.2vw,32px)] lg:py-[min(0.9vw,13px)] text-cream hover:bg-espresso">
          Contact
        </a>
      </nav>

      {/* phone: menu button + drawer */}
      <button
        type="button"
        popoverTarget="mobile-nav"
        aria-label="Open menu"
        className="grid size-11 place-items-center text-espresso hover:text-orange sm:hidden"
      >
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>

      <nav
        id="mobile-nav"
        popover="auto"
        aria-label="Main"
        className="drawer fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full border-0 bg-cream px-[max(1rem,4.5vw)] py-5"
      >
        <div className="flex items-center justify-between">
          <span className="font-ui text-2xl font-semibold text-orange">coffeelo</span>
          <button
            type="button"
            popoverTarget="mobile-nav"
            popoverTargetAction="hide"
            aria-label="Close menu"
            className="grid size-11 place-items-center text-espresso hover:text-orange"
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="mt-8">
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                onClick={closeDrawer}
                className={
                  label === 'Contact'
                    ? 'mt-6 block rounded-full bg-orange px-5 py-3 text-center font-ui font-semibold text-cream'
                    : 'block border-b border-espresso/10 py-4 font-ui text-lg hover:text-orange'
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
