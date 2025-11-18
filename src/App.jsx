import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import TypingReveal from './components/TypingReveal'
import Embers from './components/Embers'
import Rays from './components/Rays'
import ArrowDown from './components/ArrowDown'
import ChapterTwo from './components/ChapterTwo'
import ChapterThree from './components/ChapterThree'
import ErrorBoundary from './components/ErrorBoundary'
import SplineScene from './components/SplineScene'

function StaticHeroBackdrop() {
  return (
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
  )
}

function App() {
  const [typed, setTyped] = useState(false)
  const disableSpline = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      return params.has('nospline')
    } catch {
      return false
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Screen 1: Updated background mood */}
      <section className="relative h-screen w-full">
        {/* Always-on static hero backdrop so the screen never renders pure black */}
        <StaticHeroBackdrop />

        {/* Spline 3D layer (optional). We keep it behind text layers to avoid covering UI. */}
        {!disableSpline ? (
          <div className="absolute inset-0 z-0">
            <ErrorBoundary>
              <SplineScene />
            </ErrorBoundary>
          </div>
        ) : (
          // If spline is disabled, provide a soft placeholder so there's always something visible
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,0,30,0.35),transparent_70%)]" />
          </div>
        )}

        {/* Atmospheric overlays above background and spline */}
        <div className="absolute inset-0 z-10">
          <Rays />
          <Embers count={55} />
        </div>

        {/* Centered typing prompt */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
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
        <div className="relative z-20">
          <ArrowDown show={typed} targetId="chapter-two" />
        </div>

        {/* Red sparks flicker layer (subtle tint above everything) */}
        <div className="pointer-events-none absolute inset-0 z-10">
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
