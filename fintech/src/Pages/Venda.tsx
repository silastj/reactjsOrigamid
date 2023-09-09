
import {useParams}from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loading from '../Components/Loading'
import { IVenda } from '../Context/DataContext'

type VendaSemData = Omit<IVenda, 'data'> // remover data do type

const Venda = () => {
  const {id} = useParams()
  const {data, loading} = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`)
  console.log('data' , data)
  if(data === null) return null
  if(loading) return <Loading/>
  return (
    <div>
      <ul className="box bg-3">
        <li className='box mb'><strong>Nome:</strong> {data.nome}</li>
        <li className='box mb'><strong>Pagamento:</strong> {data.pagamento}</li>
        <li className='box mb'><strong>Parcelas:</strong> {data.parcelas === null ? 'avista' : data.parcelas}</li>
        <li className='box mb'><strong>Preço:</strong> {data.preco}</li>
        <li className='box mb'><strong>Status:</strong> {data.status}</li>        
      </ul>
    </div>
  )
}

export default Venda