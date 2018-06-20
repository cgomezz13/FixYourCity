import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: null
    };
  }

  render() {
    return (
      <div>
        <button>
          <Link to="/login">Logout</Link>
        </button>
      </div>
    );
  }
}
