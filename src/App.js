import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';
import Header from './components/layout/Header';

import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id:uuid.v4(),
        title:'Take out trash',
        completed:true
      },
      {
        id:uuid.v4(),
        title:'Cook food',
        completed:false
      },
      {
        id:uuid.v4(),
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
  delTodo =(id)=>{
     this.setState({todos:[...this.state.todos.filter(todo=> todo.id!==id)]});
  }

  AddTodos =(title)=>{
    const newTodo = {
       id:uuid.v4(),
       title,
       completed: false,
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header/>
        <AddTodos AddTodos={this.AddTodos}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
