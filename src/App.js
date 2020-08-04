import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take trash out',
    'Build a todo app',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (e) => {
    console.log('test');
    setTodos([...todos, input]);
  };

  return (
    <div className="App">
      <h1>Todo React App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
