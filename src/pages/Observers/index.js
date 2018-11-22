import './index.css'
import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('todoStore')
@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if(e.which === 13) {
      this.props.todoStore.createTodo(e.target.value)
      e.target.value = ''
    }
  }
  filter(e) {
    this.props.todoStore.filter = e.target.value
  }
  render() {
    const { filter, filteredTodos } = this.props.todoStore

    const todoLis = filteredTodos.map(todo => (
      <li>{todo}</li>
    ))
    return <div>
      <h1>todos</h1>
      <input className="create" onKeyPress={this.createNew.bind(this)} />
      <input className='filter' value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
    </div>
  }
}
