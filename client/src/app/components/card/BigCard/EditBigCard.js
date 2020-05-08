import React from "react";
import PropTypes from "prop-types";

// ASSETS
import icon_edit from "../../../../assets/img/icon_edit.svg";
import icon_idiom from "../../../../assets/img/icon_idiom.svg";
import img_cat from "../../../../assets/img/cat.jpg";

const EditBigCard = ({ cancelEdit }) => {
  return (
    <div className="card card-edit backside add-media  ">
      <span class="material-icons icon_accept">check_circle</span>
      <span class="material-icons icon_cancel" onClick={() => cancelEdit()}>
        cancel
      </span>
      <span class="material-icons icon_delete">delete_forever</span>
      <section className="content">
        <section className="media">
          <div className="wrapper-img">
            <img class="icon_edit" src={icon_edit} />
            <span class="material-icons icon_cancel">close</span>
            <img
              src="https://res.cloudinary.com/dzaamx0kb/image/upload/v1588836570/flashcard/cat_qop9xv.jpg"
              className="img"
            />
          </div>
          <div className="wrapper-video">
            <video
              className="video"
              src="https://media.giphy.com/media/Zsb0cr5r8m1s4/giphy.mp4"
              alt="Loading"
              autoPlay
              loop
            />
            <img class="icon_edit" src={icon_edit} />
            <span class="material-icons icon_cancel">close</span>
          </div>
        </section>
        <section className="word">
          <header class="title">
            <span class="material-icons icon_title">subtitles</span>
            <div class="input-title" contentEditable>
              CAT
            </div>
          </header>
          <div className="wrapper-hastag">
            <div className="hastag">
              <span class="material-icons hastag__icon_cancel">clear</span>
              <p>Động vật</p>
            </div>
            <span class="material-icons icon_plus">add</span>
          </div>
          <p className="example">
            <span class="icon_example">Ex</span>
            <div class="input-example" contentEditable>
              A cat is sleeping
            </div>
          </p>
          <p className="idiom-edit">
            <img src={icon_idiom} alt="" className="icon_idiom" />
            <div
              class="input-idiom"
              placeholder="A cat is sleeping"
              contentEditable
            >
              Has a cat got your tongue ?
              <br />
              <br />
              #Figurative meaning :{" "}
              <span>
                Said to someone when you are annoyed that they won’t speak.
              </span>
              <br />
              <br />
              #Example:{" "}
              <span>
                “Why won’t you say anything? Has a cat got your tongue?”
              </span>
            </div>
          </p>
        </section>
      </section>
      <span class="material-icons icon_volumn">volume_up</span>
    </div>
  );
};

EditBigCard.propTypes = {};

export default EditBigCard;
