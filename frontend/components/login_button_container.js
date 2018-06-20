import { connect } from 'react-redux';
import LoginButton from './login_button';

import { login } from '../actions/session_actions';

const mapStateToProps = state => ({
  session: state.sessionReducer
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
