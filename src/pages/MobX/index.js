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

  @action.bound addItem(name, quantity) {
    const item = this.items.find(x => x.name === name)
    if (item) {
      item.quantity += 1
    } else {
      this.items.push({ name, quantity })
    }
  
    this.modified = new Date()
  }

  @action.bound removeItem(name){
    const item = this.items.find(x => x.name === name)
    if (item) {
      item.quantity -= 1;
  
      if (item.quantity <= 0) {
        this.items.removeItem(item)
      }
  
      this.modified = new Date()
    }
  }
}

let cart = new Cart()

autorun(() => {
  console.log(`${cart.description} ${cart.modified}`)
})

// Modifying observables outside of an action
const test = action(() => {
  cart.items.push({ name: 'test', quantity: 1 })
  cart.modified = new Date()
})
test()

// Invoke actions
console.log("Before timeout: " + new Date())
setTimeout(cart.addItem, 1000, 'balloons', 2)
setTimeout(cart.addItem, 2000, 'paint', 2)
setTimeout(cart.removeItem, 3000, 'paint')

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