import styles from './input.module.css'

const Input = ({ type, name, label, value, onChange, error , onBlur }) => {
  return (
    <div className={styles.inputCenter}>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} type={type} id={name} onChange={onChange} value={value} onBlur={onBlur}/>
      {error && <p className={styles.erro}>{error}</p> }
    </div>
  )
}

export default Input;