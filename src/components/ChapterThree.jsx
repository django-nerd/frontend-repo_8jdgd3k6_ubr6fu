import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function TypeLine({ text, start, delay = 40 }) {
  const [shown, setShown] = useState('')
  useEffect(() => {
    if (!start) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, delay)
    return () => clearInterval(interval)
  }, [start, text, delay])

  return (
    <div className="flex items-baseline">
      <span className="text-xl sm:text-2xl md:text-3xl tracking-tight text-white/95 font-serif-body">
        {shown}
      </span>
      <span className={`ml-1 h-6 w-[2px] bg-white/80 inline-block align-middle ${shown.length === text.length ? 'animate-caret-blink' : 'animate-caret-type'}`}></span>
    </div>
  )
}

export default function ChapterThree() {
  const [ref, setRef] = React.useState(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [stage, setStage] = useState(0)

  useEffect(() => {
    if (!inView) return
    // Stage progression timed to approximate typing durations
    const t1 = setTimeout(() => setStage(1), 200) // start line 1
    const t2 = setTimeout(() => setStage(2), 2200)
    const t3 = setTimeout(() => setStage(3), 4700)
    const t4 = setTimeout(() => setStage(4), 7800)
    const t5 = setTimeout(() => setStage(5), 9800)
    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout) }
  }, [inView])

  return (
    <section ref={setRef} className="relative w-full min-h-[120vh] flex items-center justify-center py-28 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="space-y-8">
          <TypeLine text="Perfume is confession." start={stage >= 1} />
          <TypeLine text="Every fragrance reveals what you hide." start={stage >= 2} />
          <TypeLine text="Seven scents based on the seven deadly sins—" start={stage >= 3} />
          <TypeLine text="each one a guilty pleasure you're finally allowed to claim." start={stage >= 4} />

          {/* Divider with Omega */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={stage >= 4 ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 py-3"
          >
            <span className="h-px flex-1 bg-white/15" />
            <span className="px-2 text-white/80 text-2xl tracking-widest">Ω</span>
            <span className="h-px flex-1 bg-white/15" />
          </motion.div>

          <TypeLine text="Hand-blended. Limited batches. Unapologetically honest." start={stage >= 5} />
        </div>
      </div>

      {/* Breathing background for the chapter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,40,0.22),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.18]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </motion.div>
    </section>
  )
}
