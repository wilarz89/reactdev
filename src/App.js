import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Take out trash',
        completed:true
      },
      {
        id:2,
        title:'Cook food',
        completed:false
      },
      {
        id:3,
        title:'Buy groceries',
        completed:false
      },
    ]
  }

  markComplete =(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  render() {
    return (
      <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
