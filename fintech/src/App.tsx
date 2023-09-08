import './App.css'
import SideNav from './Components/Sidenav'
import Header from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './Pages/Resumo'
import Vendas from './Pages/Vendas'

const container: React.CSSProperties = {
  display:'flex',
  width:'100%',
  margin:'0 auto'
}

const main: React.CSSProperties = {
  width:'100%',
}

function App() {

  return (
    <DataContextProvider>
      <div style={container}>
        <SideNav/>
        <main style={main}>
          <Header/>
          <Resumo/>
          <Vendas/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
