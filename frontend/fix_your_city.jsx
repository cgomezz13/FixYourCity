import React from "react";
import ReactDOM from "react-dom";

import LoginForm from "./pages/LoginForm";

import { login, logout, signUp } from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
  window.login = login();
  window.logout = logout();
  window.signUp = signUp();
  ReactDOM.render(<LoginForm />, document.getElementById("root"));
});
