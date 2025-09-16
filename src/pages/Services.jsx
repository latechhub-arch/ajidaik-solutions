import ServiceCard from '../components/ServiceCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Services(){
  const services = [
    {title: 'Nanny', description: 'Experienced childcare professionals', image: '/placeholder1.txt'},
    {title: 'Cook', description: 'Trained cooks for home and small events', image: '/placeholder2.txt'},
    {title: 'Cleaner', description: 'Reliable home cleaning staff', image: '/placeholder3.txt'}
  ]

  const [form, setForm] = useState({name:'', phone:'', email:'', type:'Nanny', date:'', notes:''})
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try{
      // NOTE: Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with your EmailJS credentials
      const templateParams = {
        to_email: 'ajidaiksolutions@gmail.com',
        name: form.name,
        phone: form.phone,
        email: form.email,
        type: form.type,
        date: form.date,
        notes: form.notes
      }
      await emailjs.send('service_lbz9q5o', 'template_15eyhrl', templateParams, 'KvhzkVqC-gNPANOJS')
      setStatus('Request sent. We will contact you soon.')
      setForm({name:'', phone:'', email:'', type:'Nanny', date:'', notes:''})
    }catch(err){
      console.error(err)
      setStatus('Failed to send. Please check your EmailJS configuration.')
    }
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((s,i)=>(<ServiceCard key={i} {...s}/>))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-semibold mb-4">Request House Help</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="border p-3 rounded w-full"/>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone number" className="border p-3 rounded w-full"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" className="border p-3 rounded w-full"/>
              <select name="type" value={form.type} onChange={handleChange} className="border p-3 rounded w-full">
                <option>Nanny</option><option>Cook</option><option>Cleaner</option><option>Caregiver</option><option>House Help</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="date" value={form.date} onChange={handleChange} type="date" className="border p-3 rounded w-full"/>
              <input name="notes" value={form.notes} onChange={handleChange} placeholder="Additional notes" className="border p-3 rounded w-full"/>
            </div>
            <div className="text-right">
              <button type="submit" className="px-6 py-3 bg-blue-900 text-white rounded">Submit Request</button>
            </div>
            {status && <p className="mt-3 text-sm">{status}</p>}
          </form>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  )
}
