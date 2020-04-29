import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// ASSETS
import logo from "../../../assets/img/logo.svg";
import icon_extend from "../../../assets/img/icon_extend.svg";

const Navbar = ({ user }) => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="wrapper --width">
          <img src={logo} alt="logo" id="logo" />
          <div className="search-box">
            <input type="text" placeholder="Search your flashcards" />
            <a href="#">
              <span class="material-icons" id="icon_search">
                search
              </span>
            </a>
          </div>
        </div>
        <div className="wrapper">
          <img src={icon_extend} id="icon_extend" />
          <img src={user.picture} id="avatar" alt="avatar" />
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps)(Navbar);
