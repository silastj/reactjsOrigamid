import styles from './input.module.css'
import Error from '../Error';
const Input = ({ type, name, label, value, onChange, error , onBlur, placeholder }) => {
  return (
    <div className={styles.inputCenter}>
      <label 
        htmlFor={name}
      >{label}
      </label>
      <input 
        className={styles.input} 
        type={type} 
        id={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        value={value} 
        onBlur={onBlur}
      />
      {error && <Error error={error} /> }
    </div>
  )
}

export default Input;