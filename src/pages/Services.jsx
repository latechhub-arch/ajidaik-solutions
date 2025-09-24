import ServiceCard from '../components/ServiceCard'
import WhatsAppButton from '../components/WhatsAppButton'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Services(){
  const services = [
    {
      title: 'Nannies and House Helps',
      description: 'Experienced childcare professionals who provide attentive care, educational support, and a safe environment for your little ones.',
      image: '/images/nanny.jpg'
    },
    {
      title: 'Chefs',
      description: 'Professional chefs skilled in preparing diverse cuisines, healthy meals, and catering for home dining or small private events.',
      image: '/images/cook.jpg'
    },
    {
      title: 'Cleaners',
      description: 'Reliable home and office cleaning staff trained in thorough housekeeping, laundry, and maintaining hygienic living spaces.',
      image: '/images/cleaner.jpg'
    },
    {
      title: 'Caretakers',
      description: 'Trusted caretakers to manage and maintain your home or property, ensuring safety, organization, and smooth day-to-day running.',
      image: '/images/caretaker.jpg'
    },
    {
      title: 'Caregivers',
      description: 'Compassionate caregivers who provide support for the elderly, sick, or people with special needs. They are trained to offer assistance with daily activities, companionship, and basic medical care.',
      image: '/images/caregiver.jpg'
    },
    {
      title: 'Shamba Boys',
      description: 'Skilled shamba boys for gardening, landscaping, farm work, and general outdoor maintenance. They handle planting, weeding, harvesting, and upkeep of compound areas, keeping your land productive and beautiful.',
      image: '/images/shamba-boy.jpg'
    }
  ]

  const [form, setForm] = useState({name:'', phone:'', email:'', type:'Nanny', date:'', notes:''})
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try{
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

        {/* Request Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-semibold mb-4">Request Service</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="border p-3 rounded w-full"/>
              <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone number" className="border p-3 rounded w-full"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" className="border p-3 rounded w-full"/>
              <select name="type" value={form.type} onChange={handleChange} className="border p-3 rounded w-full">
                <option>Nannies/Househelps</option>
                <option>Chefs</option>
                <option>Cleaners</option>
                <option>Caretakers</option>
                <option>Shamba Boys</option>
                <option>Caregiver</option>
                <option>House Helps</option>
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
