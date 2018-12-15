import React, { Component } from 'react'
import Notes from './index.js'

// This is our fake data...
import { notes1, notes2 } from './data.js'
import './App.css'

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
}

export default SimpleListOfNotes;
