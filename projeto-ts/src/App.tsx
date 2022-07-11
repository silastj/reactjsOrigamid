import React from 'react';
import './App.css';
import Button from './components/Button/index'
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Button
      text="Entrar"
     />
    </div>
  );
}

export default App;
