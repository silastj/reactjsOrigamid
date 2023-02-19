import styles from './button.module.css'


const ButtonMore = (props) => {
  return (
    <>
      <button 
      className={styles.buttonMore}
      onClick={event => props.onClick(event.target.value)}
       >
      {props.title}
      </button>
    </>
  )

}

export default ButtonMore;