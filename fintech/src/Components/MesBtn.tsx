import React from 'react'
import { useData } from '../Context/DataContext'
import {useNavigate } from 'react-router-dom'

type IMesBtn = React.ComponentProps<'button'> & {
  n: number
}

function nomeMes(n: number) {
  const date = new Date() 
  date.setMonth(date.getMonth() + n)
  const nome = new Intl.DateTimeFormat('pt-BR',{month: "long"}).format(date)
  return nome
}

function formatDate(date: Date){
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}


const MesBtn = ({n}: IMesBtn) => {
  const {setInicio, setFinal} = useData()
  const navigate = useNavigate()

  function setMes(n:number) {
    navigate('/vendas')
    const date = new Date()
    date.setMonth(date.getMonth() + n)

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    setInicio(formatDate(firstDay))
    setFinal(formatDate(lastDay))
  }  
  return(
    <button value={n} onClick={() => setMes(n)} className="box bg-3">{nomeMes(n)}</button>
  )
}

export default MesBtn