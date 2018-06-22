import React from "react";

import NewIncidentForm from '../components/new_incident_form_container';
import MapPage from '../components/map_page';
import LogoutButton from "../components/logout_button_container";

import './styles/home_container_styles.css'; // i don't think this works this way - Chris

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
