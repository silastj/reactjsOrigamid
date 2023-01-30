import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../UserContext";
import styles from './login.module.css'
import { ReactComponent as MinhasFotosSVG } from "../../../Assets/feed.svg";
import { ReactComponent as EstatisticasSVG } from "../../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFotoSVG } from "../../../Assets/adicionar.svg";
import { ReactComponent as SairSVG } from "../../../Assets/sair.svg";

const UserContaHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end><MinhasFotosSVG/>Minha fotos</NavLink>
      <NavLink to="/conta/estatisticas"><EstatisticasSVG/>Estatísticas</NavLink>
      <NavLink to="/conta/postar"><AdicionarFotoSVG/>Adicionar Foto</NavLink>
      <button onClick={() => userLogout()} className="sair"><SairSVG/>Sair</button>
    </nav>
  );
};

export default UserContaHeaderNav;
