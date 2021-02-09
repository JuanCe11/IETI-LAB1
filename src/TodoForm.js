import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', priority:'', dueDate: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          

          <input
            id="text"
            placeholder="text"
            onChange={this.handleChange}
          />
          <input
            id="priority"
            placeholder="priority"
            onChange={this.handleChange}
          />
          <h3>Due Date</h3>
          <input
            type="date"
            id="dueDate"
            onChange={this.handleChange}
          />
          <button>
            Add Todo
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value,});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length||!this.state.priority.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.props.addTodo(newItem);
  }
}

export default TodoForm;