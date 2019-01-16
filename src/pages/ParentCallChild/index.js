import React, { Component } from 'react'
import HelloMessage from './child.js'

//父组件
class ParentComponent extends Component {
  getDS = () => {
    //调用组件进行通信
    this.refs.getSwordButton.childMethod();
  }

  render() {
    return (
      <div>
        <HelloMessage name="John" ref="getSwordButton" />
        <button onClick={() => this.getDS()}>父组件</button>
      </div>
    );
  }
}

export default ParentComponent;