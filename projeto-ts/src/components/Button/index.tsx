import React, { useState } from 'react'
import Box from '../Box';
import Modal from '../Modal';
import styles from './button.module.css'
import Props from './typing'


//Hooks do React UseState
// Ele traz o estado e uma função, que atualiza o estado inicial.


const Button = ({text}: Props) => {
  // Usar como exemplo nativo em javascript, fazendo a função do use state
  // const ativoHook = React.useState(false);
  // console.log('hook ', ativoHook);

  const [ativo, setAtivo] = useState(true)
  const [dados, setDados] = useState({nome:'Silas', idade:'38'})
  const [modal, setModal] = useState(false)
  const [items, setItems] = useState(['item 1', 'item 2']) 

  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados})
  }

  function handleModal(){
    setModal(!modal)
  }

  // Isso funciona com Array e Objeto
  function handlePush(){
    setItems([...items, 'new'])
  }

  return(   
    <>
    <p>{dados.nome}</p>
    <p>{dados.idade}</p>

    <hr />
    <button onClick={handleClick} disabled={!ativo} className={styles.button}>{ativo ? `${text}` : 'Inativo'}</button>
    <hr />
    <p>{modal ? 'Modal Aberto' : 'Modal fechado'}</p>
    <button onClick={handleModal}>Clique</button>
      <Modal
        modal={modal}
        setModal={setModal}
      />
    <hr />
    <button onClick={handlePush}>Add item</button>
    <hr />
    <p>{items}</p>
    <Box
      setModal={setModal}
    />
    </> 
  )
}

export default Button;