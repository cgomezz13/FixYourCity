import React from "react";

import NewIncidentForm from "../components/new_incident_form_container";
import MapPage from "../components/map_page";

const HomeContainer = props => {
  return (
    <div className="home-container">
      <NewIncidentForm />
      <MapPage />
    </div>
  );
};

export default HomeContainer;
