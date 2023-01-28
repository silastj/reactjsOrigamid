import Error from '../Error';
import styles from './button.module.css'
import useFetch from '../../Hooks/useFetch';

const Button = ({ children, ...props }) => {
const { error } = useFetch()


  return (
    <>
      <button className={styles.button} {...props} >{children}</button>
      {error &&
            <Error error={error} />
      }
      {/* {error && <p className={styles.erro}>Erro</p> } */}
    </>
  )

}

export default Button;