import { useEffect, useState } from 'react'
import styles from './graph.module.css'
import { VictoryPie, VictoryAxis, VictoryChart, VictoryArea, VictoryPolarAxis, VictoryBar } from 'victory'

const Graph = ({ data }) => {
  const [graph, setGraph] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const graphData = data.map(item => {
      return {
        x: item.title,
        y: item.acessos
      }
    })
    console.log('data ', data)
    if(data.length > 0){
      setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b))
    }
      setGraph(graphData)
  }, [data])

  return (
    <>
      <section className={styles.graph}>
        {data !== null ? (
          <>
            <div className={styles.total}>
              <p>TOTAL DE ACESSOS:{total}</p>
            </div>
            <div>
              <VictoryChart
              >
                <VictoryArea data={graph} />
                <VictoryAxis key={data.id}/>
              </VictoryChart>
              <VictoryChart polar
              >
                <VictoryArea data={graph} />
                <VictoryPolarAxis key={data.id}/>
              </VictoryChart>
              <VictoryPie data={graph} />
            </div>
          </>
        ) : (
          <p>Adicionar Fotos</p>
        )
        }
      </section>
    </>
  )
}

export default Graph