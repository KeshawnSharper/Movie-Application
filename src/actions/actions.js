import axios from "axios";

export function getNowPlaying(id = 1) {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=${id}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_NOW_PLAYING", nowPlaying: res.data });
      });
  };
}

export function getPopular(id = 1) {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=${id}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_POPULAR", popular: res.data });
      });
  };
}
export function getUpcoming(id = 1) {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=${id}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_UPCOMING", upcoming: res.data });
      });
  };
}
export function getSearch(movie) {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&query=${movie}&page=1`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_SEARCH", search: res.data });
      });
  };
}
export function getTopRated() {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_TOP_RATED", topRated: res.data });
      });
  };
}
export function getMovieInfo(id) {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US`
      )
      .then((res) => {
        dispatch({ type: "GET_MOVIE_INFO", movieInfo: res.data });
      });
  };
}
