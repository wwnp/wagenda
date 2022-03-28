import React from 'react'
import { motion } from 'framer-motion';

export const Balls = () => {
  return (
    <div className="background">
      <motion.div
        initial={{
          rotate: 0,
          x: 30,
          y: 0
        }}
        animate={{
          rotate: 360,
          x: 200,
          y: 300
        }}
        transition={{
          delay: 0,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: 'reverse',
          type: 'tween',
          ease: 'easeInOut'
        }}
        className="shape"
      ></motion.div>
      <motion.div
        initial={{
          rotate: 0,
          x: 200,
          y: 300
        }}
        animate={{
          rotate: 360,
          x: 30,
          y: 0
        }}
        transition={{
          delay: 0,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0,
          repeatType: 'reverse',
          type: 'tween',
          ease: 'easeInOut'
        }}
        className="shape">
      </motion.div>
    </div>
  )
}
