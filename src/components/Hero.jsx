export default function Hero(){
  return (
    <section className="relative bg-cover bg-center h-[60vh]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115')"}}>
      <div className="bg-black bg-opacity-40 h-full flex items-center">
        <div className="container text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Where Care Meets Comfort</h1>
          <p className="mt-4 max-w-2xl">Professional house help placement and training — trusted, trained, and ready to support your household.</p>
          <div className="mt-6">
            <a href="/services" className="inline-block px-6 py-3 bg-green-500 rounded-md font-semibold">Request Help</a>
          </div>
        </div>
      </div>
    </section>
  )
}
