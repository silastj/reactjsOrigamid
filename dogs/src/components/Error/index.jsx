import styles from './error.module.css'

const Error = ({error}) => {
  if(!error) return null;
  return(
    <p className={styles.error}>Error - {error}</p>
  )
}

export default Error;