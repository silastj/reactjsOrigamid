import styles from './button.module.css'
import Props from './typing'

const Button = ({text}: Props) => {
  const ativo = false;
  return(    
    <button disabled={!ativo}className={styles.button}>{ativo ? `${text}` : 'Inativo'}</button>
  )
}

export default Button;