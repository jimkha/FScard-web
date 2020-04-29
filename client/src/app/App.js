import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//CSS
import "./App.css";
//REDUX
import { loadUser } from "./stores/actions/auth";
import store from "./stores";
//COMPONENTS
import PrivateRoute from "./middleware/PrivateRoute";
import Alert from "./components/common/Alert";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}
        <section className="container">
          <Alert />
          <Switch>
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
