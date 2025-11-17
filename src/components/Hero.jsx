export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Pappa Ji Ka Dosa
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Authentic Indian and Bihari-style delicacies made fresh. From crispy masala dosas to hearty litti chokha, taste the comfort of home with every bite.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-lg font-semibold">View Menu</a>
            <a href="#reserve" className="bg-amber-100 hover:bg-amber-200 text-amber-800 px-5 py-3 rounded-lg font-semibold">Book a Table</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-amber-700">
            <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
            <p className="text-sm">Loved by 2,000+ foodies</p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-amber-200 via-amber-100 to-white shadow-inner" />
          <img alt="Dosa" src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEb3NhfGVufDB8MHx8fDE3NjMzOTMyMDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="absolute inset-0 m-auto w-[85%] rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>
  )
}
