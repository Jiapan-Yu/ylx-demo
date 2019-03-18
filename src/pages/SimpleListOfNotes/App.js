import React, { Component } from 'react'
import Notes from './index.js'

// This is our fake data...
import { notes1, notes2 } from './data.js'

class SimpleListOfNotes extends Component {
  constructor(props) {
    super(props);

    // The first time we load the notes1...
    this.state = {
      notes: notes1
    }
  }

  componentDidMount() {
    // After 10 seconds (10000 milliseconds) we concatenate our
    // data with notes2...
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      });
    }, 10000);
  }

  render() {
    return (
      <div>
        <Notes notes={this.state.notes} />
      </div>
    );
  }

  componentWillUnmount() {
    document.body.style = 'background: black;'
    document.getElementById('unmountMessage').style.color = 'white'
  }
}

export default SimpleListOfNotes;
