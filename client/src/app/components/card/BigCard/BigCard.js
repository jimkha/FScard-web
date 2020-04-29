import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

// ASSETS
import icon_edit from "../../../../assets/img/icon_edit.svg";
import icon_idiom from "../../../../assets/img/icon_idiom.svg";

const BigCard = (props) => {
  const [state, setstate] = useState("facade");
  //TODO:
  // function double click
  return (
    <div className={`card ` + state}>
      <img src={icon_edit} alt="" className="icon_edit" />
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

export default BigCard;
