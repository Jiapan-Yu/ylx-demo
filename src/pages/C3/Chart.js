import React, { Component } from 'react'
import c3 from 'c3'

class Chart extends Component {
  componentDidMount() {
    // When the component mounts the first time we update
    // the chart
    this.updateChart()
  }

  componentDidUpdate(prevProps, prevState) {
    // When we receive a new prop then we update the chart again
    this.updateChart()
  }

  updateChart() {
    c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    })
  }

  render() {
    return <div id="chart" />
  }
}

export default Chart
