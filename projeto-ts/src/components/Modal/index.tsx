import React from 'react'
import styles from './modal.module.css'

const Modal = ({modal, setModal}: any) => {
  if(modal)
    return(
      <div className={styles.modal}>
        <button onClick={() => setModal(false)}>X</button>
      </div>
    );
  return null;
}

export default Modal;