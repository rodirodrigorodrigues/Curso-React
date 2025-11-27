import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MakingRequests() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(res => setTodos(res.data))
  }, [])
  return (
    <div>
      {
        todos.map(todo => {
          return <p>{todo.title}</p>
        })
      }
    </div>
  );
}