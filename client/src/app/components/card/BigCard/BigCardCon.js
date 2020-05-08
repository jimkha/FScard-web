import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// COMPONENTS
import BigCard from "./BigCard";
import EditBigCard from "./EditBigCard";
//REDUX
import { loadCards } from "../../../stores/actions/card";

const BigCardCon = ({ cards, loadCards, dayMode }) => {
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

  return cards.length > 0 ? (
    <Fragment>
      {!isEditing ? (
        <BigCard editBigCard={() => editBigCard()} />
      ) : (
        <EditBigCard cancelEdit={() => cancelEdit()} />
      )}
      <div className="pagination-card">
        <span class="material-icons icon  --color-init">arrow_back</span>
        <p className="number-card">1/{cards.length}</p>
        <span class="material-icons icon ">arrow_forward</span>
      </div>
    </Fragment>
  ) : (
    " Not any cards here !!!"
  );
};

BigCardCon.propTypes = {};
const mapStateToProps = (state) => ({
  cards: state.card.cards,
});
const mapDispatchToProps = (dispatch) => ({
  loadCards: (dayMode) => dispatch(loadCards(dayMode)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BigCardCon);
