import React, { Fragment } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";
import CardContainer from "../card/CardContainer";

const Dashboard = (props) => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <CardContainer />
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
