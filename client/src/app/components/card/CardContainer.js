import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// ASSETS
import icon_list from "../../../assets/img/icon_list.svg";

// COMPONENTS
import BigCardCon from "./BigCard/BigCardCon";

const CardContainer = (props) => {
  const [shapeMode, setShapeMode] = useState("bigCard");
  const [dayMode, setDayShow] = useState("today");
  const changeDayMode = (e) => {
    setDayShow(e.target.value);
  };
  return (
    <Fragment>
      <figure className="container-cards">
        <header className="toolbar">
          {shapeMode === "bigCard" ? (
            <select
              name=""
              class="time-show-options"
              value="today"
              onChange={(e) => changeDayMode(e)}
            >
              <option value="today">Today</option>
              <option value="week">Week</option>
              <option value="all">All</option>
            </select>
          ) : (
            ""
          )}
          <img src={icon_list} className="btn mode-card"></img>
        </header>

        <main className="wrapper-cards">
          {shapeMode === "bigCard" ? (
            <BigCardCon dayMode={dayMode} />
          ) : (
            "listCard"
          )}
        </main>
      </figure>
    </Fragment>
  );
};

CardContainer.propTypes = {};

export default CardContainer;
