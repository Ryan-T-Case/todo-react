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

  // CREATE New Todo
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.input]
    })
  }

  // UPDATE a Todo

  // DELETE a Todo
  deleteTodo = (event) => {
    this.setState({todos: this.state.todos.filter(function(todo) { 
      return todo !== event.target.id 
  })});
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
