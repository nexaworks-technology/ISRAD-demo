import React, { useEffect, useRef } from 'react'
import './loader.css'

// Minimalist typographic brand reveal loader for ISRAD
// Sequence controlled via CSS classes added by this component; calls onComplete when done
const Loader = ({ onComplete }) => {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

  // Smooth timeline (ms) with explicit mask expansion phase and fade
  // shortened: phases closer together so final mask runs sooner after the hero ('R') transform
  const timeline = [150, 600, 1000, 1250, 1450]
    const t1 = setTimeout(() => el.classList.add('phase-1'), timeline[0])
    const t2 = setTimeout(() => el.classList.add('phase-2'), timeline[1])
    const t3 = setTimeout(() => el.classList.add('phase-3'), timeline[2])
    const t4 = setTimeout(() => el.classList.add('phase-4'), timeline[3])
    const t5 = setTimeout(() => el.classList.add('phase-5'), timeline[4])

    // after phase-5, allow the mask to animate to full scale then mark phase-5-done
  const maskExpandDelay = 180 // shorter delay after phase-5 to toggle 'phase-5-done'
  const t5done = setTimeout(() => el.classList.add('phase-5-done'), timeline[4] + maskExpandDelay)

  // after mask expands, wait for the mask transition to finish then fade out the loader
  // keep JS timings in sync with CSS transitions below
  const maskTransition = 420 // matches CSS transition for mask expand
  const fadeDelay = 80
  const doneFadeDuration = 420 // allow opacity transition to finish before unmount

    const done = setTimeout(() => {
      el.classList.add('done')
      // call onComplete after the fade finishes so the visual transition completes
      const unmountId = setTimeout(() => {
        if (typeof onComplete === 'function') onComplete()
      }, doneFadeDuration)

      // store reference so cleanup can clear it
      ;(el._loaderUnmountId = unmountId)
    }, timeline[4] + maskExpandDelay + maskTransition + fadeDelay)

    return () => {
      [t1, t2, t3, t4, t5, t5done, done].forEach(t => clearTimeout(t))
      if (el && el._loaderUnmountId) clearTimeout(el._loaderUnmountId)
    }
  }, [onComplete])

  const brand = 'ISRAD'

  return (
    <div ref={root} className="israd-loader-min" aria-hidden>
      <div className="mask-circle" />
      <div className="brand-ctr">
        <div className="brand">
          {brand.split('').map((ch, i) => (
            <span key={i} className={`letter ${ch === 'O' ? 'hero-o' : ''} ${i === 2 ? 'hero-o' : ''}`}>{ch}</span>
          ))}
        </div>
      </div>
  {/* eye/pupil removed to avoid small dot artifact during transition */}
      <div className="mask-circle" />
    </div>
  )
}

export default Loader
