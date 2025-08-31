import Nav from './component/Nav'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Get scroll value
    // lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Clean up
    return () => {
      lenis.destroy()
    }
  }, [])
  const projects = [
  {
    id: 1,
    title: "Project Alpha",
    tagline: "Revolutionizing player performance analysis",
    img: "https://via.placeholder.com/450x300",
  },
  {
    id: 2,
    title: "Sustainability Study",
    tagline: "Reducing environmental impact in sports",
    img: "https://via.placeholder.com/450x300",
  },
  {
    id: 3,
    title: "Barrier Breaker",
    tagline: "Innovative access to sports for all",
    img: "https://via.placeholder.com/450x300",
  },
  {
    id: 4,
    title: "Data-Driven Coaching",
    tagline: "Precision training through AI insights",
    img: "https://via.placeholder.com/450x300",
  },
];
  return (
    <>
  <div className='bg-[#101820] text-[#F2AA4C]'>
    <Nav/>
    </div>
    <div style={{fontFamily: "Space Grotesk, sans-serif"}} className="home bg-[#101820] text-[#F2AA4C]">
      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl md:text-8xl font-thin mb-8">Welcome to <span className='font-bold'>ISRAD</span></h1>
        <p className="text-xl md:text-3xl mb-12 max-w-3xl text-center">Innovating sports through research, analysis and design.</p>
        <div className="scroll-indicator flex flex-col items-center mt-10">
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="w-1 h-16 bg-[#F2AA4C] opacity-50 rounded-full animate-pulse"></div>
        </div>
      </section>
      
      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-16 text-center">"Titles don't mean anything.<br/>Our actions are what is truly priceless."</h2>
          <div className="w-20 h-1 bg-[#F2AA4C] mx-auto my-10"></div>
          <p className="text-xl max-w-3xl mx-auto text-center leading-relaxed">
            At ISRAD, we believe in the power of innovation to transform the world of sports. 
            Our mission is to blend cutting-edge technology with deep sports expertise to create 
            solutions that enhance performance, accessibility, and sustainability.
          </p>
        </div>
      </section>
      
      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card border border-[#F2AA4C]/20 rounded-lg overflow-hidden hover:border-[#F2AA4C] transition-all duration-300"
            >
              <img src={project.img} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#F2AA4C]/80">{project.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-10">Interested in working with us? We'd love to hear from you.</p>
          <button className="px-8 py-4 bg-[#F2AA4C] text-[#101820] font-bold rounded-md hover:bg-[#F2AA4C]/80 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
