import React from 'react';
import Titulo from '../../Titulo';



const Prod = () => {  
    const prod = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];
    return (
        <section>
            <Titulo texto="Você está na página Produtos" />            
            <ul>{prod.map(p => (                
                <li>{p.nome}{p.propriedades}</li>
            ))}</ul>           
        </section>
    )
}

export default Prod