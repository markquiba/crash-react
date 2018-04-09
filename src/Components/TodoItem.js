import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>: - {String(this.props.todo.completed)}
      </li>
    );
  }
}

export default TodoItem;
