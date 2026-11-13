import { useEffect } from 'react'
import Crafted from './components/Crafted'
import Footer, { CallToAction } from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

export default function App() {
  // scroll reveal: .in on while ≥15% visible (see .reveal in index.css)
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)),
      { threshold: 0.15 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Crafted />
        <Menu />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
