import React, { useState } from 'react';

export default function RenderizacaoCondicional() {
    const [resultado, setResultado] = useState(true);
    return (
        <div>
            {
                (resultado) ?
                    <p style={{color:'green'}}>Aprovado no concurso!</p> :
                    <p style={{color: 'red'}}>Reprovdo no concurso!</p>
            }
        </div>
    );
}