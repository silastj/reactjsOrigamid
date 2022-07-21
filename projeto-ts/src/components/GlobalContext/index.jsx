import React, { useEffect, useState} from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [valor, setValor] = useState(null)

  useEffect(() => {
    fetch('https://www.ranekapi.origamid.dev/json/api/produto/notebook')
    .then((res => res.json()))
    .then((json) => setValor(json))
  },[])


  return <GlobalContext.Provider value={{valor}}>{children}</GlobalContext.Provider>
};