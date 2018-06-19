import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/root';
// import MapPage from './pages/map_page';
import configureStore from './store/store';


// import { login, logout, signUp } from "./util/session_api_util";
// import LoginForm from './pages/LoginForm';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root />, document.getElementById('root'))
  // ReactDOM.render(<MapPage />, document.getElementById('root'))

});
