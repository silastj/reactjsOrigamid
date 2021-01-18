import React from 'react';

const Titulo = ({texto}) => {
    return (
        <section>
            <h1 style={{color:'green'}}>
                {texto}
            </h1>
        </section>
    )
}
export default Titulo;