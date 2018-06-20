import React from 'react';

const LoginButton = (props) => (
  <form className="login-button">
    <button
      onClick={() => {props.login({user: {username: 'demo_user', password: 'starwars'}})}}
      value="Demo User"
    />
  </form>
)

export default LoginButton;
