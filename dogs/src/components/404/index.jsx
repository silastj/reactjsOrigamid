import styles from './notfound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>Erro: 404</h1>
      <p>Página não encontrada.</p>
    </div>
  )
}

export default NotFound