import styles from './button.module.css'


const Button = ({onClick}) => {

  // function handleClick(){
  //   console.log('silas')
  // }

  return (
    <>
      <button 
      value="silas"
      className={styles.button}
      onClick={event => onClick(event.target.value)}
       >
      
      </button>
    </>
  )

}

export default Button;