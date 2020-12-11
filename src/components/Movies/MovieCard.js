import React, { Component } from "react";
import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    let stars_earned = [];
    let stars_not_earned = [];
    for (let i = 1; i <= 5 - (10 - Math.floor(movie.vote_average)); i++) {
      stars_earned.push(i);
    }
    if (stars_earned.length === 0) {
      stars_not_earned = [1, 2, 3, 4, 5];
    }
    for (let i = stars_earned[stars_earned.length - 1] + 1; i <= 5; i++) {
      stars_not_earned.push(i);
    }
    console.log(stars_earned);
    console.log(stars_not_earned);
    console.log(movie);
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Avatar"
              style={{ borderRadius: "25px", width: "300px", height: "300px" }}
            />
          </div>
          <div className="flip-card-back" style={{ backgroundColor: "black" }}>
            <h1>{movie.title}</h1>
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
          </div>
        </div>
      </div>
    );
  }
}
