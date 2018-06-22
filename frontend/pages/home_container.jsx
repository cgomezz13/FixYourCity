import React from 'react';

import NewIncidentForm from '../components/new_incident_form_container';
import MapPage from '../components/map_page';
import LogoutButton from '../components/logout_button_container';

const HomeContainer = props => {
  return (
    <div className="home-container">
      <NewIncidentForm />
      <MapPage />
      <LogoutButton />
    </div>
  );
};

export default HomeContainer;
