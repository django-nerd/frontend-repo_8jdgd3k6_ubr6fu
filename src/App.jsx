import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import TypingReveal from './components/TypingReveal'
import Embers from './components/Embers'
import Rays from './components/Rays'
import ArrowDown from './components/ArrowDown'
import ChapterTwo from './components/ChapterTwo'
import ChapterThree from './components/ChapterThree'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [typed, setTyped] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Screen 1: Updated background mood */}
      <section className="relative h-screen w-full">
        {/* Textured abyss background with deeper plum + obsidian gradient and vignette */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,4,20,0.8),rgba(0,0,0,0.95))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(110,0,40,0.35),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(60,0,60,0.28),transparent_60%)]" />
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
          {/* Heavy grain */}
          <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay" style={{
            backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'
          }} />
        </div>

        {/* Spline 3D Cover with safety net */}
        <ErrorBoundary>
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </ErrorBoundary>

        {/* Atmospheric overlays */}
        <Rays />
        <Embers count={55} />

        {/* Centered typing prompt */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
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
        <ArrowDown show={typed} targetId="chapter-two" />

        {/* Red sparks flicker layer */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,20,60,0.22),transparent_60%)]"
          />
        </div>
      </section>

      {/* Chapter 2 */}
      <div id="chapter-two">
        <ChapterTwo />
      </div>

      {/* Chapter 3 */}
      <ChapterThree />
    </div>
  )
}

export default App
