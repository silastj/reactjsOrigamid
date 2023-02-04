import styles from './loading.module.css'
import { ReactComponent as CarregandoSVG } from "../../Assets/carregando.svg";

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <p><CarregandoSVG/></p>
    </div>
  )
}

export default Loading