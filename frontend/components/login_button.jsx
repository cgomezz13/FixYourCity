import React, { Component } from 'react';

export default class LoginButton extends Component {
  constructor(props) {
    super(props)
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin (e) {
    this.props.login({
      user: {
        username: 'demo_user',
        password: 'starwars'
      }
    })
  }

  render () {
    return (
      <form
        className="login-button"
        onSubmit={this.submitLogin}
        >
        <button
          value="Demo User"
          >
          Demo User
        </button>
      </form>
    )
  }
}
