import { IVenda } from "../Context/DataContext"

const centerVendas: React.CSSProperties = {
  display:' flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const VendaItem = ({venda}:{venda: IVenda}) => {
  return (
    <div style={centerVendas}>
      <a href="">{venda.id}</a>
      <p>{venda.nome}</p>
      <p>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
    </div>
  )
}

export default VendaItem