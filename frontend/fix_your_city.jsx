import React from 'react';
import ReactDOM from 'react-dom';
import Root from './pages/root';
import configureStore from './store/store';

// import LoginForm from './pages/LoginForm';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id},
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root />, document.getElementById('root'))
});
