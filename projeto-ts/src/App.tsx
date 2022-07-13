import React, { useState} from 'react';
import './App.css';
import Button from './components/Button/index'
import { Header } from './components/Header';
import Produto from './components/Produtos';


function App() {
  const produtosArray = ['tablet', 'smartphone', 'notebook'];
  const [ dados, setDados ] = useState(null);
  const [carregando, setCarregando] = useState(false);
  
  async function handleClick(e: any) {
    setCarregando(true);
    const res = await fetch(`https://www.ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`,)
    const resposta = await res.json()
    setDados(resposta)
    setCarregando(false);
  }
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
      {!carregando && dados &&
        <Produto dados={dados}/>
      }
    </div>

  );
}

export default App;
