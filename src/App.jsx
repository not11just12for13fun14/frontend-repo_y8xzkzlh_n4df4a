import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Reservation from './components/Reservation'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <MenuSection />
      <Reservation />
      <Contact />
      <footer className="bg-amber-900 text-amber-50 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-semibold">Pappa Ji Ka Dosa</p>
          <p className="text-sm opacity-90">Authentic Indian & Bihari flavours • Open daily 10 AM - 11 PM</p>
          <a href="/test" className="text-amber-200 hover:text-white text-sm">Backend Status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
