import React, { useState } from 'react'
import Modal from '../Modal';
import styles from './button.module.css'
import Props from './typing'


//Hooks do React UseState
// Ele traz o estado e uma função, que atualiza o estado inicial


const Button = ({text}: Props) => {
  // Usar como exemplo nativo em javascript, fazendo a função do use state
  // const ativoHook = React.useState(false);
  // console.log('hook ', ativoHook);

  const [ativo, setAtivo] = useState(true);
  const [dados, setDados] = useState({nome:'Silas', idade:'38'})
  const [modal, setModal] = useState(true)

  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados})
  }

  function handleModal(){
    setModal(!modal)
  }

  return(   
    <>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>

    <button onClick={handleClick} className={styles.button}>{ativo ? `${text}` : 'Inativo'}</button>
    <p>{modal ? 'Modal Aberto' : 'Modal fechado'}</p>
    <button onClick={handleModal}>Clique</button>
    <Modal
      modal={modal}
      setModal={setModal}
    />
    </> 
  )
}

export default Button;