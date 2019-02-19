import React, { Component } from 'react'
import './index.less'

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastName: false
      }
    }
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()

    const { firstName, lastName, email, phone } = this.state

    // If firstName or lastName is missing then we update the
    // local state with true
    this.setState({
      errors: {
        firstName: firstName === '',
        lastName: lastName === ''
      }
    })

    const data = {
      firstName,
      lastName,
      email,
      phone
    }

    console.log('Data:', data)
  }

  render() {
    return (
      <div className="Person">
        <form onSubmit={this.handleOnSubmit} >
          <div>
            <p><strong>First Name:</strong></p>
            <p><input className={this.state.errors.firstName ? 'error' : ''} name="firstName"
              type="text" onChange={this.handleOnChange} value={this.state.firstName} />
              {this.state.errors.firstName ? <div className="errorMessage">Required field</div> : ''}
            </p>
          </div>

          <div>
            <p><strong>Last Name:</strong></p>
            <p><input className={this.state.errors.lastName ? 'error' : ''} name="lastName"
              type="text" onChange={this.handleOnChange} value={this.state.lastName} />
              {this.state.errors.lastName ? <div className="errorMessage">Required field</div> : ''}
            </p>
          </div>

          <div>
            <p><strong>Email:</strong></p>
            <p><input name="email" type="email" onChange={this.handleOnChange} value={this.state.email} /></p>
          </div>

          <div>
            <p><strong>Phone:</strong></p>
            <p><input name="phone" type="tel" onChange={this.handleOnChange} value={this.state.phone} /></p>
          </div>

          <p>
            <button>Save Information</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Person;
