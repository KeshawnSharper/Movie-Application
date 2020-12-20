import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./Home.scss";
import MovieList from "../Movies/MovieList";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming,
  getSearch
} from "../../actions/actions";
import { connect } from "react-redux";
import Avatar from "../Avatar/Avatar";
class Home extends Component {
  constructor(props) {
    super(props);
    this.searchMovie = this.searchMovie.bind(this);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      movieList: "nowPlaying"
    };
  }

  componentClicked = () => {
    console.log("clicked");
  };
  responseFacebook = (response) => {
    console.log(response);
  };
  searchMovie = (event) => {
    this.props.getSearch(event.target.value);
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

            <div className="user">
              <i className="fa fa-gear user-settings" />
            </div>
            <Avatar />
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
            <li
              onClick={() => {
                this.setState({
                  movieList: "nowPlaying"
                });
              }}
              className={this.state.movieList === "nowPlaying" ? "active" : ""}
            >
              in theaters
            </li>
            <li
              onClick={() => {
                this.setState({
                  movieList: "upcoming"
                });
              }}
              className={this.state.movieList === "upcoming" ? "active" : ""}
            >
              coming soon
            </li>
            <li
              onClick={() => {
                this.setState({ movieList: "popular" });
              }}
              className={this.state.movieList === "popular" ? "active" : ""}
            >
              popular
            </li>
            <li
              onClick={() => {
                this.setState({ movieList: "topRated" });
              }}
              className={this.state.movieList === "topRated" ? "active" : ""}
            >
              Top rated
            </li>
            <li
              onClick={() => {
                this.setState({ movieList: "favorites" });
              }}
              className={this.state.movieList === "favorites" ? "active" : ""}
            >
              saved
            </li>
            <li
              onClick={() => {
                this.setState({ movieList: "recommended" });
              }}
              className={this.state.movieList === "recommended" ? "active" : ""}
            >
              recommended
            </li>
            <li
              onClick={() => {
                this.setState({ movieList: "search" });
              }}
              className={this.state.movieList === "search" ? "active" : ""}
            >
              Search
            </li>
          </ul>
          <div id="forms">
            <div className="buttons">
              <i className="fa fa-navicon" />
              <i className="fa fa-th" />
            </div>
            {this.state.movieList === "search" ? (
              <form id="search-form">
                <input
                  id="search"
                  type="search"
                  onChange={this.searchMovie}
                  placeholder="Search Movies..."
                />
                <i className="fa fa-search" />
              </form>
            ) : (
              <></>
            )}
          </div>
          {/*forms*/}
          <MovieList movieList={this.state.movieList} />
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
function mapStateToProps(state) {
  return {
    user: state.user,
    nowPlaying: state.nowPlaying,
    popular: state.popular,
    upcoming: state.upcoming,
    topRated: state.topRated,
    search: state.search,
    favorites: state.favorites
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNowPlaying: (id) => {
      dispatch(getNowPlaying());
    },
    getPopular: (id) => {
      dispatch(getPopular());
    },
    getUpcoming: (id) => {
      dispatch(getUpcoming());
    },
    getTopRated: (id) => {
      dispatch(getTopRated(id));
    },
    getSearch: (movie) => {
      dispatch(getSearch(movie));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
