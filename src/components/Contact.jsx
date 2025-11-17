import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (res.ok) setStatus('✅ Message sent! We will get back soon.')
      else setStatus(`❌ ${data.detail || 'Failed'}`)
    } catch (e) {
      setStatus(`❌ ${e.message}`)
    }
  }

  return (
    <section id="contact" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">Questions, feedback, or catering inquiries</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input className="border rounded-lg p-3" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <input className="border rounded-lg p-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="border rounded-lg p-3 md:col-span-2" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
          <textarea className="border rounded-lg p-3 md:col-span-2" rows="4" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold w-full md:w-auto">Send Message</button>
          {status && <p className="md:col-span-2 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  )
}
