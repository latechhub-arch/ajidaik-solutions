import { useState } from 'react'
import emailjs from '@emailjs/browser'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', subject:'', message:''})
  const [status, setStatus] = useState('')

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try{
      const templateParams = {
        to_email: 'info@ajidaiksolutions.co.ke',
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      }
      await emailjs.send('service_lbz9q5o', 'template_15eyhrl', templateParams, 'KvhzkVqC-gNPANOJS')
      setStatus('Message sent. Thank you!')
      setForm({name:'', email:'', subject:'', message:''})
    }catch(err){
      console.error(err)
      setStatus('Failed to send. Please check EmailJS configuration.')
    }
  }

  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Contact Us</h2>
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="border p-3 rounded w-full"/>
          <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Your email" className="border p-3 rounded w-full"/>
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="border p-3 rounded w-full"/>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Message" className="border p-3 rounded w-full"/>
          <div className="text-right">
            <button type="submit" className="px-6 py-3 bg-blue-900 text-white rounded">Send Message</button>
          </div>
          {status && <p className="mt-3 text-sm">{status}</p>}
        </form>
        <div className="mt-6 text-sm text-gray-700">
          <p>📍 Bamburi, Mombasa</p>
          <p>📞 +254117613599</p>
          <p>📧 info@ajidaiksolutions.co.ke</p>
          <p>🕒 Monday – Sunday (9:00 AM – 7:00 PM)</p>
        </div>
      </div>
      <WhatsAppButton />
    </section>
  )
}
