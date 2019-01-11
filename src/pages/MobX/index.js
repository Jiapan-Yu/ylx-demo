import React, { Component } from 'react'
import { observable, computed, autorun, action } from 'mobx'

function countdown() {
  let i
  console.log("Countdown:")
  for(i=5; i>=0; i--) { // i need to be declared here
    setTimeout(function() {
      console.log(i===0 ? "GO!" : i)
    }, (5-i)*1000)
  }
}

countdown()

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
