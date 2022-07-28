import styles from './input.module.css'

const Input = ({ type, name, label }) => {
  return (
    <div className={styles.inputCenter}>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} type={type} id={name} />
      <p className={styles.erro}>Erro</p>
    </div>
  )
}

export default Input;