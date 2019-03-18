import React, { Component } from 'react' // eslint-disable-line
import axios from 'axios'

class AxiosTest extends Component {

  componentDidMount() {
    this.init()
  }

  init() {
    axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      responseType: 'json',
      data: 'a string'
    })
    .then(response => {
      console.log(response) // eslint-disable-line
    })
  }

  render() { 
    return ( 
      <h4>axios test page</h4>
    )
  }
}
 
export default AxiosTest
