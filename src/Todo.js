import React from 'react';
import './Todo.css';
import { ListItem, List, ListItemText } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Todo" />
      </ListItem>
      <DeleteIcon
        onClick={(e) => db.collection('todos').doc(props.todo.id).delete()}
        color="secondary"
        variant="outlined"
      />
    </List>
  );
};

export default Todo;
