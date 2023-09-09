import React,{ useState } from "react"
import DateRange from "./DateRange"
import Meses from "./Meses"
import {useLocation} from 'react-router-dom'


const Header = () => {
  const [title, setTitle] = useState('Resumo')
  const location = useLocation()

  React.useEffect(() => {
    location.pathname === '/' ? 
    [setTitle('Resumo'), document.title= "Fintech | Resumo"] : 
    [setTitle('Vendas'), document.title= "Fintech | Vendas"]
  },[location])
  return (
    <>
      <header className="mb">
        <div className="daterange mb">
          <DateRange />
          <h1 className="box bg-3">{title}</h1>
        </div>
        <Meses />
      </header>
    </>
  )
}

export default Header