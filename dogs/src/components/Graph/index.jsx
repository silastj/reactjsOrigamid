import { useState } from 'react'
import styles from './graph.module.css'

const Graph = ({data}) => {
const [graph, setGraph] = useState([])
const [total, setTotal] = useState(0)

  return(
    <section className={styles.graph}>
      <div>
        <p>Data:{data}</p>
        <p>Acessos:{total}</p>
      </div>
      {data}
    </section>
  )
}

export default Graph