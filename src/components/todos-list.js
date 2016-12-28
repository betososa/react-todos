import React from 'react';
import _ from 'underscore';
import TodosListHeader from './todos-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todo, index) => {
      return <TodosListItem key={index} {...todo} {...props} />
    })
  }
  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}