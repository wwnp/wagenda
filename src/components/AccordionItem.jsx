import React, { useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CountryContex } from '../contex/contex'

const AccordionItem = (props) => {
  const {
    children,
    title
  } = props
  const {
    theme
  } = useContext(CountryContex)

  const [isVisible, setIsVisible] = useState(true)
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
  return (
    <> 
      <div
        onClick={() => setIsVisible(!isVisible)}
        className='AccordionItem'
        style={{
          backgroundColor: 'var(--colors-bg2)',
          border: '1px solid var(--colors-text)',
          borderCollapse: 'collapse'
        }}
      >
        {title}
      </div>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            variants={collapseVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              duration: .35,
            }}
            style={{
              padding: '0.8rem 1.2rem',
              overflow: 'hidden',
              backgroundColor: 'var(--colors-bg2)',
              color:'var(--colors-text)',
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default AccordionItem