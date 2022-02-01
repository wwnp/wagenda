import React from 'react'
import { CountryContex } from './../contex/contex';
import { useContext, useEffect } from 'react';
export const Modal = props => {
  const {children} = props
  const { modal, changeModal } = useContext(CountryContex)
  useEffect(() => {
    function modalRemover(e) {
      if (e.target.id === 'modalId') {
        changeModal(!modal)
      }
    }
    if (modal) {
      window.addEventListener('click', modalRemover)
    }
    return () => {
      window.removeEventListener('click', modalRemover)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal])
  return (
    <div className='modal-custom' id={'modalId'} >
      <div className="modal-inside">
        <button className='btn btn-danger' onClick={e => changeModal(!modal)}>X</button>
        {children}
      </div>
    </div>
  )
}