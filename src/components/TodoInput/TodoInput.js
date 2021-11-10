
import React, {Component} from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleAddClick() {
    // eslint-disable-next-line no-unused-expressions
    this.props.onclick ? this.props.onclick(this.state.value) : null
    this.setState({
      value: ''
    })
  }

  handleChange(e) {
    this.setState({
      value:e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.value}
               onChange={ e => this.handleChange(e)}
        />
        <button onClick={() => this.handleAddClick()}>add</button>
      </div>
    );
  }
}

export default TodoInput;
