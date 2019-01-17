import React, { Component } from 'react'
import { observable, action, autorun } from 'mobx'

class Cart {
  @observable modified = new Date()
  @observable.shallow items = []

  cancelAutorun = null

  constructor() {
    this.cancelAutorun = autorun(() => {
      console.log(`Items in Cart: ${this.items.length}`)
    })
  }

  @action addItem(name, quantity) {
    this.items.push({ name, quantity })
    this.modified = new Date()
  }
}

let cart = new Cart()
// 1. Cancel the autorun side-effect
cart.cancelAutorun()

// 2. The following will not cause any logging to happen
cart.addItem('Power Cable', 1)
cart.addItem('Shoes', 1)

class MobX extends Component {
  state = {

  }

  componentDidMount() {
    // setInterval(incrementCount, 1000)
  }
  render() {
    return (
      <p>mobx learning</p>
    );
  }
}

export default MobX;