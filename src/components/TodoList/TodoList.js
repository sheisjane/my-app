
import React, {Component} from 'react';
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.list && this.props.list.map((item, idx) => {
            return (
              <TodoItem key={idx}
                        text={item.text}
                        onClick={() =>
 this.props.onDelete ? this.props.onDelete(idx) : null}
              />
            )
          })
        }
      </ul>
    );
  }
}

export default TodoList;
