import React from 'react';
import './Todo.css';
import { ListItem, List, ListItemText } from '@material-ui/core';

const Todo = (props) => {
  return (
    <List className="todo-list">
      <ListItem>
        <ListItemText primary={props.text} secondary="Todo" />
      </ListItem>
    </List>
  );
};

export default Todo;
