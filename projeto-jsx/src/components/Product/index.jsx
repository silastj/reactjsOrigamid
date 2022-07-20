import React from 'react'
import styles from './product.module.css'
import { GlobalContext }from '../../GlobalContext/index'

const Product = () => {

  const global = React.useContext(GlobalContext);
  console.log('id ', global.dados)
  return(
    <div className={styles.product}>
      {global.dados &&
      <div>
        <p>ID: {global.dados.id}</p>
        <p>Nome: {global.dados.nome}</p> 
        <p>Descrição: {global.dados.descricao}</p> 
        <p>Preço: {global.dados.preco}</p> 
      </div>
      }
    </div>
    
  )
}

export default Product;