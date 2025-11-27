import React, { useState, useEffect } from 'react';

export default function HookEffect() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `Contador ${count}`
    // }) // Quando qualquer estado na tela atualizar
    useEffect(() => {
        document.title = `Contador ${count}`
    }, [count]) // Somente quando o estado count na tela atualizar
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar +</button>
            <button onClick={() => setCount(count - 1)}>Decrementar -</button>
        </div>
    );
}