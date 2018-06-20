import { connect } from 'react-redux';
import LoginButton from './login_button';

import { login } from '../util/session_api_util';

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
