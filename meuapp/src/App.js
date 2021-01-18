import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Prod from './Components/Produtos/Produtos';
import Home from './Home';


const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];
const primario ={
  fontSize:60,
  fontWeghit:'bold',
  backgroundColor:'blue'
}
const primarioTwo = {
  fontSize:48
}

const corRed = {
  color:'red',
  fontSize:36
}
const livros = [
  {nome: 'Livro01', preco: 100},
  {nome:'Livro02', preco:200},
  {nome:'Livro03', preco:300}
]
const luana = {
  cliente: 'Luana',
  idade: 30,
  compras: [
    {nome: 'Notebook', preco: 'R$ 1000'},
    {nome: 'Gelaeira', preco: 'R$ 4000'},
    {nome: 'Mesa', preco: 'R$ 4000'}
  ],
  ativa: false
};

const mario = {
  cliente: 'Mario',
  idade: 33,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2000'},
    {nome: 'Gelaeira', preco: 'R$ 1000'},
    {nome: 'Mesa', preco: 'R$ 2000'}
  ],
  ativa: true
};

const Paragrafo = ({cor, texto, children}) => {
  return (
      <p style={{color: cor}}>{texto} {children}</p>
  )
}

const Tudo = ({label, id, ...props}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' {...props}/>
    </>
  )
}

const App = () =>{

  let Pagina = Home;
  const {pathname} = window.location;
  // {{pathname} === '/produtos' ? Prod : Home};
  if(pathname === '/produtos'){
    Pagina = Prod
  }else {
    Pagina = Home
  }

  const dados = mario;
  const total = dados.compras
  .map(item =>  Number(item.preco
  .replace('R$ ', '')))     
  .reduce((a,b) => a + b)

  //função externa filtrando por maior de 1500
  const resProdutos = produtos.filter(({preco}) => Number(preco.replace('R$ ', '') > 1000))
  // console.log(resProdutos)

  //function do btn
  function handleCLick(event){
    console.log(event.target)
  }

  return(
    <>
    {/* <Header/>
    <Pagina/>
    <Paragrafo cor="red" texto="O paragrafo numero um"/>
    <Paragrafo cor="blue" texto="O paragrafo numero dois"/>
    <Paragrafo cor="green">O paragrafo numero tres</Paragrafo>
      <p>Nome : {dados.cliente}</p>
      <p>Idade : {dados.idade}</p>
      <p> Situação :
        <span style={{color: dados.ativa ? 'green' :'red'}}>{dados.ativa? 'Ativado' : 'Desativado'}</span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {total> 10000 &&<p>'Passou'</p>}
      <ul>{livros.map(livro => <li key={livro.nome}>{livro.nome} {livro.preco}</li>)}</ul>
      
      <ul>{livros
            .filter(({ preco }) => preco > 200)
            .map(({nome, preco}) => (
              <li key={nome}>
                {nome}, {preco}
              </li>
            ))}
      </ul> */}

      {/* PRODUTOS */}
      
      {/* <section>
        {resProdutos.map((produto) => produto.id)} podemos fazer assim tb
        {resProdutos.map(({id, nome, preco, cores }) => (
            <div ke={id}>
                <h1>{nome}</h1>
                <p>Preço: {preco}</p>
                <ul>
                  {cores.map((cor) =>(
                    <li style={{backgroundColor:cor, color:'white'}} key={cor}>{cor}</li>
                  ))}
                </ul>
            </div>
        ))}         
      </section> */}
      {/* <section>
        <button onClick={handleCLick} onMouseMove={handleCLick}>Clique</button>
        <button onClick={(event) => alert(event.target.innerText)}>COMPRAR</button>
      </section> */}
      {/* <Tudo type="password" required/>
      <Footer/> */}
    </>
  )
}


// function App() {
//   const numero = Math.random()
//   const title = <h1>O meu titulo</h1>
//   return (    
//     <div>
//       {title}
//       <p>{numero * 100}</p>
//         <h1 style={corRed}>Olá Mundo</h1>
//     </div>
//   );
// }
export default App;
