import React, { Component } from 'react';
import './todo.css';
import List from './list'
import uuidv4 from 'uuid/v4';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      items: []
    }
  }

  componentWillMount() {
    if (localStorage.getItem('tasks')) {
      const tasksArr = localStorage.getItem('tasks').split('&');

      const items = [];
      for (let i = 0; i < tasksArr.length; i++) {
        const obj = JSON.parse(tasksArr[i])
        items.push(obj);
      }

      this.setState({ items });
    }
  }

  handleOnChange = e => {
    const { target: { value } } = e;

    // Updating our task state with the input value...
    this.setState({
      task: value
    });
  }

  handleOnSubmit = e => {
    // Prevent default to avoid the actual form submit...
    e.preventDefault();

    // Once is submited we reset the task value and we push
    // the new task to the items array
    if (this.state.task.trim() !== '') {
      this.setState({
        task: '',
        items: [
          ...this.state.items,
          {
            id: uuidv4(),
            task: this.state.task,
            completed: false
          }
        ]
      }, () => {
        const tasksArr = [];
        for (let i = 0; i < this.state.items.length; i++) {
          let task = JSON.stringify(this.state.items[i], { encode: false })
          tasksArr.push(task);
        }
        localStorage.setItem('tasks', tasksArr.join("&"));
      });
    }
  }

  markAsCompleted = id => {
    // Finding the task by id...
    const foundTask = this.state.items.find(
      task => task.id === id
    );

    // Updating the completed status...
    foundTask.completed = true;

    // Updating the state with the new updated task...
    this.setState({
      items: [
        ...this.state.items,
        ...foundTask
      ]
    }, () => {
      const tasksArr = [];
      for (let i = 0; i < this.state.items.length; i++) {
        let task = JSON.stringify(this.state.items[i], { encode: false })
        tasksArr.push(task);
      }
      localStorage.setItem('tasks', tasksArr.join("&"));
    });
  }

  removeTask = id => {
    // Filtering the tasks by removing the specific task id...
    const filteredTasks = this.state.items.filter(
      task => task.id !== id
    );

    // Updating items state...
    this.setState({
      items: filteredTasks
    }, () => {
      const tasksArr = [];
      for (let i = 0; i < this.state.items.length; i++) {
        let task = JSON.stringify(this.state.items[i], { encode: false })
        tasksArr.push(task);
      }
      localStorage.setItem('tasks', tasksArr.join("&"));
    });
  }

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input
            value={this.state.task}
            onChange={this.handleOnChange}
          />
        </form>

        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
