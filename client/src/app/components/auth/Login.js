import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import { Link, Redirect } from "./node_modules/react-router-dom";

import GoogleLogin from "./node_modules/react-google-login";

const Login = ({ login, isAuthenticated }) => {
  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <GoogleLogin
      clientId="473591230671-2u057io2ki7ouhrd0tncefd6urvklt7e.apps.googleusercontent.com"
      buttonText="Login"
      // scope="email https://www.googleapis.com/auth/drive"
      onSuccess={login}
      isSignedIn={true}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
