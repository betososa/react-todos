import React from 'react';

export default class CreateTodo extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null
    }
  }

  renderError() {
    if (!this.state.error) { return null }
    return <div style={{ color: 'red' }}> {this.state.error} </div>;
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What todo?" ref="createInput"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    )
  }
  handleCreate(e) {
    e.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateTask(task);

    if (validateInput) {
      return this.setState({
        error: validateInput
      })
    }

    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  validateTask(task) {
    if (!task) {
      return 'Please enter task'
    } else if ( _.find(this.props.todos, todo => todo.task === task) ) {
      return 'Already there'
    } else {
      return null;
    }
  }


}