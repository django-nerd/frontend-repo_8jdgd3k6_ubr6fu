import React from 'react'
import { motion } from 'framer-motion'

function random(min, max) {
  return Math.random() * (max - min) + min
}

export default function Embers({ count = 40 }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: random(0, 100),
    delay: random(0, 6),
    duration: random(6, 14),
    size: random(2, 5),
    opacity: random(0.3, 0.8),
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, p.opacity, 0],
            y: [20, -200],
            filter: ['blur(1px)', 'blur(0px)'],
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          style={{ left: `${p.x}%` }}
          className="absolute bottom-0 w-[2px] h-[2px] rounded-full bg-gradient-to-t from-amber-500/80 to-yellow-200/90 shadow-[0_0_12px_rgba(255,200,0,0.6)]"
        />
      ))}
    </div>
  )
}
