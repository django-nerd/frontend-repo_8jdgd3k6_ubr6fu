import React from 'react'
import { motion, useInView } from 'framer-motion'

export default function ChapterTwo() {
  const [ref, setRef] = React.useState(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  return (
    <section ref={setRef} className="relative w-full min-h-[90vh] flex items-center justify-center py-24 px-6 bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Split brand reveal */}
        <div className="relative inline-block">
          <div className="relative">
            {/* top half */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={inView ? { y: -18, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="overflow-hidden"
              aria-hidden
            >
              <div className="pt-2">
                <span className="block text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] font-semibold font-display">ELANOR</span>
              </div>
            </motion.div>
            {/* bottom half */}
            <motion.div
              initial={{ y: 0, opacity: 1 }}
              animate={inView ? { y: 18, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="overflow-hidden -mt-6"
              aria-hidden
            >
              <div className="pb-2">
                <span className="block text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] font-semibold font-display opacity-0 select-none">ELANOR</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Oath line */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 text-lg sm:text-xl text-white/85 font-serif-body"
        >
          <span className="px-3 py-2 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm">
            Seven scents. Seven temptations. Unapologetically yours.
          </span>
        </motion.p>
      </div>

      {/* very subtle halo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1.4 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08), transparent 55%)'
        }}
      />
    </section>
  )
}
