import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🥞</span>
          <div>
            <p className="text-xl font-extrabold tracking-wide">Pappa Ji Ka Dosa</p>
            <p className="text-[11px] uppercase tracking-widest text-amber-700">Indian • Bihari Flavours</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#menu" className="hover:text-amber-700 transition-colors">Menu</a>
          <a href="#reserve" className="hover:text-amber-700 transition-colors">Reserve</a>
          <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
          <a href="/test" className="text-gray-500 hover:text-gray-700">Backend Test</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-white/60">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
