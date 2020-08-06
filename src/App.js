import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

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
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          color="primary"
          disabled={!input}
          type="submit"
          variant="contained"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={Math.random()} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
