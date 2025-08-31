import Nav from './component/Nav'

function App() {
  const projects = [
  {
    id: 1,
    title: "Project Alpha",
    tagline: "Revolutionizing player performance analysis",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Sustainability Study",
    tagline: "Reducing environmental impact in sports",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Barrier Breaker",
    tagline: "Innovative access to sports for all",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Data-Driven Coaching",
    tagline: "Precision training through AI insights",
    img: "https://via.placeholder.com/150",
  },
];
  return (
    <>
    <div className='bg-black text-white'>
    <Nav/>
    <div className="homepage">
<div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-32"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1471&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">
          Sustainability & Innovation in Sports
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl font-light">
          Expanding Sports Beyond Barriers
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
          Explore Our Impact
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          At israd, actions speak louder than titles. We are committed to
          driving sustainability in sports while breaking social and economic
          barriers.
        </p>
      </section>

      {/* Featured Work Preview */}
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-800">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map(({ id, title, tagline, img }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <img src={img} alt={title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm mt-1">{tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="bg-blue-600 text-white px-6 py-20 text-center">
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-medium">
          Collaborate with us to innovate and grow sports worldwide.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} israd. All rights reserved.
        <div className="mt-3 flex justify-center space-x-6 text-gray-500">
          <a href="#" aria-label="Facebook" className="hover:text-gray-800">
            Facebook
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-800">
            Twitter
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-800">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
