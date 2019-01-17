import React, { Component } from 'react'
import { observable, action, reaction } from 'mobx'

class Cart {
  @observable modified = new Date()
  @observable items = []

  cancelPriceTracker = null
  
  trackPriceChangeForItem(name) {
    if (this.cancelPriceTracker) {
      this.cancelPriceTracker()
    }

    // 1. Reaction to track price changes
    this.cancelPriceTracker = reaction(
      () => {
        const item = this.items.find(x => x.name === name)
        return item ? item.price : null
      },
      price => {
        console.log(`Price changed for ${name}: ${price !== null ? price : 0}`)
      }
    )
  }

  @action addItem(name, price) {
    this.items.push({ name, price })
    this.modified = new Date()
  }

  @action changePrice(name, price) {
    const item = this.items.find(x => x.name === name)
    if (item) {
      item.price = price
    }
  }
}

const cart = new Cart()

cart.addItem('Shoes', 20)

// 2. Now track price for "Shoes"
cart.trackPriceChangeForItem('Shoes')

// 3. Change the price
cart.changePrice('shoes', 100)
cart.changePrice('Shoes', 50)

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