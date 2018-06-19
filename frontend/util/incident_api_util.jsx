export const createIncident = incidentInfo => {
  return $.ajax({
    method: "POST",
    url: "/api/incidents"
    data: { incident: incidentInfo }
  });
};

export const updateIncident = incidentInfo => {
  return $.ajax ({
    method: 'PATCH',
    url: `/api/incidents/${incidentInfo.id}`,
    data: { incident: incidentInfo }
  });
};

export const allIncidents = () => {
  return $.ajax ({
    method: 'GET',
    url: "/api/incidents"
  })
};
