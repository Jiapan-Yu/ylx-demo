import React, { Component } from 'react'
import { observable, autorun, action } from 'mobx'

let cart = observable({
  itemCount: 0,
  items: [],
  modified: new Date(),

  get description() {
    switch (this.items.length) {
      case 0:
        return 'There are no items in the cart'
      case 1:
        return 'There is one item in the cart'
      default:
        return `There are ${this.items.length} items in the cart`
    }
  }
})

autorun(() => {
  console.log(`${cart.description}`)
})

const incrementCount = action(() => {
  cart.items.push(cart.itemCount++)
})

class MobX extends Component {
  state = {

  }

  componentDidMount() {
    setInterval(incrementCount, 1000)
  }
  render() {
    return (
      <p>mobx learning</p>
    );
  }
}

export default MobX;
