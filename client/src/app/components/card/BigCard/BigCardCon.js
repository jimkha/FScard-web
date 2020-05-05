import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// COMPONENTS
import BigCard from "./BigCard";
import EditBigCard from "./EditBigCard";
//REDUX
import { loadCards } from "../../../stores/actions/card";

const BigCardCon = ({ loadCards, dayMode }) => {
  useEffect(() => {
    loadCards(dayMode);
  }, [loadCards, dayMode]);

  const [isEditing, setstate] = useState(false);
  const editBigCard = () => {
    setstate(true);
  };
  const cancelEdit = () => {
    setstate(false);
  };
  //TODO:
  return (
    <Fragment>
      {!isEditing ? (
        <BigCard editBigCard={() => editBigCard()} />
      ) : (
        <EditBigCard cancelEdit={() => cancelEdit()} />
      )}
      {/* TODO: render card infor and number card on pagination */}
      <div className="pagination-card">
        <span class="material-icons icon  --color-init">arrow_back</span>
        <p className="number-card">1/20</p>
        <span class="material-icons icon ">arrow_forward</span>
      </div>
    </Fragment>
  );
};

BigCardCon.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  loadCards: (dayMode) => dispatch(loadCards(dayMode)),
});
export default connect(null, mapDispatchToProps)(BigCardCon);
