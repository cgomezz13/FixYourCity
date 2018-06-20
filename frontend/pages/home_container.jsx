import React from 'react';

import NewIncidentForm from '../components/new_incident_form_container';
import LoginButton from '../components/login_button_container';
import MapPage from '../components/map_page';

const HomeContainer = (props) => {
  return (
    <div className="home-container">
      <NewIncidentForm />
      <MapPage />
      <LoginButton />
    </div>
  );
};

export default HomeContainer;
