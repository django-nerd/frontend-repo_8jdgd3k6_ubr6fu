import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ArrowDown({ show }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 10 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
    >
      <div className="flex flex-col items-center gap-2">
        <ChevronDown className="w-7 h-7" />
        <span className="text-xs tracking-widest uppercase text-white/70">Descend</span>
      </div>
    </motion.div>
  )
}
