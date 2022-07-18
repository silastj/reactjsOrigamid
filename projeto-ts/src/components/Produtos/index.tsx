import styles from './produto.module.css'

const Produto = ({ valor, index }: any) => {
  return (
    <div className={styles.produto}>      
        <div key={index}>  
        <p>{valor.nome}</p>
        <p>{valor.preco}</p>
        <p>{valor.descricao}</p>
          <img src={valor.fotos[0].src} alt={valor.fotos[0].titulo}/>        
        </div>
      
    </div>
  )
}

export default Produto;