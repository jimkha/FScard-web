import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// ASSETS
import icon_list from "../../../assets/img/icon_list.svg";

// COMPONENTS
import BigCardCon from "./BigCard/BigCardCon";

const CardContainer = (props) => {
  const [mode, setMode] = useState("bigcard");
  return (
    <Fragment>
      <figure className="container-cards">
        <header className="toolbar">
          <select name="" class="time-show-options">
            <option value="Today" selected>
              Today
            </option>
            <option value="Week">Week</option>
          </select>
          <img src={icon_list} className="btn mode-card"></img>
        </header>
        <main className="wrapper-cards">
          {mode === "bigcard" ? <BigCardCon /> : ""}
        </main>
        <div className="pagination-card">
          <span class="material-icons icon  --color-init">arrow_back</span>
          <p className="number-card">1/20</p>
          <span class="material-icons icon ">arrow_forward</span>
        </div>
      </figure>
    </Fragment>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
