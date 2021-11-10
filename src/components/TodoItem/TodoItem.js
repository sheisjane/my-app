import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <p style={{fontSize: '30px', lineHeight: 3}}>
          {this.props.text}
        </p>
      </li>
    );
  }
}

export default TodoItem;
