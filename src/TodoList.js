import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return this.props.todoList.map((e) => (
      <Todo        
        text={e.text}
        priority={e.priority}
        dueDate={e.dueDate.toString()}
      />
    ));
  }
}

export default TodoList;