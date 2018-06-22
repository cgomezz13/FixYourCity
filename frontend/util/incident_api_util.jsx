export const createIncident = incident => {
  return $.ajax({
    method: "post",
    data: incident,
    url: "/api/incidents",
    processData: false,
    contentType: false
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

export const allIncidents = () => {
  return $.ajax({
    method: "GET",
    url: "/api/incidents"
  });
};
