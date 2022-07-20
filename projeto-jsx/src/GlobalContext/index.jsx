import React, { useEffect, useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
  
  const [ dados, setDados ] = useState(null);

  useEffect(() => {
    fetch('https://www.ranekapi.origamid.dev/json/api/produto/notebook')
    .then((res => res.json()))
    .then((json) => setDados(json))
  },[])

  return (
    <GlobalContext.Provider value={{dados}}>
      {children}
    </GlobalContext.Provider>
  )
}