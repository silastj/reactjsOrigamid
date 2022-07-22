import React, { useState , useEffect } from 'react';

const useCustomHookLocalStorage = (key, valueInicial) => {
  const [ state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : valueInicial;
  })
  
  useEffect(() => {
    window.localStorage.setItem(key, state)
  },[state, key])

  return [state, setState]
}

export default useCustomHookLocalStorage;