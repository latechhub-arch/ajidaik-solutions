export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-900">About Us</h2>

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-900">AjiDaik Solutions</span>, we are 
            dedicated to connecting families and households with highly skilled, trustworthy, 
            and dependable domestic professionals. Our mission is to make home management easier 
            by recruiting, training, and placing qualified staff who meet the highest standards 
            of service.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-8">
            Our Leadership
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            {/* CEO */}
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/ceo.jpg" alt="CEO" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Chief Executive Officer</h4>
                <p className="text-gray-600 text-sm">Visionary leader driving our mission forward.</p>
              </div>
            </div>

            {/* HOD Training */}
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/hod-training.jpg" alt="HOD Training" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Head of Training</h4>
                <p className="text-gray-600 text-sm">Ensuring our staff are well-prepared and skilled.</p>
              </div>
            </div>

            {/* Board of Directors */}
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <img src="/images/board.jpg" alt="Board of Directors" className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">Board of Directors</h4>
                <p className="text-gray-600 text-sm">Providing strategic guidance and oversight.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-white rounded-xl shadow p-10 mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-6">Our Vision & Mission</h3>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2">Vision</h4>
              <p className="text-gray-600">
                To be the leading and most trusted household staffing agency in Kenya and beyond, 
                redefining home management through professionalism, reliability, and care.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Mission</h4>
              <p className="text-gray-600">
                To provide households with highly skilled and dependable staff while creating 
                meaningful employment opportunities and fostering trust between families and 
                domestic professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-12">Our Journey</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-900"></div>

            {/* Timeline items */}
            <div className="mb-10 flex justify-start">
              <div className="w-1/2 pr-8 text-right">
                <h4 className="font-bold text-blue-900">2020</h4>
                <p className="text-gray-600">AjiDaik Solutions was founded with a vision of trust and professionalism.</p>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow"></span>
              </div>
            </div>

            <div className="mb-10 flex justify-end">
              <div className="w-1/2 flex items-center justify-end">
                <span className="w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow"></span>
              </div>
              <div className="w-1/2 pl-8">
                <h4 className="font-bold text-blue-900">2021</h4>
                <p className="text-gray-600">Expanded services to include training for nannies, chefs, and caretakers.</p>
              </div>
            </div>

            <div className="mb-10 flex justify-start">
              <div className="w-1/2 pr-8 text-right">
                <h4 className="font-bold text-blue-900">2023</h4>
                <p className="text-gray-600">Grew our professional team and strengthened client relationships across Kenya.</p>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow"></span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="w-1/2 flex items-center justify-end">
                <span className="w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow"></span>
              </div>
              <div className="w-1/2 pl-8">
                <h4 className="font-bold text-blue-900">2025</h4>
                <p className="text-gray-600">Continuing to innovate and expand with a goal of becoming a regional leader.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links to Services */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Our Services</h3>
          <p className="max-w-2xl mx-auto text-gray-700 mb-6">
            Discover the wide range of household and domestic services we offer.
          </p>
          <a
            href="/services"
            className="px-8 py-3 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-800 transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
