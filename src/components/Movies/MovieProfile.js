import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import "./MovieProfile.scss";
import axios from "axios";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import { getMovieInfo } from "../../actions/actions";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    // top: `${top}%`,
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: "absolute",
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3)
  }
}));

const MovieProfile = (props) => {
  const classes = useStyles();
  const {
    movie,
    getMovieInfo,
    movieInfo,
    stars_earned,
    stars_not_earned
  } = props;
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const handleOpen = () => {
    getMovieInfo(movie.id);
    setOpen(!open);
  };
  const body = (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          {/* <img
            className="locandina"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          /> */}
          <h1>{movieInfo.title}</h1>
          <h4>{movieInfo.release_date}</h4>
          <span className="minutes">{movieInfo.runtime} min</span>
          {movieInfo.genres ? (
            <>
              {movieInfo.genres.map((movie) => (
                <p className="type">{movie.name}</p>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="movie_desc">
          <p className="text">{movieInfo.overview}</p>
        </div>
        <div className="movie_social">
          <ul>
            <li onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
              Close
            </li>
          </ul>
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{
          background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
        }}
      />
    </div>
  );

  return (
    <>
      <h1 onClick={() => handleOpen()}>{movie.title}</h1>
      <p>{movie.vote_average}</p>
      <div>
        {stars_earned.map((star) => (
          <FontAwesomeIcon icon={faStar} color="Gold" />
        ))}
        {stars_not_earned.map((star) => (
          <FontAwesomeIcon icon={faStar} color="white" />
        ))}
        <p>{movie.overview}</p>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};
function mapStateToProps(state) {
  return {
    movieInfo: state.movieInfo
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMovieInfo: (movie) => {
      dispatch(getMovieInfo(movie));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieProfile);
