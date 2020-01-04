import React from 'react';

class Item extends React.Component {

  moveTodoHandler = (index, dir) => {
    this.props.moveTodo(index, dir)
  }

  changeCompletedHandler = () => {
    this.props.changeCompleted(this.props.todos.id);
  }

  deleteTodoHandler = () => {
    this.props.deleteTodo(this.props.todos.id);
  }

  render() {
    return(
      <li className={this.props.todos.completed ? 'completed' : ''}>
        {this.props.todos.text}
        <button type="button" className="btn-up" onClick={this.moveTodoHandler.bind(this, this.props.index, -1)}>위로</button>
        <button type="button" className="btn-down" onClick={this.moveTodoHandler.bind(this, this.props.index, 1)}>아래로</button>
        <button type="button" className="btn-completed" onClick={this.changeCompletedHandler}>토글</button>
        <button type="button" className="btn-delete" onClick={this.deleteTodoHandler}>삭제</button>
      </li>
    );
  }
}

export default Item;