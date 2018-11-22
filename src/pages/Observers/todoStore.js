import { observable } from 'mobx'

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs']
  @observable filter = ''
}

let todoStore = window.store = new TodoStore

export default todoStore
