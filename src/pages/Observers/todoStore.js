import { computed, observable } from 'mobx'

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs']
  @observable filter = ''
  @computed get filteredTodos() {// 'computed' will fire very lazily whenever it's needed to fire
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
  }

  createTodo(value) {
    this.todos.push(value)
  }
}

let todoStore = window.store = new TodoStore

export default todoStore
