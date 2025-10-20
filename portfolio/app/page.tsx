import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
