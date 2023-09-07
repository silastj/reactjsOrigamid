import { useData } from "../Context/DataContext"
import DateRange from "./DateRange"
import Meses from "./Meses"


const Header = () => {
  const { data } = useData()
  console.log('header ', data)
  return (
    <>
      <header>Header</header>
      <DateRange />
      <Meses/>
    </>
  )
}

export default Header