import React, { useEffect, useRef, useState } from 'react'
import './hero.css'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80'

const blueprintItems = [
  { id: 'pm', index: '01', title: 'PLAYER MANAGEMENT', desc: 'Holistic career planning, contract negotiation, and day-to-day athlete support.' },
  { id: 'be', index: '02', title: 'BRAND & ENDORSEMENTS', desc: 'Custom brand strategies and partnership placement for maximum impact.' },
  { id: 'pa', index: '03', title: 'PERFORMANCE ANALYTICS', desc: 'Data-driven insights to fine-tune training, recovery, and game strategy.' },
]

const Hero = ({ start = false }) => {
  const rootRef = useRef(null)
  const [hover, setHover] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    // Headline: split into words and stagger (done in markup via .word spans)
    const words = Array.from(root.querySelectorAll('.headline .word'))
    words.forEach((w, i) => w.style.setProperty('--delay', `${i * 90}ms`))

    // IntersectionObserver: update local visible state only
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => setVisible(e.isIntersecting))
      }, { threshold: 0.12 }
    )
    io.observe(root)

    // Scroll parallax: text/UI move slightly based on position
    let raf = null
    function onScroll() {
      if (!root) return
      const rect = root.getBoundingClientRect()
      const center = window.innerHeight / 2
      const d = (rect.top - center) / window.innerHeight
      const val = Math.max(Math.min(-d * 28, 28), -28)
      root.style.setProperty('--parallax', `${val}px`)
    }

    onScroll()
    const scrollHandler = () => { if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(onScroll) }
    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      if (io) io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  // Add 'in-view' only when loader signals start AND the section is visible
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (start && visible) root.classList.add('in-view')
    else root.classList.remove('in-view')
  }, [start, visible])

  return (
    <section ref={rootRef} className="digital-dossier-hero" aria-label="The Digital Dossier Hero">
      <div className="hero-inner">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_IMAGE})` }} aria-hidden>
          <div className="photo-overlay" />
        </div>

        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">Sports • Tech • Leadership</div>

            <h1 className="headline" aria-hidden>
              {['The', 'Architecture', 'of', 'Victory.'].map((w, i) => (
                <span key={i} className="word">{w}&nbsp;</span>
              ))}
            </h1>


            <a className="cta" href="#roster">DISCOVER OUR METHOD
              <span className="cta-underline" aria-hidden />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
