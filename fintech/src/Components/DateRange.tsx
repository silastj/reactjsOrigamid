import React from 'react'
import Input from './Input'
import { useData } from '../Context/DataContext'

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData()

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input label="inicio" value={inicio} onChange={({ target }) => setInicio(target.value)} />
      <Input label="fim" value={final} onChange={({ target }) => setFinal(target.value)} />
    </form>
  )
}

export default DateRange