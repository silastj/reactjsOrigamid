import React, { useContext } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header = () => {

  const {data, userLogout} = useContext(UserContext);
  return(
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link 
          to='/'
          aria-label="Dogs -Home"
          className={styles.logo}
        >
          <Dogs/>
        </Link>
        {data ? (
          <Link
            to='/conta'
            className={styles.login}
            >{data.nome}
          <button onClick={userLogout}>Sair</button>
          </Link>
        ): (
          <Link
          to='/login'
          className={styles.login}
            >Login / Criar
          </Link>
        )}
        
      </nav>
    </header>
  )
}

export default Header;