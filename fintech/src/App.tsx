import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SideNav from './Components/Sidenav'
import Header from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './Pages/Resumo'
import Vendas from './Pages/Vendas'
import Venda from './Pages/Venda'

const container: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  margin: '0 auto'
}

const main: React.CSSProperties = {
  width: '100%',
}

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <div style={container}>
          <SideNav />
          <main style={main}>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo/>}/>
              <Route path="/vendas" element={<Vendas/>} />
              <Route path="/vendas/:id" element={<Venda/>} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
