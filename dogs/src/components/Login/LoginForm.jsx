import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/index";
import Button from "../Button/index";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Login Dogs</h1>
      <form action="" onSubmit={handleSubmit} className="form">
        <Input
          type="text"
          name="username"
          label="Nome"
          placeholder="dog"
          {...username}
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          placeholder="dog"
          {...password}
        />
        {loading ? (
          <Button onClick={handleSubmit}>Carregando ...</Button>
        ) : (
          <Button onClick={handleSubmit}>Entrar</Button>
        )}
        {error && <Error error={error} />}
      </form>
      <Link to="/login/perdeu">Perdeu a senha?</Link>
      <div>
        <h2 className="title">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site. </p>
      </div>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
