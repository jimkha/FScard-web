import React, { useState } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import BigCard from "./BigCard";
import EditBigCard from "./EditBigCard";

const BigCardCon = (props) => {
  const [state, setstate] = useState("normal");

  return state === "normal" ? <BigCard /> : <EditBigCard />;
};

BigCardCon.propTypes = {};

export default BigCardCon;
