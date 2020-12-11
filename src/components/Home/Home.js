import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./Home.scss";
import MovieList from "../Movies/MovieList";

export default class Home extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  componentClicked = () => {
    console.log("clicked");
  };
  responseFacebook = (response) => {
    console.log(response);
  };
  render() {
    return (
      <div id="wrapper">
        <header>
          <nav>
            <img
              className="logo"
              src="https://res.cloudinary.com/di449masi/image/upload/v1607614171/9d5deab5-3260-4f12-a491-a5926a7493bb_200x200_wwa6ys.png"
            />
            <ul className="nav">
              <li className="active">movies</li>
              <li>celebs &amp; photos</li>
              <li>community</li>
              <li>news</li>
            </ul>
            <div className="user">
              <i className="fa fa-gear user-settings" />
              <img
                className="user-icon"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              />
            </div>
            {/*user end*/}
          </nav>
          <div className="movie-info">
            <h1>the martian</h1>
            <ul className="genre">
              <li>adventure</li>
              <li>sci-fi</li>
              <li>thriller</li>
            </ul>
            {/*genre*/}
            <button>
              watch trailer <i className="fa fa-play-circle-o" />
            </button>
            <h3>In theaters</h3>
            <h4>15 Oct, 2015 (USA)</h4>
          </div>
          {/*movie-info end*/}
        </header>
        <main>
          <ul className="options">
            <li className="active">in theaters</li>
            <li>coming soon</li>
            <li>charts</li>
            <li>tv series</li>
            <li>trailers</li>
            <li>more</li>
          </ul>
          <div id="forms">
            <div className="buttons">
              <i className="fa fa-navicon" />
              <i className="fa fa-th" />
            </div>
            <form id="range-form">
              <p>IMDb Rating</p>
              <div className="group">
                <input
                  id="range"
                  type="range"
                  min={6.0}
                  max="8.3"
                  step="0.1"
                  defaultValue={6}
                />
                <p id="results">6</p>
              </div>
            </form>
            <form id="search-form">
              <input
                id="search"
                type="search"
                results={5}
                placeholder="Search Movies..."
              />
              <i className="fa fa-search" />
            </form>
          </div>
          {/*forms*/}
          <MovieList />
          <section id="movies"></section>
        </main>
        {/*container end*/}
        <div className="loading">
          <i className="fa fa-spinner" />
        </div>
        <footer>
          <div>
            <h3>IMDb</h3>
            <div className="social-links">
              <i className="fa fa-twitter" />
              <i className="fa fa-facebook" />
              <i className="fa fa-instagram" />
            </div>
            {/*social-links end*/}
            <p>1990-2017 imdb.com, inc</p>
          </div>
          <a href="#">show menu</a>
        </footer>
      </div>
    );
  }
}
