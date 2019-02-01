import React, { PureComponent } from 'react'

// const Result = props => <li>{props.result}</li>

class Result extends PureComponent {
  render() { 
    return (
      <li>{this.props.result}</li>
    );
  }
}

export default Result;