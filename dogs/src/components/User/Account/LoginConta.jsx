import styles from './account.module.css'
import React ,{ useContext }from 'react'
import { UserContext } from '../../../UserContext';

const LoginConta = () => {
  const{ data } = useContext(UserContext)
  return(
    <div className={styles.account}>
      {data && 
        <h2>Está Logado o <span>{data.nome}</span></h2>
      }
    </div>
  )
}

export default LoginConta;