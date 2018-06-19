export const createIncident = incidentInfo => {
  return $.ajax({
    method: "POST",
    url: ""
    data: { incident: incidentInfo }
  });
};

export const updateIncident = incidentInfo => {
  return $.ajax ({
    method: 'PATCH',
    url: "",
    data: { incident: incidentInfo }
  });
};

export const allIncidents = () => {
  return $.ajax ({
    method: 'GET',
    url: ""
  })
};
