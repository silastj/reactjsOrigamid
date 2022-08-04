import React, { useContext } from 'react';
import Input from '../Input';
import Button from '../Button'
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../service/api'
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Error from '../Error';

const LoginCreate = () => {

  const { userLogin } = useContext(UserContext)
  const { loading, error, request } = useFetch()
  const username = useForm();
  const password = useForm();
  const email = useForm('email');

 async function handleSubmit(e){
    e.preventDefault();
    const {url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })

    const {response} = await request(url, options)
    if(response.ok) userLogin(username.value, password.value)
    console.log('enviou', response)
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
           {loading & loading ?(
             <Button>Cadastrando...</Button>
           ):(
             <Button>Cadastre-se</Button>
           ) 
           }
           {error &&
            <Error error={error} />
           }
      </form>
    </section>
  )
}

export default LoginCreate;