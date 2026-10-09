import { useState } from "react"

const MAPS_URL =
  "https://www.google.com/maps/place/Florida+Executive+Inn/@-6.8247631,39.2728843,17z/data=!4m9!3m8!1s0x185c4baa3d8ce805:0x32df0c2e11846fc6!5m2!4m1!1i2!8m2!3d-6.8247631!4d39.2754592!16s%2Fg%2F11cnxyr54k"

const images = {
  hero: "https://images.unsplash.com/photo-1669123547602-b85454d7ee84?auto=format&fit=crop&w=1800&q=88",
  room: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=86",
  pool: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?auto=format&fit=crop&w=1200&q=86",
  coast: "https://images.unsplash.com/photo-1602590552438-cb9d622acf46?auto=format&fit=crop&w=1200&q=86",
}

type IconName =
  | "arrow"
  | "calendar"
  | "chevron"
  | "clock"
  | "heart"
  | "location"
  | "menu"
  | "moon"
  | "parking"
  | "people"
  | "restaurant"
  | "wifi"
  | "x"

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    calendar: <><path d="M7 2v3M17 2v3M3 9h18" /><rect x="3" y="4" width="18" height="17" rx="2" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    moon: <path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z" />,
    parking: <><circle cx="12" cy="12" r="9" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
    restaurant: <><path d="M6 2v8M3 2v5a3 3 0 0 0 6 0V2M6 10v12M17 2v20M17 2c-3 2-4 6-4 10h4" /></>,
    wifi: <><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="20" r=".5" fill="currentColor" /></>,
    x: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`group inline-flex items-center gap-3 ${light ? "text-cream" : "text-ink"}`} aria-label="Florida Executive Inn home">
      <span className={`grid size-11 place-items-center rounded-full border ${light ? "border-white/35" : "border-ink/20"}`}>
        <span className="font-display text-2xl italic">F</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.4rem] tracking-[0.04em]">Florida</span>
        <span className="mt-1 block text-[0.56rem] font-semibold uppercase tracking-[0.32em] opacity-70">Executive Inn</span>
      </span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/20 text-white">
        <div className="mx-auto flex h-24 max-w-[90rem] items-center justify-between px-6 lg:px-10">
          <Logo light />
          <nav className="hidden items-center gap-9 text-[0.72rem] font-semibold uppercase tracking-[0.18em] lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#stay">The stay</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#location">Location</a>
            <button className="btn-light" onClick={() => setBookingOpen(true)}>Book your stay</button>
          </nav>
          <button className="grid size-11 place-items-center rounded-full border border-white/30 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-ink p-6 text-cream lg:hidden">
          <div className="flex items-center justify-between">
            <Logo light />
            <button className="grid size-11 place-items-center rounded-full border border-white/20" onClick={closeMenu} aria-label="Close menu"><Icon name="x" /></button>
          </div>
          <nav className="mt-24 flex flex-col gap-7 font-display text-5xl" aria-label="Mobile navigation">
            <a href="#stay" onClick={closeMenu}>The stay</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#location" onClick={closeMenu}>Location</a>
          </nav>
          <button className="btn-accent mt-14 w-full" onClick={() => { closeMenu(); setBookingOpen(true) }}>Book your stay <Icon name="arrow" /></button>
        </div>
      )}

      <main>
        <section className="relative min-h-[48rem] h-[100svh] bg-ink">
          <img src={images.hero} alt="A serene tropical hotel among lush greenery" className="absolute inset-0 size-full object-cover" />
          <div className="hero-shade absolute inset-0" />
          <div className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-end px-6 pb-9 pt-32 lg:px-10 lg:pb-12">
            <div className="mb-14 max-w-4xl text-white lg:mb-16">
              <div className="eyebrow mb-6 text-white/80"><span /> Your place in Dar es Salaam</div>
              <h1 className="max-w-4xl font-display text-[clamp(4rem,8.6vw,8.5rem)] font-medium leading-[0.78] tracking-[-0.045em]">
                Stay close.<br /><em className="font-normal">Feel at ease.</em>
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white/75">A warm, well-placed city stay in Gerezani—made for easy arrivals, unhurried nights, and everything Dar has waiting.</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-white/25 pt-6 text-white md:flex-row md:items-end md:justify-between">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                <Icon name="location" className="size-5 text-sunset" /> Congo Street, Gerezani
              </div>
              <button className="group flex items-center gap-4 text-left" onClick={() => setBookingOpen(true)}>
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/55">Planning a visit?</span>
                  <span className="mt-1 block font-display text-2xl">Check availability</span>
                </span>
                <span className="grid size-12 place-items-center rounded-full bg-sunset text-ink transition-transform group-hover:translate-x-1"><Icon name="arrow" /></span>
              </button>
            </div>
          </div>
          <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 text-white/55 xl:flex">
            <span className="vertical-label">Scroll to discover</span><span className="h-16 w-px bg-white/30" />
          </div>
        </section>

        <section id="stay" className="px-6 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="eyebrow mb-7"><span /> Made for your rhythm</div>
                <h2 className="font-display text-[clamp(3.4rem,6vw,6rem)] leading-[0.88] tracking-[-0.035em]">Your calm in<br /><em>the city.</em></h2>
              </div>
              <div className="lg:pt-16">
                <p className="max-w-xl font-display text-3xl leading-[1.25] text-ink/80">Whether Dar is your destination or one stop in a bigger journey, settle into a stay that keeps things simple, personal, and close at hand.</p>
                <div className="mt-12 grid gap-5 border-t border-ink/15 pt-8 sm:grid-cols-3">
                  {[["clock", "Easy arrivals", "A central city base"], ["moon", "Restful nights", "Space to slow down"], ["heart", "Warm welcome", "Thoughtful hospitality"]].map(([icon, title, text]) => (
                    <div key={title}>
                      <Icon name={icon as IconName} className="mb-5 size-6 text-clay" />
                      <h3 className="text-sm font-bold">{title}</h3>
                      <p className="mt-2 text-sm text-ink/55">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
              <article className="image-card group min-h-[35rem]">
                <img src={images.room} alt="A restful hotel bedroom with crisp white linens" />
                <div className="image-card-shade" />
                <div className="image-card-copy">
                  <span className="eyebrow text-white/70"><span /> Rest well</span>
                  <h3 className="font-display text-5xl text-white">Rooms to unwind in</h3>
                </div>
              </article>
              <article className="relative flex min-h-[35rem] flex-col justify-between overflow-hidden bg-palm p-8 text-cream sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-display text-8xl leading-none text-cream/10">FEI</span>
                  <Icon name="moon" className="size-8 text-sunset" />
                </div>
                <div>
                  <blockquote className="font-display text-[2.65rem] leading-[1.04]">“A comfortable place to land, just when you need it.”</blockquote>
                  <button className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em]" onClick={() => setBookingOpen(true)}>Plan your stay <Icon name="arrow" /></button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="bg-sand px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="eyebrow mb-6"><span /> At your pace</div>
                <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-[0.9] tracking-[-0.035em]">More than<br /><em>a room.</em></h2>
              </div>
              <p className="max-w-sm text-base leading-7 text-ink/60">Step into the energy of Dar, then return to a place that feels easy. Your stay starts at the heart of the city.</p>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              {[["wifi", "Stay connected", "Keep plans moving and people close."], ["restaurant", "Local flavour", "Discover Dar's food and culture nearby."], ["parking", "City convenience", "A practical base for getting around."], ["people", "Here for you", "A welcoming team and a personal stay."]].map(([icon, title, text], index) => (
                <article key={title} className="group bg-sand p-7 transition-colors hover:bg-cream lg:min-h-64 lg:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-ink/35">0{index + 1}</span>
                    <Icon name={icon as IconName} className="size-7 text-clay" />
                  </div>
                  <div className="mt-20">
                    <h3 className="font-display text-3xl">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/55">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid min-h-[44rem] lg:grid-cols-2">
          <div className="relative min-h-[30rem] overflow-hidden">
            <img src={images.coast} alt="Dar es Salaam coastline glowing at sunset" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
            <span className="absolute bottom-8 left-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Dar es Salaam • Tanzania</span>
          </div>
          <div id="location" className="flex flex-col justify-center bg-clay px-8 py-20 text-cream sm:px-14 lg:px-[10%]">
            <div className="eyebrow mb-7 text-cream/70"><span className="!bg-sunset" /> In the middle of it all</div>
            <h2 className="font-display text-[clamp(3.5rem,6vw,6.4rem)] leading-[0.86] tracking-[-0.04em]">Dar is at<br /><em>your door.</em></h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-cream/70">Find us on Congo Street in Gerezani, Ilala—well positioned for the city centre and the next chapter of your Dar es Salaam story.</p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-4 border-b border-cream/40 pb-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-sunset hover:text-sunset">
              Open in Google Maps <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <div className="eyebrow mb-7 justify-center"><span /> Come stay awhile <span /></div>
            <h2 className="mx-auto max-w-4xl font-display text-[clamp(3.7rem,7vw,7rem)] leading-[0.9] tracking-[-0.04em]">Your Dar story<br /><em>starts here.</em></h2>
            <button className="btn-dark mt-10" onClick={() => setBookingOpen(true)}>Check availability <Icon name="arrow" /></button>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 pb-8 pt-16 text-cream lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-3">
            <div><Logo light /><p className="mt-6 max-w-xs text-sm leading-6 text-cream/50">A welcoming city stay in the heart of Dar es Salaam.</p></div>
            <div>
              <p className="footer-label">Explore</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-cream/70"><a href="#stay">The stay</a><a href="#experience">Experience</a><a href="#location">Location</a></div>
            </div>
            <div>
              <p className="footer-label">Find us</p>
              <p className="mt-5 text-sm leading-6 text-cream/70">Congo Street, Gerezani<br />Ilala, Dar es Salaam<br />Tanzania</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.65rem] uppercase tracking-[0.15em] text-cream/35 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Florida Executive Inn</p><a href={MAPS_URL} target="_blank" rel="noreferrer">View Google listing</a>
          </div>
        </div>
      </footer>

      {bookingOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-end bg-ink/60 backdrop-blur-sm sm:place-items-center" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setBookingOpen(false) }}>
          <div className="w-full max-w-2xl bg-cream p-7 shadow-2xl sm:m-6 sm:p-10">
            <div className="flex items-start justify-between">
              <div><p className="eyebrow mb-3"><span /> Plan your visit</p><h2 id="booking-title" className="font-display text-5xl">Check availability</h2></div>
              <button className="grid size-11 place-items-center rounded-full border border-ink/15" onClick={() => setBookingOpen(false)} aria-label="Close booking form"><Icon name="x" /></button>
            </div>
            {submitted ? (
              <div className="py-16 text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-palm text-cream"><Icon name="heart" /></span>
                <h3 className="mt-6 font-display text-4xl">Your dates are ready</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/60">Continue to the hotel’s Google listing to contact the property and confirm your stay.</p>
                <a className="btn-dark mt-8" href={MAPS_URL} target="_blank" rel="noreferrer">Contact on Google <Icon name="arrow" /></a>
              </div>
            ) : (
              <form className="mt-9 grid gap-5 sm:grid-cols-2" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                <label className="form-field"><span>Check in</span><input type="date" required /></label>
                <label className="form-field"><span>Check out</span><input type="date" required /></label>
                <label className="form-field sm:col-span-2"><span>Guests</span><select defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4+ guests</option></select></label>
                <button type="submit" className="btn-dark mt-2 sm:col-span-2">Continue request <Icon name="arrow" /></button>
                <p className="text-center text-xs leading-5 text-ink/45 sm:col-span-2">Your booking is only confirmed after speaking with the property.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
