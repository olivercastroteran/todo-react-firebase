import React, { useState } from 'react';
import './Todo.css';
import { ListItem, List, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
  const [open, setOpen] = useState(false);

  const style = {
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    padding: '1rem',
    border: 'none',
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div style={style}>
          <h1>Modal</h1>
          <button onClick={(e) => setOpen(false)}>Close</button>
        </div>
      </Modal>
      <List className="todo-list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="Todo" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
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
