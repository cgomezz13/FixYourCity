import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import NewIncidentForm from '../components/new_incident_form_container';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <HashRouter>
        <App />
        <NewIncidentForm />
      </HashRouter>
    </Provider>
  );
};

export default Root;
