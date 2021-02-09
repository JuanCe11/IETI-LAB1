import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends Component {
  state = {
    todos: [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }],
  };
  addTodo = (item)=>{
    console.log("ESTAMOS DESDE APP",item);
    this.setState({todos: [...this.state.todos, item]})
  }
  render(){
    return (
      <div>
        <h1>Add new TODO</h1>
        <TodoForm addTodo={this.addTodo}/>
        <h1>TODO List</h1>
        <TodoList todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
