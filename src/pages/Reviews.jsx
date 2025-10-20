import React from "react";

const reviews = [
  {
    name: "Grace Mwangi",
    title: "HR Manager, Coastal Logistics",
    message:
      "AjiDaik Solutions delivered exceptional IT support and web solutions for our business. Their professionalism and reliability are unmatched.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Samuel Otieno",
    title: "Small Business Owner",
    message:
      "The team helped me establish a strong online presence for my startup. I highly recommend their services to anyone who values quality and timely delivery.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Beatrice Wanjiru",
    title: "Training Graduate",
    message:
      "I enrolled in their digital skills training and it completely transformed my career path. The trainers are knowledgeable and supportive.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kelvin Mutua",
    title: "IT Consultant",
    message:
      "Working with AjiDaik Solutions was a seamless experience. Their technical expertise and attention to detail really stand out.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Diana Cherono",
    title: "Marketing Director, Ocean View Resort",
    message:
      "They built a modern website for our resort that has significantly boosted our online bookings. Excellent communication and great results!",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
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
