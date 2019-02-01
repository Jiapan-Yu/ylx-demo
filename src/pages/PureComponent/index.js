import React, { Component } from 'react'
import Numbers from './numbers'

class PureComponent extends Component {
  render() { 
    return ( 
      <div className="App">
        <Numbers />
      </div>
    );
  }
}
 
export default PureComponent;