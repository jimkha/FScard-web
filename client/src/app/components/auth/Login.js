import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";

//REDUX
import { login } from "../../stores/actions/auth";

const Login = ({ login, isAuthenticated }) => {
  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <GoogleLogin
      clientId="473591230671-2u057io2ki7ouhrd0tncefd6urvklt7e.apps.googleusercontent.com"
      buttonText="Login"
      // scope="email https://www.googleapis.com/auth/drive"
      onSuccess={login}
      // isSignedIn={true}
      onFailure={login}
      cookiePolicy={"single_host_origin"}
    />
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
