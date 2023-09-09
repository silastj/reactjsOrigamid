import { IVenda } from "../Context/DataContext"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from "recharts"


type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number
}

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: {[key: string]: VendaDia}, item) => {
    const dia = item.data.split(' ')[0]
    if(!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    acc[dia][item.status] += item.preco
    return acc
  }, {})
  return Object.values(dias).map((dia) => ({...dia, data: dia.data.substring(5)}))
}

const GraficosVenda = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={transformedData}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="processando" stroke="#8884d8" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#82ca9d" strokeWidth={3}/>
        <Line type="monotone" dataKey="pago" stroke="#efe000" strokeWidth={3}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficosVenda