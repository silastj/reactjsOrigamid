import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import UserContaHeaderNav from "./UserContaHeaderNav";
import styles from './account.module.css'

const UserContaHeader = () => {

  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const {pathname} = location
    switch (pathname) {
      case '/conta/postar':
        setTitle('Adicionar Foto')
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
    
      default:
        setTitle('Minhas Fotos')
        break;
    }
  },[location])


  return (
    <header className={styles.header}>
      <UserContaHeaderNav />
    </header>
  );
};

export default UserContaHeader;
