import merge from 'lodash/merge';

import {
    RECEIVE_INCIDENTS,
    RECEIVE_INCIDENT
} from '../actions/incident_actions';

const incidentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_INCIDENTS:
            return action.incidents;
        case RECEIVE_INCIDENT:
            return merge({}, state, { [action.incident.id]: action.incident});
        default:
            return state;
    }
};

export default incidentsReducer;
