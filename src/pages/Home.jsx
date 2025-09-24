import Hero from '../components/Hero'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
          Welcome to AjiDaik Solutions
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10">
          We connect families with trusted, trained, and professional domestic staff. 
          Our mission is to bring care, trust, and comfort to every home by recruiting and 
          placing reliable house helps, caregivers, gardeners, chefs, and more.
        </p>

        {/* Quick Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">House Helps</h3>
            <p className="text-gray-600">
              Trained and dependable housekeepers to keep your home organized and clean.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">Caregivers</h3>
            <p className="text-gray-600">
              Compassionate and skilled caregivers to support children, elderly, and patients.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">Gardeners</h3>
            <p className="text-gray-600">
              Dedicated gardeners to maintain beautiful, green, and healthy outdoor spaces.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Meet Our Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="/images/nanny.jpg"
              alt="House Help"
              className="rounded-xl shadow-lg object-cover h-64 w-full"
            />
            <img
              src="/images/caregiver.jpg"
              alt="Caregiver"
              className="rounded-xl shadow-lg object-cover h-64 w-full"
            />
            <img
              src="/images/shamba-boy.jpg"
              alt="Gardener"
              className="rounded-xl shadow-lg object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* Trust/Impact */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us?</h3>
          <p className="max-w-2xl mx-auto text-gray-700">
            <span className="font-semibold">Happy families</span> in Kenya trust AjiDaik Solutions 
            for reliable, professional, and caring domestic staff. We don’t just connect you with workers —
            we provide peace of mind.
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
