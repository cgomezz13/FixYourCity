import React, { Component } from "react";

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null
    };
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();
    this.props
      .login({
        username: "demo_user",
        password: "starwars"
      })
      .then(this.props.history.push("/"), err => {
        this.setState({
          errors: err.resposeText
        });
      });
  }

  render() {
    return (
      <form className="login-button" onSubmit={this.submitLogin}>
        {this.state.errors && <h2>{this.state.errors}</h2>}
        <button value="Demo User">Demo User</button>
      </form>
    );
  }
}
