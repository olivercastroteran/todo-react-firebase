import React, { useState } from 'react';
import './Todo.css';
import { ListItem, List, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Todo = (props) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const style = {
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '1rem',
    border: '0',
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div style={style}>
          <h1>Modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={updateTodo}>Update Todo</button>
        </div>
      </Modal>
      <List className="todo-list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Todo" />
        </ListItem>
        <EditIcon className="edit-btn" onClick={(e) => setOpen(true)}>
          Edit
        </EditIcon>
        <DeleteIcon
          className="delete-btn"
          onClick={(e) => db.collection('todos').doc(props.todo.id).delete()}
          color="secondary"
          variant="outlined"
        />
      </List>
    </>
  );
};

export default Todo;
