import React, { Component } from 'react';

import TodoItem from './TodoItem.js';
import './TodoList.css';

class TodoListView extends Component {
  render() {
    return (
      <div className='todo-list'>
        {this.props.todos.map(item => {
          return (<TodoItem key={item.id} id={item.id} />);
        })}
      </div>
    )
  }
}

export default TodoListView;
