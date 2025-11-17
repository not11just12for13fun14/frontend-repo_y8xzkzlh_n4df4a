import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function MenuSection() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/menu`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchMenu()
  }, [])

  const fallbackItems = [
    { name: 'Masala Dosa', description: 'Classic crispy dosa stuffed with spiced potato', price: 129, category: 'Dosa', is_veg: true },
    { name: 'Paneer Dosa', description: 'Cottage cheese filling with spices', price: 159, category: 'Dosa', is_veg: true },
    { name: 'Litti Chokha', description: 'Bihari special with roasted gram stuffing', price: 149, category: 'Bihari', is_veg: true },
    { name: 'Chicken Korma', description: 'Rich and creamy North-Indian curry', price: 219, category: 'Indian', is_veg: false },
  ]

  const list = items.length ? items : fallbackItems

  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Our Menu</h2>
        <p className="text-gray-600 mt-2">Indian and Bihari favourites</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loading && (
            <p className="text-gray-500">Loading menu...</p>
          )}
          {!loading && list.map((it, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{it.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{it.description}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${it.is_veg ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{it.is_veg ? 'VEG' : 'NON-VEG'}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-amber-700">₹ {Number(it.price).toFixed(0)}</span>
                <span className="text-xs text-gray-500">{it.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
