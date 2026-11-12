import Crafted from './components/Crafted'
import Footer, { CallToAction } from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

export default function App() {
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
