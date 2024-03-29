import React, { useState, useEffect, useCallback } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './components/service/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();
export const UserStorage = ({children}) => {

  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(null)
  const navigate = useNavigate();

  const userLogout = useCallback(async function userLogout() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  },[navigate])



  async function getUser(token){
    const {url, options }= USER_GET(token);
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }
  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password});
      const  tokensRes = await fetch(url, options)
      if(!tokensRes.ok) throw new Error(`Error ${tokensRes.statusText}`)
      const {token} = await tokensRes.json();
      window.localStorage.setItem('token', token);
      await getUser(token);    
      navigate('/conta')  
    } catch (error) {
      setError(error.message)
      setLogin(false)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin(){
      const token = window.localStorage.getItem('token')
      if(token){
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if(!response.ok) throw new Error('Token inválido')
          await getUser(token)
        } catch (error) {   
          userLogout()       
        }finally{
          setLoading(false)
        }
      }
      else{
        setLogin(false)
      }
    }

    autoLogin();
  }, [userLogout])


  return <UserContext.Provider value={{userLogin, data, userLogout, login, error, loading}}>
        {children}
        </UserContext.Provider>
}
