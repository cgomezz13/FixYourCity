import React from 'react';

import NewIncidentForm from '../components/new_incident_form_container';
import LoginButton from '../components/login_button_container';

const HomeContainer = (props) => {
  return (
    <div className="home-container">
      <NewIncidentForm />
      <LoginButton />
    </div>
  );
};

export default HomeContainer;
