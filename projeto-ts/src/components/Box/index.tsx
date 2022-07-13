import styles from './box.module.css'

const Box = ({setModal, ativo}:any) => {

  function handleBox(){
    setModal((ativo:any) => !ativo)
  }
  return(
    <div  className={styles.box}>Box
    <button onClick={handleBox} >Yes</button>
    </div>
  )
}

export default Box;