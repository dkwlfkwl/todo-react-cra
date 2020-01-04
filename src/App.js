import React from 'react';
import Form from './Form';
import List from './List';
class App extends React.Component {

  state = {
    todos: []
  }

  componentDidMount() {
    if(localStorage.getItem('todolist') !== null) {
      this.setState({
        todos: JSON.parse(localStorage.getItem('todolist'))
      });
    } else {
      localStorage.setItem('todolist', JSON.stringify([]));
    }
    
  }

  componentDidUpdate() {
    localStorage.setItem('todolist', JSON.stringify(this.state.todos));
  }

  insertNewTodo = (value) => {
    const newItem = {
      id: new Date().valueOf(),
      text: value.trim(),
      completed: false
    };

    this.setState({
      todos: this.state.todos.concat(newItem)
    });
  }

  deleteTodo = (id) => {
    this.setState((state) => (
      { todos: state.todos.filter((item) => (item.id !== id)) }
    ));
  }

  changeCompleted = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if(item.id === id) item.completed = !item.completed;

        return item;
      })}
    ));
  }

  moveTodo = (index, dir) => {
    const targetIndex = index;
    const direction = dir;
    let insertIndex;

    if(targetIndex === 0 && direction === -1) {
      if(targetIndex === this.state.todos.length - 1 && direction === 1) {
        return false;
      }
    }

    if(targetIndex >= 0) {
      insertIndex = targetIndex + direction;
    } else {
      insertIndex = targetIndex
    }

    this.setState((state) => {
      state.todos.splice(insertIndex, 0, state.todos.splice(targetIndex, 1)[0]);

      return {
        todos: state.todos
      }
    });
  }

  render() {
    return (
      <div className="todo">
        <Form insertNewTodo={this.insertNewTodo} />
        <List
          todos={this.state.todos}
          moveTodo={this.moveTodo}
          changeCompleted={this.changeCompleted}
          deleteTodo={this.deleteTodo}
        />
      </div>
    )
  }
}

export default App;