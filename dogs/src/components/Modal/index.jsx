import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

export const Modal =({children}) => {
  const  {openModal, modalVisible } = useContext(UserContext)
  console.log('modalvisible ', modalVisible)

  return(
    <>
    {children}
        <button onClick={openModal}>abrir</button>
      <div active={modalVisible}>

        {/* <button onClick={openModal}>fechar</button> */}

        <p>silas</p>
      </div>
    </>
  )
}

export default Modal