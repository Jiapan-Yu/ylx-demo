import React from 'react';
import { observer, inject } from "mobx-react";

@inject('timerData')
@observer 
class Timer extends React.Component {
  
  render() {
    return (<span>Seconds passed: {this.props.timerData.secondsPassed} </span>)
  }
};

export default Timer;
