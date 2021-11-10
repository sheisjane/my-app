import React, {Component} from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: 'dog walk'
        }
      ]
    }
  }

  handleAddClick(text) {
    this.setState({
      list: [...this.state.list, {text}]
    })
  }
  handleDeleteClick(id) {
    let list = this.state.list;
    list.splice(id, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div style={{margin: '20px'}}>
        <TodoInput onclick={text => this.handleAddClick(text)}/>
        <TodoList list={this.state.list}
                  onDelete={ id => this.handleDeleteClick(id)}
        />
      </div>
    );
  }
}

export default App;
