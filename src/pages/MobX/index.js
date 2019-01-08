import React, { Component } from 'react'
import { observable, autorun, action } from 'mobx'

let cart = observable({
  itemCount: 0,
  modified: new Date()
})

autorun(() => {
  console.log(`The Cart contains ${cart.itemCount} item(s).`)
})

const incrementCount = action(() => {
  cart.itemCount++
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
