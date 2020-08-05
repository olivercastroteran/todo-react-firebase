import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take trash out',
    'Build a todo app',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    console.log('test');
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Todo React App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button>Add Todo</button> */}
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={Math.random()}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
