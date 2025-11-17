import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: 2, special_request: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/reservations`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (res.ok) setStatus('✅ Reservation confirmed!')
      else setStatus(`❌ ${data.detail || 'Failed'}`)
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="reserve" className="bg-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Book a Table</h2>
        <p className="text-gray-600 mt-2">Reserve your spot for an authentic feast</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input className="border rounded-lg p-3" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="border rounded-lg p-3" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required />
          <input className="border rounded-lg p-3 md:col-span-2" placeholder="Email (optional)" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input type="date" className="border rounded-lg p-3" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
          <div className="grid grid-cols-2 gap-3">
            <input type="time" className="border rounded-lg p-3" value={form.time} onChange={e=>setForm({...form, time:e.target.value})} required />
            <input type="number" min="1" max="20" className="border rounded-lg p-3" value={form.guests} onChange={e=>setForm({...form, guests:Number(e.target.value)})} required />
          </div>
          <textarea className="border rounded-lg p-3 md:col-span-2" rows="3" placeholder="Any special request" value={form.special_request} onChange={e=>setForm({...form, special_request:e.target.value})} />
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-auto">Reserve</button>
          {status && <p className="md:col-span-2 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
