import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// COMPONENTS
import BigCard from "./BigCard";
import EditBigCard from "./EditBigCard";
//REDUX
import { loadCards } from "../../../stores/actions/card";

const BigCardCon = ({ loadCards }) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const [isEditing, setstate] = useState(false);
  const editBigCard = () => {
    setstate(true);
  };
  const cancelEdit = () => {
    setstate(false);
  };
  //TODO:
  return !isEditing ? (
    <BigCard editBigCard={() => editBigCard()} />
  ) : (
    <EditBigCard cancelEdit={() => cancelEdit()} />
  );
};

BigCardCon.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  loadCards,
});
export default connect(null, mapDispatchToProps)(BigCardCon);
