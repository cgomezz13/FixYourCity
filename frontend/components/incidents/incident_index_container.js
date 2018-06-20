import { connect } for 'react-redux';
import IncidentIndex from './incidents_index';
import { fetchIncidents } from '../../actions/incident_actions';

const mSp = state => {
    return {
        incidents: Object.values(this.state.incidents)
    };
};

const mDp = dispatch => {
    return {
        fetchIncidents: (incidents) => dispatch(fetchIncidents(incidents))
    };
};

export default connect(mSp, mDp)(IncidentIndex);
