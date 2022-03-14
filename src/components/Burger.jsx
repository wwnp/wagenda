import Cookies from 'js-cookie'
import React, { useContext } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { CountryContex } from '../contex/contex'
import { motion, AnimatePresence } from 'framer-motion';

const collapseVariants = {
  hidden: {
    opacity: 0,
    height: 0
  },
  visible: {
    opacity: 1,
    height: 'auto'
  },
  exit: {
    opacity: 0,
    height: 0
  },
}

export const Burger = (props) => {
  const theme = Cookies.get('theme')
  const {
    handleBurgerClick
  } = props
  return (
    <AnimatePresence>
      <motion.div
        variants={collapseVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <AiOutlineMenuFold
          onClick={handleBurgerClick}
          size={30}
          style={{
            position: 'absolute',
            right: 0,
            top: '1rem',
            color: theme === 'dark' ? '#fff' : '#000'
          }}
        ></AiOutlineMenuFold>
      </motion.div>

    </AnimatePresence>
  )
}
