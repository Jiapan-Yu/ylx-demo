import './index.css'
import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('todoStore')
@observer
export default class TodoList extends React.Component {
  render() {
    return <h1>{this.props.todoStore.todos[1]}</h1>
  }
}
