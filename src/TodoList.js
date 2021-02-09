import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  
  render() {
    var cont = 0;
    return this.props.todoList.map((e) => (
      <Todo      
        key={cont++}  
        text={e.text}
        priority={e.priority}
        dueDate={e.dueDate.toString()}
      />
    ));
  }
}

export default TodoList;