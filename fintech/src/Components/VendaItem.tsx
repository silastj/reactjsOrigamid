import { IVenda } from "../Context/DataContext"
import {NavLink} from 'react-router-dom'

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
      <NavLink to={`/vendas/${venda.id}`}>{venda.id}</NavLink>
      <p>{venda.nome}</p>
      <p>{venda.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
    </div>
  )
}

export default VendaItem