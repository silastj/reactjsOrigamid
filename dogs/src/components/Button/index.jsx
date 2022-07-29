import styles from './button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <>
      <button className={styles.button} {...props} >{children}</button>
      {/* {error && <p className={styles.erro}>Erro</p> } */}
    </>
  )

}

export default Button;