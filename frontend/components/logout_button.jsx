import React, { Component } from "react";

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: null
    };

    this.submitLogout = this.submitLogout.bind(this);
  }

  submitLogout(e) {
    e.preventDefault();
    this.props.logout().then(null, err => {
      this.setState({
        errors: err.resposeText
      });
    });
  }

  render() {
    return (
      <form className="logout-button" onSubmit={this.submitLogout}>
        {this.state.errors && <h2>{this.state.errors}</h2>}
        <button value="Logout">Logout</button>
      </form>
    );
  }
}
