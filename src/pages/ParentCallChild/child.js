import React, { Component } from 'react'

//子组件
class HelloMessage extends Component {
  childMethod() {
    alert("组件之间通信成功");
  }
  render() { 
    return <div> <h1>Hello {this.props.name}</h1>  <button onClick={this.childMethod}>子组件</button></div>
  }
}
 
export default HelloMessage;
