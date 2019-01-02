import React, { Component } from 'react'
import './index.less'

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false
    }
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    if (!nextState.show) {
      document.getElementById('fade').style = 'opacity: 1;'
    } else {
      document.getElementById('fade').style = 'opacity: 0;'
    }
  }

  toggleCollapse = () => {
    this.setState({
      show: !this.state.show
    })
  }
  
  render() { 
    return ( 
      <div className="Animation">
        <button onClick={this.toggleCollapse}>
          {this.state.show ? 'Collapse' : 'Expand'}
        </button>
        <div id="fade" className={this.state.show ? 'transition show' : 'transition'} >
          This text will disappear
        </div>
      </div>
    );
  }
}
 
export default Animation;
