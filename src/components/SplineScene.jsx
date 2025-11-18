import React, { Suspense, lazy } from 'react'

// Lazy-load Spline so a loading or import failure doesn't crash the page
const LazySpline = lazy(() => import('@splinetool/react-spline'))

export default function SplineScene() {
  return (
    <Suspense fallback={<div className="absolute inset-0" />}> 
      <div className="absolute inset-0">
        <LazySpline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </Suspense>
  )
}
