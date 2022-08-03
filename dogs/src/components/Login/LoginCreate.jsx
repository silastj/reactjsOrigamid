import React from 'react'
import Input from '../Input';
import Button from '../Button'
import useForm from '../../Hooks/useForm';

const LoginCreate = () => {

  const username = useForm();
  const password = useForm('password');
  const email = useForm('email');

  function handleSubmit(e){
    e.preventDefault();
    console.log('enviou')
  }

  return(
    <section className='loginCreate animeLeft'>
      <p className='title'>Cadastra-se</p>
      <form action="" onSubmit={handleSubmit}>
        <Input 
          type="text"
          placeholder='Digite aqui usuario'
          id="username"
          name="username"
          label="Usuario"
          {...username}
           />
        <Input 
          type="email"
          placeholder='Digite aqui seu email'
          id="email"
          name="email"
          label="E-mail"
          {...email}
           />
        <Input 
          type="password"
          placeholder='Digite aqui a sua senha'
          id="password"
          name="password"
          label="Senha"
          {...password}
           />
        <Button>Cadastre-se</Button>
      </form>
    </section>
  )
}

export default LoginCreate;