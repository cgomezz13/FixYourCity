import * as APIUtil from '../util/incident_api_util';

export const RECEIVE_INCIDENTS = "RECEIVE_INCIDENTS";
export const RECEIVE_INCIDENT = "RECEIVE_INCIDENT";

export const receiveIncidents = incidents => {
    return {
        type: RECEIVE_INCIDENTS,
        incidents
    };
};

export const receiveIncident = incident => {
    return {
        type: RECEIVE_INCIDENT,
        incident
    }
};

export const createIncident = incident => dispatch => (
    APIUtil.createIncident(incident).then(payload => (
        dispatch(receiveIncident(payload))
    ))
);

export const updateIncident = incident => dispatch => (
    APIUtil.updateIncident(incident).then(payload => (
        dispatch(receiveIncident(payload))
    ))
);

export const fetchIncident = incidentId => dispatch => (
    APIUtil.getIncident(incidentId).then(payload => (
        dispatch(receiveIncident(payload))
    ))
);

export const fetchIncidents = (incidents) => dispatch => (
    APIUtil.allIncidents(incidents).then(payload => (
        dispatch(receiveIncidents(payload))
    ))
);
