import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../Input/index';
import Button from '../Button/index';

const LoginForm = () => {


  function handleSubmit(event){
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(),
    }).then((response) => {
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json)
    })
  }
  return(
    <section>
      <h1>Login Dogs</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          label="Nome"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
        />
        
      </form>
        <Button onClick={handleSubmit}>Entrar</Button>
      {/* <Link to="/login/criar">Cadastro</Link> */}
    </section>
  )
}

export default LoginForm;