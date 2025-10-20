import Hero from '../components/Hero'
import WhatsAppButton from '../components/WhatsAppButton'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const reviews = [
    {
      name: "Mary Njeri",
      title: "Client – Mombasa",
      message:
        "I hired a house help through AjiDaik Solutions, and she has been amazing. Professional, punctual, and well-trained. The agency handled everything smoothly!",
      image: "/images/65.jpg",
    },
    {
      name: "Peter Ochieng",
      title: "Client – Nairobi",
      message:
        "AjiDaik connected me with a reliable shamba boy who transformed my compound. I really appreciate their efficiency and follow-up support.",
      image: "/images/23.jpg",
    },
    {
      name: "Grace Atieno",
      title: "Client – Kisumu",
      message:
        "Finding a caregiver for my elderly mother was stressful until I found AjiDaik Solutions. The caregiver is kind, skilled, and trustworthy. Highly recommended!",
      image: "/images/42.jpg",
    },
    {
      name: "Rishad Amana",
      title: "Property Owner – Nyali",
      message:
        "I needed a caretaker for my apartments, and AjiDaik provided a dependable and responsible person within days. Their process is quick and transparent.",
      image: "/images/54.jpg",
    },
    {
      name: "Lucy Wambui",
      title: "Client – Nakuru",
      message:
        "The nanny I got through AjiDaik has been a blessing to our family. She is patient with the kids and always keeps the home neat and organized.",
      image: "/images/37.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
          Welcome to AjiDaik Solutions
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed mb-10">
          We connect families and businesses with trusted, trained, and professional domestic staff. 
          Our mission is to bring care, trust, and comfort to every home by recruiting and 
          placing reliable house helps, caregivers, gardeners, caretakers, and more.
        </p>

        {/* Quick Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">House Helps</h3>
            <p className="text-gray-600">
              Skilled and dependable house helps who keep your home organized, clean, and running smoothly.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">Caregivers</h3>
            <p className="text-gray-600">
              Compassionate caregivers who provide quality assistance to children, elderly family members, and patients.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl text-blue-900 mb-3">Gardeners & Caretakers</h3>
            <p className="text-gray-600">
              Reliable professionals who ensure your compound and property are well maintained, clean, and secure.
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

      {/* Meet Our Professionals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
            Meet Our Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-lg text-blue-900 mb-3">House Help</h4>
              <img
                src="/images/nanny.jpg"
                alt="House Help"
                className="rounded-xl shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-blue-900 mb-3">Caregiver</h4>
              <img
                src="/images/caregiver.jpg"
                alt="Caregiver"
                className="rounded-xl shadow-lg object-cover h-64 w-full"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-blue-900 mb-3">Gardener / Caretaker</h4>
              <img
                src="/images/shamba-boy.jpg"
                alt="Gardener"
                className="rounded-xl shadow-lg object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            What Our Clients Say
          </h2>
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col items-center text-center">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">“{review.message}”</p>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="mt-10">
            <Link
              to="/reviews"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Us?</h3>
          <p className="max-w-2xl mx-auto text-gray-700">
            <span className="font-semibold">Happy families and businesses</span> across Kenya trust AjiDaik Solutions 
            for reliable, professional, and caring domestic staff. We don’t just connect you with workers — 
            we provide peace of mind.
          </p>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
