import styles from './produto.module.css'

const Produto = ({ dados, index }: any) => {
  {console.log(dados)}
  return (
    <div className={styles.produto}>      
        <div key={index}>  
        <p>{dados.nome}</p>
        <p>{dados.preco}</p>
        <p>{dados.descricao}</p>
          {dados.fotos.map((ft:any) => {
              return <img src={ft.src} alt={ft.titulo} />
            })
          }
        </div>
      
    </div>
  )
}

export default Produto;