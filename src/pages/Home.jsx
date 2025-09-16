import Hero from '../components/Hero'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Welcome to AjiDaik Solutions</h2>
        <p className="text-center max-w-3xl mx-auto">We connect families with trusted, trained, and professional house helps. Our mission is to provide care, trust, and comfort to every home.</p>
      </section>
      <WhatsAppButton />
    </div>
  )
}
