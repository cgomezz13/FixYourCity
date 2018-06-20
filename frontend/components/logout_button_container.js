import { connect } from "react-redux";
import LogoutButton from "./logout_button";
import { logout } from "../actions/session_actions";

const mapStateToProps = state => ({
  session: state.sessionReducer
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
