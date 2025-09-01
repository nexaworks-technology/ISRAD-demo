import Nav from './component/Nav'
import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Projects from './component/Projects'
import Cursor from './component/Cursor'

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size for cursor visibility
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is typical laptop/desktop breakpoint
    };

    // Initial check
    checkScreenSize();

    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);
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
    {isLargeScreen && <Cursor/>}
  <div className='bg-[#101820] text-[#F2AA4C]'>
    <Nav/>
    </div>

    <div style={{fontFamily: "Space Grotesk, sans-serif"}} className="home bg-[#101820] text-[#F2AA4C]">
      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-12 md:py-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin mb-6 md:mb-8 text-center">Welcome to <span className='font-bold'>ISRAD</span></h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12 max-w-4xl text-center leading-relaxed">Innovating sports through research, analysis and design.</p>
        <div className="scroll-indicator flex flex-col items-center mt-8 md:mt-10">
          <p className="text-xs sm:text-sm mb-2">Scroll to explore</p>
          <div className="w-1 h-12 sm:h-16 bg-[#F2AA4C] opacity-50 rounded-full animate-pulse"></div>
        </div>
      </section>
      
      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-16 leading-tight">"Titles don't mean anything.<br className="hidden sm:block"/>Our actions are what is truly priceless."</h2>
          <div className="w-16 sm:w-20 h-0.5 md:h-1 bg-[#F2AA4C] mx-auto my-6 md:my-10"></div>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            At ISRAD, we believe in the power of innovation to transform the world of sports. 
            Our mission is to blend cutting-edge technology with deep sports expertise to create 
            solutions that enhance performance, accessibility, and sustainability.
          </p>
        </div>
      </section>

      <Projects/>

      <section className="screen min-h-screen bg-[#101820] flex flex-col justify-center items-center py-12 md:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-16 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10">Interested in working with us? We'd love to hear from you.</p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F2AA4C] text-[#101820] font-bold rounded-md hover:bg-[#F2AA4C]/80 transition-all duration-300 text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </section>
    </div>
    </>
  )
}

export default App
