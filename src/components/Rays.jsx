import React from 'react'
import { motion } from 'framer-motion'

export default function Rays() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Soft cathedral-like rays from above */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_60%)]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-10 left-1/3 w-[120%] h-[50%] rotate-6 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.15),transparent_60%)]"
      />
    </div>
  )
}
