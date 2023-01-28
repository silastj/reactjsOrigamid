import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../../../UserContext"

const LoginContaHeaderNav = () => {

  const {userLogout} = useContext(UserContext)

  return(
    <nav>
      <NavLink to="/conta">Minha fotos</NavLink>
      <NavLink to="/conta/estatisticas">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Adicionar Foto</NavLink>
      <button onClick={() => userLogout()}>Sair</button>
    </nav>
  )
}

export default LoginContaHeaderNav