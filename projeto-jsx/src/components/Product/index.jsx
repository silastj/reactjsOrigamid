import React from 'react'
import styles from './product.module.css'
import { GlobalContext }from '../../GlobalContext/index'
import useCustomHookLocalStorage from '../Hooks/useCustomHook/index'
import useFetch from '../Hooks/useFetch'
import { useEffect } from 'react'

const Product = () => {

  const global = React.useContext(GlobalContext);
  // console.log('id ', global.dados)

  const [produto, setProduto] = useCustomHookLocalStorage('produto', '');

  function handleClick({target}){
    setProduto(target.innerText)
  }

  const {data, request } = useFetch();

  useEffect(() => {
    request(`https://www.ranekapi.origamid.dev/json/api/produto/${produto}`)
  },[produto])

  console.log('data ', data)
  return(
    <div className={styles.product}>
      {global.dados &&
      <div>
        <p>ID: {global.dados.id}</p>
        <p>Nome: {global.dados.nome}</p> 
        <p>Descrição: {global.dados.descricao}</p> 
        <p>Preço: {global.dados.preco}</p> 

        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>notebook</button>
        <p>O produto salvo: {produto}</p>
      </div>
      }
    </div>
    
  )
}

export default Product;