import React, { Component } from 'react';

class Item extends Component {

  upMoveTodo = () => {
    this.props.moveTodo(this.props.id, 'up')
  }

  downMoveTodo = () => {
    this.props.moveTodo(this.props.id, 'down')
  }

  toggleCompletedHandler = () => {
    this.props.toggleCompleted(this.props.id);
  }

  deleteTodoHandler = () => {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const { title, completed } = this.props;

    return(
      <li className={completed ? 'completed' : ''}>
        {title}
        <button type="button" className="btn-up" onClick={this.upMoveTodo}>위로</button>
        <button type="button" className="btn-down" onClick={this.downMoveTodo}>아래로</button>
        <button type="button" className="btn-completed" onClick={this.toggleCompletedHandler}>토글</button>
        <button type="button" className="btn-delete" onClick={this.deleteTodoHandler}>삭제</button>
      </li>
    );
  }
}

export default Item;