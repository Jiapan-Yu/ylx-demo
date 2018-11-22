import { computed, observable } from 'mobx'

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class TodoStore {
  @observable todos = []
  @observable filter = ''
  @computed get filteredTodos() {// 'computed' will fire very lazily whenever it's needed to fire
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  createTodo(value) {
    let newTodo = new Todo(value)
    this.todos.push(newTodo)
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos) // don't know why here can use 'replace' method on an array
  }
}

let todoStore = window.store = new TodoStore()

export default todoStore
