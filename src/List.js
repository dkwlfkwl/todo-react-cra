import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    const { todos, moveTodo, changeCompleted, deleteTodo } = this.props;

    return(
      <ul className="list">
        {todos.map((item, index) => (
          <Item
            key={item.id}
            todos={item}
            index={index}
            moveTodo={moveTodo}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
}

export default List;