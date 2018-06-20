// import React, { Component } from "react";
//
// import LoginButton from "../login_button_container";
//
// export default class LoginForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: ""
//     };
//
//     this.submitLogin = this.submitLogin.bind(this);
//     this.updateName = this.updateName.bind(this);
//     this.updatePW = this.updatePW.bind(this);
//   }
//
//   submitLogin(e) {
//     e.preventDefault();
//     console.log("submitting login (not really)");
//   }
//
//   updateName(e) {
//     this.setState({
//       username: e.target.value
//     });
//   }
//
//   updatePW(e) {
//     this.setState({
//       password: e.target.value
//     });
//   }
//
//   render() {
//     return (
//       <form className="login" onSubmit={this.submitLogin}>
//         <input type="text" className="username" onChange={this.updateName} />
//         <input type="password" className="password" onChange={this.updatePW} />
//         <input type="submit" className="submit-button" />
//       </form>
//       <LoginButton />
//     );
//   }
// }
