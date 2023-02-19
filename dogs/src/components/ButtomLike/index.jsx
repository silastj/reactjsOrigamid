import styles from './buttomLike.module.css'

const ButtonLike = (props) => {
  return (
    <button
      className={styles.buttonLike}
      onClick={(event) => props.onClick(event.target.value)}
    >
      <p>{props.title}</p>
      <img src={props.icon}/>
      <span>{props.count}</span>
    </button>
  )
}

export default ButtonLike