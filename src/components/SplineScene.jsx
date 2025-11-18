import React, { Suspense, lazy } from 'react'

// Lazy-load Spline so a loading or import failure doesn't crash the page
const LazySpline = lazy(() => import('@splinetool/react-spline'))

function SplineFallback() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* subtle placeholder so the hero never looks empty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,0,30,0.5),rgba(0,0,0,0.95))]" />
      <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
          <span className="text-xs tracking-widest uppercase text-white/60">Preparing scene…</span>
        </div>
      </div>
    </div>
  )
}

export default function SplineScene() {
  return (
    <Suspense fallback={<SplineFallback />}> 
      <div className="absolute inset-0 pointer-events-none z-0">
        <LazySpline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </Suspense>
  )
}
