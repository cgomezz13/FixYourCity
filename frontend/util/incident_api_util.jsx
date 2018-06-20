export const createIncident = incidentInfo => {
  return $.ajax({
    method: "POST",
    url: "/api/incidents",
    data: { incident: incidentInfo }
  });
};

export const getIncident = incidentId => {
  return $.ajax({
    method: "GET",
    url: `/api/incidents/${incidentId}`
  })
}

export const updateIncident = incidentInfo => {
  return $.ajax({
    method: "PATCH",
    url: `/api/incidents/${incidentInfo.id}`,
    data: { incident: incidentInfo }
  });
};

export const allIncidents = incidents => {
  return $.ajax({
    method: "GET",
    url: "/api/incidents",
    data: incidents
  });
};
