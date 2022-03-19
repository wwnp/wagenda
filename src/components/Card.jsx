import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Card = forwardRef((props, ref) => {
  const {
    cardHeight,
    linkName,
    title,
    srcImage,
    isDisabled = false,
    btnColor
  } = props

  return (
    <div
      className='col-12 col-sm-4'
      ref={ref}
    >
      <img height={cardHeight} src={srcImage} alt={title} width='100%' />
      <div>
        <Link
          to={`/${linkName}`}
          className={`btn btn-large btn-${btnColor} btn-guesser-activated text-uppercase ${isDisabled ? 'disabled' : null}`}
          style={{ width: '100%' }}
        >
          {title}
        </Link>
      </div>
    </div>
  )
})

export const MCard = motion(Card)