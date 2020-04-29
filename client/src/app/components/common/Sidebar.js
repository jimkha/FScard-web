import React, { Fragment } from "react";
import PropTypes from "prop-types";

//ASSETS
import icon_card from "../../../assets/img/icon_card.svg";
import icon_plus from "../../../assets/img/icon_plus.svg";
import icon_collection from "../../../assets/img/icon_collection.svg";
import icon_revision from "../../../assets/img/icon_revision.svg";
import icon_storage from "../../../assets/img/icon_storage.svg";

const Sidebar = (props) => {
  return (
    <Fragment>
      <aside className="sidebar">
        <div className="sidebar__btn-create">
          <img class="icon-plus" src={icon_plus} alt="" />
          <span>New</span>
        </div>
        <div className="sidebar__options">
          <a className="btn active">
            <img src={icon_card} alt="" className="icon icon_card" />
            My flashcards
          </a>
          <a className="btn">
            <img
              src={icon_collection}
              alt=""
              className="icon icon_collection"
            />
            My collections
          </a>
          <a className="btn">
            <img src={icon_revision} alt="" className="icon icon_revision" />
            Revision
          </a>
          <a className=" btn-storage">
            <div className="wrapper">
              <img src={icon_storage} alt="" className="icon  icon_storage" />
              <p>Storage</p>
            </div>

            <div className="status-bar">
              <div className="percent"></div>
            </div>
            <p className="number-percent-storage">123 bytes of 3 GB used</p>
          </a>
        </div>
      </aside>
    </Fragment>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
