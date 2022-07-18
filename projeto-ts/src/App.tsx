import React, { useEffect, useRef, useState} from 'react';
import './App.css';
import Button from './components/Button/index'
import { Header } from './components/Header';
import Produto from './components/Produtos';
import ComponentRef from './components/ComponentRef';
import Notice from './components/Notice';
import Memo from './components/Memo/index'


function App() {
  const produtosArray = ['tablet', 'smartphone', 'notebook'];
  // const [ dados, setDados ] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [ contar, setContar] = useState(0);
  const [valor, setValor] = useState(null);

  const [msg, setMsg] = useState(false);
  const [item, setItem] = useState(0);
  const refInput = useRef<HTMLInputElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  const [numero, setNumero] = useState(0);

  
  async function handleClick(e: any) {
    setCarregando(true);
    const res = await fetch(`https://www.ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,)
    const resposta = await res.json()
    setValor(resposta)
    setCarregando(false);
  }

  useEffect(() => {
    console.log('toda vez que alterar o contar!', contar)
  },[contar])
  
  useEffect(() => {
    console.log('rodou uma vez!')
  },[])

  useEffect(() => {
    document.title = `Total${contar}`
  },[contar]) // ele executa toda vez que essa const é alterada, podemos ter mais de um.

  useEffect(() => {
    fetch('https://www.ranekapi.origamid.dev/json/api/produto/notebook')
    .then((res => res.json()))
    .then((json) => setValor(json))
  },[])

  function handleClickMsg(){
    setMsg(true)
    setItem(item + 1)
    setTimeout(() => {
      setMsg(false)
    }, 2000);
    refInput.current?.focus();
  }

  function handleNumber(){
    return(
      setNumero(numero + 1)
    )
  }

  // console.log('valor', valor)
  return (
    <div className="App">
      <Header />
      <Button
        text="Entrar"
      />
      <hr />
      
      {produtosArray &&
        produtosArray.map((prod: any) => {
          return <button className="produto" key={prod} onClick={handleClick}>{prod}</button>
        })
      }
      {carregando && <p>Carregando ...</p>}
      {!carregando && valor &&
        <Produto valor={valor}/>
      }
      <hr />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      <hr />
      <h2>UseRef</h2>
      <ComponentRef />
      <hr />
      <h2>UseRef</h2>
      {msg &&
        <Notice/>
      }
      <p>{item}</p>
      <button onClick={handleClickMsg} >Adicionar item</button>
      <input type="text" ref={refInput} />
      <hr />
      <hr />
      <h2>Use Memo</h2>
      <button onClick={handleNumber} >Clicar use Memo</button>
      <Memo/>
    </div>

  );
}

export default App;
