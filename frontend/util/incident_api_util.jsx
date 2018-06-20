export const createIncident = incident => {
  return $.ajax({
    method: "POST",
    url: "/api/incidents",
    data: incident
  });
};

export const getIncident = incidentId => {
  return $.ajax({
    method: "GET",
    url: `/api/incidents/${incidentId}`
  })
}

export const updateIncident = incident => {
  return $.ajax({
    method: "PATCH",
    url: `/api/incidents/${incidentInfo.id}`,
    data: incident
  });
};

export const allIncidents = incidents => {
  return $.ajax({
    method: "GET",
    url: "/api/incidents",
    data: incidents
  });
};
