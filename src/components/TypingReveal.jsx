import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TypingReveal({ text = '', charDelay = 80, onComplete }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!text) return
    setIndex(0)
    setDone(false)
    const timer = setInterval(() => {
      setIndex((i) => {
        if (i >= text.length) {
          clearInterval(timer)
          setDone(true)
          if (onComplete) {
            // slight pause to let the moment linger
            setTimeout(() => onComplete(), 700)
          }
          return i
        }
        return i + 1
      })
    }, charDelay)

    return () => clearInterval(timer)
  }, [text, charDelay, onComplete])

  const shown = text.slice(0, Math.min(index, text.length))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="w-full text-center"
    >
      <div className="inline-flex items-center">
        <span className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white text-glow-crimson">
          {shown}
        </span>
        <span className={`ml-1 h-10 sm:h-14 w-[2px] sm:w-[3px] bg-white/90 inline-block align-middle ${done ? 'animate-caret-blink' : 'animate-caret-type'}`}></span>
      </div>
    </motion.div>
  )
}
