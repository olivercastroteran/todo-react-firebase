import React from 'react';
import './Todo.css';
import { ListItem, List, ListItemText, Button } from '@material-ui/core';
import db from './firebase';

const Todo = (props) => {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary="Todo" />
      </ListItem>
      <Button
        onClick={(e) => db.collection('todos').doc(props.todo.id).delete()}
        color="secondary"
        variant="outlined"
      >
        Delete Me
      </Button>
    </List>
  );
};

export default Todo;
