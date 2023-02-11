import React from 'react'
import Input from '../Input/index'
import Button from '../Button/index'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_LOST } from '../service/api'
import Error from '../Error'

const LoginPasswordLost = () => {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  function handleSubmit(event) {
    event.preventDefault()

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      request(url, options)
    }
  }

  return (
    <section>
      <p className='title'>LoginPasswordLost</p>
      <h1>Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (<Button disabled>Enviando...</Button>) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost;