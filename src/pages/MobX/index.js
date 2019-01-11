import React, { Component } from 'react'
import { observable, computed, autorun, action } from 'mobx'


function countdown(seconds) {  
  return new Promise(function(resolve, reject) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i===13) return reject(new Error("DEFINITELY NOT COUNTING THAT"))
        if(i>0) console.log(i + '...')
        else resolve(console.log("GO!"))
      }, (seconds-i)*1000)
      console.log(seconds-i)
    }
  })
}



countdown(13).then(
  function() {
    console.log("countdown completed successfully")
  },
  function(err) {
    console.log("countdown experienced an error: " + err.message)
  }
)

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
