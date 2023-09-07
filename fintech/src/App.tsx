import './App.css'
import SideNav from './Components/Sidenav'
import Header from './Components/Header'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './Pages/Resumo'

function App() {

  return (
    <DataContextProvider>
      <div>
        <SideNav/>
        <main>
          <Header/>
          <Resumo/>
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
