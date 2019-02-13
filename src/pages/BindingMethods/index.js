import React, { Component } from 'react'
import './index.less'

class BindingMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      result: 0
    }
  }

  handleOnChange = e => {
    const { target: { value, name } } = e
    
    this.setState({
      [name]: Number(value) // computed property name
    })
  }

  handleResult = e => {
    this.setState({
      result: this.state.number1 + this.state.number2
    })
  }

  render() {
    return ( 
      <div className="Calculator">
        <input
          onChange={this.handleOnChange}
          name="number1"
          type="text"
          value={this.state.number1}
        />
        {' + '}
        <input
          onChange={this.handleOnChange}
          name="number2"
          type="text"
          value={this.state.number2}
        />
        <p><button onClick={this.handleResult} >=</button></p>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}

export default BindingMethods;
