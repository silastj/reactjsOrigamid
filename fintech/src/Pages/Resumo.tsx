import GraficosVenda from "../Components/GraficosVenda"
import Loading from "../Components/Loading"
import { useData } from "../Context/DataContext"

const boxStyle: React.CSSProperties = {
  padding: '10px',
  border:'1px solid red',
  borderRadius:'4px'
}

const centerBox: React.CSSProperties = {
  display:'flex',
  flexDirection: 'column',
  gap: '20px'
}

const Resumo = () => {
  const {data, loading} = useData()
  if(data === null) return null
  if(loading || data === null || !data) return <Loading/>

  return (
    <section style={centerBox}>
      <div>Resumo</div>
      <div style={boxStyle}>
        <h2>Vendas</h2>
        <span>
          {data
          .filter((i) => i.status !== 'falha')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
      <div style={boxStyle}>
        <h2>Recebido</h2>
        <span>
          {data
          .filter((i) => i.status === 'pago')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
      <div style={boxStyle}>
        <h2>Processando</h2>
        <span>
          {data
          .filter((i) => i.status === 'processando')
          .reduce((acc, item) => acc + item.preco, 0)
          .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </span>
      </div>
      <div className="box mb">
        <GraficosVenda data={data}/>
      </div>
    </section>

  )
}

export default Resumo