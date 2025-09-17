export default function About(){
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">About Us</h2>
        
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-900">AjiDaik Solutions</span>, we are dedicated 
            to connecting families and households with highly skilled, trustworthy, and dependable 
            domestic professionals. Our mission is to make home management easier by recruiting, 
            training, and placing qualified staff who meet the highest standards of service.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img src="/images/banner1.jpg" alt="Our Team" className="rounded-xl shadow-lg"/>
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              AjiDaik Solutions was founded with the vision of creating a reliable and transparent 
              agency that households in Kenya can trust. With years of experience in human resource 
              placement and household management, we understand the challenges families face when 
              searching for the right help. That’s why we handle the heavy lifting — from background 
              checks to training — ensuring peace of mind for our clients.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-xl shadow p-8 mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Trust</h4>
              <p className="text-gray-600">We carefully vet every worker to guarantee safety and reliability in your home.</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Professionalism</h4>
              <p className="text-gray-600">From recruitment to placement, we uphold the highest standards of service.</p>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">Support</h4>
              <p className="text-gray-600">Our relationship doesn’t end after placement — we provide ongoing support to families and workers.</p>
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-8">Meet Our Professionals</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/nanny.jpg" alt="Nanny" className="w-full h-56 object-cover"/>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">Nannies</h4>
                <p className="text-gray-600 text-sm">Caring and trained childcare providers.</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/cook.jpg" alt="Cook" className="w-full h-56 object-cover"/>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">Cooks</h4>
                <p className="text-gray-600 text-sm">Skilled in preparing healthy meals for families.</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/cleaner.jpg" alt="Cleaner" className="w-full h-56 object-cover"/>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">Cleaners</h4>
                <p className="text-gray-600 text-sm">Reliable staff for spotless homes and offices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Why Choose AjiDaik?</h3>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            Whether you need a nanny, cook, cleaner, or caregiver, AjiDaik Solutions ensures 
            you get the right match for your household. We pride ourselves on quality, 
            reliability, and building long-term trust with our clients.
          </p>
          <a 
            href="/contact" 
            className="px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}