import React from 'react'
import { motion } from 'framer-motion'
export const Preloader = ({ color = 'black' }) => {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%,0)',
    }}>
      <motion.div
        animate={{
          scale: [1, 2, 1],
          rotate: [0, 180, 0],
          borderRadius: [5, 100, 5]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          background: color,
          width: '70px',
          height: '70px',
        }}
      >
      </motion.div>
    </div>
  )
}
