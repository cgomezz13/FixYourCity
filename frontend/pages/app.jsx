import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import SignupForm from './session/signup_form_container';
import LoginForm from './session/LoginForm';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home_container';


const App = (props) => {
  return (
    <div className="appContainer">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={HomeContainer} />
      </Switch>
    </div>
  );
};

export default App;
