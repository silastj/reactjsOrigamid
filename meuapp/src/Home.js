import React from 'react';
import Titulo from './Titulo';

const Home = ({texto}) => {
    return (
        <section>
            <Titulo texto="Home"/>
            <p>Essa é a Home</p>
        </section>
    )
}

export default Home;