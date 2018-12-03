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

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    const { clearComplete, filter, filteredTodos } = this.props.todoStore

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type='checkbox' onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />{todo.value}
      </li>
    ))
    return <div>
      <h1>todos</h1>
      <input className='create' placeholder='add item' onKeyPress={this.createNew.bind(this)} />
      <input className='filter' placeholder='filter' value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
      <a onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}
