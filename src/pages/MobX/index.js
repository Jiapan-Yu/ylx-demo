import React, { Component } from 'react'
import { observable, action, when } from 'mobx'

class Inventory {
  @observable items = []

  cancelTracker = null

  async trackAvailability(name) {
    // 1. Wait for availability
    await when(
      () => {
        const item = this.items.find(x => x.name === name)
        return item ? item.quantity > 0 : false
      })
    // console.log(`${name} is now available`)
  }

  @action addItem(name, quantity) {
    const item = this.items.find(x => x.name === name)
    if (item) {
      item.quantity += quantity
    } else {
      this.items.push({ name, quantity })
    }
  }
}

const inventory = new Inventory()

inventory.addItem('Shoes', 0)
inventory.trackAvailability('Shoes')

// 2. Add two pairs
inventory.addItem('Shoes', 2)

// 3. Add one more pair
inventory.addItem('Shoes', 1)

class MobX extends Component {
  state = {

  }

  componentDidMount() {
    // setInterval(incrementCount, 1000)
  }
  render() {
    return (
      <div>
        <p>mobx learning</p>
      </div>
    );
  }
}

export default MobX;