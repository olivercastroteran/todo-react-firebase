import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // fetch data from database add/remove
  useEffect(() => {
    // code that fires when app.js loads
    db.collection('todos').onSnapshot((snapshot) => {
      //console.log(snapshot.docs.map((doc) => doc.data()));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
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
