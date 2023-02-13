import Head from "../../../Head"
import useFetch from '../../../../Hooks/useFetch'
import React, { useEffect } from "react"
import { STATS_GET } from "../../../service/api"
import Loading from '../../../Loading/Loading'
import Error from '../../../Error/index'
const Graph = React.lazy(() => import('../../../Graph'))

const UserStats = () => {
  const { data, loading, error, request} = useFetch()

  useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET()
      await request(url, options)
    }
    getData()
  },[request])

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    <div>
      <React.Suspense fallback={<div></div>}>
        <Head
        title="Estatísticas"
        />
        <Graph data={data}/>
      </React.Suspense>
    </div>
  )
  else return null
}

export default UserStats