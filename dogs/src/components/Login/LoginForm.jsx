import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../Input/index';
import Button from '../Button/index';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';


const LoginForm = () => {

  const username = useForm();
  const password = useForm();

  const {userLogin}= useContext(UserContext);

  async function handleSubmit(event){
    event.preventDefault();
    if(username.validate() && password.validate()) {
     userLogin(username.value, password.value)     
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