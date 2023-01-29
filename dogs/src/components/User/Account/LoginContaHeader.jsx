import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoginContaHeaderNav from "./LoginContaHeaderNav";

const LoginContaHeader = () => {

  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const {pathname} = location
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto')
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break;
    
      default:
        setTitle('Minha Conta')
        break;
    }
  },[location])


  return (
    <header>
      <h1 className="title">{title}</h1>
      <LoginContaHeaderNav />
    </header>
  );
};

export default LoginContaHeader;
