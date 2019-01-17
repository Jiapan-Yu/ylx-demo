import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action, reaction } from 'mobx'

const item = observable.box(30)

// 1. Create the component with observer
const ItemComponent = observer(() => {
  // 2. Read an observable: item
  return <h1>Current Item Value = {item.get()}</h1>
})

setTimeout(() => item.set(50), 2000)

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
        <ItemComponent />
      </div>
    );
  }
}

export default MobX;