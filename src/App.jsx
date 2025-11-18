import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import TypingReveal from './components/TypingReveal'
import Embers from './components/Embers'
import Rays from './components/Rays'
import ArrowDown from './components/ArrowDown'

function App() {
  const [typed, setTyped] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Textured abyss background with burgundy/plum gradient and grain */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(88,0,32,0.35),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(64,0,64,0.4),transparent_60%)]"></div>
        {/* Heavy grain */}
        <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{
          backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
        }} />
      </div>

      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <Rays />
      <Embers count={55} />

      {/* Centered typing prompt */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <TypingReveal
            text={'Ready to indulge in sin?'}
            charDelay={90}
            onComplete={() => setTyped(true)}
          />

          {/* Subtext glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.85, 1] }}
            transition={{ duration: 2.6, delay: 0.6 }}
            className="mt-6 text-sm text-white/70"
          >
            <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              A confession written on dark parchment
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Invite to descend */}
      <ArrowDown show={typed} />

      {/* Red sparks flicker layer */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,20,60,0.2),transparent_60%)]"
        />
      </div>
    </div>
  )
}

export default App
