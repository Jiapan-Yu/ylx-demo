import React, { Component } from 'react'
import { observable, computed, autorun, action, configure } from 'mobx'

configure({
  enforceActions: 'always'  // "never" "observed" "always"
})

class Cart {
  @observable itemCount = 0;
  @observable.shallow items = [];
  @observable modified = new Date();

  @computed get description() {
    switch (this.items.length) {
      case 0:
        return `There are no items in the cart`
      case 1:
        return `There is one item in the cart`
      default:
        return `There are ${this.items.length} items in the cart`
    }
  }
}

let cart = new Cart()

autorun(() => {
  console.log(`${cart.description} ${cart.modified}`)
})

// Create the actions
const incrementCount = action(() => {
  cart.items.push(cart.itemCount++)
})

const addItem = action((name, quantity) => {
  const item = cart.items.find(x => x.name === name)
  if (item) {
    item.quantity += 1
  } else {
    cart.items.push({ name, quantity })
  }

  cart.modified = new Date()
})

const removeItem = action(name => {
  const item = cart.items.find(x => x.name === name)
  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      cart.items.removeItem(item)
    }

    cart.modified = new Date()
  }
})

// Modifying observables outside of an action
const test = action(() => {
  cart.items.push({ name: 'test', quantity: 1 })
  cart.modified = new Date()
})
test()

// Invoke actions
console.log("Before timeout: " + new Date())
setTimeout(addItem, 1000, 'balloons', 2)
setTimeout(addItem, 2000, 'paint', 2)
setTimeout(removeItem, 3000, 'paint')

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