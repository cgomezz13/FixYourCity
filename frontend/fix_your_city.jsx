import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/root";
// import MapPage from './components/map_page';
import configureStore from "./store/store";

import { login, logout, signUp } from "./util/session_api_util";
import {
  createIncident,
  updateIncident,
  allIncidents
} from "./util/incident_api_util";
import { createComment, deleteComment } from "./util/comment_api_util";
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

  // window.login = login;
  // window.logout = logout;
  // window.signUp = signUp;
  // window.createIncident = createIncident;
  // window.updateIncident = updateIncident;
  // window.allIncidents = allIncidents;
  // window.createComment = createComment;
  // window.deleteComment = deleteComment;
  window.store = store;

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
  // ReactDOM.render(<MapPage />, document.getElementById('root'))
});
