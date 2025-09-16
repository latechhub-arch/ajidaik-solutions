export default function ServiceCard({title, description, image}){
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain"/>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
