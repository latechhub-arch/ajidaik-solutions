export default function About(){
  const professionals = [
    {
      title: 'Nannies/Househelps',
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
      title: 'Caregiver',
      description: 'Compassionate caregivers who provide support for the elderly, sick, or people with special needs. They are trained to offer assistance with daily activities, companionship, and basic medical care.',
      image: '/images/caregiver.jpg'
    },
    {
      title: 'Shamba Boys',
      description: 'Skilled shamba boys for gardening, landscaping, farm work, and general outdoor maintenance. They handle planting, weeding, harvesting, and upkeep of compound areas, keeping your land productive and beautiful.',
      image: '/images/shamba-boy.jpg'
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Meet Our Professionals</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
          At AjiDaik Solutions, we take pride in connecting you with trustworthy, well-trained, and dedicated professionals
          who make your home and lifestyle easier. Each category of staff is carefully selected and vetted to ensure the
          highest quality of service.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {professionals.map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
              <h3 className="text-xl font-semibold text-blue-900">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
