import React, { useEffect, useState } from 'react'
import Input from '../Input'
import useForm from '../../Hooks/useForm'
import Button from '../Button'
import { PASSWORD_RESET } from '../service/api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Error'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const { loading, error, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)

  }, [])

  async function handleSubmit(event) {
    event.preventDefault()

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({ login, key, password: password.value })
      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <section>
      <p className='title'>LoginPasswordReset</p>
      <h1>Resete Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset;