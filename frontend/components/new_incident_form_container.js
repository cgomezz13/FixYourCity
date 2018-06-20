import { connect } from 'react-redux';

import { createIncident } from '../actions/incident_actions';

import NewIncidentForm from './new_incident_form';

const mapDispatchToProps = dispatch => ({
  createIncident: (incident) => dispatch(createIncident(incident))
});

export default connect(
  null,
  mapDispatchToProps
)(NewIncidentForm);
