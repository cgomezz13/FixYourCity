import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/root";
// import MapPage from './components/map_page';
import configureStore from "./store/store";

// import LoginForm from './pages/LoginForm';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    let preloadedState = {
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  // ReactDOM.render(<MapPage />, document.getElementById('root'))
});
