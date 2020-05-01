import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// ASSETS
import icon_edit from "../../../../assets/img/icon_edit.svg";
import icon_idiom from "../../../../assets/img/icon_idiom.svg";

//REDUX
import { turnOverCard } from "../../../stores/actions/card";

const BigCard = ({ editBigCard, turnOverCard, card }) => {
  const { isFacade } = card;

  const bubbling = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`card ${isFacade ? "facade" : "backside"}`}
      onClick={(e) => {
        const regex = /(icon_edit|icon_delete|icon_volumn|hastag)/;
        if (!e.target.className.match(regex)) {
          turnOverCard();
        }
      }}
    >
      <img
        src={icon_edit}
        alt="icon edit"
        className="icon_edit"
        onClick={((e) => bubbling(e), () => editBigCard())}
      />
      <span class="material-icons icon_delete">delete_forever</span>
      <section className="content">
        <section className="word">
          <header class="title">CON MÈO</header>
          <a href="" className="hastag">
            Động vật
          </a>
          <p className="example">
            <span>Ex</span> : A cat is sleeping
          </p>
          <p className="idiom">
            <div className="idiom__title">
              <img src={icon_idiom} alt="" className="icon_idiom" /> :
              <p> Has a cat got your tongue ?</p>
            </div>
          </p>
        </section>
      </section>
      <span class="material-icons icon_volumn">volume_up</span>
    </div>
  );
};

BigCard.propTypes = {};

const mapStateToProps = (state) => ({
  card: state.card.card,
});
const mapDispatchToProps = (dispatch) => ({
  turnOverCard: () => dispatch(turnOverCard()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BigCard);
