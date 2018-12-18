import React, { Component } from 'react'
import moment from 'moment'
import './index.css'

const formatTime = 'YYYY-MM-DD HH:mm:ss'

class Notes extends Component {
  constructor(props) {
    super(props);

    // We save the first date when the data is
    // rendered at the beginning
    this.state = { 
      lastUpdate: moment().format(formatTime).toString()
     }
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    // If the prop notes has changed...
    if (nextProps.notes !== this.props.notes) {
      this.setState({
        lastUpdate: moment().format(formatTime).toString()
      });
    }
  }

  render() {
    const { notes } = this.props

    return (
      <div className="Notes">
        <h1>Notes:</h1>

        <ul>
          {
            notes.map((note, key) => (
              <li key={key}>{note.title} - {note.content}</li>
            ))
          }
        </ul>

        <p>Last Update: <strong>{this.state.lastUpdate}</strong></p>
      </div>
    );
  }
}
 
export default Notes;

