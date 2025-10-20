import React from "react";

const reviews = [
  {
    name: "Mary Njeri",
    title: "Client – Mombasa",
    message:
      "I hired a house help through AjiDaik Solutions, and she has been amazing. Professional, punctual, and well-trained. The agency handled everything smoothly!",
    image: '/images/65.jpg',
  },
  {
    name: "Peter Ochieng",
    title: "Client – Nairobi",
    message:
      "AjiDaik connected me with a reliable shamba boy who transformed my compound. I really appreciate their efficiency and follow-up support.",
    image: '/images/23.jpg',
  },
  {
    name: "Grace Atieno",
    title: "Client – Kisumu",
    message:
      "Finding a caregiver for my elderly mother was stressful until I found AjiDaik Solutions. The caregiver is kind, skilled, and trustworthy. Highly recommended!",
    image: '/images/42.jpg',
  },
  {
    name: "Rishad Amana",
    title: "Property Owner – Nyali",
    message:
      "I needed a caretaker for my apartments, and AjiDaik provided a dependable and responsible person within days. Their process is quick and transparent.",
    image: '/images/54.jpg',
  },
  {
    name: "Lucy Wambui",
    title: "Client – Nakuru",
    message:
      "The nanny I got through AjiDaik has been a blessing to our family. She is patient with the kids and always keeps the home neat and organized.",
    image: '/images/37.jpg',
  },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4">“{review.message}”</p>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
