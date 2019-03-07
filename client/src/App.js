import React, { Component } from 'react';
import Todos from './components/Todos';
import Form from './components/Form';

class App extends Component {
  state = {
    todos: ["Save Princess Peach", "Defeat Bowser"],
    input: ""
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.input]
    })
  }

  deleteTodo = (event) => {
    let array = this.state.todos;
    console.log(event.target.value);
    let index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      todos: array
    })
  } 

  render() {
    return (
      <div className="App">
        <h1>Todo List!</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
      </div>
    );
  }
}

export default App;
