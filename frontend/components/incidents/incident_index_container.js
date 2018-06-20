import { connect } from 'react-redux';
import IncidentIndex from './incident_index';
import { fetchIncidents } from '../../actions/incident_actions';

const mSp = state => {
    return {
        incidents: Object.values(state.incidents)
    };
};

const mDp = dispatch => {
    return {
        fetchIncidents: () => dispatch(fetchIncidents())
    };
};

export default connect(mSp, mDp)(IncidentIndex);
