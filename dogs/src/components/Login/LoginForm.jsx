import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../Input/index';
import Button from '../Button/index';
import useForm from '../../Hooks/useForm';
import { TOKEN_POST, USER_GET } from '../service/api';

const LoginForm = () => {

  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    console.log('token ', token)
    if(token){
      getUser(token)
    }
  }, [])

  async function getUser(token){
    const {url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log('get ', json)
  }

  async function handleSubmit(event){
    event.preventDefault();
    if(username.validate() && password.validate()) {
      const {url, options} = TOKEN_POST({
        username: username.value,
        password: password.value,
      })
      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      getUser(json.token);
      console.log(json)
    }
  }
  return(
    <section>
      <h1>Login Dogs</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Nome"
          {...username}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          {...password}          
        />
        <Button onClick={handleSubmit}>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm;